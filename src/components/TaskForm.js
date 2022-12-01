//formulario personal
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addFact, editeFact } from "../features/data/factSlice";
import { v4 as uuid } from "uuid";

function TaskForm() {
  const [fact, setTask] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const data = useSelector((state) => state.data);

  const handleChange = (e) => {
    setTask({
      ...fact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editeFact({ ...fact, id: params.id }));
    } else {
      dispatch(
        addFact({
          ...fact,
          id: uuid(),
        })
      );
    }

    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(data.find((fact) => fact.id === params.id));
    }
  }, [params, data]);

  return (
    
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
      <h1 className="bg-red-500 p-4 ">Datos personales</h1>
      <label className="block text-sm font-bold">
        Nombre:</label>
      <input
        type="text"
        name="nombre"
        onChange={handleChange}
        value={fact.nombre}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        placeholder="Escribe tu nombre completo"
        autoFocus
      />
      <label>
        Cedula:
        <input
          type="number"
          name="cedula"
          onChange={handleChange}
          value={fact.cedula}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
          placeholder="Escribe el numero de tu cedula"
          autoFocus
        />
      </label>
      <label>
        Celular:
        <input
          type="number"
          name="cel"
          onChange={handleChange}
          value={fact.cel}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
          placeholder="Escribe tu numerio de telefono"
          autoFocus
        />
      </label>
      <label>
        Edad:
        <input
          type="number"
          name="edad"
          onChange={handleChange}
          value={fact.edad}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
          placeholder="Escribe tu edad"
          autoFocus
        />
      </label>
      <button type="submit" className="bg-indigo-600 px-2 py-1">Enviar</button>
    
    </form>
  );
}

export default TaskForm;
