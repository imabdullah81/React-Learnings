import React from 'react'
import { Link ,Outlet} from 'react-router-dom'
export default function BookLayout() {
    return (
        <>
            <Link to="/books/1">book1</Link>
            <br />
            <Link to="/books/2">book2</Link>
            <br />
            <Link to="/books/3">book3</Link>
            <br />
            <Link to="/books/4">book4</Link>
            <br />
            <Link to="/books/5">book5</Link>
            <br />
            <Link to="/books/new">NewBook</Link>
            <br />
            <Outlet></Outlet>
        </>
    )
}
