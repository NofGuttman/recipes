import {Flex, Col, Row} from "antd";
import RecipeCard from "./components/RecipeCard";
import {useRecipesQuery} from "../../queries/recipeQueries";

const RecipesPage = () => {
  const {data: recipesData} = useRecipesQuery();

  return (
    <Row dir='rtl' gutter={[24, 24]}>
      {recipesData?.map((recipe) => (
        <Col xs={12} sm={8} md={6}>
          <RecipeCard title={recipe.title} image={recipe.image} recipeId={recipe.id}/>
        </Col>
      ))}
    </Row>
  );
};

export default RecipesPage;