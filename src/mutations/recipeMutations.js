import {useMutation} from 'react-query';
import axios from 'axios'

export const createRecipe = async (values) => {
  const {data} = await axios.post(`/recipes/create-recipe`, values);
  return data;
};

export const useCreateRecipeMutation = () => {
  return useMutation(createRecipe);
};
