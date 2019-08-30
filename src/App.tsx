import React from 'react';
import './App.css';
import { Route, Switch, Link} from "react-router-dom";
import Main from './components/Main/Main';
import CreateNew from './components/Edits/CreateNew';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link id="main_link" to="/">My_Stuff</Link>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/create" component={CreateNew}/>
        </Switch>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
