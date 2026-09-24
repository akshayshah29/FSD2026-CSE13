import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import cat from './image/cat.png';
import UseProps from './component/UseProps'
import ICardGallery from './component/ICardGallery'
function App() {
  const a=20;
   const name="Rahul";



  return (
    <div>
     
     {/* <UseProps /> */}

     <ICardGallery />
    </div>
  )
}

export default App
