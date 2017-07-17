//Component1.jsx
import css from './Scss/Main.scss';
import Link from 'react-router-dom/Link.js';
class Pagination extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            totalPage:props.totalPage,
        }
	}
    clickHandle(page){
        let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        if(page<=0||page>pageCount){
            return false;
        }
        this.setState({totalPage:page});
    }
    render() {
        let totalPage = this.state.totalPage;
        let pagination = [];
        let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        for(let i = 1;i<=pageCount;i++){

            let className = i==totalPage?'active':'';
            let path = location.pathname+'/'+i;
            let ref = 'pat-'+i;
            pagination.push(<li className={className} onClick={this.clickHandle.bind(this,i)}><a href="javascript:void(0)">{i}</a></li>)
        }
        let pageSize = parseInt(this.props.pageSize);
        let start = parseInt(pageSize*(totalPage-1)+1);
        let end = start+pageSize-1;
        end = end>this.props.totalCount?this.props.totalCount:end;
        let prevClass = totalPage-1<=0?'prev disabled':'prev';
        let nextClass = totalPage+1>pageCount?'next disabled':'next';
        let prev = totalPage-1;
        let next = totalPage+1;
        return (
            <div className="pagination-info">
                <div className="info">Showing {start} to {end} of {this.props.totalCount} entries</div>
                <div className="pagination">
                    <ul>
                        <li className={prevClass} onClick={this.clickHandle.bind(this,prev)}><a href="javascript:void(0)">← Previous</a></li>
                        {pagination}
                        <li className={nextClass} onClick={this.clickHandle.bind(this,next)}><a href="javascript:void(0)">Next → </a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

Pagination.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    pageSize: React.PropTypes.number,
    totalPage: React.PropTypes.number,
    totalCount: React.PropTypes.number
}
Pagination.defaultProps={
    pageSize: 0,
    totalPage: 1,
    totalCount: 0
};//设置默认属性

//导出组件
export default Pagination;