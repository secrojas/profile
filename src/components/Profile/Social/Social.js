import React from "react"
import IcWeb from "../../../images/icons/web.svg"
import IcLinkedin from "../../../images/icons/linkedin.svg"
import IcGithub from "../../../images/icons/github.svg"
import IcWhatsapp from "../../../images/icons/whatsapp.svg"
import IcEmail from "../../../images/icons/email.svg"
import "./Social.scss"



const socialMedia = [  
  
  {
    icon: <IcWeb />,
    link: "https://srojasweb.dev/",
  },
  {
    icon: <IcEmail />,
    link: "mailto:sec.rojas@gmail.com",
  },
  {
    icon: <IcWhatsapp />,
    link: "https://wa.me/5492233000747/?text=Me%20interesaría%20un%20presupuesto.%20Gracias.",
  },
  {
    icon: <IcLinkedin />,
    link: "https://www.linkedin.com/in/secrojas/",
  },
  {
    icon: <IcGithub />,
    link: "https://github.com/secrojas",
  },
]

export default function Social() {
  return (
    <div className="social">
      {socialMedia.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}