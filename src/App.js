import Movies from "./pages/Movies";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Movies />
      </BrowserRouter>
    </div>
  );
}

export default App;
