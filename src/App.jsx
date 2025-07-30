import { useState } from 'react'
import './App.css'
import data from './data'
import Slide from './slide'

const App = () => {
  const [people, setPeople] = useState(data)
  // console.log(people.map((person) => person.name))
  return (
    <div className='container'>
      <h1>Slider App</h1>
      
     
        <Slide people={people} />
    
    
    </div>
  )
}

export default App