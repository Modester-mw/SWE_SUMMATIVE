import './css/src_css/App.css'
import Header from './components/headerComponents/Header'
import TasksWrap from './components/taskNavComponents/TasksWrap'
import GridOut from './components/bodyComponents/mainGridComponents/GridOut';

function App() {
  return (
    <div className="overall-body">
      <Header />
      <TasksWrap />
      <GridOut />
    </div>
  );
}

export default App;
