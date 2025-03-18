import "./App.css";

import { Route, Routes } from "react-router";

import Footer from "./components/footer";
import NavBar from "./components/navbar";

import Home from "./pages/home";
import About from "./pages/about";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import SignUpBiz from "./pages/signUpBiz";

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <header>
        <NavBar />
      </header>
      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-up-biz" element={<SignUpBiz />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
