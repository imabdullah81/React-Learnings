import React, { useState } from 'react'
import { Link ,Outlet, useSearchParams} from 'react-router-dom'
export default function BookLayout() {
    const [searchParams,setSearchParams] = useSearchParams({n:3})
    const number = searchParams.get("n")
    return (
        <>
            <Link to="/books/1">book1</Link>
            <br />
            <Link to="/books/2">book2</Link>
            <br />
            <Link to={`/books/${number}`}>book{number}</Link>
            <br />
            <Link to="/books/4">book4</Link>
            <br />
            <Link to="/books/5">book5</Link>
            <br />
            <Link to="/books/new">NewBook</Link>
            <br />
            <Outlet context={{hello : "World"}}></Outlet>
            <input 
            type="number"
            value={number}
            onChange={(e)=>setSearchParams({n : e.target.value})}
             />
        </>
    )
}
