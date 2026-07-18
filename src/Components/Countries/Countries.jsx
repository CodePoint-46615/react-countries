import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromises }) => {

  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  const handleVisistedCoutnries = (country) => {
    // console.log('handle visited country clicked.', country); 
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);

  }

  const handleVisitedFlag = (flag) => {
    const newVisitedFlag = [...visitedFlag, flag];
    setVisitedFlag(newVisitedFlag);
  }

  const countriesData = use(countriesPromises);
  const countries = countriesData.countries
  // console.log(countries);

  return (
    <div>
      <h1>On the countries...{countries.length}</h1>
      <h3>Visited Country Name: {visitedCountries.length}</h3>

      <ol className='display-grid'>
        {
          visitedCountries.map((country) => <li key={country.cca3.cca3}>{country?.name?.common}</li>)
        }
      </ol>

      <ol className='display-grid'>
        {
          visitedFlag.map((flag)=> <img height='30px' src={flag}></img>)
        }
      </ol>

      <div className='countries'>
        {
          countries.map(country => <Country
            key={country.cca3.cca3}
            country={country}
            handleVisistedCoutnries={handleVisistedCoutnries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;