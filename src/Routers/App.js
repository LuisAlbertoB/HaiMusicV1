import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/HomePage";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} > </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
