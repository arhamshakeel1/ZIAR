import React from 'react';
import Destinations from '../../../Data/Destinations';
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';

export default function BookingCard({

  title="unknown",
  image="https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  rating=5.0
}) {

  const [Nights,setNights] = useState(1)
  const [Travellers,setTravellers] = useState(1)
  const [preTotal,setPreTotal] = useState(999)
  const [Total,setTotal] = useState(999)
  const [Taxes,setTaxes] = useState(999)

  const updateDetails = useCallback(()=>{

    setTaxes(0.16*Nights)
    setPreTotal((20*Nights)+(10+Travellers))
    setTotal((20*Nights)+(10+Travellers)+Taxes)


  },[Nights,Travellers])

  useEffect(()=>{
    updateDetails()
  },[Nights,Travellers])



return (
  <div className= "text-center">

    {/* 1. Destination Summary */}
    <div>
      <img
        //src={image}
        alt={title}
      />

      <div>
        <h2>{title}</h2>
        <p>⭐ {rating}</p>
      </div>
    </div>


    {/* 2. Nights */}
    <div>
      <div>
        <span>Duration </span>
        <span>
          {Nights}  <span> Nights</span>
        </span>
      </div>

      <div>
        <input onChange={(e)=>setNights(e.target.value)}
          type="range"
          min={1}
          max={14}
        />
      </div>

      <div>
        <span>1 Night </span>
        <span>7 Nights</span>
      </div>
    </div>


    {/* 3. Travelers */}
    <div>
      <div>
        <span>Travelers</span>
        <span>Adults</span>
      </div>

      <div>
        <button onClick={()=>setTravellers('1')} >1</button>
        <br/>
        <button onClick={()=>setTravellers('2')} >2</button>
        <br/>
        <button onClick={()=>setTravellers('3')} >3</button>
        <br/>
        <button onClick={()=>setTravellers('4')}>4+</button>
      </div>
    </div>


    {/* 4. Experience */}
    <div>
      <p>Experience</p>

      <div>
        <div>
          <p>Premium Trek</p>
          <p>Meals & gear included</p>
        </div>

        <p>
          $85<span>/nt</span>
        </p>
      </div>
    </div>


    {/* 5. Price Breakdown */}
    <div>
      <div>
        <span>$85 x 3 nights x 2 guests</span>
        <span>{preTotal}</span>
      </div>

      <div>
        <span>Taxes & fees</span>
        <span>{Taxes}</span>
      </div>

      <div>
        <span>Total</span>
        <span>{Total}</span>
      </div>
    </div>


    {/* 6. Primary CTA */}
    <button>
      Reserve Now
    </button>

  </div>
);
}