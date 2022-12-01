
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import TaskForm from './components/TaskForm';
import DataAcademic from './components/DataAcademic';
import DataList from './components/DataList'

function App() {

  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className='flex items-center justify-center h-full'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<DataList/>}/> 
        <Route path='/create-fact' element={<TaskForm/>}/>
        <Route path='/create-fact/create-dataAcademic' element={<DataAcademic/>}/>
        <Route path='/edit-fact/:id' element={<TaskForm/>}/>
      </Routes>
      </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
