import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import Itemlistcontainer from "./components/Itemlistcontainer";
import Navbar from "./components/Navbar";
import TeamContainer from "./components/TeamContainer";
import { HeroProvider } from "./contexts/HeroContext";
import { UserProvider } from "./contexts/UserContext";



function App() {
  return (
    <UserProvider>
      <HeroProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/item/:id">
              <ItemDetail />
            </Route>
            <Route path="/team">
              <TeamContainer />
            </Route>
            <Route path="/" exact>
              <Itemlistcontainer />
            </Route>
          </Switch>
        </BrowserRouter>
      </HeroProvider>
    </UserProvider>

  );
}

export default App;
