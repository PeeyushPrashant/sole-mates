import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ACTION_TYPE } from "../utils/ActionType";
import { InitialValue, DataReducer } from "../reducer/DataReducer";
import { getAllVideos, getAllCategories } from "../Services/services";
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

  useEffect(() => {
    (async () => {
      const response = await getAllCategories();
      if (response.status === 200 || response.status === 201)
        dispatch({
          type: ACTION_TYPE.CATEGORY,
          payload: response.data.categories,
        });
    })();
  }, []);

  const [sideBar, setSideBar] = useState(false);
  const sideBarHandler = () => {
    setSideBar((curr) => !curr);
  };
  return (
    <DataContext.Provider value={{ state, dispatch, sideBar, sideBarHandler }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
