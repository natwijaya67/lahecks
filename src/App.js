import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import plush from './images/plush1.jpg'

function App() {
  return (
    <div className="App">
      <Card 
      title = 'Plush Toy'
      imgURL = {plush}
      body = 'This is a potato'
      />
    </div>
  );
}

export default App;
