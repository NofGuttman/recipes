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
      <Space direction='vertical' size={6}>
        {recipeData?.components?.map((component) => {
          const steps = component?.steps?.sort((a, b) => a.order - b.order);
          return(
            <>
              <Text strong className='recipe-steps-component-title'>{component?.name}</Text>
              {steps.map((step, i) => (
                <Space>
                  <div className='recipe-step-item-index'>{i+1}</div>
                  <Text className='recipe-step-item'>{step?.description}</Text>
                </Space>
              ))}
            </>
          )
        })}
      </Space>
    </div>
  )
}

export default StepsSection