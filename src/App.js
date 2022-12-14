import { useSelector } from 'react-redux';
import Counter from './Components/Counter/Counter';
import Colors from './Components/Colors/Colors';
import Foods from './Components/Foods/Foods';
import './App.css';
import User from './Components/User/User';


function App() {

  const color = useSelector(state => state.color);

  return (
    <>
      {/* <div style={{ background : color }} className="main-container  pt-5">
        <Counter />
        <Colors />
        <Foods />
      </div> */}

      <User />
    </>
  );
}

export default App;
