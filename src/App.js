import logo from './logo.svg';
import './App.css';
import DemoFunctionCom from './Components/DemoComponent/DemoFunctionCom';
import DemoClassCom from './Components/DemoComponent/DemoClassCom';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import Databinding from './Databinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StyleWithJSX from './StyleWithJSX/StyleWithJSX';
import StateDemo from './StateDemo/StateDemo/StateDemo';

function App() {
  return (
    <div className="App">
        {/* <BaiTapLayout /> */}
        {/* <Databinding /> */}
        {/* <HandleEvent /> */}
        {/* <StyleWithJSX /> */}
        <StateDemo />
      
    </div>
  );
}

export default App;
