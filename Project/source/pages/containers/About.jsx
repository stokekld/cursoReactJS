import React, { Component } from 'react';
import { Link } from 'react-router';

class About extends Component {
	render(){
		return (
			<section>
				<h1>About</h1>
				<Link to="/">
					Go to home
				</Link>
				<Link to="/random">
					Go to random
				</Link>
			</section>
		);
	}
}

export default About;
