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
    <div >
      <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/account" element={
        <ProtectedRoute> 
          
          <Account />
          </ProtectedRoute> } />
          
          <Route exaxt path='/' element={ <Navigate to="/home" /> }/>
      </Routes>
      </AuthContextProvider>
     
    </div>
  );
}

export default App;
