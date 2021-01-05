import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Carousel, Row, Col, Tabs } from 'antd';
import banner1 from "@/imgs/lunbo1.png"
import banner2 from "@/imgs/lunbo2.png"
import test from "@/imgs/test.jpg"
import xqdtImg from "@/imgs/xqdt.png"
// import $ from 'jquery';
// import "@/lib/slider/jquery.bxslider"
import { _newsList, _getVideoList, _rwList } from "@service"

import "./style.less"
// import { set } from 'mobx';

interface listParam {
    typename: string,
    [propName: string]: any
}
const tabList = [{
    id: '1',
    type: 'tzgg',
    path: "/home",
    name: "通知公告"
}, {
    id: '2',
    path: "/home",
    type: 'kjwx',
    name: "科技文献"
}, {
    id: '3',
    type: 'zljs',
    path: "https://wxkx.wanxiangyun.net/search/index",
    name: "专利检索"
}]
const Home: React.FC = () => {
    const { TabPane } = Tabs;
    const history = useHistory();
    const [newsList, setNewsList] = useState<any>({})
    const [currentList, setCurrentList] = useState<any>([])
    const [videoList, setVideoList] = useState<any>([])
    const [rwList, setRwList] = useState<any>([])
    const sw_settings = {
        dots: true,
        infinite: true,


        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    useEffect(() => {
        getNewsList({
            typename: "tzgg",
            pageSize: "5"
        })
        getNewsList({
            typename: "kjwx",
            pageSize: "5"
        })
        getNewsList({
            typename: "hyyb",
            pageSize: "5"
        })
        console.log('effecthook');
        
        getVideoList()
        getRwList()
    }, [])
    useEffect(() => {
        if (!currentList.length && newsList.tzgg && newsList.tzgg.length) {
            setCurrentList(newsList.tzgg)
        }

    }, [newsList])

    const getNewsList = async (opt?: Object) => {
        let param: listParam = Object.assign({
            pageSize: "2",
            pindex: "1",
            typename: "hyyb"
        }, opt)
        const res: any = await _newsList(param);
        console.log('getNewsList hook');
        setNewsList((data) => {
            let newData = { ...data, [param.typename]: JSON.parse(res.result) }
            return newData

        })


    }
    const getVideoList = async (opt?: Object) => {
        const res: any = await _getVideoList({
            pageSize: "2",
            pindex: 1,
            typename: "zjrckzkdx"
        });
        setVideoList(JSON.parse(res.result))
    }
    const getRwList = async (opt?: Object) => {
        const res: any = await _rwList({
            pageSize: "999",
            pindex: "1",
            typename: "zjrck"
        });
        setRwList(JSON.parse(res.result))
    }
    const goReleasePage = () => {
        history.replace("/release")
    }
    const tabClick = (val) => {
        console.log(val);
        const tab: any = tabList.find(v => v.type == val)
        if (val == 'zljs') {
            window.open(tab.path)
        } else {
            setCurrentList(newsList[val])
        }
    }


    return (
        <div className="page-home">
            <section className="banner">
                <Carousel autoplay>
                    <div>
                        <div className="s_item" style={{ backgroundImage: 'url(' + banner1 + ')', color: "red" }}>
                        </div>
                    </div>
                    <div>
                        <div className="s_item" style={{ backgroundImage: 'url(' + banner2 + ')' }}>
                        </div>
                    </div>
                </Carousel>
            </section>

            <section className="tzgg w1200">
                <Row gutter={20}>
                    {
                        newsList.tzgg && newsList.tzgg.map((v: any) => {
                            return (
                                <Col span={12} key={v.id}>
                                    {v.title}
                                </Col>
                            )
                        })
                    }

                </Row>
            </section>
            <section className="topNews w1200">
                <Row gutter={20}>
                    <Col span={12}>
                        <Carousel>
                            <div className="swItem">
                                <img src={test} alt="" />
                                <div className="title">1</div>
                            </div>
                            <div className="swItem">
                                <img src={test} alt="" />
                                <div className="title">2</div>
                            </div>
                            <div className="swItem">
                                <img src={test} alt="" />
                                <div className="title">3</div>
                            </div>
                        </Carousel>
                    </Col>
                    <Col span={12}>
                        <ul>
                            {newsList.tzgg && newsList.tzgg.map(v => (<li key={v.id}>{v.title}</li>))}
                        </ul>

                    </Col>
                </Row>
            </section>
            <section className="xqdt w1200">
                {/* <Link to='/release'><img src={xqdtImg} onClick={goReleasePage} alt=""/></Link>    */}
                <img className="vImg" src={xqdtImg} onClick={goReleasePage} alt="" />
            </section>
            <section className="newsAndVideo w1200">
                <Row gutter={20}>
                    <Col span={12}>
                        <Tabs defaultActiveKey="tzgg" onChange={tabClick}>
                            {
                                tabList.map(v => {
                                    console.log('dom hook');
                                    
                                    return (
                                        <TabPane tab={v.name} key={v.type}>
                                            <ul>
                                                {currentList.map(v => {
                                                    return (
                                                        <li key={v.id}>{v.title}</li>
                                                    )
                                                })}
                                            </ul>

                                        </TabPane>
                                    )
                                })
                            }

                        </Tabs>
                    </Col>
                    <Col span={12}>
                        <Row>
                            {
                                videoList.map(v => {
                                    return (<Col span={12} key={v.id}>
                                        <img className="vImg" src={'/' + v.cover} alt="" />
                                    </Col>)
                                })
                            }

                        </Row>
                    </Col>

                </Row>
            </section>
            <section className="swiper w1200">
                <div>
                    <Carousel  {...sw_settings}>
                        {
                            rwList.map(v => {
                                return (

                                    <img key={v.id} src={'/' + v.images} alt="" />

                                )
                            })
                        }
                    </Carousel>
                </div>
            </section>
        </div>
    )
}
// export default Home;

class Home1 extends React.Component<any> {
    constructor(props) {
        super(props)
        this.state = {
            newsList: {
                txgg: [],
                xhdt: []
            }
        }
    }
    async getNewsList(opt?: Object) {
        let res: any = await _newsList({
            pageSize: "4",
            pindex: "1",
            typename: "hyyb"
        });
        // this.setState({
        //     newsList:Object.assign((this.state as any).newsList,{
        //         tzgg:JSON.parse(res.result)
        //     })
        // })
        // setTimeout( ()=>{
        //     console.log((this.state as any).newsList);

        // },1)

    }
    componentDidMount() {
        this.getNewsList();
    }
    render() {


        return <div className="page-home">
            <section className="banner">
                <Carousel autoplay>
                    <div>
                        <div className="s_item" style={{ backgroundImage: 'url(' + banner1 + ')', color: "red" }}>
                        </div>
                    </div>
                    <div>
                        <div className="s_item" style={{ backgroundImage: 'url(' + banner2 + ')' }}>
                        </div>
                    </div>
                </Carousel>
            </section>
            <section className="topNews">

            </section>

        </div>
    }

}
export default Home;