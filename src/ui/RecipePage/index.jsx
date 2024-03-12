import {useParams} from 'react-router-dom';
import {useRecipeByIdQuery} from "../../queries/recipeQueries";
import IngredientsSection from './components/IngredientsSection';
import {Col, Row} from "antd";

const RecipePage = () => {

  const {recipeId} = useParams();
  const {data: recipeData} = useRecipeByIdQuery(recipeId);

  return (
    <Row gutter={24}>
      <Col span={12}>
        <img
          height={300}
          style={{ objectFit: 'cover', width: '100%' }}
          src={recipeData?.image}
        />
      </Col>
      <Col span={12}>
        <IngredientsSection/>
      </Col>
    </Row>
  )
}

export default RecipePage;