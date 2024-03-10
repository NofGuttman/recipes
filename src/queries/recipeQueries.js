import { useQuery } from 'react-query';
import axios from 'axios'

const getRecipes = async () => {
  const { data } = await axios.get(`/recipes`);
  return data;
};

const getRecipeById = async (recipeId) => {
  const { data } = await axios.get(`/recipes/${recipeId}`);
  return data;
};

export const useRecipesQuery = (recipeId) => {
  return useQuery(['recipes'], getRecipes, {
    staleTime: 60000,
  });
};

export const useRecipeByIdQuery = (recipeId) => {
  return useQuery(['recipe', recipeId], () => getRecipeById(recipeId), {
    staleTime: 60000,
  });
};
