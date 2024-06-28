import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { ListContextProvider } from "./context/listContext";
function App() {
  return (
    <ListContextProvider>
      <Header />
      <ToDoList />
    </ListContextProvider>
  );
}

export default App;
