import { useNavigate } from "react-router-dom";

function EndRound({players, currentPlayerIndex}){

    const navigate = useNavigate();

    const showScore = () =>{
        navigate('/score');
    }

    return(
        <main className="endRound">
            <h1>{players[currentPlayerIndex].name}, finished coding !</h1>
            <p>The game is over</p>

            <h2>And the winner is ...</h2>

            <button onClick={showScore} >See the scores</button>
        </main>
    )
}

export default EndRound;