
import './App.css';
import Header from './Layout/Header/Header';
import TopHeader from './Layout/TopHeader/TopHeader';
import Home from './components/Home/Home';



function App() {
  return (
    <div className='container'>
      <TopHeader></TopHeader>
      <Header></Header>
      <Home></Home>
 
    
    </div>
  );
}

export default App;
