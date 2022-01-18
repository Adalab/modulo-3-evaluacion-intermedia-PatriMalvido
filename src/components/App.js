import '../styles/App.css';
import callToApi from '../services/api';
import { useEffect, useState } from 'react';

function App() {
  const [student, setStudent] = useState([]); //para guardar los datos devueltos por al API

  useEffect(() => {
    callToApi().then((response) => {
      setStudent(response);
    });
  }, []);

  //-----------------------------

  const renderStudent = () => {
    return student.map((eachStudent, index) => {
      return (
        <tr key={index}>
          <td>{eachStudent.name}</td>
          <td>{eachStudent.counselor}</td>
          <td>{eachStudent.speciality}</td>
        </tr>
      );
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

        <tbody>{renderStudent()}</tbody>
      </table>

    
    </div>
  );
}

export default App;
