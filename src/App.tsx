import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Layout from "./components/Layout"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />
      <Hero />
      <main className="flex-1">
        <Layout />
      </main>
      <Footer />
    </div>
  )
}

export default App
