import Header from "./Components/Header/Header";
import Routes from "./Components/Routes/Routes";
import { getArticleData } from "./utilities  /apiCalls";
function App() {
  // console.log(getArticleData());
  return (
    <main className="App">
      <Header />
      <Routes />
    </main>
  );
}

export default App;
