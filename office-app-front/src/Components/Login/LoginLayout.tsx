import React, { FunctionComponent } from 'react'
import { Layout,   Row, Col } from 'antd';
import LoginForm from './LoginForm';
import './style.css';
const { Header, Footer, Sider, Content } = Layout;
const LoginLayout : FunctionComponent = () => {
    return (        
        <Layout  style={{ minHeight: '100vh', backgroundColor: '#2a3342' }}   >
            <Content >
                <Row  style={{height: '100vh' }} type='flex' justify='center' align='middle'>                    
                    <Col span={12}  xs={20} sm={16} md={12} lg={8} xl={4} >
                        <div style={{background: '#fff', padding: '10px', marginTop: '-80px'}}>
                            <LoginForm/>
                        </div>
                        
                    </Col>                    
                </Row>
            </Content> 
        </Layout>
    )
}

export default LoginLayout