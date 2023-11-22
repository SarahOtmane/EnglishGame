import './App.css';

import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header.js';
import Home from './components/Home.js';
import PlayerForm from './components/PlayerForm.js';
import StartRound from './components/StartRound.js';
import EndRound from './components/EndRound.js';
import Score from './components/Score.js';


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
                    <Route path='/startRound' element={<StartRound players={players} />} />
                    <Route path='/endRound' element={<EndRound />} />
                    <Route path='/score' element={<Score />} />
                </Routes>
            </>
        </BrowserRouter>
    )
}

export default App;