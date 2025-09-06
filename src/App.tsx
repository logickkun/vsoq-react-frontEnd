import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {/* 없는 경로(404): SPA에서 path="*"로 NotFound 페이지를 보여주거나, 필요하면 /login으로 보냄. */}
      {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
    </Routes>
  )
}

export default App
