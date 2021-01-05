import React, { useEffect, useState } from 'react';
import { Input, Button } from 'antd';
import { useHistory, useLocation, withRouter } from 'react-router-dom'
import './style.less'
const Header: React.FC<{ isHide: boolean }> = (props) => {
    const { Search } = Input;
    const history = useHistory()
    const location = useLocation()
    
    const [path, setPath] = useState('/home')
    useEffect(() => {
        setPath(location.pathname)
    })
    const onSearch = (val) => {


    }
    const toPage = (path) => {


        history.replace(path)

    }
    return (
        !props.isHide ?
            (<div className="w1200 header">
                <div className="top">
                    <div className="logo">

                    </div>
                    <div className="headerRight">
                        <Search
                            style={{ width: 240 }}
                            className="search"
                            placeholder="input search text"
                            allowClear
                            enterButton="搜索"
                            onSearch={onSearch}
                        />
                        <Button style={{ width: 150 }} className="loginBtn" type="primary" onClick={() => { toPage('/release') }}>发布需求</Button>
                        <Button style={{ width: 150 }} className="loginBtn" type="primary" onClick={() => { toPage('/login') }}>工作平台登录入口</Button>
                    </div>
                </div>

                <div className="nav">
                    <div className="w1200 nav_content">
                        <span className={`navItem ${path == '/home' || path == '/'? 'on' : ''}`} onClick={() => { toPage('/') }}>首页</span>
                        <span className={`navItem ${path.indexOf('/news') != -1 ? 'on' : ''}`} onClick={() => { toPage('/news') }}>动态</span>
                        <span className={`navItem ${path == '/release' ? 'on' : ''}`} onClick={() => { toPage('/release') }}>专家</span>
                        <span className={`navItem ${path == '/asq' ? 'on' : ''}`}>互动</span>
                    </div>
                </div>
            </div>) : <></>)
}

export default Header;