import "./App.css";
import Header from "./components/NavBar/NavBar";
import Router from "./components/Routes/Routes";
import Footer from "./components/footer/Footer";
import { useUserContext } from "./context/Context";
function App() {
  const { handleAppClick } = useUserContext();
  return (
    <>
      <div className="App" onClick={handleAppClick}>
        <Header />
        <Router />
        <Footer />
      </div>
    </>
  );
}

export default App;
