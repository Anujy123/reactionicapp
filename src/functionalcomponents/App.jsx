
import React from 'react'
import Navbar from './Navbar'
import Movie from './Movie'
import { Routes, Route } from 'react-router-dom'
import ParticularMovie from './ParticularMovie'





export default function App() {

    return (
        <>
            <Navbar />
            <Movie/>
            <Routes>
            <Route path='/' element={<Movie />} ></Route>
            <Route path='/particularMovie/:id' element={<ParticularMovie />} ></Route>

            </Routes>


        </>

    )

}



