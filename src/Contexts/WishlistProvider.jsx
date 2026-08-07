import { useState } from "react";
import WishlistContext from "./WishlistContext";

export default function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  
  const toggleWishlist = (id) => {
  setWishlist((prev) =>
    prev.includes(id)
      ? prev.filter((item) => item !== id)
      : [...prev, id]
  );
};


  return (
    <WishlistContext.Provider value={{  wishlist, toggleWishlist}}>
      {children}
    </WishlistContext.Provider>
  );

}
