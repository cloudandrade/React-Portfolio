import React, { Component } from 'react';
import './style.css';

// import { Container } from './styles';

export default class About extends Component {
	render() {
		return (
			<>
				<div className="about">
					<div className="title">About Me</div>
					<div className="desc">
						<p>
							Write a brief intro about yourself. It's a
							good idea to include your personal
							interests and hobbies as well. Lorem ipsum
							dolor sit amet, consectetuer adipiscing
							elit. Aenean commodo ligula eget dolor.
							Aenean massa. Cum sociis natoque penatibus
							et magnis dis parturient montes, nascetur
							ridiculus mus. Donec quam felis, ultricies
							nec. Commodo ligula eget dolor. Aenean
							massa.
						</p>
					</div>
				</div>
			</>
		);
	}
}
