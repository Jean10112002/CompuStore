import React from 'react'
import {
    NavLink
  } from "react-router-dom";
import logo from '../Img/logo2.png'
import '../Css/Nav.css'
const Nav = () => {
    let semaforo=true;
   const handelOnClick=(e)=>{
       const nav=document.querySelector(".enlaces-header")
       if(semaforo){
       nav.classList.toggle("menudos")
        e.target.style.color="white"
        semaforo=false
    }else{
        nav.classList.toggle("menudos")
        e.target.style.color="red"
        semaforo=true
    }
   }


    return (
        <header>
        <nav>
            <section className="contenedor nav">
                <div className="logo animate__fadeInDownBig animate__animated animate__repeat-1">
                    <img src={logo} alt="Logo Compu Store" />
                </div>
                <div className="enlaces-header">
                    <NavLink to="/" activeClassName="lugar" exact>Inicio</NavLink>
                    <NavLink to="/Quienes-somos"  exact activeClassName="lugar">Quienes Somos</NavLink>
                    <NavLink to="/Contacto"  exact  activeClassName="lugar">Contactos</NavLink>
                    <NavLink to="/Productos"  exact activeClassName="lugar">Productos</NavLink>
                </div>
                <div className="hamburguer">
                    <i className="fas fa-bars" onClick={(e)=>handelOnClick(e)}></i>
                </div>
            </section>
            
        </nav>
        </header>
    )
}

export default Nav
