import React, { useContext,  useState } from 'react'
import { StoreContext } from '../Context/StoreContext'
import ProductList from '../Components/ProductList'

const DropxFilterAndSearch = () => {
    const {productos} = useContext(StoreContext)
    const [filter, setFilter] = useState('Filtrar por')
    const [filtrarProducto, setFiltrarProducto] = useState([])
    console.log(productos)
    const [input, setInput] = useState('')

    const handleOnSubmitSearchProduct=()=>{
        const filterProduct=productos.filter(p=>p.modelo?.toLowerCase().includes(input?.toLowerCase()) || p?.marca?.toLowerCase().includes(input.toLowerCase()))
        if(filterProduct==0){
            alert("no existe tu busqueda")
            setInput('')
            setFiltrarProducto(null)
        }else{
            setFiltrarProducto(filterProduct)
            setInput('')
        }
    }
    const onHandleClick=(e)=>{
        setFilter(e.target.name)
        let filters=e.target.name?.toLowerCase()
       let productosFiltrados=productos.filter(p=>p.objeto===filters)
        setFiltrarProducto(productosFiltrados)
    }
   
    return (
        <>
            <div className="card w-75 w-md-25 mx-auto shadow-lg animate__rubberBand animate__animated" style={{marginTop:'7em',marginBottom:'3em'}}>
                <div className="card-body">
                    <h5 className="card-title text-center fs-3">Filter And Search Of Products </h5>
                    <hr className="dropdown-divider shadow" />

                        <div className="row g-4 ">
                            <div className="col-md-8">
                            <label className="col-form-label ">Search the product</label>
                            <div className="input-group mb-3">
                            <input type="text" id="inputPassword6" 
                                 placeholder="Input the product"
                                 className="form-control shadow" aria-describedby="passwordHelpInline" onChange={(e)=>setInput(e.target.value)} value={input} />
                                
                                <span className="input-group-text" id="basic-addon1">
                                    <svg onClick={handleOnSubmitSearchProduct}  xmlns="http://www.w3.org/2000/svg" width="20" height="15" style={{cursor:'pointer'}} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                </span>
                                
                            </div>
                            </div>
                            <div className="col-md-4">
                         
                            <label className="col-form-label ">Filter Product</label>
                            <div className="nav-item dropdown" >
                            <div className="btn-group dropend">
                                <button type="button" className="btn btn-outline-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                   {filter?filter:'texto defecto'}
                                </button>
                                <div className="dropdown-menu"   aria-labelledby="navbarDropdown" onClick={(e)=>onHandleClick(e)} >
                                
                                 <button className="dropdown-item text-dark" name="Celular" onClick={(e)=>onHandleClick(e)} >Celular</button>
                                 <button className="dropdown-item text-dark" name="Laptop" onClick={(e)=>onHandleClick(e)} >Laptop</button>
                                 <button className="dropdown-item text-dark" name="Impresora" onClick={(e)=>onHandleClick(e)} >Impresoras</button>
                                 <button className="dropdown-item text-dark" name="Otro" onClick={(e)=>onHandleClick(e)} >Otros</button>
                                </div>
                            </div>
                            </div> 
                            </div>
                        </div>
                        <label className="col-form-label ">You can search by model or brand</label>
                </div>
               
            </div>
 

            <ProductList 
            productosFiltrados={filtrarProducto}
            />
        

           
        </>
    )
}

export default DropxFilterAndSearch

