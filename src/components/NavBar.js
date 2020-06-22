import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class NavBar extends Component{
	render(){
		return(
			<div>
				<NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
					<Link to="/">
						<img src={logo} alt="store" className="navbar-brand"/>
					</Link>
					<ul className="navbar-nav align-items-center">
						<li className="nav-item ml-5">
						<Link to="/" className="nav-link">Products</Link>
						</li>
					</ul>
					<Link to="/cart" className="ml-auto">
					<ButtonContainer><span className="mr-2"><i className="fas fa-cart-plus"/></span>My cart</ButtonContainer>
					</Link>
				</NavWrapper>
			</div>
			);
	}
}

const NavWrapper = styled.nav`
background:var(--mainBlue)!important;
.nav-link{color:var(--mainWhite)!important;font-szie:1.3rem;text-transform:capitalize;}
`