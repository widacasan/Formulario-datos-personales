//poder crear,editar o eliminar usuarios
import { createSlice } from "@reduxjs/toolkit"; //

const initialState = [
  {
    id: "1",
    nombre: "William David Camacho Sanchez",
    cedula: "1031172769",
    cel:"3125448916",
    edad: "24",
    universidad:"Ecci",
    semestre: "3",
    carrera: "ingenieria Mecatronica",
    
    completed: false,
   },
];
export const factSlice = createSlice({
  name: "data",
  initialState, //estado inicial (useState)
  reducers: {
    //almacena multiples funciones para actualizar el estado iniocial (initialState)
    addFact: (state, action) => {
      state.push(action.payload);
    },
    editeFact: (state, action) => {
      const { id, nombre, cedula,cel,edad,universidad,semestre,carrera } = action.payload;
      const foundFact = state.find((fact) => fact.id === id);
      if (foundFact) {
        foundFact.nombre = nombre;
        foundFact.cedula = cedula;
        foundFact.cel = cel;
        foundFact.edad = edad;
        foundFact.universidad = universidad;
        foundFact.semestre = semestre;
        foundFact.carrera = carrera;
      }
    },
    deleteFact: (state, action) => {
      const factFound = state.find((fact) => fact.id === action.payload);
      if (factFound) {
        state.splice(state.indexOf(factFound), 1);
      }
    },
  },
});
export const { addFact, deleteFact, editeFact } = factSlice.actions; //exporto addFact de forma individual
export default factSlice.reducer;
