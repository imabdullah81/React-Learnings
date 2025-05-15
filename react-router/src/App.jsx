import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BookList from './pages/BookList'
import { Link } from 'react-router-dom'
import Book from './pages/Book'
import NewBook from './pages/NewBook'
import NotFound from './pages/NotFound'
import BookLayout from './pages/BookLayout'
import './pages/styles.css'
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/books">BookList</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/books' element={<BookLayout />}>
          <Route index element={<BookList />} ></Route>
          <Route path=':id' element={<Book />}></Route>
          <Route path='new' element={<NewBook />}></Route>
        </Route>
        {/*<Route path='/books' element={<BookList/>}></Route>
      <Route path='/books/:id' element={<Book />}></Route>
      <Route path='/books/new' element={<NewBook />}></Route>*/}
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
