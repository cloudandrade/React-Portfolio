import React, { Component } from 'react';
import './style.css';
import Talon from '../../images/Talon.jpg';

export default class Header extends Component {
	render() {
		return (
			<>
				<div className="header-conteiner p1">
					<div className="header-picture">
						<img src={Talon}></img>
					</div>
					<div className="header-sub">
						<div className="header-tc column">
							<h3 className="header-title">
								<strong>João Android</strong>
							</h3>
							<h4 className="header-subtitle">
								FullStack Developer
							</h4>
						</div>

						<div className=" icon-conteiner inrow">
							<a href="#">
								<i className="fab fa-github fa-2x icons"></i>
							</a>
							<a href="#">
								<i className="fab fa-facebook fa-2x icons"></i>
							</a>
							<a href="#">
								<i className="fab fa-linkedin-in fa-2x icons"></i>
							</a>
						</div>
					</div>
					<div className="content1">
						<button className="btn btn-primary btn-contato">
							<i className="fas fa-comments mr-2"></i>
							Contate me
						</button>
						<label className="label-contato">
							Para uma conversa
						</label>
					</div>
					<div className="content2">
						<button className="btn btn-success btn-contrato">
							<i className="fas fa-comments-dollar mr-2"></i>
							Contrate me
						</button>
						<label className="label-contrato">
							Para uma solução
						</label>
					</div>
				</div>
			</>
		);
	}
}
