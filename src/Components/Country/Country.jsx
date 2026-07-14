import React from 'react';
import './Country.css';

const Country = ({ country }) => {
  // console.log(country); 
  // console.log(country.name.official);
  // console.log(country.flags.flags.png);


  const countryName = country?.name?.common;
  const countryPopulation = country?.population?.population
  const imageSrc = country?.flags?.flags?.png;
  const imageAlt = country?.flags?.flags?.alt;
  const countryArea = country?.area?.area;  

  const marginTop = {
    marginTop: "10px"
  }

  return (
    <div className='country'>
      <img src={imageSrc} alt={imageAlt} />
      <h3>Name: {countryName}</h3>
      <p>Population: {countryPopulation}</p>
      <p style={marginTop}>
        Area: {countryArea}
        {countryArea > 300000 ? " (Big Country) " : " (Small Country)"}
      </p>
    </div>
  );
};

export default Country;