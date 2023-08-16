import React, { Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
export default function Menu() {
    const HomePage = React.lazy(() => import("../home/Home"));
    const AboutPage = React.lazy(() => import("../sobreNosotros/SobreNosotros"))
    const TaskList = React.lazy(() => import("../appTaskList/AppTaskList"))

    return <BrowserRouter>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/taskList">TaskList</Link>
                    </li>
                </ul>
            </nav>
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