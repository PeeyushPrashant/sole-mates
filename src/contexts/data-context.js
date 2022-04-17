import { createContext, useContext, useEffect, useReducer } from "react";
import { ACTION_TYPE } from "../utils/ActionType";
import { InitialValue, DataReducer } from "../reducer/DataReducer";
import { getAllVideos } from "../Services/services";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, InitialValue);

  useEffect(() => {
    (async () => {
      const response = await getAllVideos();
      if (response.status === 200 || response.status === 201)
        dispatch({
          type: ACTION_TYPE.INITIAL_DATA,
          payload: response.data.videos,
        });
    })();
  }, []);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
