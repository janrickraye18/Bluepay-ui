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