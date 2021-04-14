import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../store";

const CardDeck = (props) => {
    const { fetchData } = props;

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    return (
        <div className="card-wrapper">
            {props.isLoading ? <h3>Shuffling Deck...</h3> : null}
            {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}
            {props.cards.map((card) => (
                <div className="card-container">
                    <div key={card.code} className="cards">
                        <img src={card.image} alt={card.value}/>
                        <p style={{ fontWeight: "bold" }}>{card.value} OF {card.suit}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        cards: state.cards,
        error: state.error
    };
};

export default connect(mapStateToProps, { fetchData })(CardDeck);