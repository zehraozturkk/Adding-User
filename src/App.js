import React, {useState} from 'react';

import UserInput from './components/Users/UserInput';
import UserList from './components/Users/UserList';



function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) =>{
    setUsersList((presUsersList) => {
      return [...presUsersList, { name: uName, age: uAge, id: Math.random().toString()}];
    });

  }

  return (
    <div>
      <UserInput onAddUser= {addUserHandler} />
      <UserList users ={usersList}/>
    </div>
  )
}

export default App;
