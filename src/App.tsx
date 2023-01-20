import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/auth/authentication.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";

function App() {
  return (
    <div className="App ">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/shop/*" element={<Shop />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
