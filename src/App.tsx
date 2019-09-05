import React, {Fragment} from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App: React.FC = () => {
    return (
        <Router>
            <Home/>
        </Router>
    )
};

export default App;
