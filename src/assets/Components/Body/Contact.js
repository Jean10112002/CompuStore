import React, { useEffect } from 'react'
import './Contacto.css'
const Contact = () => {
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    return (
        <>
         <section className="results">
        <div className="contenedor conten-results">
            <section className="numbers">
                <div className="number  animate__slideInLeft animate__animated animate__repeat-1" >
                    <i className="fas fa-phone"></i>
                    <h4>052366465</h4>
                    <p>Numero convencional de Compu Store</p>
                </div>
                <div className="number animate__slideInLeft animate__animated animate__repeat-1" >
                    <i className="fab fa-whatsapp"></i>
                    <h4>+593 999317026</h4>
                    <p>WhatsAap de Compu-Store</p>
                   
                </div>
                <div className="number animate__slideInLeft animate__animated animate__repeat-1" >
                    <i className="far fa-envelope"></i>
                    <h4>asdasdas@gmail.com</h4>
                    <p>Correo de la empresa.</p>
                </div>
                <div className="number animate__slideInLeft animate__animated animate__repeat-1" >
                    <i className="fas fa-directions"></i>
                    <h4>Calle Pichincha y Washington</h4>
                    <p>Dirección de la empresa</p>
                </div>
            </section>
            <section className="results-text animate__zoomInDown animate__animated animate__repeat-1">
                <h4>Contactos.</h4>
                <p>Con los siguientes datos que te proporcionamos puedes contactarte con nosotros.</p>
            </section>
        </div>
    </section>




        </>
    )
}

export default Contact
