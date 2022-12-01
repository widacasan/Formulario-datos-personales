//muestra   lista de datos 
import { useSelector, useDispatch } from "react-redux";
import { deleteFact } from "../features/data/factSlice";
import { Link } from "react-router-dom";
function DataList() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteFact(id));
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>{data.length} Usuarios</h1>
        <Link
          to="/create-fact"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
        >
          Crear Usuario
        </Link>
      </header>

      <div className="grid grid-cols-1 gap-3">
        {data.map((fact) => (
          <div className="bg-neutral-800 p-4 rounded-md" key={fact.id}>
            <header className="flex justify-between">
              <h3 className="text-lg font-bold">{fact.nombre}</h3>
              <div className="flex gap-x-2">
                <Link
                  to={`/edit-fact/${fact.id}`}
                  className="bg-zinc-600 px-2 py-1 text-xs rounded-md self-center"
                >
                  Editar Usuario
                </Link>
                <button
                  onClick={() => handleDelete(fact.id)}
                  className="bg-red-500 px-2 py-1 text-xs rounded-md"
                >
                  Borrar
                </button>
              </div>
            </header>
            <p className="text-xs text-slate-200">Cedula: {fact.cedula}</p>
            <p className="text-xs text-slate-200">Tel: {fact.cel}</p>
            <p className="text-xs text-slate-200">Edad: {fact.edad}</p>
            <p className="text-xs text-slate-200">Universidad: {fact.universidad}</p>
            <p className="text-xs text-slate-200">Semestre: {fact.semestre}</p>
            <p className="text-xs text-slate-200">Carrera: {fact.carrera}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataList;
