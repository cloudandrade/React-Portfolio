import React, { Component } from 'react';
import Header from './Header/Header';
import About from './About/About';
import Location from './Location/Location';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Language from './Language/Language';

export default class Landing extends Component {
	render() {
		return (
			<>
				<Header></Header>
				<About></About>
				<Location></Location>
				<Experience></Experience>
				<Education></Education>
				<Language></Language>
			</>
		);
	}
}
