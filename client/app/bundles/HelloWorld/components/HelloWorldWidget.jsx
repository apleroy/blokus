// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';
import _ from 'lodash';

// Simple example of a React "dumb" component
export default class HelloWorldWidget extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    updateName: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    updateMessage: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired
  };

  constructor(props, context) {
    super(props, context);

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    _.bindAll(this, 'changeName', 'changeMessage');//, 'changeMessage');
    //_.bindAll(this, 'changeMessage');
  }

  // React will automatically provide us with the event `e`
  changeName(e) {
    const name = e.target.value;
    this.props.updateName(name);

  }

  changeMessage(e) {
    console.log(e);
    const message = e.target.value;
    console.log(message);
    this.props.updateMessage(message);

  }

  render() {
    const { name, message } = this.props;
    return (
      <div className="container">
        <h3>
          Hello, {name}!
        </h3>
        <h2>
          This is the message: {message}.
        </h2>
        <hr />
        <form className="form-horizontal">
          <label>
            Say hello to:
          </label>
          <input
            type="text"
            value={name}
            onChange={this.changeName}
          />
          </form>
        <form className="form-horizontal">
          <label>
            Provide the message:
          </label>
          <input
            type="text"
            value={message}
            onChange={this.changeMessage}
          />
        </form>
      </div>
    );
  }
}
