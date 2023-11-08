import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import NotFoundError from '../NotFoundError/NotFoundError';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Main />
              <Navigation />
              <Footer />
            </>
          } />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/profile" element={
            <>
              <Header />
              <Profile />
              <Navigation />
            </>
          } />
          <Route path="/notfounderror" element={<NotFoundError />} />
          <Route path="/movies" element={
            <>
              <Header />
              <Movies />
              <Navigation />
              <Footer />
            </>
          } />
          <Route path="/saved-movies" element={
            <>
              <Header />
              <SavedMovies />
              <Navigation />
              <Footer />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
