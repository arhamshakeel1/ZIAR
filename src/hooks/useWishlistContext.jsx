import { useContext } from "react";
import WishlistContext from "../Contexts/WishlistContext";

function useWishlistContext() {
  return useContext(WishlistContext);
}

export default useWishlistContext;