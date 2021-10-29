import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { SubstrateContextProvider, useSubstrate } from "./substrate-lib";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TryChain from "./pages/TryChain";

function Main() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/TryChain" component={TryChain} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default function App() {
  return (
    <SubstrateContextProvider>
      <Main />
    </SubstrateContextProvider>
  );
}
