import './App.css';
import CardDeck from './components/CardDeck';
import styled from "styled-components";

function App() {

  function refreshPage() {
    window.location.reload(false);
  }

  const Button = styled.button`
  font-size: 2em;
  font-weight: bold;
  background: transparent;
  border-radius: 3px;
  border: 4px solid red;
  color: red;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;

  &:hover {
    background-color: black;
    border-color: black;
    color: white;
`;


  return (
    <div className="App"><br/><br/>
      <Button onClick={refreshPage}>Shuffle Deck</Button><br/><br/>
      <CardDeck />
    </div>
  );
}

export default App;