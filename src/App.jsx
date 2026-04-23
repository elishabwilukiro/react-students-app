import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import View from './students/View'
import List from './students/List'
import Create from './students/Create'
import Edit from './students/Edit'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
