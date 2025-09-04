import './App.css';
import TvcClassComp from './components/TvcClassComp';
import TvcFuncComp from './components/TvcFuncComp';
import TvcJsxExpression from './components/TvcJsxExpression';

function App() {
  return (
    <div className="container border">
        <h1>Làm việc với các thành phần cơ bản trong ReactJs</h1>
        <hr/>
        <TvcJsxExpression />

        <TvcFuncComp />
        <TvcFuncComp name="Chung Trinh" age="47"></TvcFuncComp>

        <TvcClassComp ></TvcClassComp>
        <TvcClassComp fullName="Chung Trinhj Van" company="FitNTU" />
        <TvcClassComp fullName="Phamj Cong Hieu" company="K22CNTx" />
    </div>
  );
}

export default App;
