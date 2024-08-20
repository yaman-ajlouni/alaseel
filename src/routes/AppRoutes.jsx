import React from 'react'
import { Route, Routes } from 'react-router';
import { Home } from '../Home';
import { About } from '../About';
import { Retail } from '../Retail';
import { Catering } from '../Catering';
import { Consultancy } from '../Consultancy';
import { Contact } from '../Contact';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Retail' element={<Retail />} />
      <Route path='/Catering' element={<Catering />} />
      <Route path='/Consultancy' element={<Consultancy />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
  )
}
