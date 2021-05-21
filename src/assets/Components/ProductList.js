import React,{useEffect, useState} from 'react'
import ModalInfo from './ModalInfo'

const ProductList = ({productosFiltrados}) => {
    const [productos, setProductos] = useState([])
    const [modal, setModal] = useState('')

   useEffect(() => {
       setProductos(productosFiltrados)
   }, [productosFiltrados])

   const handleOnClick=(e)=>{
    console.log(e.target.id)
    const filterInfo=productos.filter(p=>p.id===e.target.id)
    setModal(filterInfo)
   }
    return (
        <>
            <div className="row mt-4" >
                
                    {
                       productos?.map(res=>(
                            <div key={res.id}  className=" col-md-2 col-6 mb-4 animate__fadeInLeft animate__animated" >
                            <div className="card shadow tarjetas"  >
                                <img src={res.img} className="card-img-top tarjetas__img" alt="Cellphone" />
                                <div className="card-body">
                                <h5 className="card-title"> {res.modelo} </h5>
                                <hr />
                                <p className="card-text"> {res.marca} </p>
                                <button className="btn btn-outline-danger w-100 shadow" data-bs-target="#staticBackdrop" data-bs-toggle="modal" id={res.id} onClick={e=>handleOnClick(e)} >See Info</button>
                                
                                </div>
                            </div>
                            
                    </div>
                        
                    ))
                }
               
            </div>
            <ModalInfo 
                 productos={modal}
                 />
        </>
    )
}

export default ProductList
