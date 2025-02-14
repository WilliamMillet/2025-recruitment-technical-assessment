import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage/DashBoardPage'
import RoomGridViewPage from './pages/RoomGridViewPage/RoomGridViewPage'
import MapPage from './pages/MapPage/MapPage'
import Header from './components/Header/Header'

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<DashboardPage />}/>
        <Route path='/grid' element={<RoomGridViewPage/>}/>
        <Route path='/map' element={<MapPage/>}/>
      </Routes>
    </>
  )
}

export default App
