import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();

    return(
        <main className="Home">
            <section>
                <h2>A new way to learn about HTML</h2>
                <p>Play with the tags and learn how to code with the Code Runner cards</p>
                <button onClick={() => navigate('/startGame')} >Start to Play</button>
            </section>

            <section>
                <h2>How to play ?</h2>
            </section>
        </main>
    )
}


export default Home;
