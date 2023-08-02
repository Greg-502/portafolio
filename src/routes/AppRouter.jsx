import React from 'react'
import GenericResponse from "src/pages/GenericResponse";
import Home from 'src/pages/Main'

import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";

export default function AppRouter() {
    const element = useRoutes([
        {
            path:'/',
            element: <Home />
        },
        {
            path:'/detail/:project',
            element: <GenericResponse message={ '¡Pronto podrás verlo desplegado!' } />
        },
        {
            path:'*',
            element: <GenericResponse />
        },
    ])

    const location = useLocation();

    if(!element) return null;

    return(
        <AnimatePresence mode="wait" initial={false}>
            {
                React.cloneElement(element, { key: location.pathname })
            }
        </AnimatePresence>
    )
}