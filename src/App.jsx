import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { SubstrateContextProvider, useSubstrate } from "./substrate-lib";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TryChain from "./pages/TryChain";
import ChainFeed from "./pages/ChainFeed";

function Main() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tryChain" component={TryChain} />
        <Route path="/chainFeed" component={ChainFeed} />
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
