import React from 'react';
import { styles } from './style';
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCat extends React.Component {
	render() {
    return (
		<div
			style={styles.divStyles}
		>
			<h1>Copy Cat {this.props.name ? this.props.name : "Tom" }</h1>
			<input type="text"
				onChange={this.props.handleChange}
				value={this.props.input}
				
			/>
        <img
			style={styles.imgStyles}
			alt='cat'
			src={this.props.copying ? images.copycat : images.quietcat}
			onClick={this.props.toggleTape}
		/>
		<p>{this.props.copying && this.props.input}</p>
      </div>
    );
  };
};

CopyCat.propTypes = {
	alt: PropTypes.string,
	src: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	name: PropTypes.string
}
