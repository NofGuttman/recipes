import {createContext, useContext, useMemo, useReducer} from "react";

export const RecipePageContext = createContext({});
export const useRecipePage = useContext(RecipePageContext);

const recipePageInitialState = {}

const RecipeProvider = ({children, recipeId}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({
      ...oldState,
      ...newState,
    }),
    recipePageInitialState
  );

  const api = useMemo(() => ({
    setState,
    state,
    recipeId,
  }))

  return(
    <RecipePageContext.Provider value={api}>{children}</RecipePageContext.Provider>
  )
}