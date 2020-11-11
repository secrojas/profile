import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from "react-bootstrap"
import CV from "../../images/cv.pdf"
import "./AboutMe.scss"

export default function AboutMe() {
  return (
    <Container className="about-me">
      <p>
        Soy programador web freelance. Estoy especializandome principalmente en Front End con tecnologías 
        como React JS y también trabajo con el framework Laravel para proyectos mas completos del perfil Full Stack.
        Actualmente sigo capacitandome en ambas tecnologías y sumando proyectos personales para mostrar los contenidos
        que puedo generar.      
      </p>
      <p>
       Otras tecnologías que manejo y aplico a mis proyectos son Vue JS, Bootstrap, SAAS, Materialize, MySQL, Firebase, PHP, API´s, Git.
      </p>
      <p>
       También soy el programador web de CMS Group. Desarrollo todas las web de sus eventos, como asi la maquetación de todas las campañas de mailing que realizan.
       Llevo a cabo proyectos en paralelo como Credihub, Insurhub y Fintehub, entre otros.
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