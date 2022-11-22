import React from 'react'
import VendorHome from './VendorHome'
import Discount from './discount'
import PendingOrders from './PendingOrders'
import AllOrders from './AllOrders'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


export default function Routerpage() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" exact element ={<VendorHome/>}/>
        <Route path="/AllOrders" exact element ={<AllOrders/>}/>
        <Route path = "/discountpage" exact element = {<Discount/>}/>
        <Route path = "/PendingOrders" exact element = {<PendingOrders/>}/>
        </Routes>
      </Router>
    </div>
  )
}
