import Header from "./components/Header";
import { Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuth } from "./context/AuthContext";

function App() {

  const auth = useAuth();
  console.log(useAuth()?.isLoggedIn);

  return (
    <main>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        { auth?.isLoggedIn && auth.user && (<Route path="/chat" element={<Chat />}/>)}
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </main>
  );

}

export default App
