import '../styles/App.css';
import callToApi from '../services/api';
import { useEffect, useState } from 'react';

function App() {
  const [student, setStudent] = useState([]); //para guardar los datos devueltos por al API
const [newStudent, setNewStudent]= useState ({});
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
//--------------------------------------------
const handleInput=(ev)=> {
  const inputValue = ev.currentTarget.value;
  const inputName = ev.currentTarget.value;
  setStudent ({...student, [inputName]:inputValue});

};

//--------------------------------------------------

const handleSubmit = (ev)=> {
  ev.preventDefault();
  setStudent([...student,newStudent]);
  setNewStudent ({
    name:'',
    counselor:'',
    speciality:''
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
      <section>
        <h2>Añadir una adalaber</h2>
        <form action="" onSubmit={handleSubmit} >
          <label htmlFor="name">Nombre:
            <input type="text" name="name" id="name"
            onChange={handleInput}
            value={student.name} />
          </label>
          <label htmlFor="counselor">Tutora:
            <input type="text" name="counselor" id="counselor"
           onChange={handleInput}
            value={student.counselor} />
          </label>
          <label htmlFor="speciality">Especialidad:
            <input type="text" name="speciality" id="speciality"
            onChange={handleInput}
            value={student.speciality} />
          </label>
          <button type="submit">Añadir una nueva adalaber</button>
        </form>
      </section>
    
    </div>
  );
}

export default App;
