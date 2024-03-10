import {Layout} from "antd";
import {Content, Header, Footer} from "antd/es/layout/layout";
import './index.less';

const MainLayout = ({children}) => (
  <Layout>
    <Header className='main-layout-header'>Header</Header>
    <Content>{children}</Content>
    <Footer>Footer</Footer>
  </Layout>
);

export default MainLayout