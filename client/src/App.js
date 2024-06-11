import React, { useContext, useEffect } from 'react';
import { auth } from './firebase';
import axios from 'axios';
import Navbar from './components/Navbar';
import SuccessStories from './components/SuccessStories';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import AddRecipe from './pages/AddRecipe';
import RecipeList from './pages/RecipeList';
import ViewRecipe from './pages/ViewRecipe';
import PurchaseCoins from './pages/PurchaseCoins';
import DevInfo from './components/DevInfo';
import LoginPage from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import { StoreContext } from './context/StoreContest';

function App() {

  const { setUser } = useContext(StoreContext)

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        localStorage.setItem('authToken', token);
        const response = await axios.post(`/api/user/login`, { token });
        setUser(response.data);
      } else {
        setUser(null);
      }
    });
  }, [setUser]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route element={<PrivateRoute />}>
          <Route path="/add-recipes" element={<AddRecipe />} />
          <Route path="/recipes/:id" element={<ViewRecipe />} />
          <Route path="/purchase-coins" element={<PurchaseCoins />} />
        </Route>
      </Routes>
      <SuccessStories />
      <DevInfo />
      <Footer />
    </div>
  );
}

export default App;