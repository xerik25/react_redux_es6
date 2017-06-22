import React, {PropTypes} from 'react';

/**
 * @description
 */
class LoadingDots extends React.Component {
  //TODO: what is the point for context here?
  constructor(props, context) {
    super(props, context);
    this.state = {frame: 1};
  }

  componentDidMount() {
    //TODO: this is throwing a setState error in the console
    // this.interval = setInterval(() => {
    //   this.setState({
    //     frame: this.state.frame + 1
    //   });
    // }, this.props.interval);
  }

  componentWillMount() {
    clearInterval(this.interval);
  }

  render() {
    let dots = this.state.frame % (this.props.dots + 1);
    let text = '';
    while (dots > 0) {
      text += '.';
      dots--;
    }
    //TODO: What is the spread operator doing here?
    return <span {...this.props}>{text}&nbsp;</span>;
  }
}

//TODO: this is an interesting way to handle default props
LoadingDots.defaultProps = {
  interval: 300, dots: 3
};

LoadingDots.propTypes = {
  interval: PropTypes.number,
  dots: PropTypes.number
};


export default LoadingDots;
