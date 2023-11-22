import { useState } from "react";


function StartRound({players}){

    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

    const changeCurrentPlayer = () =>{
        if(currentPlayerIndex+1 < players.length){
            setCurrentPlayerIndex(prevCurrentPlayer => {
                let newCurrentPlayerIndex = prevCurrentPlayer + 1;
                return newCurrentPlayerIndex;
            })
        }else{
            
        }
    }

    return(
        <main className="StartRound">
            <h2>{players[currentPlayerIndex].name}, it's your turn !</h2>
            <p>You currently have {players[currentPlayerIndex].point} points</p>
            <section>
                <article className="row">
                    <span className="blue">{'<header>'}</span>
                    <span className="blue">{'</header>'}</span>
                </article>
                <article className="row">
                    <span className="blue">{'<main>'}</span>
                    <span className="blue">{'</main>'}</span>
                </article>
                <article className="row">
                    <span className="blue">{'<footer>'}</span>
                    <span className="blue">{'</footer>'}</span>
                </article>
                <article className="row">
                    <span className="green">{'<section>'}</span>
                    <span className="green">{'</section>'}</span>
                </article>
                <article className="row">
                    <span className="pink">{'<article>'}</span>
                    <span className="pink">{'</article>'}</span>
                </article>
                <article className="row">
                    <span className="orange">{'<ul>'}</span>
                    <span className="orange">{'</ul>'}</span>
                    <span className="yellow">{'<li>'}</span>
                </article>
                <article className="row">
                    <span className="grey">{'<p>'}</span>
                    <span className="grey">{'<img>'}</span>
                    <span className="grey">{'<a>'}</span>
                </article>
            </section>
            <button onClick={changeCurrentPlayer}>Done !</button>
        </main>
    )
}

export default StartRound;