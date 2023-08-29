import { BrowserRouter, Route, Routes } from 'react-router-dom'
import QrCode from './components/QrCode';


function App() {
  return (
   <div id="utils">
    <BrowserRouter basename="/utils">
      <Routes >
        <Route path="/" Component={QrCode} />
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
