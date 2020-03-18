import React from 'react';
import './App.css';
import { UsersProvider } from './Users/UsersProvider';
import Users from './Users/Users';

const App = () => {
  return (
    <>
      <UsersProvider>
        <Users />
      </UsersProvider>
    </>
  )
}
export default App;
