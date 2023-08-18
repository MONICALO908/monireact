import React, { Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AppHeader } from "../appHeader/appHeader";
import { ChakraProvider } from '@chakra-ui/react'

export default function Menu() {
    const HomePage = React.lazy(() => import("../home/Home"));
    const AboutPage = React.lazy(() => import("../sobreNosotros/SobreNosotros"))
    const TaskList = React.lazy(() => import("../appTaskList/AppTaskList"))

    return <BrowserRouter>
        <div>
            <ChakraProvider>
                <AppHeader></AppHeader>
            </ChakraProvider>
            <Routes>
                <Route
                    index
                    element={
                        <Suspense fallback="loading...">
                            <HomePage />
                        </Suspense>
                    }
                />
                <Route
                    path="about"
                    element={
                        <Suspense fallback="loading...">
                            <AboutPage />
                        </Suspense>
                    }
                />
                <Route
                    path="taskList"
                    element={
                        <Suspense fallback="loading...">
                            <TaskList />
                        </Suspense>
                    }
                />
            </Routes>
        </div>
    </BrowserRouter>
}