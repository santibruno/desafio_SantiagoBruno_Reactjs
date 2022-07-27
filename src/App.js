import { Outlet } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import "./App.css";
import "./bootstrap.min.css";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <CartContextProvider >
      <div className="App">
        <NavBar />
        <main>
          <Outlet />
        </main>
        <footer>SOY UN FOOTER</footer>
      </div>
    </CartContextProvider>
  );
}
export default App;
