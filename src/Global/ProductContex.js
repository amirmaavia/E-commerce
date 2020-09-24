import React, {createContext, useState} from 'react'
import Tripod from '../Images/Tripod.jpeg'
import VR from '../Images/VR.jpeg'
import RingLight from '../Images/RingLight.jpeg'
import bluetooth from '../Images/bluetooth.jpeg'


export const ProductContext = createContext()
const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([
        {id: 1, name: "Tripod", price: 200, image: Tripod, status: "hot"},
        {id: 2, name: "RingLight", price: 900, image: RingLight, status: "new"},
        {id: 3, name: "VirtualGlasses", price: 1200, image: VR, status: "hot"},
        {id: 4, name: "Bluetooth", price: 200, image: bluetooth, status: "new"},
        {id: 5, name: "RingLight", price: 900, image: RingLight, status: "hot"},
        {id: 6, name: "VirtualGlasses", price: 1200, image: VR, status: "hot"} ,
        {id: 7, name: "Tripod", price: 200, image: Tripod, status: "new"},
        {id: 8, name: "RingLight", price: 900, image: RingLight, status: "hot"},
        
    ])
    return (
        <ProductContext.Provider value={{products: [...products]}}>
{props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider
