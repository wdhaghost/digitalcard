import React from "react"
import mail from "../images/Mail.png"
import linkedin from "../images/linkedin.png"

export default function Info() {
    return (
        <div className="info">
            <div className="info-content">
                <h1 className="info-name">Coulibaly Abdourahmane</h1>
                <h3 className="info-job">Développeur Frontend</h3>
                <p className="info-web">test 1</p>
            </div>
            <div className="info-links">
                <a href="mailto:abdou.coulibaly@outlook.fr" className="info-mail"><img src={mail} alt="mail logo" ></img>Email</a>
                <a href="https://www.linkedin.com/in/abdourahmane-coulibaly/" target="_blank" rel="noreferrer" className="info-linkedin"><img src={linkedin} alt="linkedin logo" ></img>Linkedin</a>
            </div>
            <div className="info-description">
                <div className="info-paragraph">
                    <p className="paragraph-title">A propos de moi</p>
                    <p className="paragraph-text">Je suis un développeur web front qui aime le défi et à soif de connaissances</p>
                </div>
                <div className="info-paragraph">
                    <p className="paragraph-title">Intérêts</p>
                    <p className="paragraph-text">Cinéma, Jeux vidéos, Donjons et Drangons, coffea addict, comics fan</p>
                </div>
            </div>
        </div>
    )
}