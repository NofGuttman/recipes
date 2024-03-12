import {Header} from "antd/es/layout/layout";
import {useNavigate} from "react-router-dom";
import { Typography } from "antd";
import './index.css';

const { Title } = Typography;

const MainLayoutHeader = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  }

  return (
    <Header className='main-layout-header'>
      <Title onClick={handleClick}>נשוי לקופה</Title>
    </Header>
  )
}

export default MainLayoutHeader;