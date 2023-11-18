import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.css";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import NotFoundError from "../NotFoundError/NotFoundError";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useCallback, useEffect, useState } from "react";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {
  addMovie,
  deleteMovie,
  getUserInfo,
  getUserMovies,
  login,
  register,
  setUserInfo,
} from "../../utils/mainApi";
import { getInitialMovies } from "../../utils/moviesApi";
import { mapToArray } from "../../utils/mapToArray";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(
    localStorage?.getItem("token") ? true : false
  );
  const [isLoading, setIsLoading] = useState(false);
  const [renderedMovies, setRenderedMovies] = useState(7);
  const [query, setQuery] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [message, setMessage] = useState("");
  const [didUserSeach, setDidUserSearch] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      if (localStorage.checkbox) {
        setIsChecked(JSON.parse(localStorage.checkbox));
      }
      if (!localStorage.initialMovies) {
        getInitialMovies()
          .then((movies) => {
            localStorage.setItem("initialMovies", JSON.stringify(movies));
          })
          .catch((e) => console.log(e));
      }
      if (localStorage.query) {
        setQuery(localStorage.query);
        const moviesToShow = mapToArray(
          JSON.parse(localStorage.initialMovies).filter(
            (movie) =>
              movie.nameEN
                .toLowerCase()
                .includes(localStorage.query.toLowerCase()) ||
              movie.nameRU
                .toLowerCase()
                .includes(localStorage.query.toLowerCase())
          )
        );
        showByCheckboxState(moviesToShow);
      }
      getUserMovies()
        .then((userMovies) => {
          showByCheckboxStateInSaved(userMovies);
          localStorage.setItem("savedMovies", JSON.stringify(userMovies));
        })
        .catch((e) => console.log(e));
    }
  }, [loggedIn, isChecked]);

  function handleUpdateUserInfo(data) {
    setIsLoading(true);
    setUserInfo(data)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        setMessage("Данные успешно обновлены");
      })
      .catch((err) => {
        console.log(err);
        setMessage(`Что-то пошло не так: ${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleShowMoreMovies() {
    if (!isMobile) {
      setRenderedMovies(renderedMovies + 5);
    } else {
      setRenderedMovies(renderedMovies + 7);
    }
  }

  function handleRegister({ name, email, password }) {
    setIsLoading(true);
    try {
      const userData = register({ name, email, password });
      console.log(userData);
      if (userData) {
        handleLogin({ email, password });
        navigate("/movies", { replace: true });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  function handleLogin({ email, password }) {
    setIsLoading(true);
    login({ email, password })
      .then((token) => {
        setLoggedIn(true);
        localStorage.setItem("token", token.token);
        navigate("/movies");
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (loggedIn) {
      getUserInfo()
        .then((userInfo) => setCurrentUser(userInfo))
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  function handleLogout() {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
    setMovies([]);
    setSavedMovies([]);
    setQuery("");
    navigate("/");
  }

  function handleToggleCheck() {
    if (!isChecked) {
      setIsChecked(true);
      localStorage.setItem("checkbox", JSON.stringify(true));
    } else {
      setIsChecked(false);
      localStorage.setItem("checkbox", JSON.stringify(false));
    }
  }

  const showByCheckboxState = (moviesArray) => {
    if (!isChecked) {
      setMovies(moviesArray);
    } else {
      setMovies(moviesArray.filter((movie) => movie.duration < 41));
    }
  };

  const showByCheckboxStateInSaved = (moviesArray) => {
    if (!isChecked) {
      setSavedMovies(moviesArray);
    } else {
      setSavedMovies(moviesArray.filter((movie) => movie.duration < 41));
    }
  };

  function handleSearch(e, searchWord) {
    e.preventDefault();
    if (!query) return;
    setIsLoading(true);
    localStorage.setItem("query", query);
    setQuery(searchWord);
    const moviesToMap = mapToArray(
      JSON.parse(localStorage.initialMovies).filter(
        (movie) =>
          movie.nameEN.toLowerCase().includes(query.toLowerCase()) ||
          movie.nameRU.toLowerCase().includes(query.toLowerCase())
      )
    );
    showByCheckboxState(moviesToMap);
    setTimeout(setIsLoading(false), 1000);
    setDidUserSearch(true);
  }

  function handleAddToUserList(card) {
    addMovie(card)
      .then((card) => {
        const updateSavedMovies = [...savedMovies, card];
        setSavedMovies(updateSavedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDelete(movie) {
    const savedMovie = savedMovies.find(
      (card) => card.movieId === movie.id || card.movieId === movie.movieId
    );
    deleteMovie(savedMovie._id)
      .then(() => {
        const updateSavedMovie = savedMovies.filter(
          (card) => card._id !== savedMovie._id
        );
        setSavedMovies(updateSavedMovie);
      })
      .catch((err) => console.log(err));
  }

  function handleSearchWithinSaved(e) {
    e.preventDefault();
    if (!query) return;
    const foundMoviesWithinSaved = savedMovies.filter(
      (movie) =>
        movie.nameEN.toLowerCase().includes(query.toLowerCase()) ||
        movie.nameRU.toLowerCase().includes(query.toLowerCase())
    );
    showByCheckboxStateInSaved(foundMoviesWithinSaved);
    setQuery("");
  }

  useEffect(() => {
    const tokenCheck = () => {
      if (!localStorage.getItem("token")) {
        navigate("/");
        return;
      }
      getUserInfo()
        .then((data) => {
          if (data) {
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoggedIn(false);
        });
    };
    tokenCheck();
  }, []);

  useEffect(() => {
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  }, [savedMovies]);

  console.log(savedMovies);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        {window.location.pathname !== "/signup" &&
          window.location.pathname !== "/signin" && <Header auth={loggedIn} />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/signin"
            element={<Login handleLogin={handleLogin} onLoading={isLoading} />}
          />
          <Route
            path="/signup"
            element={<Register handleRegister={handleRegister} />}
          />

          <Route path="/" element={<ProtectedRoute loggedIn={loggedIn} />}>
            <Route
              path="/movies"
              element={
                <Movies
                  value={query}
                  onChange={setQuery}
                  onSearch={handleSearch}
                  isChecked={isChecked}
                  onAddToUserList={handleAddToUserList}
                  onCheck={handleToggleCheck}
                  renderedMovies={renderedMovies}
                  showMoreMovies={handleShowMoreMovies}
                  cards={movies}
                  onDelete={handleDelete}
                  didUserSearch={didUserSeach}
                  savedMovies={savedMovies}
                  loading={isLoading}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <SavedMovies
                  cards={savedMovies}
                  value={query}
                  onChange={setQuery}
                  onSearch={handleSearchWithinSaved}
                  onDelete={handleDelete}
                  onCheck={handleToggleCheck}
                  savedMovies={savedMovies}
                  loading={isLoading}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  handleLogout={handleLogout}
                  handleShowMoreMovies={handleShowMoreMovies}
                  onUpdateUserInfo={handleUpdateUserInfo}
                  message={message}
                />
              }
            />
          </Route>

          <Route path="/*" element={<NotFoundError />} />
        </Routes>
        {window.location.pathname !== "/signup" &&
          window.location.pathname !== "/signin" && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
