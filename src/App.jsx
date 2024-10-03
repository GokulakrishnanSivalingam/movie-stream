import React, { useState } from 'react'
import Img from './Img.jsx'
import Video from './Video.jsx'
import Marvel from './Marvel.jsx'
import Tw from'./Tw.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'




function App() {
  const [count, setCount] = useState(0)
  

  return (
  
        <BrowserRouter>
      <Routes>
        
<Route path='/' element={<Img/>}/>
<Route path='/video/:id' element={<Video/>}/>
<Route path='/20s/:id' element={<Tw/>}/>
<Route path='/marvel/:id' element={<Marvel/>}/>

      </Routes>
      </BrowserRouter>
      
  )
}

export default App
