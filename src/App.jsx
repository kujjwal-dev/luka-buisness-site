import { Layout, Typography, Row, Col, Card, List, Divider, Button, Steps, Tag } from 'antd';
import { CheckCircleTwoTone, SafetyCertificateTwoTone, ApiTwoTone, UserOutlined, BankOutlined, MobileOutlined, LockOutlined, ThunderboltTwoTone, SmileTwoTone } from '@ant-design/icons';
import './App.css';
import Navbar from './Navbar';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const features = [
  {
    title: 'Digital Wallets',
    icon: <MobileOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
    details: [
      'Create & Manage Wallets',
      'Wallet-to-Wallet Transfers',
      'Transaction History',
    ],
  },
  {
    title: 'Money Transfers',
    icon: <BankOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
    details: [
      'Bank Transfers',
      'M-Pesa Integration',
      'International Transfers',
    ],
  },
  {
    title: 'Utility & Bill Payments',
    icon: <CheckCircleTwoTone twoToneColor="#faad14" style={{ fontSize: 32 }} />,
    details: [
      'Airtime Top-Up',
      'Bill Payments',
      'Payment Status Tracking',
    ],
  },
  {
    title: 'User Onboarding & KYC',
    icon: <UserOutlined style={{ fontSize: 32, color: '#722ed1' }} />,
    details: [
      'Easy Registration',
      'KYC Verification',
      'Onboarding Status',
    ],
  },
  {
    title: 'Account Management',
    icon: <LockOutlined style={{ fontSize: 32, color: '#eb2f96' }} />,
    details: [
      'Profile Management',
      'Balance & Statements',
      'Account Closure',
    ],
  },
  {
    title: 'Security & Compliance',
    icon: <SafetyCertificateTwoTone twoToneColor="#13c2c2" style={{ fontSize: 32 }} />,
    details: [
      'Role-Based Access',
      'Two-Factor Authentication',
      'Data Encryption',
      'Regulatory Compliance',
    ],
  },
  {
    title: 'API & Webhook Integrations',
    icon: <ApiTwoTone twoToneColor="#2f54eb" style={{ fontSize: 32 }} />,
    details: [
      'Choice Bank API',
      'Webhook Notifications',
      'Developer-Friendly',
    ],
  },
];

const audience = [
  { label: 'Individuals', desc: 'Anyone looking for a modern, easy-to-use digital wallet and payment solution.' },
  { label: 'Businesses', desc: 'Companies needing payroll, bulk payments, or seamless integration with banking APIs.' },
  { label: 'Developers', desc: 'Teams building fintech solutions who want robust, ready-to-use banking APIs.' },
];

