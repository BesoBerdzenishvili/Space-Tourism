import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header buttons={["Home", "Destination", "Crew", "Technology"]} />
      <Footer />
    </div>
  );
}

export default App;
