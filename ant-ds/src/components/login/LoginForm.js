import React from 'react'
import AuthService from './../../Services/AuthService'
import {connect} from 'react-redux'

import { Form, Layout, message, Icon, Row, Col, Input, Button } from 'antd';
import * as actions from './../../actions/login'
import { thisExpression } from '@babel/types';
class LoginForm extends React.Component {
    
    
    handleSubmit = e => {
        e.preventDefault();
        
        
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
          this.props.getData(values);
          
        });

      };

    render() {
        const { Header, Content, Footer } = Layout;
        const { getFieldDecorator } = this.props.form;
        return (
            <Content style={{ margin: '0 50px' }}>
                <div>{this.props.loginReducer.errorMessage.toString()}</div>
                <Row type="flex" justify="center" align='middle' style={{height: '90vh'}}>
                    <Col>
                    <div style = {{maxWidth: 380, padding: 50, background: "#fff"}}>
                        <Form onSubmit={this.handleSubmit} >
                            <Form.Item>
                                {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Podaj nazwę użytkownika!' }],
                                })(
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Podaj hasło!' }],
                                })(
                                    <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>                                
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>                                
                            </Form.Item>
                        </Form>
                    </div>
                    </Col>
                </Row>
                
                
            </Content>
                   
                
            
        )
    }
}

const mapStateToProps = (state) => {
    return state;
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      getData: (data) => dispatch(actions.getData(data))
    }
  };

const WrappedLoginForm = connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: 'normal_login' })(LoginForm));

export default WrappedLoginForm;