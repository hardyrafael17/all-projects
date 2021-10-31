import React from 'react';
import ReactDOM from 'react-dom';
import {CopyCat} from '../components/CopyCat.js';

export class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
		input: "",
		copying: true
    };
		this.toggleTape = this.toggleTape.bind(this);
		this.handleChange = this.handleChange.bind(this);
  }
	handleChange(e) {
	this.setState(prevProps => {
		return {
			copying: prevProps.copying,
			input: e.target.value
		}
	});
  }
  toggleTape() {
    this.setState({copying: !this.state.copying})
  }
  
  render() {
    return (
		<CopyCat
		name="Super Tom"
		input={this.state.input}
		handleChange={this.handleChange}
		copying={this.state.copying}
		toggleTape={this.toggleTape}
      />
    );
  };
}


ReactDOM.render(<CopyCatContainer />, document.getElementById('app'));