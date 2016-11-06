// This comp handles the App template used on every page
import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

App.prototypes = {
  children: PropTypes.object.isRequired
};

export default App;
