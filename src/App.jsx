

import React from "react"
import Body from "./components/Body"
import {Provider} from "react-redux"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Feed from "./components/Feed"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import appStore from "./utils/appStore";
import Connections from "./components/Connections"
import Requests from "./components/Requests"
import DisplayUser from "./components/DisplayUser"
import Chat from "./components/Chat"
function App() {
  

  return (
    <>
    <Provider store={appStore} >
    <BrowserRouter basename="/">
    <Routes>
     <Route path="/" element={<Body/>}>
       <Route path="/" element={<Feed/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/profile" element={<Profile/>}/>
       <Route path="/connections" element={<Connections/>}/>
       <Route path="/requests" element={<Requests/>}/>
       <Route path="/display" element={<DisplayUser/>}/>
       <Route path='/chat/:targetUserId' element={<Chat/>}/>
     </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
      </>
  )
}

export default App
