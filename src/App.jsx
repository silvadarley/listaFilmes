import { useState } from 'react';
import {Routes, Route} from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Home from "../src/pages/Home/Home.jsx";
import MovieDetail from "../src/pages/MovieDetail/MovieDetail.jsx";
import './App.scss'

function App() {
  // const [count, setCount] = useState(0)

  const [searchValue, setSearchValue] = useState("");
  return (
    <div className='App' >
      {/* Recebendo o paramento do compromente HEADER no onsubmit*/}
      <Header 
        onSubmit={(inputValue) => setSearchValue(inputValue)}      
      />

      <Routes>
        {/* Criando uma proppriedade SeachValue pra receber o valor passado pelo HEADER */}
        <Route 
          path='/' 
          element={<Home 
            searchValueProp={searchValue}
              />
            }
        />

        <Route path='/movie/:id' element={<MovieDetail />}/>
      </Routes>
      
    </div>

  )
}

export default App
