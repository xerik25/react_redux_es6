import fs from 'fs-extra';
import cheerio from 'cheerio';
import colors from 'colors';
import path from 'path';
const port = process.env.PORT || '3000';

/* eslint-disable no-console */
fs.readFile(path.normalize(__dirname + '/../src/index.html'), 'utf8', (err, markup) => {
	if (err) {
		return console.log(err.red);
	}

	const $ = cheerio.load(markup);
	const $head = $('head');
	const styles = `${process.env.STATIC_URL || 'http://localhost'}:${port}/styles.css`;
	$head.prepend(`<link rel="stylesheet" href=${styles}>`);
	$head.prepend('<link rel="shortcut icon" href="selectquote.ico">');

	fs.writeFile(path.normalize(__dirname + '/../dist/index.html'), $.html(), 'utf8', function (err) {

		if (err) {
			return console.log(err.red);
		}

		console.log('index.html written to /dist'.green);
	});
});
