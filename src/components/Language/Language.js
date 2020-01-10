import React, { Component } from 'react';
import './style.css';

export default class Language extends Component {
	render() {
		return (
			<>
				<div className="language">
					<div className="l-title">Languages</div>
					<div className="l-container">
						<div className="l-subtitle">Portuguese:</div>
						<div className="l-desc">Native Speaker</div>
					</div>
					<div className="l-i-container">
						<i class="fas fa-star l-icons"></i>
						<i class="fas fa-star l-icons"></i>
						<i class="fas fa-star l-icons"></i>
						<i class="fas fa-star l-icons"></i>
						<i class="fas fa-star l-icons"></i>
					</div>
					<div className="l-container">
						<div className="l-subtitle">English:</div>
						<div className="l-desc">
							Professional Proficiency
						</div>
					</div>
					<div className="l-i-container">
						<i class="fas fa-star l-icons"></i>
						<i class="fas fa-star l-icons"></i>
						<i class="fas fa-star l-icons"></i>
						<i class="fas fa-star l-icons"></i>
						<i class="far fa-star l-icons"></i>
					</div>
					<div className="l-container">
						<div className="l-subtitle">French:</div>
						<div className="l-desc">Basic Concepts</div>
					</div>
					<div className="l-i-container">
						<i class="fas fa-star l-icons"></i>
						<i class="far fa-star l-icons"></i>
						<i class="far fa-star l-icons"></i>
						<i class="far fa-star l-icons"></i>
						<i class="far fa-star l-icons"></i>
					</div>
					<div className="l-container">
						<div className="l-subtitle">Spanish:</div>
						<div className="l-desc">Intermediate</div>
					</div>
					<div className="l-i-container">
						<i class="fas fa-star l-icons"></i>
						<i class="fas fa-star l-icons"></i>
						<i class="fas fa-star l-icons"></i>
						<i class="far fa-star l-icons"></i>
						<i class="far fa-star l-icons"></i>
					</div>
				</div>
			</>
		);
	}
}
