import {Button, Form, Space} from "antd";
import RecipeComponentFormSection from "./RecipeComponentFormSection";
import RecipeDetailsFormSection from "./RecipeDetailsFormSection";
import './index.css';

const CreateRecipePage = () => {
  const [form] = Form.useForm();
  const onSubmit = (values) => {
    console.log(values);
  }

  const initialValues = {
    recipeComponents: [{
      ingredients: [{}],
      steps: [{}],
    }],
  }

  return (
    <Form
      dir='rtl'
      name="create-recipe-form"
      form={form}
      onFinish={onSubmit}
      initialValues={initialValues}
    >
      <Space direction='vertical' size={20}>
        <RecipeDetailsFormSection/>
        <RecipeComponentFormSection/>
        <Button type='primary' htmlType='submit'>
          שמור
        </Button>
      </Space>
    </Form>
  );
}

export default CreateRecipePage;