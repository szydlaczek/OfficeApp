import React from 'react'
import {connect} from 'react-redux'

import { Form, Layout, message, Icon, Row, Col, Input, Button } from 'antd';
import signIn from './../../actions/signIn'

class LoginForm extends React.Component {
    
    
    handleSubmit = e => {
        e.preventDefault();
        
        
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
          this.props.getData(values, this.callBack);
          
        });

      };
    
    callBack = () => {
        message.error('This is an error message');
    }  

    render() {
        const { Content } = Layout;
        const { getFieldDecorator } = this.props.form;
        return (
            <Content style={{ margin: '0 50px' }}>
                
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
                                <Button type="primary" htmlType="submit" className="login-form-button" loading={this.props.rootReducer.isLoading}>
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
    return  state;
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      getData: (data, callBack) => dispatch(signIn(data, callBack))
    }
  };

const WrappedLoginForm = connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: 'normal_login' })(LoginForm));

export default WrappedLoginForm;