import './App.css';

import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header.js';
import Home from './components/Home.js';
import PlayerForm from './components/PlayerForm.js';
import Round from './components/Round.js';


function App(){
    const [players, setPlayers] = useState([{
        index : 0,
        name : '',
        point : 0
    },
    {   
        index : 1,
        name : '',
        point : 0
    }]);

    return(
        <BrowserRouter>
            <>
                <Header />

                <Routes>
                    <Route path="/" element={<Home/>} /> 
                    <Route path='/startGame' element={<PlayerForm players={players} setPlayers={setPlayers} />} />
                    <Route path='/round' element={<Round />} />
                </Routes>
            </>
        </BrowserRouter>
    )
}

export default App;