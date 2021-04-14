import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { getPorto } from '../redux/Actions/Portofolio.Actions'
import ListPortofolio from '../components/ListPortofolio'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Portofolio = () => {
  const dataPorto = useSelector((state) => state.handlePortofolio.data.data)
  const dispatch = useDispatch()
  const history = useHistory()
  const isLoggedIn = JSON.parse(localStorage.getItem("isLogin"))

  if(!isLoggedIn) {
    history.push("/")
  }

  useEffect(() => {
    dispatch(getPorto())
  }, [dispatch])

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Portofolio - Rendy Artha</title>
        <meta name="description" content="portofolio"/>
      </Helmet>
      <Navbar />
      <div className="px-4 md:px-6 lg:px-16 xl:px-32 2xl:px-64 pt-6">
        <h1 
          className="font-bold font-poppins text-xl text-basic my-1"
        >
          Portofolio
        </h1>
        <div 
          className="flex flex-col flex-wrap md:flex-row"
        >
          {!!dataPorto && dataPorto.map((item) => (
            <ListPortofolio 
              item={item} 
              key={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portofolio
