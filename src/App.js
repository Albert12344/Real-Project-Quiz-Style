import Quiz from "./Quiz"
import Login from "./Login";
import {Link, Route, Routes } from "react-router-dom"


function App() {
  return (
    <div>
      <Link to="/quiz">Quiz</Link>
      <Link to="/login">Login</Link>
      <Routes>
            <Route path="/quiz" element={ <Quiz/>} />
            <Route path="/login" element={ <Login/>} />
      </Routes>
    </div>
  );
}

export default App;
