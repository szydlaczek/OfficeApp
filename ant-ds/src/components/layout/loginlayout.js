import React from 'react'
import WrappedLoginForm from './../login/LoginForm'
import { Layout} from 'antd';
import './../../login.css'
class Login extends React.Component {
    render() {
        return (
            <Layout  style={{ minHeight: '100vh' }} className="loginContainer">
                <WrappedLoginForm/>
            </Layout>
        )
    }
}
export default Login;