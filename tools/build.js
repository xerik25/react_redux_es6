import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';
/* eslint-disable no-console */

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for prod via Webpack. Please hold...'.blue);

webpack(webpackConfig).run((err, stats) => {
  if(err) {
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();
  if(jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  /** If we make it this far the build was successful! */
  console.log('Your app has been compiled in production mode and writtent to /dist!'.green);

  return 0;
});

