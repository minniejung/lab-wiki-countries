import './App.css';
import { Routes, Route } from 'react-router-dom';
import Data from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Error from './components/Error';
// import {useEffect} from 'react'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <Routes>
            <Route
              path="/countries"
              element={<CountriesList countries={Data} />}
            >
              <Route
                path=":alpha3Code"
                element={<CountryDetails countries={Data} />}
              />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
export default App;
