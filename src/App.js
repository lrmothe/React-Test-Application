
import './App.css';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import Message from './component/Message';

import ClassClick from "./component/ClassClick.1";

function App() {
  return (
    <div className="App">
      <Message /> 
      <Counter/>
      <FunctionClick/>
      <ClassClick/>
    </div>
  );
}

export default App;
