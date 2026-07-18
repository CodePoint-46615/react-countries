import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromises }) => {

  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisistedCoutnries = (country) => {
    // console.log('handle visited country clicked.', country); 
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);

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
          visitedCountries.map((country) => <li>{country?.name?.common}</li>)
        }
      </ol>
      <div className='countries'>
        {
          countries.map(country => <Country
            key={country.cca3.cca3}
            country={country}
            handleVisistedCoutnries={handleVisistedCoutnries}
          ></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;