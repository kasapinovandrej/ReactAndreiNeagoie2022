import { createContext, useEffect, useReducer } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase";
import { createAction } from "../utils/reducer/reducer.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
  setProducts: () => {},
});

const INITIAL_STATE = {
  categoriesMap: {},
};

const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES_MAP: "SET_CATEGORIES_MAP",
};

const categoriesMapReducer = (state, action) => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: action.payload,
      };
    default:
      throw new Error(`Unhandled type ${action.type}`);
  }
};

export const CategoriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(categoriesMapReducer, INITIAL_STATE);
  const { categoriesMap } = state;

  const setCategoriesMap = (categories) => {
    dispatch(
      createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categories)
    );
  };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categoriesMap, setCategoriesMap }}>
      {children}
    </CategoriesContext.Provider>
  );
};
