import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { UserContext } from '../context/UserContext'
import { useHistory } from 'react-router-dom'

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
      <Navbar />
      <h1>Portofolio</h1>
    </div>
  )
}

export default Portofolio
