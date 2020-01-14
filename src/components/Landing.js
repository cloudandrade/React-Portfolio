import React, { Component } from 'react';
import Header from './Header/Header';
import About from './About/About';
import Location from './Location/Location';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Language from './Language/Language';
import './landing.css';

export default class Landing extends Component {
	render() {
		return (
			<>
				<div className="landing">
					<div className="head">
						<Header></Header>
					</div>
					<div className="about">
						<About></About>
					</div>
					<div className="location">
						<Location></Location>
					</div>
					<div className="work">
						<Experience></Experience>
					</div>
					<div className="language">
						<Language></Language>
					</div>
					<div className="education">
						<Education></Education>
					</div>
				</div>
			</>
		);
	}
}
