import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/HomeComponents/Home";
import Bollywood from "./Components/BollywoodComponents/Bollywood";
import Technology from "./Components/TechnologyComponents/Technology";
import Hollywood from "./Components/HollywoodComponents/Hollywood";
import Fitness from "./Components/FitnessComponets/Fitness";
import Food from "./Components/FoodComponents/Food";
import Nav from "./Components/Navigation/Nav";
import Store from "./Components/StoreComponent/Store";
import Homeh1 from "./Components/HomeComponents/Homeh1";
import Homeh2 from "./Components/HomeComponents/Homeh2";
import Homeh3 from "./Components/HomeComponents/Homeh3";
import Homet1 from "./Components/HomeComponents/Homet1";
import Homet2 from "./Components/HomeComponents/Homet2";
import Homet3 from "./Components/HomeComponents/Homet3";
import Homef from "./Components/HomeComponents/Homef";
import Bollywood1 from "./Components/BollywoodComponents/Bollywood1";
import Bollywood2 from "./Components/BollywoodComponents/Bollywood2";
import Bollywood3 from "./Components/BollywoodComponents/Bollywood3";
import Bollywood4 from "./Components/BollywoodComponents/Bollywood4";
import Bollywood5 from "./Components/BollywoodComponents/Bollywood5";
import Bollywood6 from "./Components/BollywoodComponents/Bollywood6";
import Technology1 from "./Components/TechnologyComponents/Technology1";
import Technology2 from "./Components/TechnologyComponents/Technology2";
import Technology3 from "./Components/TechnologyComponents/Technology3";
import Technology4 from "./Components/TechnologyComponents/Technology4";
import Technology5 from "./Components/TechnologyComponents/Technology5";
import Technology6 from "./Components/TechnologyComponents/Technology6";
import Hollywood1 from "./Components/HollywoodComponents/Hollywood1";
import Hollywood2 from "./Components/HollywoodComponents/Hollywood2";
import Hollywood3 from "./Components/HollywoodComponents/Hollywood3";
import Hollywood4 from "./Components/HollywoodComponents/Hollywood4";
import Hollywood5 from "./Components/HollywoodComponents/Hollywood5";
import Hollywood6 from "./Components/HollywoodComponents/Hollywood6";
import Fitness1 from "./Components/FitnessComponets/Fitness1";
import Fitness2 from "./Components/FitnessComponets/Fitness2";
import Fitness3 from "./Components/FitnessComponets/Fitness3";
import Fitness4 from "./Components/FitnessComponets/Fitness4";
import Fitness5 from "./Components/FitnessComponets/Fitness5";
import Fitness6 from "./Components/FitnessComponets/Fitness6";
import Food1 from "./Components/FoodComponents/Food1";
import Food2 from "./Components/FoodComponents/Food2";
import Food3 from "./Components/FoodComponents/Food3";
import Food4 from "./Components/FoodComponents/Food4";
import Food5 from "./Components/FoodComponents/Food5";
import Food6 from "./Components/FoodComponents/Food6";
import Footer from "./Components/FooterComponent/Footer";


function App() {
  return (
    <>
    <Store>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/Homeh1' element={<Homeh1/>}/>
          <Route path='/Homeh2' element={<Homeh2/>}/>
          <Route path='/Homeh3' element={<Homeh3/>}/>
          <Route path='/Homet1' element={<Homet1/>}/>
          <Route path='/Homet2' element={<Homet2/>}/>
          <Route path='/Homet3' element={<Homet3/>}/>
          <Route path='/Homef' element={<Homef/>}/>
        <Route path='/Bollywood' element={<Bollywood/>}/>
          <Route path='/Bollywood1' element={<Bollywood1/>}/>
          <Route path='/Bollywood2' element={<Bollywood2/>}/>
          <Route path='/Bollywood3' element={<Bollywood3/>}/>
          <Route path='/Bollywood4' element={<Bollywood4/>}/>
          <Route path='/Bollywood5' element={<Bollywood5/>}/>
          <Route path='/Bollywood6' element={<Bollywood6/>}/>
        <Route path='/Technology' element={<Technology/>}/>
          <Route path='/Technology1' element={<Technology1/>}/>
          <Route path='/Technology2' element={<Technology2/>}/>
          <Route path='/Technology3' element={<Technology3/>}/>
          <Route path='/Technology4' element={<Technology4/>}/>
          <Route path='/Technology5' element={<Technology5/>}/>
          <Route path='/Technology6' element={<Technology6/>}/>
        <Route path='/Hollywood' element={<Hollywood/>}/>
          <Route path='/Hollywood1' element={<Hollywood1/>}/>
          <Route path='/Hollywood2' element={<Hollywood2/>}/>
          <Route path='/Hollywood3' element={<Hollywood3/>}/>
          <Route path='/Hollywood4' element={<Hollywood4/>}/>
          <Route path='/Hollywood5' element={<Hollywood5/>}/>
          <Route path='/Hollywood6' element={<Hollywood6/>}/>
        <Route path='/Fitness' element={<Fitness/>}/>
          <Route path='/Fitness1' element={<Fitness1/>}/>
          <Route path='/Fitness2' element={<Fitness2/>}/>
          <Route path='/Fitness3' element={<Fitness3/>}/>
          <Route path='/Fitness4' element={<Fitness4/>}/>
          <Route path='/Fitness5' element={<Fitness5/>}/>
          <Route path='/Fitness6' element={<Fitness6/>}/>
        <Route path='/Food' element={<Food/>}/>
          <Route path='/Food1' element={<Food1/>}/>
          <Route path='/Food2' element={<Food2/>}/>
          <Route path='/Food3' element={<Food3/>}/>
          <Route path='/Food4' element={<Food4/>}/>
          <Route path='/Food5' element={<Food5/>}/>
          <Route path='/Food6' element={<Food6/>}/>
      </Routes>
      </BrowserRouter>
    </Store>
    <Footer/>
    </>
  );
}

export default App;
