import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div class="container text-center">
  <div class="row">
    <div class="col-md-8">.col-md-8</div>
    <div class="col-6 col-md-4" img src='public/max_postkasse.jpg' class="img-fluid" alt="Max foran postkasse"></div>
  </div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>
  <div class="row">
    <div class="col-6">.col-6</div>
    <div class="col-6">.col-6</div>
  </div>
</div>
  );
}

export default App;