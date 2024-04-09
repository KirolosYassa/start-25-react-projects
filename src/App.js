import "./App.css";
import Accordian from "./components/Accordian";
import Random_Color from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      <Accordian />
      <Random_Color />
      <StarRating numOfStars={5} />
    </div>
  );
}

export default App;
