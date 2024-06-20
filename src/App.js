import logo from './logo.svg';
import { Header,Footer,Navbar,Quote,ScrollBig,Service,ScrollSmall,WhyUs,Works } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Quote />
      <Service />
      <ScrollBig />
      <Works />
      <WhyUs />
      <ScrollSmall />
      <Footer />

    </div>
  );
}

export default App;
