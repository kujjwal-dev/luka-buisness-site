import { Layout, Row, Col, Typography, Menu } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

export default function Navbar() {
  return (
    <Header style={{ background: '#fff', boxShadow: '0 2px 8px #f0f1f2', padding: 0, position: 'sticky', top: 0, zIndex: 100 }}>
      <Row align="middle" justify="space-between" style={{ height: '64px', padding: '0 32px' }}>
        <Col>
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/Luka.png" alt="Luka Logo" style={{ height: 48, verticalAlign: 'middle' }} />
            <Title level={3} style={{ display: 'inline', marginLeft: 16, color: '#1890ff', verticalAlign: 'middle', marginBottom: 0 }}>Luka</Title>
          </a>
        </Col>
        <Col>
          <nav style={{ display: 'flex', gap: 32 }}>
            <a href="#" style={{ fontWeight: 600, fontSize: 18, color: '#1890ff', textDecoration: 'none' }}>Home</a>
            <a href="#about" style={{ fontWeight: 600, fontSize: 18, color: '#1890ff', textDecoration: 'none' }}>About</a>
            <a href="#contact" style={{ fontWeight: 600, fontSize: 18, color: '#1890ff', textDecoration: 'none' }}>Contact</a>
          </nav>
        </Col>
      </Row>
    </Header>
  );
} 