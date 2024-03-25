import {Button, Col, Form, Input, InputNumber, Row, Typography} from "antd";
import RecipeComponentFormSection from "./RecipeComponentFormSection";

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

  return (
    <Form
      dir='rtl'
      name="create-recipe-form"
      form={form}
      onFinish={onSubmit}
      initialValues={initialValues}
    >
      <RecipeComponentFormSection />
      <Button htmlType='submit'>
        שמור
      </Button>
    </Form>
  );
}

export default CreateRecipePage;