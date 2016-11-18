const React = require('react');

class Clicker extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event.type); // prints 'click'
  }

  render() {
    return (
      hi
      // <button onClick={this.handleClick}>Click me!</button>
    );
  }
}

module.exports = Clicker;
