import React from "react";
import '@styles/global.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@containers/Layout";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Shopping_cart from "../pages/Shopping_cart";
import My_kawasaki from "../pages/My_kawasaki";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/shopping-cart" element={<Shopping_cart />} />
                    <Route exact path="/my-kawasaki" element={<My_kawasaki />} />
                    <Route exact path="/zx-6r-general" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;