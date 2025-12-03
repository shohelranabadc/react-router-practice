import React from 'react'
import Header from '../components/main/Header'
import Footer from '../components/main/Footer'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center flex-grow bg-gray-500">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
