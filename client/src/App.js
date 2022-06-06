import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailList from "./pages/EmailList";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/get/users/email/list" element={<EmailList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
