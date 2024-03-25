import {Button, Col, Form, Input, InputNumber, Row, Typography} from "antd";

const {Title} = Typography;

const CreateRecipePage = () => {
  const [form] = Form.useForm();
  const onSubmit = (values) => {
    console.log(values);
  }

  const initialValues = {
    ingredients: [{}],
    steps: [{}],
  }

  const requiredFieldRule = {
    required: true,
    message: 'שדה חובה',
  }

  return (
    <Form
      dir='rtl'
      name="create-recipe-form"
      form={form}
      onFinish={onSubmit}
      initialValues={initialValues}
    >
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
                <Col span={4}>כמות</Col>
                <Col span={8}>יחידה (גרם/מ״ל)</Col>
                <Col span={4}></Col>
              </Row>
            )}
            {fields.map((field) => (
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item name={[field.name, 'name']} rules={[requiredFieldRule]}>
                    <Input/>
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item name={[field.name, 'quantity']}>
                    <InputNumber/>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item name={[field.name, 'unit']}>
                    <Input/>
                  </Form.Item>
                </Col>
                <Col span={4}>
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

      <Button htmlType='submit'>
        שמור
      </Button>
    </Form>
  );
}

export default CreateRecipePage;