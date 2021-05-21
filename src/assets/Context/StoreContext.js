import { createContext, useState} from 'react'
const StoreContext = createContext()


const StoreProvider=({children})=>{
    const [productos, setProductos] = useState([{}])
    
    

    return(
        <StoreContext.Provider value={{productos,setProductos}} >
            {children}
        </StoreContext.Provider>
    )
}
export{StoreContext}
export default StoreProvider;

