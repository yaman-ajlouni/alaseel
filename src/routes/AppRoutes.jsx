import React from 'react'
import { Route, Routes } from 'react-router';
import { Home } from '../Home';
import { About } from '../About';
import { Retail } from '../Retail';
import { Catering } from '../Catering';
import { Contact } from '../Contact';
import { FoodMenu } from '../pages/FoodMenu/FoodMenu';
import { SweetsMenu } from '../pages/sweetsMenu/SweetsMenu';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Retail' element={<Retail />} />
      <Route path='/Catering' element={<Catering />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/food' element={<FoodMenu />} />
      <Route path='/sweets' element={<SweetsMenu />} />
    </Routes>
  )
}
