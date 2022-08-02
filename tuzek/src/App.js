import logo from './logo.svg';
import './App.css';
import MapPage from './pages/MapPage';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/terkep" element={<MapPage/>}/>
      </Routes>
    </div>
  );
}
export default App;