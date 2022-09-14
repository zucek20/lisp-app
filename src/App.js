import { useState } from "react";
import "./styles/variables.scss"
import "./styles/nav.scss"
import "./styles/app.scss"
import logo from "./assets/dank.png"
import moonWhite from "./assets/moon-white.svg"
import copyBlack from "./assets/copy-black.svg"
import copyWhite from "./assets/copy-white.svg"
import sunBlack from "./assets/sun-black.svg"
import timesBlack from "./assets/times-black.svg"
import timesWhite from "./assets/times-white.svg"
import themes from "./themes"



function App() {
  const [isDark, setIsDark] = useState(false)
  const [text, setText] = useState("") 
  const [isHovering, setIsHovering] = useState(false)

  function handleMouseEnter() {
    setIsHovering(true)
  }
  function handleMouseLeave() {
    setIsHovering(false)
  }

  function changeTheme() {
    setIsDark(isDark => !isDark)
  }

  return (
    <>
      <nav style={{
        backgroundColor: isDark ? themes.dark1 : themes.light1
      }}>
        <div className="logo">
          <img src={logo} alt="apu dank" />
          <h1>Lisp app</h1>
        </div>

        <div className="other">
          <a href="https://github.com/zucek20/lisp-app" target="_blank" rel="noreferrer" style={{
            color:  isHovering ? themes.blue : isDark ? "white" : "black"
          }} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >GitHub</a>
          <img src={isDark ? moonWhite : sunBlack} alt="icon" onClick={changeTheme}/>
        </div>
      </nav>
      <main style={{
        color: isDark ? "white" : "black"
      }}>
        
      </main>
    </>
  );
}

export default App;
