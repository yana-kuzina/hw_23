import { useState } from "react";

import Title from "./components/Title";

import "./App.css";

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
