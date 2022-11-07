import "./App.scss";
import Header from "./components/Header";
import Product from "./components/Product";
function App() {
  return (
    <div className="container">
      <Header />
      <Product id={1} />
    </div>
  );
}

export default App;
