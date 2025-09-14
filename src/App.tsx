import { Route, Routes } from 'react-router-dom'
import WebLoginForm from './pages/WebLoginForm'

function App() {
  return (
  <Routes>
    <Route path="/auth/login" element={<WebLoginForm />} />
  </Routes>
  )
}

export default App
