import './App.css';
import React, {useEffect} from "react";
import {Link, NavLink, Outlet, useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import CollectData from "./CollectData";
import DisplayFile from  "./DisplayFile";

function App() {
    return (
            <>
            <nav>
                <li>
                    <NavLink to="/collect" style={
                        ({ isActive }) =>  isActive? {color: "red"}:{color: "pink"}
                    }>Collect data</NavLink>
                </li>
                <li>
                    <NavLink to="/preview" style={
                        ({ isActive }) =>  isActive? {color: "red"}:{color: "pink"}
                    }>Preview</NavLink>
                </li>
            </nav>

            <Routes>
                <Route path="/" element={<Navigate to="/collect" />} />
                <Route path="/collect" index element={<CollectData />} />
                <Route path="/preview" element={<DisplayFile />} />
                <Route path="*" element={<h1>Page not found.</h1>} />
            </Routes>
                </>


    );
}

export default App;
