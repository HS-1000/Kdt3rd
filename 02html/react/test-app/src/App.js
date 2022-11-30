import logo from './logo.svg';
import './App.css';
// 경로가 test-app 기준이다

function App() {
  const name = '냐옹';
  const animal = "고양이";
  let a = 5;
  let b = 4;
  let title = "Hello World";

  return (
    <div className="App">
      <div className="main">
        <div className="circle" id="c1">
              <div id="eye1">
                  <div id="eye2">
                      
                  </div>
              </div>
          </div>
          <div className="circle" id="c2"></div>
          <div className="circle" id="c3"></div>
          <div className="circle" id="c4"></div>
          <div className="circle" id="c5"></div>
          <img src="./grass.png" alt="잡초" id="grass" />
      </div>
    </div>
  );
}

export default App;
