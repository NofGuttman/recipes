import {Button, Form, Space, Typography} from "antd";
import RecipeComponentFormSection from "./RecipeComponentFormSection";
import RecipeDetailsFormSection from "./RecipeDetailsFormSection";

const {Title} = Typography;

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
      <Space direction='vertical'>
        <RecipeDetailsFormSection/>
        <RecipeComponentFormSection/>
        <Button htmlType='submit'>
          שמור
        </Button>
      </Space>
    </Form>
  );
}

export default CreateRecipePage;