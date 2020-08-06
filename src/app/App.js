import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.svg'
import './App.css'

function App() {
  const [ rustModule, setRustModule ] = useState()

  useEffect(() => {
    (async () => {
      const module = await import("../native/build")
      setRustModule(module)
    })()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
	<img src={logo} className="App-logo" alt="logo" />
	<p>
	  WebAssembly with <code>Rust</code> and <code>React</code>.
	</p>
	<button
	  className="App-link"
	  onClick={() => rustModule.greet("human")}
	  disabled={!rustModule}
	>
	  {
	    rustModule
	  	? "Show greet from Rust"
	  	: "Loading module..."
	  }
	</button>
      </header>
    </div>
  )
}

export default App
