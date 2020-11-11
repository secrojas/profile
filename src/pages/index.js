import React from "react"
import BasicLayout from "../layouts/BasicLayout"
import Profile from "../components/Profile"
import AboutMe from "../components/AboutMe"
import "./index.scss"

import Seo from "../components/seo"
import imageBlog from "../images/icono-secrojas.png"

export default function Index(){
  return(
    <BasicLayout menuColor="black">
      <Seo
        title="Desarrollo Web | React - Laravel"
        description="Programador Web Freelance. Desarrollos Front End con React. Desarrollos Full Stack con Laravel"
        image={imageBlog}
      />
      <Profile />
      <AboutMe />
    </BasicLayout>
  )
}
