import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import {ButtonContainer} from './Button.js';
import logo from '../logo.svg';
import styled from 'styled-components';

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-10">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/carts" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus"/>
                        </span> 
                        MY CART
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    } /* baris ke 23 class MR = margin */
}

export default Navbar;

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
        text-transform: capitalize;
        font-size: 1.3rem;
        font-weight: bold;
        color: var(--mainWhite) !important;
    }
`