import "./App.css";
import { Grid, GridItem, Heading } from '@chakra-ui/react'
import { userNames } from "./components/userList";
import { Center, Square, Circle, Button } from '@chakra-ui/react'
import { useState } from "react";
// Components
import ProgressBar from "./components/ProgressBar";
import RandomPickerDrum from "./components/RandomPickerDrum";
function App() {
  // States
  const [users, setUsers] = useState(userNames);
  const [winners, setWinner] = useState([]);

  const [uiProps, setUiProps] = useState({
    buttonDisabled: false,
    displayProgressBarr: false,
  });

  const [error, setError] = useState({
    processTime: 3000,
    loading: false,
  });
  // Utility functions
  let randomName;
  function getRandomName() {
    return (randomName = users[Math.floor(Math.random() * userNames.length)]);
  }
  // Handlers
  const handleGetRandomName = () => {
    setUiProps({
      buttonDisabled: true,
      displayProgressBarr: true,
    });
    setTimeout(() => {
      getRandomName();
      console.log(randomName);

      if (typeof randomName === "undefined") {
        // handle error
        setError({ processTime: 1000, loading: true });
        handleGetRandomName();
      } else {
        // Add random name to winner list
        setWinner([...winners, randomName]);
        // Update and Remove the random name form users
        const updateNameList = users.filter((user) => user !== randomName);

        setUsers(updateNameList);

        setUiProps({
          buttonDisabled: false,
          displayProgressBarr: false,
        });
        setError({
          processTime: 3000,
          loading: false,
        });
      }
    }, error.processTime);
    // console.log(getRandomName());
  };

  return (
    
 <>
 <RandomPickerDrum/>
 </>
  );
}

export default App;