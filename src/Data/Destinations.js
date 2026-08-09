import azadKashmir from "../assets/azad-kashmir.webp";
import fairyMeadows from "../assets/fairy-meadows.webp";
import hunzaValley from "../assets/hunza-valley.webp";
import skardu from "../assets/skardu.webp";

const Destinations = [
  {
    id: 1,
    title: "Azad kashmir",
    location: "Pakistan",
    rating: 4.9,
    temperature: "24°C",
    elevation:"1709m",
    duration:"5-6 days",
    image: azadKashmir,
    featured: true,
    category: "Mountain",
    price: "120",
    description:"Azad Jammu Kashmir"
    
  },

  {
    id: 2,
    title: "Hunza Valley",
    location: "Pakistan",
    rating: 4.7,
    temperature: "20°C",
    elevation:"1892m",
    duration:"6-7 days",
    image: hunzaValley,
    featured: true,
    category: "Valley",
    price: "145",
    description:"Gilgit Baltistan"
    
  },

  {
   id: 3,
    title: "Skardu",
    location: "Pakistan",
    rating: 4.6,
    temperature: "17°C",
    elevation:"2311m",
    duration:"4-5 days",
    image: skardu,
    featured: true,
    category: "Desert",
    description:"Gilgit Baltistan",
    price: "170"
  },
  {
    id: 4,
    title: "Feary Meadows",
    location: "Pakistan",
    rating: 4.3,
    temperature: "14°C",
    elevation:"3300m",
    duration:"2-3 days",
    image: fairyMeadows,
    featured: true,
    category: "Alpine",
    price: "90",
    description:"Nanga Parbat base"
  },
  
];

export default Destinations;