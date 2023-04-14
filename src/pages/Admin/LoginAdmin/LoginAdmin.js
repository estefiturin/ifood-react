import React from "react";
import { LoginForm } from '../../../components/Admin';
import './LoginAdmin.scss'; 
import logo from '../../../assets/logo.png';

export function LoginAdmin() {
    return (
        <div className="login-admin">
            <div className="login-admin__content">
                <img src={logo} alt='ifood-logo' />
                <h1>Entrar al panel</h1>
                <LoginForm />
            </div>
        </div>
    )
}