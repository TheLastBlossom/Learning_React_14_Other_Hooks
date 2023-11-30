import './App.css';
import { FormCourse } from './components/FormCourse';
import { Home } from './components/Home';
import { TestingCustomHooks } from './components/TestingCustomHooks';
import { User } from './components/User';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Home/> */}
        {/* <TestingCustomHooks/> */}
        {/* <FormCourse/> */}
        <User/>
      </header>
    </div>
  );
}

export default App;
