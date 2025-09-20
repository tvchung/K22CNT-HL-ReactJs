import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TvcNavBar from './components/TvcNavBar'
import TvcHome from './pages/TvcHome'
import TvcAbout from './pages/TvcAbout'
import TvcContact from './pages/TvcContact'
import TvcProduct from './pages/TvcProduct'
import TvcProductDetail from './pages/TvcProductDetail'
import TvcNotFound from './pages/TvcNotFound'

export default function TvcApp() {
  return (
    <div className='container border'>
        <h1>React Route - Demo [Trịnh Văn Chung]</h1>
        <hr/>
        <BrowserRouter>
            <TvcNavBar />
            <Routes>
                <Route path='/' element={<TvcHome />} />
                <Route path='/about' element = {<TvcAbout />} />
                <Route path='/contact' element = {<TvcContact />} />

                {/* Nested route  */}
                <Route path='/products' element = {<TvcProduct />} >
                  <Route path=":id" element = {<TvcProductDetail />} />
                </Route>

                {/* 404 page  */}
                <Route path='*' element = {<TvcNotFound />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
