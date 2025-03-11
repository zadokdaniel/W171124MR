import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <header>
        <NavBar />
      </header>
      <main className="flex-fill">MAIN</main>
      <Footer />
    </div>
  );
}

export default App;
