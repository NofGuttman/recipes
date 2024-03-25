import {Button, Card, Col, Form, Input, InputNumber, Row, Typography} from "antd";
import {requiredFieldRule} from "../utils";

const {Title, Text} = Typography;
const {TextArea} = Input;

const RecipeComponentFormSection = () => (
  <div className='component-form-section'>
    <Card title='שלב במתכון'>
      <Form.List name='recipeComponents'>
        {(componentFields, {add: addComponent, remove: removeComponent}) => (
          <>
            {componentFields.map((componentField) => (
              <>
                <Text>שם שלב במתכון</Text>
                <Form.Item name={[componentField.name, 'componentName']} rules={[requiredFieldRule]}>
                  <Input/>
                </Form.Item>
                <Title level={5}>רכיבים</Title>
                <Form.List
                  name={[componentField.name, 'ingredients']}
                >
                  {((ingredientFields, {add, remove}) => (
                    <>
                      {ingredientFields.length > 0 && (
                        <Row gutter={16}>
                          <Col span={10}>שם מרכיב</Col>
                          <Col span={4}>כמות</Col>
                          <Col span={6}>יחידה (גרם/מ״ל)</Col>
                          <Col span={4}></Col>
                        </Row>
                      )}
                      {ingredientFields.map((ingredientField) => (
                        <Row gutter={16}>
                          <Col span={10}>
                            <Form.Item name={[ingredientField.name, 'name']} rules={[requiredFieldRule]}>
                              <Input/>
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item name={[ingredientField.name, 'quantity']}>
                              <InputNumber/>
                            </Form.Item>
                          </Col>
                          <Col span={6}>
                            <Form.Item name={[ingredientField.name, 'unit']}>
                              <Input/>
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Button danger onClick={() => remove(ingredientField.name)}>מחק</Button>
                          </Col>
                        </Row>
                      ))}
                      <Button onClick={add}>הוסף רכיב</Button>
                    </>
                  ))}
                </Form.List>
                <Title level={5}>שלבי הכנה</Title>
                <Form.List
                  name={[componentField.name, 'steps']}
                >
                  {((stepFields, {add, remove}) => (
                    <>
                      {stepFields.map((stepField) => (
                        <Row gutter={16}>
                          <Col flex='auto'>
                            <Form.Item name={[stepField.name, 'name']} rules={[requiredFieldRule]}>
                              <TextArea rows={2} />
                            </Form.Item>
                          </Col>
                          <Col flex='100px'>
                            <Button danger onClick={() => remove(stepField.name)}>מחק</Button>
                          </Col>
                        </Row>
                      ))}
                      <Button onClick={add}>הוסף שלב</Button>
                    </>
                  ))}
                </Form.List>
              </>
            ))}
          </>
        )}
      </Form.List>
    </Card>
  </div>
);

export default RecipeComponentFormSection;