import './App.css';
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/* Star rating component */}
       <StarRating numberOfStars={10}/>
    </div>
  );
}

export default App;
