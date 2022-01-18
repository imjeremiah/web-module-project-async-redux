import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCards } from '../actions';

import { Button, CardGroup, Card, CardImg, CardTitle } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = (props) => {

    useEffect(() => {
        props.getCards();
    }, []);

    if (props.error) {
        return <h2>We got an error: {props.error}</h2>;
    }

    if (props.isFetching) {
        return <h2>Fetching Cards!</h2>;
    }

    const handleClick = () => {
        props.getCards();
    }

    return(
        <>
            <div>
                <Button color='danger' onClick={handleClick}>Get New Deck</Button>
            </div><br /><br />
            <CardGroup>
                {props.cards.map(card => {
                    return(
                        <Card key={card.code}>
                            <CardImg src={card.image} alt={`${card.value} of ${card.suit}`}/>
                            <CardTitle tag='h5'>
                                {`${card.value} of ${card.suit}`}
                            </CardTitle>
                        </Card>
                    )
                })}
            </CardGroup>
        </>
    )
}

const mapStateToProps = state => {
    return {
        cards: state.cards
    };
};

export default connect(mapStateToProps, { getCards })(Cards);