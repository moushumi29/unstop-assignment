import './App.css';
import AssessmentPage from './components/AssessmentPage';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='app-container'>
      <Sidebar/>
      <AssessmentPage />
    </div>
  );
}

export default App;
