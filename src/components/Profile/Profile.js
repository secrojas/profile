import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import Social from "./Social"
import profileImage from "../../images/avatar.jpg"
import "./Profile.scss"

const data = [
  {
    title: "Edad:",
    info: "34 años",
  },
  {
    title: "Dirección:",
    info: "Mar del Plata | Buenos Aires |  Argentina",
  },
  {
    title: "E-Mail:",
    info: "sec.rojas@gmail.com",
  },
  {
    title: "Telefono:",
    info: "+54 9 2233000747",
  },
]

export default function Profile() {
  return (
    <div className="profile">
      <div className="wallpaper" />
      <div className="dark" />
      <Container className="box">
        <Row className="info">
          <Col xs={12} md={4}>
            <Image src={profileImage} fluid />
          </Col>
          <Col xs={12} md={8} className="info__data">
            {/* <span>¡HOLA!</span> */}
            <p>Sebastian Rojas</p>
            <p>Front End Developer | Full Stack Developer</p>
            <hr />
            <div className="more-info">
              {data.map((item, index) => (
                <div key={index} className="item">
                  <p>{item.title}</p>
                  <p>{item.info}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Social />
      </Container>
    </div>
  )
}