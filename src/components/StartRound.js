import { useState } from "react";
import { useNavigate } from "react-router-dom";


function StartRound({players, setPlayers,currentPlayerIndex, setCurrentPlayerIndex }){
    const navigate = useNavigate();

    const [valeurSelectionnee, setValeurSelectionnee] = useState(0);
    const [nameSelectionnee, setNameSelectionnee] = useState('');

    const handleChangementSelection = (event) => {
        setValeurSelectionnee(event.target.value);
        setNameSelectionnee(event.target.name);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let newPlayersTab = players;
        newPlayersTab[currentPlayerIndex].point = parseInt(newPlayersTab[currentPlayerIndex].point) + parseInt(valeurSelectionnee);
        
        setPlayers(newPlayersTab);

        if(nameSelectionnee !== '</footer>'){
            if(currentPlayerIndex+1 < players.length){
                setCurrentPlayerIndex(prevCurrentPlayer => {
                let newCurrentPlayerIndex = prevCurrentPlayer + 1;
                return newCurrentPlayerIndex;
            })
            }else{
                setCurrentPlayerIndex(prevCurrentPlayer => {
                    let newCurrentPlayerIndex = 0;
                    return newCurrentPlayerIndex;
                })
            }
        }else{
            navigate('/endRound');
        }

    };


    return(
        <main className="StartRound">
            <h2>{players[currentPlayerIndex].name}, it's your turn !</h2>
            <p>You currently have {players[currentPlayerIndex].point} points</p>
                
                <form onSubmit={handleSubmit}>
                <section className="scroll">
                    <article className="row">
                        <label className="blue">
                            <input
                            type="radio"
                            value="10"
                            name='<header>'
                            checked={valeurSelectionnee === '<header>'}
                            onChange={handleChangementSelection}
                            hidden
                            />
                            {'<header>'}
                        </label>
                        <label className="blue">
                            <input
                            type="radio"
                            value="10"
                            name='</header>'
                            checked={valeurSelectionnee === '</header>'}
                            onChange={handleChangementSelection}
                            hidden
                            />
                            {'</header>'}
                        </label>
                    </article>

                    <article className="row">
                        <label className="blue">
                            <input
                            type="radio"
                            value="10"
                            name='<main>'
                            checked={valeurSelectionnee === '<main>'}
                            onChange={handleChangementSelection}
                            hidden
                            />
                            {'<main>'}
                        </label>
                        <label className="blue">
                            <input
                            type="radio"
                            value="10"
                            name='</main>'
                            checked={valeurSelectionnee === '</main>'}
                            onChange={handleChangementSelection}
                            hidden
                            />
                            {'</main>'}
                        </label>
                    </article>

                    <article className="row">
                        <label className="blue">
                            <input
                            type="radio"
                            value="10"
                            name='<footer>'
                            checked={valeurSelectionnee === '<footer>'}
                            onChange={handleChangementSelection}
                            hidden
                            />
                            {'<footer>'}
                        </label>
                        <label className="blue">
                            <input
                            type="radio"
                            value="10"
                            name='</footer>'
                            checked={valeurSelectionnee === '</footer>'}
                            onChange={handleChangementSelection}
                            hidden
                            />
                            {'</footer>'}
                        </label>
                    </article>

                    <article className="row">
                        <label className="green">
                            <input
                            type="radio"
                            value="5"
                            name='<section>'
                            checked={valeurSelectionnee === '<section>'}
                            onChange={handleChangementSelection}
                            hidden
                            />
                            {'<section>'}
                        </label>
                        <label className="green">
                            <input
                            type="radio"
                            value="5"
                            name='</section>'
                            checked={valeurSelectionnee === '</section>'}
                            onChange={handleChangementSelection}
                            hidden
                            />
                            {'</section>'}
                        </label>
                    </article>

                    <article className="row">
                        <label className="pink">
                            <input
                            type="radio"
                            value="3"
                            name='<article>'
                            checked={valeurSelectionnee === '<article>'}
                            onChange={handleChangementSelection}
                            hidden
                            />
                            {'<article>'}
                        </label>
                        <label className="pink">
                            <input
                            type="radio"
                            value="3"
                            name='</article>'
                            checked={valeurSelectionnee === '</article>'}
                            onChange={handleChangementSelection}
                            hidden
                            />
                            {'</article>'}
                        </label>
                    </article>

                    <article className="row">
                        <label className="orange">
                            <input
                            type="radio"
                            value="4"
                            name='<ul>'
                            checked={valeurSelectionnee === '<ul>'}
                            onChange={handleChangementSelection}
                            hidden
                            />
                            {'<ul>'}
                        </label>
                        <label className="orange">
                            <input
                            type="radio"
                            value="4"
                            name='</ul>'
                            checked={valeurSelectionnee === '</ul>'}
                            onChange={handleChangementSelection}
                            hidden
                            />
                            {'</ul>'}
                        </label>
                        <label className="yellow">
                            <input
                            type="radio"
                            value="2"
                            name='<li>'
                            checked={valeurSelectionnee === '<li>'}
                            onChange={handleChangementSelection}
                            hidden
                            />
                            {'<li>'}
                        </label>
                    </article>

                    <article className="row">
                        <label className="grey">
                            <input
                            type="radio"
                            value="1"
                            name='<p>'
                            checked={valeurSelectionnee === '<p>'}
                            onChange={handleChangementSelection}
                            hidden
                            />
                            {'<p>'}
                        </label>
                        <label className="grey">
                            <input
                            type="radio"
                            value="1"
                            name='<img>'
                            checked={valeurSelectionnee === '<img>'}
                            onChange={handleChangementSelection}
                            hidden
                            />
                            {'<img>'}
                        </label>
                        <label className="grey">
                            <input
                            type="radio"
                            value="1"
                            name='<a>'
                            checked={valeurSelectionnee === '<a>'}
                            onChange={handleChangementSelection}
                            hidden
                            />
                            {'<a>'}
                        </label>
                    </article>

                    <article className="row">
                        <label className="rainbowF">
                            <input
                            type="radio"
                            value="1"
                            name='<id>'
                            checked={valeurSelectionnee === '<id>'}
                            onChange={handleChangementSelection}
                            hidden
                            />
                            {'id'}
                        </label>
                        <label className="rainbow">
                            <input
                            type="radio"
                            value="1"
                            name='<class>'
                            checked={valeurSelectionnee === '<class>'}
                            onChange={handleChangementSelection}
                            hidden
                            />
                            {'class'}
                        </label>
                    </article>

                    <article className="row">
                        <label className="blue skip">
                            <input
                            type="radio"
                            value="0"
                            name='<skip>'
                            checked={valeurSelectionnee === 'skip'}
                            onChange={handleChangementSelection}
                            hidden
                            />
                            Skip
                        </label>
                    </article>
                </section>
                <button type="submit" className="fix1" >Done ! (+ {valeurSelectionnee} points!)</button>
            </form>

        </main>
    )
}

export default StartRound;