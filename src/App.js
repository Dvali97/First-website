import "./App.css";
import Header from "./components/Header/Header";
import s from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Films from "./components/Films/Films";
import Multfilms from "./components/Multfilms/Multfilms";
import Serials from "./components/Serials/Serials";
import Shows from "./components/Shows/Shows";
import LoginForm from "./components/Login/LoginForm/LoginForm";
import RegistrationForm from "./components/Registration/RegistrationForm/RegistrationForm";
import Footer from "./components/Footer/Footer";
import Slideshow from "./components/Slideshow/Slideshow";

function App(props) {
  return (
    <BrowserRouter>
      <div className={s.all}>
        <Header />
        <Slideshow />
        <Routes>
          <Route
            path="/films"
            element={
              <Films
                posts={props.state.filmsPage.posts}
                postss={props.state.filmsPage.postss}
                postsss={props.state.filmsPage.postsss}
              />
            }
          />
          <Route
            path="/multfilms"
            element={
              <Multfilms
                addPost={props.addPost}
                mult={props.state.multfilms.multfilm}
              />
            }
          />
          <Route path="/serials" element={<Serials />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/registration" element={<RegistrationForm />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
