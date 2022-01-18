import '../styles/App.css';
import callToApi from '../services/api';
import {useEffect, useState} from 'react'

function App() {
  const [searchName, setSearchName]= useState('');
  const [student, setStudent] = useState ([]);

  useEffect(()=> {
    callToApi(searchName).then ((response)=>{
      setStudent(response);
    });
  }, [searchName]);



  
  return (
    <div>
      <h1>Hola mundo</h1>
      <table>
        <thead>
          <tr>
            <th>Columna 1</th>
            <th>Columna 2</th>
            <th>Columna 3</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Columna1 fila 1</td>
            <td>Columna2</td>
            <td>Columna3</td>
          </tr>
          <tr>
            <td>Columna fila 2</td>
            <td>Columna</td>
            <td>Columna</td>
          </tr>
          <tr>
            <td>Columna fila 3</td>
            <td>Columna</td>
            <td>Columna</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