function App() {
  return (
    <Layout style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #e6f7ff 0%, #ffffff 100%)' }}>
      <Navbar />
      <Content style={{ width: '100%' }}>
        {/* Hero Section */}
        <section className="hero-section" style={{ marginBottom: 64 }}>
          <Row gutter={[32, 32]} align="middle" justify="center" style={{ minHeight: 400 }}>
            <Col xs={24} md={14}>
              <Title style={{ fontSize: 56, marginBottom: 24, fontWeight: 900 }}>Luka – Banking, Simplified. <Text type="secondary">Your money, your way.</Text></Title>
              <Paragraph style={{ fontSize: 22, marginBottom: 0, color: '#333' }}>
                Luka is a next-generation digital banking platform designed to make financial services simple, secure, and accessible for everyone. Whether you’re an individual or a business, Luka empowers you to manage your finances, make payments, and transfer money with ease—all from one unified platform.
              </Paragraph>
              <div style={{ marginTop: 32 }}>
                <Button type="primary" size="large" href="#get-started">Open Your Wallet</Button>
                <Button size="large" style={{ marginLeft: 16 }} href="#features">Explore Features</Button>
              </div>
            </Col>
            <Col xs={24} md={10} style={{ textAlign: 'center' }}>
              <img src="/Luka.png" alt="Luka Logo" style={{ maxWidth: 280, width: '100%', borderRadius: 20, boxShadow: '0 8px 40px #1890ff22' }} />
            </Col>
          </Row>
        </section>
        <div className="section-bg">
          <section className="section-block">
            <Divider id="features" orientation="center" style={{ fontSize: 32, color: '#1890ff', marginBottom: 40, fontWeight: 900 }}>Core Features</Divider>
            <Row gutter={[32, 32]}>
              {features.map((feature, idx) => (
                <Col xs={24} sm={12} md={8} key={feature.title}>
                  <Card hoverable bordered style={{ borderRadius: 32, minHeight: 260, boxShadow: '0 2px 16px #e6f7ff' }}>
                    <div style={{ textAlign: 'center', marginBottom: 12 }}>{feature.icon}</div>
                    <Title level={4} style={{ textAlign: 'center', marginBottom: 12, fontWeight: 800 }}>{feature.title}</Title>
                    <List
                      size="small"
                      dataSource={feature.details}
                      renderItem={item => <List.Item><CheckCircleTwoTone twoToneColor="#52c41a" /> {item}</List.Item>}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </section>
        </div>
        <div className="section-bg">
          <section className="section-block">
            <Divider orientation="center" style={{ fontSize: 32, color: '#1890ff', marginBottom: 40, fontWeight: 900 }}>Who is Luka For?</Divider>
            <Row gutter={[32, 32]}>
              {audience.map(aud => (
                <Col xs={24} md={8} key={aud.label}>
                  <Card bordered style={{ borderRadius: 32, minHeight: 120, boxShadow: '0 2px 16px #e6f7ff' }}>
                    <Title level={5} style={{ fontWeight: 800 }}>{aud.label}</Title>
                    <Paragraph>{aud.desc}</Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>
        </div>
        <div className="section-bg">
          <section className="section-block">
            <Divider orientation="center" style={{ fontSize: 32, color: '#1890ff', marginBottom: 40, fontWeight: 900 }}>Why Luka?</Divider>
            <Row gutter={[32, 32]} justify="center" style={{ justifyContent: 'center', textAlign: 'center' }}>
              <Col xs={24} md={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24, justifyContent: 'center' }}>
                  <CheckCircleTwoTone twoToneColor="#2f54eb" style={{ fontSize: 32, marginRight: 16 }} />
                  <div style={{ textAlign: 'left' }}>
                    <strong>All-in-One</strong><br />Banking, payments, and transfers in one place.
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24, justifyContent: 'center' }}>
                  <ThunderboltTwoTone twoToneColor="#52c41a" style={{ fontSize: 32, marginRight: 16 }} />
                  <div style={{ textAlign: 'left' }}>
                    <strong>Fast & Reliable</strong><br />Real-time processing and 24/7 availability.
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24, justifyContent: 'center' }}>
                  <SafetyCertificateTwoTone twoToneColor="#eb2f96" style={{ fontSize: 32, marginRight: 16 }} />
                  <div style={{ textAlign: 'left' }}>
                    <strong>Secure</strong><br />Industry-leading security and compliance.
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24, justifyContent: 'center' }}>
                  <SmileTwoTone twoToneColor="#722ed1" style={{ fontSize: 32, marginRight: 16 }} />
                  <div style={{ textAlign: 'left' }}>
                    <strong>User-Centric</strong><br />Designed for simplicity and ease of use.
                  </div>
                </div>
              </Col>
            </Row>
          </section>
        </div>
        <div className="section-bg">
          <section className="section-block">
            <Divider orientation="center" style={{ fontSize: 32, color: '#1890ff', marginBottom: 40, fontWeight: 900 }}>How to Get Started</Divider>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Card style={{ maxWidth: 900, width: '100%', borderRadius: 32, boxShadow: '0 4px 32px #e6f7ff', padding: 32, background: '#f8fbff', margin: '0 auto' }}>
                <Steps
                  id="get-started"
                  direction="horizontal"
                  size="default"
                  current={3}
                  style={{ marginBottom: 32 }}
                  items={[
                    {
                      title: 'Sign Up',
                      description: 'Register with minimal hassle and start using Luka right away.',
                      icon: <UserOutlined style={{ color: '#1890ff' }} />,
                    },
                    {
                      title: 'Complete KYC',
                      description: 'Upload documents and complete identity verification.',
                      icon: <SafetyCertificateTwoTone twoToneColor="#52c41a" />,
                    },
                    {
                      title: 'Explore Features',
                      description: 'Access wallets, payments, transfers, and more.',
                      icon: <ApiTwoTone twoToneColor="#faad14" />,
                    },
                    {
                      title: 'Enjoy Secure Banking',
                      description: 'Experience fast, reliable, and secure digital banking.',
                      icon: <LockOutlined style={{ color: '#eb2f96' }} />,
                    },
                  ]}
                />
                <div style={{ textAlign: 'center', marginTop: 24 }}>
                  <Button type="primary" size="large" href="#" style={{ borderRadius: 16, fontWeight: 700, fontSize: 18 }}>
                    Start Now
                  </Button>
                </div>
              </Card>
            </div>
          </section>
        </div>
        <Footer style={{ textAlign: 'center', background: '#fff', marginTop: 32 }}>
          <Text type="secondary">© {new Date().getFullYear()} Luka. All rights reserved.</Text>
        </Footer>
      </Content>
    </Layout>
  );
}

export default App;
