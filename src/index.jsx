import { createRoot } from "react-dom/client";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
