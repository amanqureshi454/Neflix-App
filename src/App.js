import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import Main from './Pages/Main';
import Hero from './Pages/Hero';
import './App.css';
import SingleMovie from './Pages/SingleMovie';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Whishlist from './Pages/Whishlist';
import Footer from './Components/Footer';

function App() {

  return (
    <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/whishlist" element={<Whishlist />} />

          {/* /// THIS IS A ROUTE THAT ALLOW US TO PUT THE DYNAMIC URL FOR  FETCHING SINGLE MOVIES */}
          <Route path="/:id" element={<SingleMovie />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
