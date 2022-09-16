import { useState } from "react";
import "./styles/variables.scss"
import "./styles/nav.scss"
import "./styles/app.scss"
import "./styles/main.scss"
import "./styles/footer.scss"
import "./styles/modal.scss"
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

  function handleTimesClick() {
    setText("")
    document.getElementById("input").value = ""
  }

  // main algorithm
  function handleInputChange(e) {
    let unedited = e.target.value.split("")
    const edited = unedited.map(letter => {
      switch (letter) {
        case "r":
          return "l"
          break;
        case "ś":
          return "s"
          break
        case "ź":
          return "z"
          break
        case "ć":
          return "c"
        case "w":
          return "f"
          break
        case "b":
          return "p"
          break
          case "ł":
          return "l"
          break
        default:
          return letter
      }}).join("").trim()
    setText(edited)
  }

  // copy to clipboard
  function copy() {
    // copy content
    navigator.clipboard.writeText(text)
    // modal
    const modal = document.getElementById("modal")
    modal.classList.add("active")
    setTimeout(function() {
      modal.classList.remove("active")
    } , 2500)
  }

  return (
    <>
      <nav style={{
        backgroundColor: isDark ? themes.dark1 : themes.light1
      }}>
        <div className="navWrap">

          <div className="logo">
            <img src={logo} alt="apu dank" />
            <h1>Lisp app</h1>
          </div>

          <div className="logoMobile">
            <h1>Lisp <br/>app</h1>
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
        </div>
      </nav>
      
      <div id="modal">
        <p>Copied to clipboard!</p>
      </div>

      <main style={{
        color: isDark ? "white" : "black",
        backgroundColor: isDark ? themes.dark1 : themes.light1,
      }}>
          <header>
            <p>With this app, you can convert normal text to <b>lispy</b> text.</p>
          </header>
        <div className="wrap" style={{
          backgroundColor: isDark ? themes.dark2 : themes.light2
        }}>
          
          
          <div className="app">
            <div className="firstWrap">
              <div className="buttonDiv">
                {text ? 
                <img onClick={handleTimesClick}className="times" src={isDark ? timesWhite : timesBlack} alt="times" title="Clear input"/>
                : null
              }
              </div>
              <h3>Your input</h3>
              <textarea spellcheck="false" placeholder="Type here..." id="input" style={{
                backgroundColor: isDark ? themes.dark1 : "white",
                color: isDark ? "white" : "black"
              }}
              onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="secondWrap">
              <h3>Lispy text</h3>

            <p id="output" style={{
              backgroundColor: isDark ? themes.dark1 : "white",
              color: isDark ? "white" : "black"
            }}>{text}</p>
            <div className="buttonDiv">
              <img className="copy" src={isDark ? copyWhite : copyBlack} alt="copy" title="Copy to clipboard" onClick={copy}/>
            </div>
            </div>
          </div>
        </div>
      <footer>
        Paweł Izdebski 2022 &copy;
      </footer>
      </main>
    </>
  );
}

export default App;
