import logo from './logo.svg';
import './App.css';
import { Table } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Table of Results<br/>
        <Table>
          <thead>
            <tr>
              <th>Input: </th>
              <th>Prime Factorization</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8</td>
              <td>...</td>
              <td>
                <button color="success" size="sm">Prime Factorize!</button>
                <button color="danger" size="sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </Table>
        <img src="src/xkcd247.png" alt="xkcd comic 247"/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
