import './App.css';
import { FormCourse } from './components/FormCourse';
import { Home } from './components/Home';
import { TestingCustomHooks } from './components/TestingCustomHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Home/> */}
        {/* <TestingCustomHooks/> */}
        <FormCourse/>
      </header>
    </div>
  );
}

export default App;
