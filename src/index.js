import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Brand from "./pages/Brand";

import Ownership from "./pages/Ownership";
import Company from "./pages/Company";
import Lifestyle from "./pages/Lifestyle";
import NoPage from "./pages/Nopage";
import ContactUsPage from "./pages/Contactus";
import Footer from "./pages/../Component/footer/footer";
import Signup from "./pages/SignUp";
import Login from "./Component/Login/Login";
import Dashboard from "./Component/model/Dashboard/dashboard";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>     
          <Route index element={<Home />} />
          <Route path="brand" element={<Brand />} />
          <Route path="contactus" element={<ContactUsPage />} />
          <Route path="ownership" element={<Ownership />} />
          <Route path="Lifestyle" element={<Lifestyle/>} />
           <Route path="Signup" element={<Signup/>} /> 
           <Route path="Login" element={<Login/>} /> 
           <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);