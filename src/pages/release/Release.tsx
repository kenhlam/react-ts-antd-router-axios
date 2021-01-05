import React, { useState, useEffect } from 'react'
import { Tabs, Row, Col, Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useHistory, Link } from 'react-router-dom'

import "./style.less"

import { _demondList } from "@/service"
const { TabPane } = Tabs;
// const { Item } = Breadcrumb;
const SERVICE_MAP = {
    1: "服务需求",
    2: "专家需求",
    3: "技术需求",
    4: "政策需求",
}
const Release: React.FC = () => {
    const history = useHistory()
    const [list, setList] = useState<any>([]);
    const [tabKey, setTabKey] = useState<any>(1);
    useEffect(() => {
        getList()
    }, [])

    // let param = Object.assign({
    //     type: map[key],  //类型(1:找服务 2:找专家 3:找技术 4:找政策)
    //     "status": 3,//常量
    //     "pindex": this.pageIdx,
    //     "pageSize": 6
    // })
    // let res = await _demondList(param);


    const getList = async () => {
        const res: any = await _demondList({
            type: tabKey,  //类型(1:找服务 2:找专家 3:找技术 4:找政策)
            "status": 3,//常量
            "pindex": 1,
            "pageSize": 6
        })
        setList(JSON.parse(res.result))

    }
    const tabClick = (key) => {
        console.log(key);
        setTabKey(key)
        getList();

    }
    return (<div className="w1200">
        {/* <Link to="/home"><HomeOutlined /> 首页</Link> */}
        <div className="hidden">
            <Breadcrumb separator=">">
                <Breadcrumb.Item  > <Link to="/home"><HomeOutlined /> 首页</Link> </Breadcrumb.Item>
            </Breadcrumb>
        </div>

        <div className="hidden">
            <Row gutter={[32, 0]}>
                <Col span={16}>
                    <Tabs defaultActiveKey='1' onChange={tabClick}>
                        <TabPane tab="找服务" key="1">
                            {
                                list.map((v) => {
                                    return (<div key={v.id}>
                                        {v.title}
                                    </div>)
                                })
                            }
                        </TabPane>
                        <TabPane tab="找专家" key="2">
                            {
                                list.map((v) => {
                                    return (<div key={v.id}>
                                        {v.title}
                                    </div>)
                                })
                            }
                        </TabPane>
                        <TabPane tab="找技术" key="3">
                            {
                                list.map((v) => {
                                    return (<div key={v.id}>
                                        {v.title}
                                    </div>)
                                })
                            }
                        </TabPane>
                        <TabPane tab="找政策" key="4">
                            {
                                list.map((v) => {
                                    return (<div key={v.id}>
                                        {v.title}
                                    </div>)
                                })
                            }
                        </TabPane>
                    </Tabs>

                </Col>
                <Col span={8}>
                    <p onClick={() => { history.push('/findExpert') }}>{SERVICE_MAP[tabKey]}
                    </p>
                </Col>
            </Row>
        </div>


    </div>)
}

export default Release;