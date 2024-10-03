import React, { useState } from 'react'
import Img from './Img.jsx'
import Video from './Video.jsx'
import Marvel from './Marvel.jsx'
import Mar from './Mar.jsx'
import Tw from'./Tw.jsx'
import Tws from'./Tws.jsx'
import Top from'./Top.jsx'
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
<Route path='/mar' element={<Mar/>}/>
<Route path='/top' element={<Top/>}/>
<Route path='/twenty' element={<Tws/>}/>

      </Routes>
      </BrowserRouter>
      
  )
}

export default App
