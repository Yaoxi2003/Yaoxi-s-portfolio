import { Outlet } from "react-router-dom"
import Header from "../sections/Header"
import Footer from "../sections/Footer"
import SimpleMeshBackground from "../assets/SimpleMeshBackground"

export default function Layout() {
  return (
    <main className="overflow-hidden">
      <SimpleMeshBackground />
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}
