import {useParams} from 'react-router-dom';
import {useRecipeByIdQuery} from "../../queries/recipeQueries";
import IngredientsSection from './components/IngredientsSection';

const RecipePage = () => {

  const {recipeId} = useParams();
  const {data: recipeData} = useRecipeByIdQuery(recipeId);

  return (
    <IngredientsSection/>
  )
}

export default RecipePage;