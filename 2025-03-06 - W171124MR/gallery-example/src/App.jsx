import "./App.css";
import Gallery from "./components/gallery";
import { images } from "./data/images";

function App() {
  return (
    <div style={{ width: 300 }}>
      <Gallery
        images={images.filter((image) => image.category === "B")}
        isInfinite
      />
    </div>
  );
}

export default App;
