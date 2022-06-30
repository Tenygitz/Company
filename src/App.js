
import './App.css';
import AboutUs from './Components/AboutUs';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import LatestNews from './Components/LatestNews';
import LatestSection from './Components/LatestSection';
import TopBar from './Components/TopBar';
import UpComingProject from './Components/UpComingProject';

function App() {
  return (
    <div className="App">
     <TopBar/>
     <Banner/>
     <AboutUs/>
     <UpComingProject/>
     <LatestNews/>
     <LatestSection/>
     <Footer/>
    
    </div>
  );
}

export default App;
