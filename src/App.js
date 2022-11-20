import About from './components/About';
import AllInOne from './components/AllInOne';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Pricing from './components/Pricing';
import Support from './components/Support'
import Gates from './components/Gates'
import Fence from './components/Fence'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Gates />
      <Fence />
      {/* <AllInOne /> */}
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
