import React from 'react'
import { Link } from 'react-router-dom'
import FeaturedDestinations  from './components/FeaturedDestinations';
import Hero from './components/Hero';
import { useState } from 'react';



export default function Home() {

    const [searchValue,setSearchValue] = useState("");
    
    return (
    <> 
    
    <div className="bg-[#151719]">
        <Hero searchValue={searchValue}  setSearchValue={setSearchValue} />
        <FeaturedDestinations searchValue={searchValue} />
  </div>
    </>
    
);
}
