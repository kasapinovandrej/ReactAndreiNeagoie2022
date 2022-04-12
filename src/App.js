import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Auth from "./routes/auth/Auth";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<h1>Shop</h1>} />
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;
