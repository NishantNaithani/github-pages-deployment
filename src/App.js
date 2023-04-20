import { Navigate, Route, Routes  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./Context/AuthContext";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <>
        <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/github-pages-deployment/home" element={<Home />} />
        <Route path="/github-pages-deployment/login" element={<Login />} />
        <Route path="/github-pages-deployment/signUp" element={<SignUp />} />
        <Route path="/github-pages-deployment/account" element={
        <ProtectedRoute> 
          
          <Account />
          </ProtectedRoute> } />
          
        <Route exaxt path='/' element={ <Navigate to="/github-pages-deployment/home" /> }/>
      </Routes>
      </AuthContextProvider>
     
    </>
  );
}

export default App;
