import React, { Component } from 'react';
import './style.css';

// import { Container } from './styles';

export default class Location extends Component {
	render() {
		return (
			<>
				<div className="location-style">
					<div className="adress">
						<i class="fas fa-map-marker-alt icons"></i>
						Rio Vermelho, Salvador, BA
					</div>
					<div className="mail">
						<i class="far fa-envelope icons"></i>
						joaoclaudio@gmail.com
					</div>
					<div className="blog">
						<i class="fab fa-blogger icons"></i>
						anyblogger.blogspot.com
					</div>
				</div>
			</>
		);
	}
}
