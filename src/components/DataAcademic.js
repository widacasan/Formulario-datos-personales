import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFact, editeFact } from "../features/data/factSlice";
import { v4 as uuid } from "uuid";  //genera id unicos
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function DataAcademic() {
  const [fact, setFact] = useState({   //guarda Datos nuevos
    universidad: "", 
    semestre: "",
    carrera:"",
    
  });

  const dispatch = useDispatch(); //me permite disparar eventos desde tasklSlice.js
  const navigate = useNavigate();
  const params = useParams();
  const data = useSelector((state) => state.data);

  const handleChange = (e) => {   //  
    setFact({
      ...fact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //al dar clik previene que se refresque la pagina
  console.log(data)
    if (params.id) {
      dispatch(editeFact(fact));
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
      setFact(data.find((fact) => fact.id === params.id));
    }
  }, [params.id, data]);

  return (
    
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
      <h1 className="bg-red-500 p-4 ">datos academicos </h1>
      <label className="block text-sm font-bold">
        Universidad:</label>
      <input
        type="text"
        name="universidad"
        onChange={handleChange}
        value={fact.universidad}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        placeholder="En que universidad estudias actualmente?"
        autoFocus
      />
      <label>
        Semestre
        <input
          type="number"
          name="semestre"
          onChange={handleChange}
          value={fact.semestre}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
          placeholder="Escribe el semestre que cursas actualmente"
          autoFocus
        />
      </label>
      <label>
        Carrera:
        <input
          type="text"
          name="carrera"
          onChange={handleChange}
          value={fact.carrera}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
          placeholder="Escribe tu carrera actual"
          autoFocus
        />
      </label>
      <Link
          to="/"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
        >
          guardar
        </Link>
      
    </form>
  );
}

export default DataAcademic;

