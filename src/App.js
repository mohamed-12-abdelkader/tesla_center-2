import "./App.css";
import Header from "./components/NavBar/NavBar";
import Router from "./components/Routes/Routes";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
