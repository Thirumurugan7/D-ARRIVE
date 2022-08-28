import { createContext, useEffect, useState } from "react";
import { resolve } from "styled-jsx/css";

export const UberContext = createContext();

const createLocationCoordinatePromise = (locationName,locationType) => {
    return new Promise(async (resolve,reject)=>{
        const response = await fetch('api/map/getLocationCoordinates',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                location:locationName
            })
        })
        const data = await response.json()
    })
}

export const UberProvider = ({children}) => {
    const [pickUp,setPickup] = useState('')
    const [dropOff,setDropoff] = useState('');
    const [pickupCoordinates,setPickupCoordinates]= useState()
    const [dropOffCoordinates,setDropOffCoordinates]= useState()
    useEffect(() => {
        ;(async () => {
            await Promise.all([])
        })()
    },[])

    return [
        <UberContext.Provider value={}>{children}</UberContext.Provider>
    ]
}