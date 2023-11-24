import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PlayerForm({players, setPlayers}){
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    // const setNamePlayer = (e) =>{
    //     if(e.target.name === 'player1') tabPlayers[0] = e.target.value;
    //     else if(e.target.name === 'player2') tabPlayers[1] = e.target.value;

    //     setPlayers(tabPlayers);
    //     console.log(players);
    // }

    const addPlayer = (e) => {
        e.preventDefault();
        if(players.length < 4){
            setPlayers([...players, {index:players.length, name: "", point: 0 }]);
        }else{
            setErrorMessage('You can not be more than 4 players');
        }
    }

    const handleInputChange = (player, event) => {
        const newPlayerNames = [...players];
        newPlayerNames[player.index].name = event.target.value;
        setPlayers(newPlayerNames);
    };


    const validatePlayers = (e) =>{
        console.log(players);
        e.preventDefault();
        let filteredPlayers;
        
        for (let i=0; i<players.length; i++){
            filteredPlayers = players.filter(player => player.name.trim() !== "");
        }

        setPlayers(filteredPlayers);

        if(players.length < 2){
            setErrorMessage('You have to be at least 2 players');
        }else{
            navigate('/startRound');
        }
    }

    return(
        <main className="Play">
            <h2>Start a game</h2>
            <p>Enter the names of the players</p>
            <p>The game can be played by two to four players </p>

            <form className="column">
            {players.map((player) => (
                <input
                  key={player.index}
                  type="text"
                  placeholder={`Name of player ${player.index+1}`}
                  defaultValue={player.name}
                  onChange={(e) => handleInputChange(player, e)}
                />
            ))}


                {/* <input type="text" name='player1' placeholder="Player’s name" defaultValue={tabPlayers[0]} onChange={setNamePlayer} />
                <input type="text" name='player2' placeholder="Player’s name" defaultValue={tabPlayers[1]} onChange={setNamePlayer} /> */}
                <button onClick={addPlayer} className='addPlayer'>+ Add a player</button>

                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <button onClick={validatePlayers} >We are ready !</button>
            </form>
        </main>
    )
}

export default PlayerForm;