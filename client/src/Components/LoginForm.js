import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';

class LoginForm extends Component {
    render() {
        const formStyle = {
            margin: 50
        };
        const buttonStyle = {
            marginTop: 5
        }
        return (
            <Form style={formStyle}>
                <Form.Group controlId="joinForm">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" ref={ref => (this.joinID = ref)} placeholder="ID"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    <Form.Label>NAME</Form.Label>
                    <Form.Control type="text" ref={ref => (this.joinName = ref)}  placeholder="NAME"/>
                    <Form.Label>PASSWORD</Form.Label>
                    <Form.Control type="password" ref={ref => (this.joinPw = ref)}  placeholder="Password"/>
                    <Button style={buttonStyle} variant="primary" type="button">회원가입</Button>
                </Form.Group>
                <Form.Group controlId="loginForm">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" ref={ref => (this.loginID = ref)}  placeholder="ID"/>
                    <Form.Label>PASSWORD</Form.Label>
                    <Form.Control type="password" ref={ref => (this.loginPw = ref)}   placeholder="Password"/>
                    <Button style={buttonStyle} variant="primary" type="button">로그인</Button>
                </Form.Group>
            </Form>
        )
    }
}

export default LoginForm;