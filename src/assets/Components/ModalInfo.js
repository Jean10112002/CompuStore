import React from 'react'

const ModalInfo = ({productos}) => {
    return (
        <div>
            <div className="modal shadow-lg fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-center" style={{color:'#D81E05'}} id="staticBackdropLabel">{productos[0]?.modelo}-{productos[0]?.marca}  </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <h1 className="text-danger text-center">  {productos[0]?.modelo} </h1>
                   <img src={productos[0]?.img} alt="imagen" className="img-fluid animate__shakeY animate__animated" />
                    
                    <div className="row">
                        <h2 className="text-center" style={{color:'#D81E05'}}>Caracteristicas</h2>
                        <div className="col-6">
                        <b><p><i className="fas fa-camera animate__backInLeft animate__animated" style={{color:'#D81E05'}} ></i>   <span className="animate__backInRight animate__animated">   Camara: 12MP,Dual</span></p></b>
                                <b><p><i className="fas fa-battery-full animate__backInLeft animate__animated" style={{color:'#D81E05'}} ></i>   <span className="animate__backInRight animate__animated">   Batería: 12MP,2700 mAh</span></p></b>
                                <b><p><i className="fas fa-code animate__backInLeft animate__animated" style={{color:'#D81E05'}} ></i>   <span className="animate__backInRight animate__animated">   Os:iOS 11</span></p></b>
                                <b><p><i className="fas fa-expand-arrows-alt animate__backInLeft animate__animated" style={{color:'#D81E05'}} ></i>   <span className="animate__backInRight animate__animated">   Perfil: 7.5mm</span></p></b>
                                <b><p><i className="fas fa-balance-scale animate__backInLeft animate__animated" style={{color:'#D81E05'}} ></i>   <span className="animate__backInRight animate__animated">   Peso: 202g</span></p></b>
                        </div>
                        <div className="col-6">
                        <b><p><i className="fas fa-camera" style={{color:'#D81E05'}} ></i> Camara: 12MP,Dual</p></b>
                                <b><p><i className="fas fa-battery-full animate__backInLeft animate__animated" style={{color:'#D81E05'}} ></i>   <span className="animate__backInRight animate__animated">   Caracteristicas del producto</span></p></b>
                                <b><p><i className="fas fa-code animate__backInLeft animate__animated" style={{color:'#D81E05'}} ></i>   <span className="animate__backInRight animate__animated">   Caracteristicas del producto</span></p></b>
                                <b><p><i className="fas fa-expand-arrows-alt animate__backInLeft animate__animated" style={{color:'#D81E05'}} ></i>   <span className="animate__backInRight animate__animated">   Caracteristicas del producto</span></p></b>
                                <b><p><i className="fas fa-balance-scale animate__backInLeft animate__animated" style={{color:'#D81E05'}} ></i>   <span className="animate__backInRight animate__animated">   Caracteristicas del producto</span></p></b>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ModalInfo
