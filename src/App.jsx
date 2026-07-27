import { Routes, Route } from 'react-router-dom'
import DisplayCard from './components/DisplayCard'
import UserRegistration from './components/UserRegistration.jsx' 

function App() {
  return (
    <Routes>
      {/* Main root URL shows your original assignment */}
      <Route path="/" element={<DisplayCard pageName="Greetings" />} />
      <Route path="/profile" element={<DisplayCard pageName="Profile" />} />
      <Route path="/hobbies" element={<DisplayCard pageName="My Hobbies" />} />
      
      {/* Week 6 assignment accessible via /registration */}
      <Route path="/registration" element={<UserRegistration />} />
    </Routes>
  )
}

export default App