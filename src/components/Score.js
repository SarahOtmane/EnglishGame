import { useNavigate } from "react-router-dom";

function Score(){
    const navigate = useNavigate();

    return(
        <main>
            <h2>Name !</h2>
            <h2>Congratulations !</h2>
            <p>You win the game with a total of 120 points !</p>

            

            <button onClick={navigate('/')}>Return home</button>
        </main>
    )
}

export default Score;