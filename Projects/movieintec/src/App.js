import Search from './Search'
import React, { useState } from 'react'
import axios from 'axios'

function App() {

  const [state, setState] = useState({
    inputvalue: "",
    results: []
  })


  const apiurl = "https://api.themoviedb.org/3/search/movie?api_key=07a61de5b731a869bc9cec8e25d2c8a8&query="


  const handleInput = (e) => {
    let inputValue = e.target.value;
    setState(prevState => {
      return { ...prevState, inputvalue: inputValue }
    })
    console.log(state.inputvalue)
  }


  const search = e => {
    // console.log(e.key)
    if (e.key === "Enter") {
      console.log('enter keypress')
      axios(apiurl + state.inputvalue)
        .then(response => response)
        .then(data => {
          //  console.log(data)
          let listofmovies = data.data.results
          //console.log(listofmovies)
          setState(prevState => {
            return {
              ...prevState, results: listofmovies
            }
          })

        })
    }



  }


  return (
    <div className="App">
      <header>
        <h1>Movie CMS</h1>
      </header>
      <main>
        <Search handleInput={handleInput} movielist={state.results} moviesearch={search} />

      </main>
    </div>
  )
}

export default App