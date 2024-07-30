import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/home.js';
import Survey from './pages/Survey/survey.js';
import Results from './pages/Results/results.js';
import Freelances from './pages/Freelances/freelances.js';
import Error from './components/Error';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/survey/:questionNumber" element={ <Survey /> } />
                <Route path="/results" element={ <Results /> } />
                <Route path="/freelances" element={ <Freelances /> } />
                <Route path="*" element={ <Error/> } />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
