import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from "react-bootstrap"
import CV from "../../images/cv.pdf"
import "./AboutMe.scss"

import { Image} from "react-bootstrap";
import logoImage from "../../images/texto-perfil.png"

export default function AboutMe() {
  return (
    <Container className="about-me">
      <p style={{textAlign:'center'}}>
        <Image src={logoImage}/>
      </p>
      <p>
        Programador web freelance. Especializado en Front End con tecnologías React JS y framework Laravel 
        para proyectos más completos del perfil Full Stack.     
      </p>
      <p>
        Otras tecnologías que manejo son Vue JS, Bootstrap, SAAS, Materialize, MySQL, Firebase, PHP, API´s, 
        Git.
      </p>
      <p>        
        Actualmente me desempeño como programador web en CMS Group. Empresa que organiza congresos, 
        tales como servicios financieros, fintech, pagos, seguros, salud, en ciudades como Barcelona, 
        Madrid, Lisboa, Silicon Valley, São Paulo, Quito, Toronto, Londres, Buenos Aires, Lima, 
        Montevideo y Santiago de Chile.
      </p>
      <p>        
        Desarrollo web de los eventos y maquetación de campañas de mailing que realizan. 
        En paralelo participo en proyectos como Credihub, Insurhub y Fintehub, entre otros.
      </p>
      <p>        
        Siempre en constante capacitación de las tecnologías, abierto a nuevos proyectos.
      </p>
      <hr />

        
        <Row>
            <Col xs={12} md={6}>
                <a href={CV} target="_blank">
                    <Button primary>Descargar CV</Button>
                </a>
            </Col>
            <Col xs={12} md={6}>                
                <Link to="/projects">
                    <Button primary>Ver mis proyectos</Button>  
                </Link>
            </Col>
        </Row>

    </Container>
  )
}