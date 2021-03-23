import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { UserContext } from '../context/UserContext'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Portofolio = () => {
  const history = useHistory()
  const { isLogin } = useContext(UserContext)

  useEffect(() => {
    if(isLogin === false) {
      history.push("/")
    }
  }, [])

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
