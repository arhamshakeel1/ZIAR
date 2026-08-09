import React, { useState, useCallback, useEffect } from 'react';

export default function BookingCard({
  title = "unknown",
  image = "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  rating = 5.0,
  price = 999
}) {
  
  const [Nights, setNights] = useState(1);
  const [Travellers, setTravellers] = useState(1);
  const [preTotal, setPreTotal] = useState(0);
  const [Total, setTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);

  const updateDetails = useCallback(() => {
    const n = Number(Nights);
    const t = Number(Travellers);
    const p = Number(price);

    const subtotal = p * n * t;
    const calculatedTaxes = subtotal * 0.12;
    const finalTotal = subtotal + calculatedTaxes;

    setPreTotal(subtotal);
    setTaxes(calculatedTaxes);
    setTotal(finalTotal);
  }, [Nights, Travellers, price]);

  useEffect(() => {
    updateDetails();
  }, [updateDetails]);

  return (
    <div className="max-w-sm p-6 mx-auto rounded-3xl shadow-lg border-none bg-[#D4CEBD] text-[#483226] font-sans">
      
      {/* 1. Destination Summary */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={image}
          alt={title}
          className="w-14 h-14 rounded-xl object-cover shadow-sm"
        />
        <div>
          <h2 className="text-xl font-extrabold leading-tight tracking-tight">{title}</h2>
          <div className="flex items-center gap-1 mt-1 text-[#7A7568] text-sm font-semibold">
            {/* Custom SVG Star */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#FFB016]">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>
            <span>{rating}</span>
          </div>
        </div>
      </div>

      {/* 2. Visual Slider for Nights */}
      <div className="mb-6">
        <div className="flex justify-between items-end mb-3">
          <span className="text-xs uppercase tracking-widest text-[#7A7568] font-bold">Duration</span>
          <span className="text-xl font-bold text-[#483226] leading-none">
            {Nights} <span className="text-xs text-[#7A7568] font-bold">Nights</span>
          </span>
        </div>
        
        <div className="relative w-full py-1">
          <input 
            onChange={(e) => setNights(e.target.value)}
            type="range"
            min={1}
            max={14}
            value={Nights}
            className="w-full h-1 bg-[#B5AFA1] rounded-full appearance-none cursor-pointer accent-[#483226]"
          />
        </div>
        
        <div className="flex justify-between text-[10px] font-extrabold uppercase mt-2 text-[#7A7568]">
          <span>1 Night</span>
          <span>14 Nights</span>
        </div>
      </div>

      {/* 3. Segmented Control for Travelers */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs uppercase tracking-widest text-[#7A7568] font-bold">Guests</span>
          <span className="text-[10px] uppercase tracking-wider font-bold text-[#483226] bg-[#B5AFA1]/40 px-2 py-1 rounded-md">
            Adults
          </span>
        </div>
        
        <div className="flex bg-[#B5AFA1]/30 p-1 rounded-xl border-none">
          {[1, 2, 3, 4].map((num) => {
            const isSelected = Number(Travellers) === num;
            return (
              <button
                key={num}
                onClick={() => setTravellers(num.toString())}
                className={`flex-1 py-2 text-center text-sm transition-all rounded-lg font-bold ${
                  isSelected 
                    ? 'bg-[#483226] text-white shadow-sm' 
                    : 'text-[#483226]/70 hover:text-[#483226]'
                }`}
              >
                {num}{num === 4 ? '+' : ''}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Clean Price Breakdown */}
      <div className="pt-5 border-t border-[#483226]/10 mb-6 space-y-3">
        <div className="flex justify-between text-sm text-[#7A7568] font-semibold">
          <span>${price} x {Nights} nights x {Travellers} guests</span>
          <span className="text-[#483226] font-bold">${preTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-[#7A7568] font-semibold">
          <span>Taxes & fees</span>
          <span className="text-[#483226] font-bold">${taxes.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-end pt-2">
          <span className="text-xs uppercase tracking-widest text-[#7A7568] font-bold">Total</span>
          <span className="text-3xl font-extrabold text-[#483226] leading-none">${Total.toFixed(2)}</span>
        </div>
      </div>

      {/* 5. Primary CTA */}
      <button  onClick={() => alert("This feature is coming soon. You won't be charged for now.")} className="w-full py-4 rounded-full bg-[#483226] text-white text-sm font-bold tracking-wide transition-transform hover:scale-[0.98] hover:bg-[#3a271d] shadow-md flex items-center justify-center gap-2">
        Book Now
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button>
      
    </div>
  );
}