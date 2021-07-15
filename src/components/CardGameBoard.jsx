import React from "react";
import { createDeckAndDraw } from "./api";

class CardGameBoard extends React.Component {
  state = {
    cardImageUrl: null,
    cardValue: null,
    deckId: null,
  }

  async componentDidMount() {
    const { deckId, value, image } = await createDeckAndDraw();
    this.setState({
        deckId,
        cardValue: value,
        cardImageUrl: image
    })

  }

  render() {
      console.log(this.state)
    return <div>
        <img src={this.state.cardImageUrl} alt="Random Card"/>
    </div>;
  }
}

export default CardGameBoard;
