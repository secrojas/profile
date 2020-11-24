import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"
import { Image} from "react-bootstrap";
import logoImage from "../../images/logo-nombre.png"
import { Container } from "react-bootstrap"
import "./Menu.scss"
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu } from "mdbreact";


export default function Menu(props) {
  const { menuColor } = props

  const [state, setState] = useState(false); 

  const toggleCollapse = () => {
    setState({ isOpen: !state.isOpen });
  }

  return (
    <header
      className="menu"
      style={{ backgroundColor: menuColor || "transparent" }}
    >
      <Container style={{paddingRight:'35px',paddingLeft:'0'}}>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/skills">SKILLS</Link>
          </li>
          <li>
            <Link to="/projects">PROYECTOS</Link>
          </li>
          <li>            
            <a href="https://wa.me/5492233000747/?text=Me%20interesaría%20un%20presupuesto.%20Gracias." target="_blank">
            COTIZA
            </a>
          </li>
        </ul>
      </Container>
    </header>
    // <BrowserRouter>
    //   <MDBNavbar  className="menu2" color="default-color" dark expand="md" style={{backgroundColor:'#030404'}}>
    //     <MDBNavbarBrand>
    //       <Link to="/">
    //         <Image src={logoImage} style={{marginLeft:'50px'}}/>
    //       </Link>
    //     </MDBNavbarBrand>
    //     <MDBNavbarToggler onClick={toggleCollapse} />
    //     <MDBCollapse id="navbarCollapse3" isOpen={state.isOpen} navbar>
    //       <MDBNavbarNav right>
    //         <MDBNavItem active className="estilo">
    //           <Link to="/">HOME</Link>
    //         </MDBNavItem>        
    //         <MDBNavItem active className="estilo">
    //           <Link to="/skills">SKILLS</Link>
    //         </MDBNavItem>
    //         <MDBNavItem active className="estilo">
    //           <Link to="/projects">PROYECTOS</Link>
    //         </MDBNavItem>
    //         <MDBNavItem active className="estilo">
    //           <Link to="https://wa.me/5492233000747/?text=Me%20interesaría%20un%20presupuesto.%20Gracias." target="_blank">COTIZÁ TU WEB</Link>
    //         </MDBNavItem>            
    //       </MDBNavbarNav>      
    //     </MDBCollapse>
    //   </MDBNavbar>
    // </BrowserRouter>
     
  )
}