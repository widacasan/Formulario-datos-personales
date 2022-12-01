//aqui almaceno los usuarios

import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/data/factSlice';

export const store = configureStore ({ 
   reducer: {
      data: dataReducer , 
   },
});  

 