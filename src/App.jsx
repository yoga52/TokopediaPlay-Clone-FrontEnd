import { Route, Routes } from "react-router-dom";
import { useAuth } from "./Contexts/AuthContext"
import Home from "./Pages/Home/Index";
import Footer from "./Templates/Footer"
import Header from "./Templates/Header"
import VideoDetail from "./Pages/VideoDetail";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video-detail/:id" element={<VideoDetail />} />
      </Routes>



      <Footer />
    </>
  )
}

export default App
