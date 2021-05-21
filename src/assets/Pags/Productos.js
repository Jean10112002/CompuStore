import React, { useContext,useEffect } from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Css/Productos.css'
import DropxFilterAndSearch from '../Components/DropxFilterAndSearch'
import {StoreContext} from '../Context/StoreContext'
import axios from "axios"



const Productos = () => {
const {setProductos} = useContext(StoreContext)
useEffect(()=>{
    window.scroll(0,0)
    async function ConsumirApi(){
        const res=await axios.get('https://raw.githubusercontent.com/Jean10112002/JSON/main/productos.json')
        setProductos(res?.data)
    }
     ConsumirApi() 
},[setProductos])
    return (
        <>
            <Nav />
            <div className="container" >
                    <DropxFilterAndSearch />
             </div>
            <Footer/>
        </>
    )
}

export default Productos
