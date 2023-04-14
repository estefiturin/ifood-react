import React from "react";
import { LoginAdmin } from '../../pages/Admin';
import {useAuth} from '../../hooks';
import "./AdminLayout.scss";
import { TopMenu, SideMenu } from '../../components/Admin';

export function AdminLayout(props) {
    const { children } = props;
    //para que ingrese desde el log al home del admin
    const { auth } = useAuth();

    // si no esta logeado, muestra la pagina de admin, de lo contrario la HOME DE ADMIN
    if(!auth) return <LoginAdmin />;

    return (
        <div className="admin-layout">
            <div className="admin-layout__menu">
                <TopMenu />
            </div>

            <div className="admin-layout__main-content">
                <SideMenu>
                    {children}
                </SideMenu>
            </div>
            
        </div>
    )
}