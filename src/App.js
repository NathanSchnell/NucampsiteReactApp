import Header from './components/Header';
import Footer from './components/Footer';
import CampSitesList from './features/campsites/CampSitesList';
import './App.css';

function App() {
    return (
        <div className='App'>
          <Header />
          <CampSitesList />
          <Footer />
        </div>
    );
}

export default App;