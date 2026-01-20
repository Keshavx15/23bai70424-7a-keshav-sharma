import { useState } from "react"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"

function App() {
  const [page, setPage] = useState("home")

  return (
    <div>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("about")}>About</button>
      <button onClick={() => setPage("contact")}>Contact</button>

      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "contact" && <Contact />}
    </div>
  )
}

export default App
