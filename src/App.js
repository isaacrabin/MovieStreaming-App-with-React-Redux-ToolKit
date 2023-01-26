import  './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MoovieDetails from './components/MoovieDetails/MoovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/moovie/:id' element={<MoovieDetails />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />        
      </Router>
    </div>
  );
}

export default App;
