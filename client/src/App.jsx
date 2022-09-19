import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import Transactions from "./components/Transactions";
import Footer from "./components/Footer";


const App = () => (
  <div className="min-h-screen ">
    <div className="gradient-bg-welcome bg-center bg-hero-pattern items-center justify-center">

      <Navbar />
      <Welcome />
    </div>

    <div>
      <Services />
    </div>
    <div className="gradient-bg-transactions bg-no-repeat bg-center bg-hero-grob items-center justify-center">
      <Transactions />
    </div>
    <Footer />

  </div>





);



export default App;