import logo from './logo.svg';
import './App.css';
import MapPage from './pages/MapPage';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <MapPage/>
      <Footer>
        <A href='https://www.freepik.com/free-vector/flame-icons-collection_1006711.htm#query=fire' target={"_blank"}>Flame icon vector created by rwdd_studios - www.freepik.com</A>
        <A href='https://www.katasztrofavedelem.hu/' target={'_blank'}>Forrás: Katasztrófavédelem</A>
        <A href='https://fwsystems.hu' target={'_blank'}>Szigethy Ábrahám András - fwsystems.hu</A>
      </Footer>
    </div>
  );
}
export default App;

const Footer = styled.div`
  height: 3vh;
  display: flex;
  margin-left: 1vw;
  justify-content: space-around;
`;
const A = styled.a`
  color: white;
`;