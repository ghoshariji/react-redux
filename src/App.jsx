import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch} from "react-redux"
import {addUser} from "../src/store/slice/UserS;ice"
import {removeUser} from "../src/store/slice/UserS;ice"
import Displaydata from './component/Displaydata'

function App() {
  const dispatch = useDispatch();
  const addData = () =>{
    dispatch(addUser("Arijit"))
  }

  const deleteData = () =>{
    dispatch(removeUser())
  }

  return (
    <>


    <button onClick={addData}>Add Data</button>
    <button onClick={deleteData}>Delete Data</button>


    <Displaydata/>
    </>
  )
}

export default App
