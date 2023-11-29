import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setX, setY, addBook } from "./action";
import axios from "axios";
import Accueil from "./Pages/Accueil";
import FAQ from "./Pages/FAQ";
import Login from "./Pages/Login";
import AdminDashboad from "./Pages/admin/AdminDashboad";
import Livre from "./Pages/admin/Livre";

const App = () => {
  const dispatch = useDispatch();
  const getBooks = async () => {
    try {
      let allBooks = await axios.get(`${process.env.REACT_APP_API_URL}/books/`);
      dispatch(addBook(allBooks?.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (window.innerWidth > 767) {
      dispatch(setX());
    } else {
      dispatch(setY());
    }
    getBooks();
    document.title = "WORLD CONQUEST LIBRARY";
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/home/faq" element={<FAQ/>}></Route>
      
        <Route path="/dashboard" element={<AdminDashboad/>}></Route>
        <Route path="/home/livre/:id" element={<Livre/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
