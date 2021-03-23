import React from 'react'
import Navbar from '../components/Navbar'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Portofolio = () => {
  const history = useHistory()
  const isLoggedIn = JSON.parse(localStorage.getItem("isLogin"))

  if(!isLoggedIn) {
    history.push("/")
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Portofolio - Rendy Artha</title>
        <meta name="description" content="portofolio"/>
      </Helmet>
      <Navbar />
      <h1>Portofolio</h1>
    </div>
  )
}

export default Portofolio
