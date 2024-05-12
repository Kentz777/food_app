import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Container from "./components/Container/Container";
import InnerContainer from "./components/Container/InnerContainer";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import "./App.css";
import { useState } from "react";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");
  return (
    <div className="App">
      <Navbar />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
