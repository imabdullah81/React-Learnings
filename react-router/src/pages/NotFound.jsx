import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function NotFound() {
      const navigate =useNavigate()
      useEffect(()=>{
        setTimeout(()=>{
            navigate("/")
        },1000)

      },[])
    return (
        <>
        <h1>Not Found</h1>
        </>
    )
}
