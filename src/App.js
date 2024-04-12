import "./App.css";
import Accordian from "./components/Accordian";
import Random_Color from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <Random_Color /> */}
      {/* <StarRating numOfStars={5} /> */}
      <ImageSlider />
    </div>
  );
}

export default App;
