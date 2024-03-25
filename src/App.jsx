import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  )
}

export default App
