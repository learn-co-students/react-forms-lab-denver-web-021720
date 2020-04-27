import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: '',
      maxChars: props.maxChars,
      charactersRemaining: props.maxChars
    };
  }
  
  handleChange = (event) => {
    const message = event.target.value
    const charactersRemaining = this.state.maxChars - message.length
    this.setState({message,charactersRemaining})

  }
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange} />
        <p>There are {this.state.charactersRemaining} characters remaining.</p>
      </div>
    );
  }
}

export default TwitterMessage;
