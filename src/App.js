import logo from './images/Tezpur-University.png';
import './App.css';
import { Header } from "./contents/Header";
import { Footer } from "./contents/Footer";
import { Home } from "./components/Home";
import { Notification } from "./components/Notification";
import { Subjects } from "./components/Subjects";
import { Material } from "./components/Material";
import { SelectedSubject } from "./components/SelectedSubject";
import { SelectedMaterial } from './components/SelectedMaterial';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <> 
    <Router>
      <Header logo={logo} title="SCHOOL OF ENGINEERING" /> 

      <Switch>
          <Route exact path="/">
              <Home />
         </Route>
          <Route exact path="/Notification">
              <Notification />
         </Route>
          <Route exact path="/Subjects">
              <Subjects />
         </Route>
          <Route exact path="/Material">
              <Material />
         </Route>
          <Route exact path="/SelectedSubject">
              <SelectedSubject />
         </Route>
          <Route exact path="/SelectedMaterial">
              <SelectedMaterial />
         </Route>
      </Switch>

      <Footer />
    </Router>
    </>
  );
}

export default App;
