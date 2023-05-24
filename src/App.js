import "./App.css";
import Counter from "./component/Counter";
import FunctionClick from "./component/FunctionClick";
import Message from "./component/Message";

import ClassClick from "./component/ClassClick.1";
import EventBind from "./component/EventBind";
import UserGreeting from "./component/UserGreeting";
import NameList from "./component/NameList";
import StyleSheet from "./component/StyleSheet";
function App() {
  return (
    <div className="App">
      <Message />
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <UserGreeting/>
      <NameList/>
      <StyleSheet/>
    </div>
  );
}

export default App;
