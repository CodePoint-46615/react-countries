import { Suspense } from 'react';
import './App.css'
import Countries from './Components/Countries/Countries'

const countriesPromises = fetch('https://openapi.programming-hero.com/api/all').then((res) => res.json()); 

function App() {

  return (
    <>
      <Suspense fallback={<p>Countries are loading...</p>}>
        <Countries countriesPromises={countriesPromises}></Countries>
      </Suspense>
    </>
  )
}

export default App
