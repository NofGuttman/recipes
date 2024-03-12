import {useRecipeByIdQuery} from "../../../../queries/recipeQueries";
import {useParams} from "react-router-dom";
import {Space, Typography} from "antd";
import './index.css';

const {Title, Text} = Typography;

const StepsSection = () => {
  const {recipeId} = useParams();
  const {data: recipeData} = useRecipeByIdQuery(recipeId);

  return (
    <div dir="rtl" className='recipe-steps-section'>
      <Title level={3}>אופן ההכנה</Title>
      <Space direction='vertical' size={2}>
        {recipeData?.Components?.map((component) => (
          <>
            <Text strong className='recipe-steps-component-title'>{component?.name}</Text>
            {component?.Steps?.map((step) => (
              <Text className='recipe-step-item'>{step?.description}</Text>
            ))}
          </>
        ))}
      </Space>
    </div>
  )
}

export default StepsSection