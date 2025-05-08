

import React from "react"
import Body from "./components/Body"
import {Provider} from "react-redux"
import Login from "./components/login"
import Profile from "./components/Profile"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import appStore from "./utils/appStore";
function App() {
  

  return (
    <>
    <Provider store={appStore} >
    <BrowserRouter basename="/">
    <Routes>
     <Route path="/" element={<Body/>}>
       <Route path="/login" element={<Login/>}/>
       <Route path="/profile" element={<Profile/>}/>
     </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
      </>
  )
}

export default App
