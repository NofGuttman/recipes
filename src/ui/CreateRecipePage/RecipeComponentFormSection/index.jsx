import {Button, Col, Form, Input, InputNumber, Row, Typography} from "antd";
import {requiredFieldRule} from "../utils";

const {Title} = Typography;

const RecipeComponentFormSection = () => (
  <div className='component-form-section'>
    <Title level={3}>שם שלב במתכון</Title>
    <Form.Item name='componentName' rules={[requiredFieldRule]}>
      <Input/>
    </Form.Item>
    <Title level={3}>רכיבים</Title>
    <Form.List
      name='ingredients'
    >
      {((fields, {add, remove}) => (
        <>
          {fields.length > 0 && (
            <Row gutter={16}>
              <Col span={8}>שם מרכיב</Col>
              <Col flex='auto'>כמות</Col>
              <Col span={8}>יחידה (גרם/מ״ל)</Col>
              <Col flex='100px'></Col>
            </Row>
          )}
          {fields.map((field) => (
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item name={[field.name, 'name']} rules={[requiredFieldRule]}>
                  <Input/>
                </Form.Item>
              </Col>
              <Col flex='auto'>
                <Form.Item name={[field.name, 'quantity']}>
                  <InputNumber/>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name={[field.name, 'unit']}>
                  <Input/>
                </Form.Item>
              </Col>
              <Col flex='100px'>
                <Button danger onClick={() => remove(field.name)}>מחק</Button>
              </Col>
            </Row>
          ))}
          <Button onClick={add}>הוסף רכיב</Button>
        </>
      ))}
    </Form.List>
    <Title level={3}>שלבי הכנה</Title>
    <Form.List
      name='steps'
    >
      {((fields, {add, remove}) => (
        <>
          {fields.map((field) => (
            <Row gutter={16}>
              <Col flex='auto'>
                <Form.Item name={[field.name, 'name']} rules={[requiredFieldRule]}>
                  <Input/>
                </Form.Item>
              </Col>
              <Col flex='100px'>
                <Button danger onClick={() => remove(field.name)}>מחק</Button>
              </Col>
            </Row>
          ))}
          <Button onClick={add}>הוסף שלב</Button>
        </>
      ))}
    </Form.List>
  </div>
);

export default RecipeComponentFormSection;