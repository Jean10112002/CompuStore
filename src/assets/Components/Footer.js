import React from 'react'
import logo from './../Img/logo2.png'
import '../Css/Footer.css'
const Footer = () => {
    return (
        <footer id="footer" >
            <div className="partfooter">
                <img src={logo} alt="Logo Compu Store" 
              />
            </div>
            <div className="partfooter">
                <h4>Servicios</h4>
                <p>Venta de computadoras</p>
                <p>Venta de celulares</p>
                <p>Venta de Impresoras</p>
                <p>Venta de muchas cosas más</p>
            </div>
            <div className="partfooter">
                <h4>Contactos</h4>
                <p>09999999</p>
                <p>05555525252</p>
                <p>099999999</p>
            </div>
            <div className="partfooter">
                <h4>Redes Sociales</h4>
                <div className="social-media">
                    <a href="https://www.facebook.com/Compustore.Ec" target="0"><i className="fab fa-facebook trans"></i></a>
                    <a href="https://twitter.com/icomputerstore?lang=es" target="0"><i className="fab fa-twitter trans"></i></a>
                    <a href="https://www.instagram.com/compustoreec/" target="0"><i className="fab fa-instagram trans"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
