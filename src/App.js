import React from 'react';
import {Router, Route} from 'react-router-dom';
import {history} from './_helpers/history';

import {CheckStatusPage} from "./pages/CheckStatusPage";

function App() {
  return (
    <div >
      <header>
      </header>
      <Router history={history}>
        <div>
          <Route exact path="/" component={CheckStatusPage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
