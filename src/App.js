import logo from './logo.svg';
import './App.css';
import Routing from './components/RoutingComponents/Routing';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Actions from './Actions/Actions';

function App() {
  const dispatch=useDispatch();
  useEffect(() => {
     dispatch(Actions.fetchAllRegisterUser()); 
  }, [])
  return (
    <>
      <Routing></Routing>
     
    </>
  );
}

export default App;
