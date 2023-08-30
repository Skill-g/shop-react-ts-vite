import { BrowserRouter } from "react-router-dom";
import './style/App.css';
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import Router from "./app/router.tsx";
function App() {

  return (
    <Provider store={ store }>
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
    </Provider>
  )
}

export default App
