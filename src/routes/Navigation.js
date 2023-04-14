import React from "react";
import { map } from "lodash";
//sistema de rutas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from "./routes";

export function Navigation() {

    
    return (
        <BrowserRouter>
            <Routes>
                {map(routes, (route, index) => (
                    <Route 
                        key={index}
                        path={route.path}
                        element={
                            <route.layout>
                                <route.component />
                            </route.layout>
                        }
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
    
}