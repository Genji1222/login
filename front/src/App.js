import "./App.css";
import SignIn from "./login/signIn.js";
import SignUp from "./login/signUp.js";
import MarkView from "./table/view.js";
import Dashboard from "./table/dashboard.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/login/signUp" element={<SignUp />} />
          <Route path="/table/view" element={<MarkView />} />
          <Route path="/table/view/dashbord" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
