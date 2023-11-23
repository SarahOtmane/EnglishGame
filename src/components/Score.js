import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Score({players, setPlayers}){

    useEffect(() => {
        const sortedPlayers = [...players].sort((a, b) => b.point - a.point);   
        setPlayers(sortedPlayers);
    }, []);

    const navigate = useNavigate();

    const returnHome = () =>{
        navigate('/');
    }

    return(
        <main className="score">
            <h2>{players[0].name} !</h2>
            <h2>Congratulations !</h2>
            <p>You win the game with a total of {players[0].point} points !</p>

            <section>
            {
                players.map(player =>( <div key={player.index} className="row" >
                    <span>{player.name}</span>
                    <span>{player.point}</span>
                </div> ))
            }
            </section>

            <button className="returnHome" onClick={returnHome}>Return home</button>
        </main>
    )
}

export default Score;