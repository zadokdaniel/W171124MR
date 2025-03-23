import "./App.css";

import { Route, Routes } from "react-router";

import Footer from "./components/footer";
import NavBar from "./components/navbar";

import Home from "./pages/home";
import About from "./pages/about";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import SignUpBiz from "./pages/signUpBiz";
import SignOut from "./pages/signOut";
import MyCards from "./pages/myCards";

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
          <Route path="/my-cards" element={<MyCards />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-up-biz" element={<SignUpBiz />} />
          <Route path="/sign-out" element={<SignOut />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
