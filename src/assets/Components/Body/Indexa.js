import React, { useEffect } from 'react'
import sistemas from '../../Img/undraw_heatmap_uyye.svg'
import './index.css'
import laptop from '../../Img/laptop.svg'
import poster from '../../Img/poster.svg'
import {
    Link
  } from "react-router-dom";
const Indexa = () => {
    useEffect(()=>{
        window.scroll(0,0)
    },[])

    return (
        <>
        <div className="contenedor">
          <section className="contenido-header">
            <section className="textos-header">
                <h1 className="titulo animate__zoomInDown  animate__repeat-1 animate__animated">Compu Store lo mejor en tecnología</h1>
                <p>Somos una empresa dedicada a la venta de celulares, computadoras, impresoras y demás.
                    Nos mantenemos en continua renovación para estar a la vanguardia del mercado, ofreciendo siempre la tecnología más avanzada.</p>
                <Link to="/Quienes-somos">Más Información sobre quienes somos</Link>
            </section>
                <img src={sistemas} alt="Svg de sistemas" />
          </section>
      </div>  
      <section className="about-us">
       <div className="contenedor1">
           <h2 className="titulo  ">Los servicios que ofrecemos</h2>
           <div className="contenedor-articulo">
               <div className="articulo articulo__especial" >
                   <i className="fas fa-pen-fancy"></i>
                   <h3>Venta de Celulares de Alta-Media y Baja Gama</h3>
                   <p>Realizamos venta de celulares de toda gama, a un excelente calidad-precio.
                       Poseemos una gran coleccion de marcas y modelos de celulares.
                   </p>
                </div>
                <div className="articulo articulo__especial" >
                    <i className="fas fa-code"></i>
                    <h3>Servicio Técnico en reparacion de Computadores</h3>
                    <p>Realizamos servicio técnico de computadoras, tanto en software como en hardware, ya sea instalar windows como reparar algo interno fisico.</p>

                 </div>
                 <div className="articulo articulo__especial" >
                    <i className="fas fa-cog"></i>
                    <h3>Servicio Técnico en reparación de Impresoras</h3>
                    <p>Realizamos mantenimiento a Impresoras, limpiando tinta, instalando los drivers,etc.</p>

                 </div>
                 <div className="articulo articulo__especial" >
                    <i className="fas fa-comments"></i>
                    <h3>Venta de articulos de ofimática</h3>
                    <p>Tenemos venta de audifonos,parlantes,
                        memorias, discos duros,disco de estado solido,etc.</p>

                 </div>
                 <div className="articulo articulo__especial" >
                    <i className="fas fa-chart-bar"></i>
                    <h3>Venta de perifericos para computadoras</h3>
                    <p>Venta de teclados, mouse , audifonos, mandos de ps4, mandos para pc , mouse con rgb , teclados con rgb , audifonos con rgb, etc.</p>

                 </div>
                 <div className="articulo articulo__especial"  >
                    <i className="fas fa-pen-fancy"></i>
                    <h3>Venta de Sillas Gamer</h3>
                    <p>Venta de sillas gamer calidad-precio , acolchonadas, muy comodas para el uso diario, reclinable, etc.</p>

                 </div>
           </div>
       </div>
   </section> 
                <section className="questions contenedor">
                <section className="textos-questions">
                    <h1 className="titulo">Compu Store lo mejor en tecnología</h1>
                    <p>Compu Store ha crecido enormemente en el pueblo donde se encuentra, brindando mucha tecnologia de calidad.</p>
                    <Link to="/Quienes-somos">Más Información</Link>
                    </section>
                    <img src={laptop} alt="Laptop" />
                </section>
  
            <section className="contenedor1 services">
                <img src={poster} alt=""  />
                <div className="box-skills">
                    <h4><i className="far fa-check-circle"></i> Servicio Garantizado</h4>
                    <h4><i className="far fa-check-circle"></i> Técnicos De Excelencia</h4>
                    <h4><i className="far fa-check-circle"></i> Celulares al mejor precio</h4>
                    <h4><i className="far fa-check-circle"></i> Productos Con Garantía</h4>
                    <h4><i className="far fa-check-circle"></i> Usabilidad</h4>
                </div>
            </section>
        </>
    )
}

export default Indexa
