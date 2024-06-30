
import {url} from './configuration'


export const index = async (token) => {
    const response = await fetch(`${url}/orders`,{
        method:'GET',
        headers:{
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    return await response.json()
    }

export const addOrder = async (body, id, token) => {
    const response = await fetch(`${url}/customers/${id}/addOrder`,{
    method: 'POST',
    headers:{
        Accept: 'application/json',
        "Content-type": 'application/json',
        Authorization: `Bearer ${token}`
    },
    body:JSON.stringify(body)
    })
    
    return await response.json()
    }