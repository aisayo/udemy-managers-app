import React, { Component } from 'react';
import { Card, CardItem, Input, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';


class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    } 

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password })
    }

    render() {
        return(
            <Card>
                <CardItem>
                    <Input 
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email.value}
                    />
                </CardItem>
                   

                <CardItem>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangePassword={this.onPasswordChange.bind(this)}
                        value={this.props.password.value}
                    />
                </CardItem>

                <CardItem>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>

                </CardItem>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    const { email, password } = state.auth; 
    console.log("state", state)
    return {
        email: email, 
        password: password
    }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);