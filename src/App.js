import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";

import { useState } from "react";

// const formatName = (user) => {
//   return `My name is ${user.firstName} ${user.lastName}`;
// };

function App() {
  const [open, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  if (open === true) {
    return <Title name="OPEN" type="normal" />;
  }
  return <button onClick={handleOpen}>Open title</button>;
}
export default App;
