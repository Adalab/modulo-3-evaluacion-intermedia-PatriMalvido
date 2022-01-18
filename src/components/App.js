import '../styles/App.css';
import callToApi from '../services/api';
import {useEffect, useState} from 'react'

function App() {
  const [searchName, setSearchName]= useState(''); //para el input de busqueda
  const [student, setStudent] = useState ([]); //para guardar los nombres devueltos por al API

  useEffect(()=> {
    callToApi(searchName).then ((response)=>{
      setStudent(response);
    });
  }, [searchName]);


//-----------------------------

const renderStudent =()=> {
  return student.map((student,index)=>{
    return <tr key={index}>{student.name}</tr>;
  });
};

  return (
    <div>
      <h1>Hola mundo</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especilidad</th>
          </tr>
        </thead>

        <tbody>
          <tr>
          <td>{renderStudent()}</td>
          </tr>
         
       
        </tbody>
      </table>
    </div>
  );
}

export default App;
