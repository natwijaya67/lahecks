import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import plush from './images/plush1.jpg';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Card 
      title = 'Plush Toy'
      imgURL = {plush}
      body = 'This is a potato'
      />
    </div>
  );
}

export default App;
