import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar/NavBar";

function App() {
    return (
        <div className="App2">
           <NavBar/>
            <main>
                <Outlet />
            </main>
            <footer>
                SOY UN FOOTER
            </footer>
        </div>
    )
}
export default App;