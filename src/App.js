// This comp handles the App template used on every page
import React, {PropTypes} from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Header here...</p>
        {this.props.children}
      </div>
    );
  }
}

App.prototypes = {
  children: PropTypes.object.isRequired
};

export default App;
