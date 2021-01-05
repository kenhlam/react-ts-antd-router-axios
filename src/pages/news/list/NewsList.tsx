import React from 'react';

import { _newsList } from "@/service"

import HotNewsList from '@/components/hotNews'
// import HotNewsList from '../../../components/hotNews'

import { Row, Col } from 'antd';

interface listParam {
    typename: string,
    [propName: string]: any
}
interface IProps {
    history: any
}
export default class NewsList extends React.Component<IProps> {
    public state = {
        list: []

    }
    // constructor(props){
    //     super(props)
    //     this.state = {

    //     }
    // }

    public getNewsList = async (opt?: Object) => {
        let param: listParam = Object.assign({
            pageSize: "2",
            pindex: "1",
            typename: "hyyb"
        }, opt)
        const res: any = await _newsList(param);
        console.log('getNewsList hook');
        this.setState({
            list: JSON.parse(res.result)
        })



    }
    componentDidMount() {
        this.getNewsList()
    }

    public render() {
        const { history } = this.props;
        return (<div className="w1200">
            <Row gutter={[16, 16]}>
                <Col span={16}>
                    {
                        this.state.list.map((v: { title: String, id: number }) => (<p className="test" key={v.id} onClick={() => { history.push(`/news/${v.id}`) }}>{v.title}</p>))
                    }
                </Col>
                <Col span={8}>
                    <HotNewsList />
                </Col>
            </Row>

        </div>)
    }
}