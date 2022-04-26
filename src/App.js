import './App.scss';
import NavigationBar from './components/layout/NavigationBar';
import Home from './pages/Home';
import TestC from './TestC';
import TestF from './TestF';

function App() {

  // const students = ["Esger","Rovshen","Tehmin","Hezret"];
  // const animal = "Horumcek";
  // const stuName = "Bextiyar";
  return (
    // <div className="container mt-5">
    //  <h3>{"salam".toUpperCase()}</h3>
    //  <TestC studentName={stuName}/>
    //  <TestF animal={animal} studentList={students}/>
    // </div>

    <div className='container'>
      <NavigationBar/>
      <Home/>
    </div>


  );
}


export default App;
