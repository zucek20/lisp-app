import { useState } from "react";
import logo from "./assets/dank.png"
import "./styles/nav.scss"
import "./styles/app.scss"

function App() {
  const [isDark, setIsDark] = useState(false)
  const [text, setText] = useState("") 

  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="apu dank" />
          <h1>Lisp app</h1>
        </div>
      </nav>
    </>
  );
}

export default App;
