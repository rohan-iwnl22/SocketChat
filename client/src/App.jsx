import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ChatPage from "./Pages/ChatPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={user ? <ChatPage /> : <Register />} />
          <Route path="/login" element={user ? <ChatPage /> : <Login />} />
          <Route
            path="/register"
            element={user ? <ChatPage /> : <Register />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
