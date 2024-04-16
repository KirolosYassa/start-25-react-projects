import "./App.css";
import Accordian from "./components/Accordian";
import Random_Color from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import TestComponent from "./components/test-component";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <Random_Color /> */}
      {/* <StarRating numOfStars={5} /> */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"5"}
        page={"1"}
      />
      {/* <TestComponent /> */}
    </div>
  );
}

export default App;
