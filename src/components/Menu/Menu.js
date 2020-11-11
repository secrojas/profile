import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import "./Menu.scss"


export default function Menu(props) {
  const { menuColor } = props

  return (
    <header
      className="menu"
      style={{ backgroundColor: menuColor || "transparent" }}
    >
      <Container>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Proyectos</Link>
          </li>
          <li>            
            <a href="https://wa.me/5492233000747/?text=Me%20interesaría%20un%20presupuesto.%20Gracias." target="_blank">
              Pedí Presupuesto
            </a>
          </li>
        </ul>
      </Container>
    </header>
  )
}