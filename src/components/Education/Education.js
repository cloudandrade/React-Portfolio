import React, { Component } from 'react';
import './style.css';
// import { Container } from './styles';

export default class Education extends Component {
	render() {
		return (
			<>
				<div className="education">
					<div class="title">Education</div>
					<div className="education-subtitle">
						<i class="fas fa-graduation-cap"></i>Análise e
						Desenvolvimento de Sistemas
					</div>
					<div className="education-wrap">
						<div className="education-desc">
							Universidade Jorge Amado
						</div>
						<div className="year">(2016-2019)</div>
					</div>
				</div>
			</>
		);
	}
}
