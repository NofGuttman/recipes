import {Card, Col, Form, Input, Row, Typography} from 'antd';
import {requiredFieldRule} from "../utils";

const {Text} = Typography;
const RecipeDetailsFormSection = () => (
  <div className='recipe-details'>
    <Card title='פרטים כלליים' className='create-recipe-form-card'>
      <Text>שם המתכון</Text>
      <Form.Item name='recipeTitle' rules={[requiredFieldRule]}>
        <Input/>
      </Form.Item>
      <Text>פירוט</Text>
      <Form.Item name='recipeDescription'>
        <Input/>
      </Form.Item>
      <Row gutter={16}>
        <Col>
          <Text>זמן הכנה</Text>
          <Form.Item name='prepTime'>
            <Input/>
          </Form.Item>
        </Col>
        <Col>
          <Text>זמן בישול</Text>
          <Form.Item name='cookTime'>
            <Input/>
          </Form.Item>
        </Col>
        <Col>
          <Text>סה״כ זמן בישול</Text>
          <Form.Item name='totalTime'>
            <Input/>
          </Form.Item>
        </Col>
      </Row>
    </Card>
  </div>
);

export default RecipeDetailsFormSection;
