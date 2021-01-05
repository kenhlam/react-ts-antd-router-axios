import React, { useEffect, useState  } from 'react';
import {useHistory} from 'react-router-dom'
import {  _newsList } from "@/service"
const HotNews: React.FC = () => {
    const [list, setList] = useState<any>([]);
    const history = useHistory()
    const getHotList = async () => {
        const res: any = await _newsList({
            pageSize: '10',
            pindex: 1
        })
        setList(JSON.parse(res.result))
    }
    useEffect(() => {
        getHotList()
    }, [])
    return (<>
        {list.map( (v:{id:number,title:string})=>{
            return (<p onClick={ ()=>{ history.push(`/news/${v.id}`) }} key={v.id}>
                {
                    v.title
                }
            </p>)
        })}</>)
}

export default HotNews