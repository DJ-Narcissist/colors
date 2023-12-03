import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ColorRoutes from './Routes';

function App() {
  return (
    <div className="App">
     <Router>
      <div>
        <ColorRoutes />
      </div>
     </Router>
    </div>
  );
};

export default App;
