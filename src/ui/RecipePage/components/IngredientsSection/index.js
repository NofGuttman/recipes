import {useRecipeByIdQuery} from "../../../../queries/recipeQueries";
import {useParams} from "react-router-dom";
import {Checkbox, Space, Typography} from "antd";
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
      <Title level={3} style={{marginTop: 0}}>מרכיבים</Title>
      <Space direction='vertical' size={2}>
        {recipeData?.components?.map((component) => (
          <>
            <Text strong className='recipe-ingredient-component-name'>{component?.name}</Text>
            {component?.ingredients?.map((ingredient) => (
              <Checkbox>
                <Text className='recipe-ingredient-item'>{formatIngredient(ingredient)}</Text>
              </Checkbox>
            ))}
          </>
        ))}
      </Space>
    </div>
  )
}

export default IngredientsSection