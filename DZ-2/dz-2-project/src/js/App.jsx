import '../styles/App.css'
import {CreateElement} from "./components/createElement.jsx";
import {CreateList} from "./components/ListItems.jsx";

function App() {
  const array = [
    {
      id: 1,
      title : "компонет1",
      done: "yes"
    },
    {
      id: 2,
      title : "компонет2",
      done: "no"
    },
    {
      id: 3,
      title : "компонет3",
      done: "yes"
    },
  ]

  return (

      <CreateList list={array} />
  )
}

export default App
