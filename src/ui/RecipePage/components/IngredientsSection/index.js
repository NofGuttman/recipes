import {useRecipeByIdQuery} from "../../../../queries/recipeQueries";
import {useParams} from "react-router-dom";
import {Space, Typography} from "antd";
import './index.css';

const {Title, Text} = Typography;

const IngredientsSection = () => {
  const {recipeId} = useParams();
  const {data: recipeData} = useRecipeByIdQuery(recipeId);

  const formatIngredient = ({name, quantity, unit}) => (
    `${quantity || ""} ${unit || ""} ${name || ""}`
  )
  return (
    <div dir="rtl" className='recipe-ingredients-section'>
      <Title level={3}>מרכיבים</Title>
      <Space direction='vertical' size={2}>
        {recipeData?.Components?.map((component) => (
          <>
            <Text strong className='recipe-ingredient-component-title'>{component?.name}</Text>
            {component?.Ingredients?.map((ingredient) => (
              <Text className='recipe-ingredient-item'>{formatIngredient(ingredient)}</Text>
            ))}
          </>
        ))}
      </Space>
    </div>
  )
}

export default IngredientsSection