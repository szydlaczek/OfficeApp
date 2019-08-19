import React, { FormEvent, useState } from 'react'
import { FormComponentProps } from 'antd/es/form';
import { useDispatch } from "react-redux";
import { Form, Layout, message, Icon, Row, Col, Input, Button } from 'antd';

interface LoginProps extends FormComponentProps {
    UserName:string,
    Password:string
}

const {  Content } = Layout;

const  UserLoginForm = (props: LoginProps) => {

    const { getFieldDecorator } = props.form;
    return (
        <Form  className="login-form">
            <Form.Item>
            {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
            })(
                <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
                />,
            )}
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
            })(
                <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
                />,
            )}
            </Form.Item>        
        </Form>
    )
}

const LoginForm = Form.create()(UserLoginForm)
export default LoginForm;