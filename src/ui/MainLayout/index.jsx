import {Layout} from "antd";
import {Content, Header, Footer} from "antd/es/layout/layout";
import MainLayoutHeader from "./components/MainLayoutHeader";
import './index.css';

const MainLayout = ({children}) => (
  <Layout className='main-layout'>
    <MainLayoutHeader />
    <Content className='main-layout-content'>
      <div className='main-layout-content-section'>
        {children}
      </div>
    </Content>
    <Footer>Footer</Footer>
  </Layout>
);

export default MainLayout