import "./App.css";
import Footer from "./Components/NavNfooter/Footer";
import Navbar from "./Components/NavNfooter/Navbar";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div className="App font-serif">
      <nav>
        <Navbar />
      </nav>
      <main>
        <LandingPage />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
