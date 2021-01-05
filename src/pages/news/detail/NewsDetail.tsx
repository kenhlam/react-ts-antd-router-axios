import React from 'react';
// import {useHistory,withRouter ,useParams} from 'react-router-dom';
// import PropTypes from "prop-types";
import { _newsDetail } from "@/service"
import "../style.less"
interface IProps {
    history:Object,
    match:any,
    location:any
}

// console.log(PropTypes);

 class NewsDetail extends React.Component<IProps> {
     public state = {
         d:{}
     }
     async getDetail(){
         
        const res : any = await _newsDetail({
            id:this.props.match.params.id
        })
        this.setState({d:JSON.parse(res.result).society})
    }
    componentDidMount(){
        const { match, location, history } = this.props;
        // const history = useHistory();
     
        // console.log(history);
        console.log(match);
        this.getDetail()
        
    }
    render() {
        const d:any = this.state.d;
        return (<div className="w1200">
            <p className="title">{d.title}</p>
            <div dangerouslySetInnerHTML={{__html:d.content}}></div>
    </div>)
    }


}
// export default withRouter(NewsDetail as any)
export default NewsDetail