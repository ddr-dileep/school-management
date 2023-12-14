
import { AllRoutes } from "../AllRoutes";
import { Footer, Header } from "../components";
import "./styles.scss";

function App() {
  return (
    <div className="main-app">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
