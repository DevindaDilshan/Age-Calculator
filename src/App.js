import './App.css';
import AgeCalculator from './components/AgeCalculator'
import TopNav from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
      <div
        style={{
          minHeight: "500px"
        }}>
        <TopNav />
        <AgeCalculator />
      </div>
      <Footer />
    </div>
  );
}

export default App;
