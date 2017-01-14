// This comp handles the App template used on every page
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading}/>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  }
}

App.prototypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(App);
