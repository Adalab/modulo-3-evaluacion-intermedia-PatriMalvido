import '../styles/App.css';
import callToApi from '../services/api';
import { useEffect, useState } from 'react';

function App() {
  const [student, setStudent] = useState([]); //para guardar los datos devueltos por al API
  const [newStudent, setNewStudent] = useState({});

  useEffect(() => {
    callToApi().then((response) => {
      setStudent(response.results);
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
  //--------------------------------------------
  const handleInput = (ev) => {
    setNewStudent({
      ...newStudent,
      [ev.currentTarget.id]: ev.currentTarget.value,
    });
    console.log(ev.currentTarget.value);
  };

  //--------------------------------------------------

  const handleClickNew = () => {
   

    setStudent([...student, newStudent]);
    setNewStudent({});
    
  };

  return (
    <div>
      <h1>Lista de Adalabers</h1>
      <section>
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
      </section>

      <section>
        <h2>Añadir una adalaber</h2>
        <form action="" onSubmit={(ev) => ev.preventDefault()}>
          <label htmlFor="name">
            Nombre:
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInput}
              
            />
          </label>
          <label htmlFor="counselor">
            Tutora:
            <input
              type="text"
              name="counselor"
              id="counselor"
              onChange={handleInput}
              
            />
          </label>
          <label htmlFor="speciality">
            Especialidad:
            <input
              type="text"
              name="speciality"
              id="speciality"
              onChange={handleInput}
              
            />
          </label>
          <input onClick={handleClickNew} type="submit" value="añadir" />
        </form>
      </section>
    </div>
  );
}

export default App;
