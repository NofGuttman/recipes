import {Button, Form, Space} from "antd";
import RecipeComponentFormSection from "./RecipeComponentFormSection";
import RecipeDetailsFormSection from "./RecipeDetailsFormSection";
import {useCreateRecipeMutation} from "../../mutations/recipeMutations";
import './index.css';

const CreateRecipePage = () => {
  const [form] = Form.useForm();
  const {mutate: mutateCreateRecipe} = useCreateRecipeMutation();
  const onSubmit = (values) => {
    const components = values?.components?.map((component) => {
      const ingredients = component?.ingredients?.map(({name, quantity, unit}) => ({name, quantity, unit}));
      const steps = component?.steps?.map(({description}) => ({description}));

      return {
        name: component.name,
        steps,
        ingredients
      };
    })

    mutateCreateRecipe({...values, components });
  }

  const initialValues = {
    components: [{
      name: 'אורז טעים',
      ingredients: [
        {
          name: 'אחד',
          quantity: 200,
          unit: 'גרם',
        },
        {
          name: 'שתיים',
          quantity: 5,
        }
      ],
      steps: [
        {
          description: 'מכינים את האורז'
        },
        {
          description: 'מצלחתיפ את האורז'
        },
        {
          description: 'מגישיפ באהבה'
        }
      ],
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