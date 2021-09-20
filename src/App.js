import Itemlistcontainer from "./components/Itemlistcontainer";
import Navbar from "./components/Navbar";
import { HeroProvider } from "./contexts/HeroContext";
import { UserProvider } from "./contexts/UserContext";



function App() {
  return (
    <>
      <UserProvider>
        <HeroProvider>
          <Navbar />
          <Itemlistcontainer />
        </HeroProvider>
      </UserProvider>
    </>

  );
}

export default App;
