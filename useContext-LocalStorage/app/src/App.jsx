import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import ProtectedRoute from "./components/ProtectedRoute"
import HomeRoutes from "./components/HomeRoutes"

function App() {

  return (
    <Routes>
      <Route element={<HomeRoutes />} >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Route>
      <Route path="dashboard" element={<ProtectedRoute />} >
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App
