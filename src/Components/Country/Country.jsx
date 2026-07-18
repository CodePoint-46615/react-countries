import React, { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisistedCoutnries, handleVisitedFlag }) => {
  // console.log(country); 
  // console.log(country.name.official);
  // console.log(country.flags.flags.png);

  const [visited, setVisited] = useState(false);


  const countryName = country?.name?.common;
  const countryPopulation = country?.population?.population
  const imageSrc = country?.flags?.flags?.png;
  const imageAlt = country?.flags?.flags?.alt;
  const countryArea = country?.area?.area;

  const marginTop = {
    marginTop: "10px"
  }

  const handleVisited = () => {

    // toogling basic process 1
    /* if (visited) {
      setVisited(false);
    }
    else {
      setVisited(true);
    } */

    // toogling process 2
    // visited ? setVisited(false) : setVisited(true);
    // setVisited(visited ? false : true); 
    setVisited(!visited)
    handleVisistedCoutnries(country); 
  }

  return (
    <div className={`country ${visited && 'visited-country'}`}>
      <img src={imageSrc} alt={imageAlt} />
      <h3>Name: {countryName}</h3>
      <p>Population: {countryPopulation}</p>
      <p style={marginTop}>
        Area: {countryArea}
        {countryArea > 300000 ? " (Big Country) " : " (Small Country)"}
      </p>
      <button className='btn' onClick={handleVisited}>
        {
          visited ? "Visited" : "Not Visited Yet"
        }
      </button>

      <button onClick={()=>{handleVisitedFlag(imageSrc)}} className='btn'>Add Visited Flag</button>
    </div>
  );
};

export default Country;