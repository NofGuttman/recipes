import {useRecipeByIdQuery} from "../../../../queries/recipeQueries";
import {useParams} from "react-router-dom";
import {List, Typography} from "antd";

const {Title, Text} = Typography;
const IngredientsSection = () => {
  const {recipeId} = useParams();
  const {data: recipeData} = useRecipeByIdQuery(recipeId);

  const formatIngredient = ({name, quantity, unit}) => (
    `${quantity || ""} ${unit || ""} ${name || ""}`
  )
  return (
    <div>
      {recipeData?.Components?.map((component) => (
        <List
          dir='rtl'
          header={component?.name}
          bordered
          dataSource={component?.Ingredients || []}
          renderItem={(ingredient) => (
            <List.Item style={{height: 20}}>
              {formatIngredient(ingredient)}
            </List.Item>
          )}
        />
      ))}
    </div>
  )
}

export default IngredientsSection