import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import AuthPage from "./components/AuthPage/AuthPage";
import NewOrderPage from "./components/NewOrderPage/NewOrderPage";
import OrderHistoryPage from "./components/OrderHistoryPage/OrderHistoryPage";

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(null)

  return <main className="App">
  {
    user ? (
      <>
        <NavBar />
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
      </>
    ) : (
      <AuthPage />
    )}
    </main>;
}

export default App

