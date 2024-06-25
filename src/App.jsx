import "./App.css";
import StarRating from "./Components/Ratingapp";
import ImageSlider from "./Components/image-slider";


function App() {
  return <>
  {/* Star rating components */}

  {/* <StarRating noOfStars={10}/> */}

  <ImageSlider url={'https://picsum.photos/v2/list'} page={1} limit={10}/>
  </>;
}

export default App;
