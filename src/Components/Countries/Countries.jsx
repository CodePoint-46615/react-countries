import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromises }) => {

  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  // handler 1
  const handleVisistedCoutnries = (country) => {

    setVisitedCountries((prevVisitedCountries) => {

      const isAlreadyVisited = prevVisitedCountries.some(
        (visitedCountry) => visitedCountry?.cca3 === country?.cca3
      );

      if (isAlreadyVisited) {
        return prevVisitedCountries.filter(
          (visitedCountry) => visitedCountry?.cca3 !== country?.cca3
        );
      }

      return [...prevVisitedCountries, country];
    });

  };

  // handler 2
  const handleVisitedFlag = (flag) => {

    setVisitedFlag((prevVisitedFlag) => {
      if (prevVisitedFlag.includes(flag)) {
        return prevVisitedFlag.filter((visitedFlagItem) => visitedFlagItem !== flag);
      }

      return [...prevVisitedFlag, flag];
    });

  };

  const countriesData = use(countriesPromises);
  const countries = countriesData.countries
  // console.log(countries);

  return (
    <div>
      <h1>On the countries...{countries.length}</h1>
      <h3>Visited Country Name: {visitedCountries.length}</h3>

      <ol className='display-grid'>
        {
          visitedCountries.map((country) => (
            <li key={country?.cca3 || country?.name?.common}>{country?.name?.common}</li>
          ))
        }
      </ol>

      <ol className='display-grid'>
        {
          visitedFlag.map((flag, index) => (
            <img key={index} height='30px' src={flag} alt='visited flag' />
          ))
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