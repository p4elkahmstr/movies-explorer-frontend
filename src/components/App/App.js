import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
import { useEffect, useState } from "react";
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
import { useResize } from "../../hooks/useResize";
import {
  ADD_MOVIES_COUNT,
  INITIAL_MOVIES_COUNT,
  INITIAL_MOVIES_COUNT_FOR_MOBILE,
} from "../../utils/constants";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(
    localStorage?.getItem("token") ? true : false
  );
  const [isLoading, setIsLoading] = useState(false);
  const [renderedMovies, setRenderedMovies] = useState();
  const [addMovies, setAddMovies] = useState(ADD_MOVIES_COUNT);
  const [query, setQuery] = useState("");
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isShortSavedMoves, setIsShortSavedMovies] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [message, setMessage] = useState("");
  const [didUserSeach, setDidUserSearch] = useState(false);

  const { screen } = useResize();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (screen === "mobile") {
      setRenderedMovies(INITIAL_MOVIES_COUNT_FOR_MOBILE);
      setAddMovies(ADD_MOVIES_COUNT);
    } else if (screen === "tablet") {
      setRenderedMovies(INITIAL_MOVIES_COUNT);
      setAddMovies(ADD_MOVIES_COUNT);
    } else {
      setRenderedMovies(INITIAL_MOVIES_COUNT);
      setAddMovies(ADD_MOVIES_COUNT);
    }
  }, [screen]);

  useEffect(() => {
    if (loggedIn) {
      if (localStorage.checkbox) {
        setIsShortMovies(JSON.parse(localStorage.checkbox));
      }
      getUserMovies()
        .then((userMovies) => {
          setSavedMovies(userMovies);
        })
        .catch((e) => console.log(e));
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      getUserInfo()
        .then((userInfo) => setCurrentUser(userInfo))
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  useEffect(() => {
    const tokenCheck = () => {
      if (!localStorage.getItem("token")) {
        handleLogout();
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
        });
    };
    tokenCheck();
  }, []);

  useEffect(() => {
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  }, [savedMovies]);

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
    if (screen === "mobile") {
      setRenderedMovies(renderedMovies + addMovies);
    } else if (screen === "tablet") {
      setRenderedMovies(renderedMovies + addMovies);
    } else {
      setRenderedMovies(renderedMovies + addMovies);
    }
  }

  function handleRegister({ name, email, password }) {
    setIsLoading(true);
    register({ name, email, password })
      .then((userData) => {
        if (userData) {
          handleLogin({ email, password });
          navigate("/movies", { replace: true });
        }
      })
      .catch((e) => {
        if (e === 409) {
          setMessage("Такой пользователь уже существует");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
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
        if (e.status === 401) {
          setMessage(
            "Некорректные данные, пожалуйста, проверьте email и пароль"
          );
        }
        setMessage("Что-то пошло не так, попробуйте зайти позднее");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogout() {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
    setMovies([]);
    setSavedMovies([]);
    setQuery("");
    navigate("/");
  }

  function handleToggleCheck(checked) {
    if (location.pathname === "/movies") {
      setIsShortMovies(checked);
      localStorage.setItem("checkbox", checked);
      handleSearch(query);
    } else {
      setIsShortSavedMovies(checked);
      handleSearchWithinSaved(query);
    }
  }

  async function handleSearch(searchWord) {
    if (!query && !searchWord) return;
    if (location.pathname === "/movies") {
      localStorage.setItem("query", searchWord);
    }
    setQuery(searchWord);
    if (!localStorage.initialMovies) {
      setIsLoading(true);
      try {
        const movies = await getInitialMovies();
        localStorage.setItem("initialMovies", JSON.stringify(movies));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    const moviesToMap = mapToArray(
      JSON.parse(localStorage.initialMovies).filter(
        (movie) =>
          movie.nameEN.toLowerCase().includes(searchWord.toLowerCase()) ||
          movie.nameRU.toLowerCase().includes(searchWord.toLowerCase())
      )
    );
    setMovies(moviesToMap);
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

  function handleSearchWithinSaved(searchWord) {
    const foundMoviesWithinSaved = savedMovies.filter(
      (movie) =>
        movie.nameEN.toLowerCase().includes(searchWord.toLowerCase()) ||
        movie.nameRU.toLowerCase().includes(searchWord.toLowerCase())
    );
    setSavedMovies(foundMoviesWithinSaved);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        {window.location.pathname !== "/signup" &&
          window.location.pathname !== "/signin" && <Header auth={loggedIn} />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/signin"
            element={
              loggedIn ? (
                <Navigate to="/" />
              ) : (
                <Login
                  handleLogin={handleLogin}
                  onLoading={isLoading}
                  errorMessage={message}
                />
              )
            }
          />
          <Route
            path="/signup"
            element={
              loggedIn ? (
                <Navigate to="/" />
              ) : (
                <Register
                  handleRegister={handleRegister}
                  onLoading={isLoading}
                  errorMessage={message}
                />
              )
            }
          />

          <Route path="/" element={<ProtectedRoute loggedIn={loggedIn} />}>
            <Route
              path="/movies"
              element={
                <Movies
                  value={query}
                  onChange={setQuery}
                  onSearch={handleSearch}
                  isChecked={isShortMovies}
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
                  isChecked={isShortSavedMoves}
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
