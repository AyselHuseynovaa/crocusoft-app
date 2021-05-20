import {useState} from 'react'

export default function useToggle(initaleValue=false) {
    const [state, setState]=useState(initaleValue)
    const toggle=()=>{
        setState(!state)
    }
    return[state, toggle]
}