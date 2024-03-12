import {useParams} from 'react-router-dom';
import {useRecipeByIdQuery} from "../../queries/recipeQueries";
import IngredientsSection from './components/IngredientsSection';
import {Col, Divider, Row} from "antd";
import StepsSection from "./components/StepsSection";
import {Typography} from "antd";
import './index.css';

const {Text} = Typography;
const RecipePage = () => {

  const {recipeId} = useParams();
  const {data: recipeData} = useRecipeByIdQuery(recipeId);

  return (
    <div>
      <Divider orientation='right'><Text className='main-title-recipe-name'>{recipeData?.title}</Text></Divider>
      <Row gutter={24}>
        <Col span={12}>
          <img
            height={300}
            style={{objectFit: 'cover', width: '100%'}}
            src={recipeData?.image}
          />
        </Col>
        <Col span={12}>
          <IngredientsSection/>
        </Col>
      </Row>
      <Divider />
      <StepsSection />
    </div>
  )
}

export default RecipePage;