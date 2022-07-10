import "./App.css";
import NewPost from "./NewPost";
import SinglePost from "./SinglePost";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/post/new" element={<NewPost />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
