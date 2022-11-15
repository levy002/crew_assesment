import './App.css';
import Languages from './components/languages/Languages';
import RequestHistory from './components/requestHistory/RequestHistory';

function App() {

  return (
    <div className="App">
       <RequestHistory />
       <Languages />
    </div>
  );
}

export default App;
