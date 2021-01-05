
import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { useLocation } from 'react-router-dom'
import Header from './header'
import MainRouter from '@/router/mainRouter'
const MainLayout: React.FC = () => {
    const { Content, Footer } = Layout;
    const [path, setPath] = useState('/home');
    const location = useLocation()
    useEffect(() => {
        setPath(location.pathname)
    }, [location]);
    return (<>
        <Header isHide={path == '/login'} />
        {/* <HeaderBar  /> */}
        <Content>
            <MainRouter />
        </Content>
        {
            path == '/login' ? (<></>) : (<Footer>Footer</Footer>)
        }

    </>)
}

export default MainLayout;