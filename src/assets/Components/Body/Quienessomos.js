import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Quienessomos.css'
import logo from '../../Img/logo2.png'
import img1 from '../../Img/p1.jpg'
import img2 from '../../Img/p2.jpg'
import img3 from '../../Img/p3.jpg'
import img4 from '../../Img/p4.jpg'
import img5 from '../../Img/p5.jpg'
import img6 from '../../Img/p6.jpg'
import img7 from '../../Img/p7.jpg'
import img8 from '../../Img/p8.jpg'
import img9 from '../../Img/p9.jpg'
const Quienessomos = () => {
  useEffect(()=>{
    window.scroll(0,0)
},[])
    return (
        <>
          <div className="contenedor logo__principal__inicio">
        <div className="logo__principial">
          <img src={logo} className="animate__heartBeat" alt="Logo Compu Store" />
        </div>
        <div className="logo__informacion" 
       >
          <h1 className="text-info animate__animated animate__bounce animate__repeat-2 ">Compu Store</h1>
          <p >Tecnologia de punta</p>
        </div>
      </div>
            <section className="about-us">
        <div className="contenedor1">
            <div className="contenedor-articulo">
              <h1 className="fw-normal text-danger animate__animated animate__jackInTheBox animate__repeat-1  " >¿Quienes somos?</h1>
                <div className="articulo1 animate__zoomIn animate__repeat-1 animate__animated  "  >
                    <img src={logo} alt="" />
                    <h3 className="fw-bold">Compu Store</h3>
                    <p>Compu Store nació tal dia por tal motivo, gracias a sus clientes ha logrado evolucionar en el mercado, y ser una empresa con grandes productos tecnologicos.
                    </p>
                 </div>
                 
                  <div className="articulo animate__zoomIn animate__repeat-1 animate__animated " >
                    <img src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg" alt="" />
                     <h3 className="fw-bold">Jimmy adasdasdasdsa</h3>
                     <p>Gerente propietario de Compu Store.</p>
 
                  </div>
                  <div className="articulo animate__zoomIn animate__repeat-2 animate__animated "  >
                    <img src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg" alt="" />
                    <h3 className="fw-bold">Juan pablo bla bla</h3>
                    <p>Persona encargada del servicio técnico en reparacion de computadores.</p>

                 </div>
                  <div className="articulo animate__zoomIn animate__repeat-3 animate__animated "  >
                    <img src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg" alt="" />
                     <h3 className="fw-bold">Villamil Pedro</h3>
                     <p>Encargado de la reparacion de impresoras.</p>
 
                  </div>
                  <div className="articulo animate__zoomIn animate__repeat-4 animate__animated "  >
                    <img src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg" alt="" />
                     <h3 className="fw-bold">Juan Manuel</h3>
                     <p>Encargado de vender los articulos de ofimatica.</p>
 
                  </div>
                  <div className="articulo animate__zoomIn animate__repeat-5 animate__animated "  >
                    <img src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg" alt="imagen" />
                     <h3 className="fw-bold">Pedro Pablo</h3>
                     <p>Encargado de realizar servicio tecnico a camaras.</p>
 
                  </div>
            </div>
        </div>
    </section>
    <div className="contenedor1 mx-auto titulo__carousel compustore__publicidad">
      <h2 className="display-6 text-center">Compu Store ofreciendote los ultimos productos en tecnología</h2>
    </div> 
    <section className="contenedor3 carousel__compu__store">
        <div id="carouselExampleCaptions" className="carousel slide carousel__contenedor carousel__margin" >
            <ol className="carousel-indicators">
              <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
              <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
              <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></li>
              <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="imagen de carousel" />

              </div>
              <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="imagen de carousel" />
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="imagen de carousel" />
              </div>
              <div className="carousel-item">
                <img src={img4} className="d-block w-100" alt="imagen de carousel" />

              </div>
              <div className="carousel-item">
                <img src={img5} className="d-block w-100" alt="imagen de carousel" />

              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>

          <div id="carouselExampleCaptions1" className="carousel slide carousel__contenedor" data-bs-ride="carousel" data-aos="zoom-in-down" data-aos-duration="2000">
            <ol className="carousel-indicators">
              <li data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="1"></li>
              <li data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="2"></li>
              <li data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img6} className="d-block w-100" alt="imagen de carousel" />
 
              </div>
              <div className="carousel-item">
                <img src={img7} className="d-block w-100" alt="imagen de carousel" />

              </div>
              <div className="carousel-item">
                <img src={img8} className="d-block w-100" alt="imagen de carousel" />
              </div>
              <div className="carousel-item">
                <img src={img9} className="d-block w-100" alt="imagen de carousel" />
              </div>

            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions1" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions1" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </section>
        
        </>
    )
}

export default Quienessomos
