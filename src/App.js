import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import AddTodos from "./components/AddTodos";
import DisplayTodos from "./components/DisplayTodos";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Container className="py-3">
        <AddTodos />
        <DisplayTodos />
      </Container>
    </Provider>
  );
}

export default App;
