//Component1.jsx
import css from './Scss/Main.scss';
import Component from '../Component';
import Icon from '../Icon';
import Select from '../Select';
class Pagination extends Component {
	constructor(props){
		super(props);
        this.state = {
            currentPage:parseInt(props.currentPage) || 1,
            pageSize:props.PageSize || 10,
        }
	}
    onPrev(){
        let {currentPage,pageSize} = this.state;
        let {onCurrentChange} = this.props;
        currentPage = currentPage-1<=0?1:currentPage-1;
        this.setState({currentPage:currentPage},()=>{
            if(onCurrentChange){
                onCurrentChange(currentPage,pageSize);
            }
        });
    }
    onNext(){
        let {currentPage,pageSize} = this.state;
        let {total,onCurrentChange} = this.props;
        let totalPage = Math.ceil(total / pageSize);
        currentPage = currentPage+1>totalPage?totalPage:currentPage+1;
        this.setState({currentPage:currentPage},()=>{
            if(onCurrentChange){
                onCurrentChange(currentPage,pageSize);
            }
        });
    }
    onSizeChange(pageSize){
         let {onCurrentChange} = this.props;
        this.setState({pageSize:pageSize,currentPage:1},()=>{
            if(onCurrentChange){
                onCurrentChange(1,pageSize);
            }
        });
    }
    onCurrentChange(page){
        let {onCurrentChange} = this.props;
        let {pageSize} = this.state;
        this.setState({currentPage:page},()=>{
            if(onCurrentChange){
                onCurrentChange(page,pageSize);
            }
        })
    }
    componentWillReceiveProps(props){
        this.state = {
            currentPage:parseInt(props.currentPage) || 1,
            pageSize:props.PageSize || 10,
        }
    }
    render() {
        /*let currentPage = this.state.currentPage;
        let pagination = [];
        let pageCount = Math.ceil(this.props.total / this.props.pageSize);
        
        let pageSize = parseInt(this.props.pageSize);
        let start = parseInt(pageSize*(currentPage-1)+1);
        let end = start+pageSize-1;
        end = end>this.props.total?this.props.total:end;
        let prev = currentPage-1;
        let next = currentPage+1;*/
        let {total} = this.props;
        let {currentPage,pageSize} = this.state;
        let totalPage = Math.ceil(total / pageSize);
        let pagination = [];
        for(let i = 1;i<=totalPage;i++){
            pagination.push(<li className={this.classNames({'active':i==currentPage})} onClick={this.onCurrentChange.bind(this,i)}>{i}</li>)
        }
        return (
            <div className="pagination">
                <span className="pagination-total">共 {total} 条</span>
                <Select value={pageSize} onChange={this.onSizeChange.bind(this)}>
                    <Select.Option value={10}></Select.Option>
                    <Select.Option value={20} ></Select.Option>
                    <Select.Option value={30} ></Select.Option>
                    <Select.Option value={40} ></Select.Option>
                </Select>
                <button className="btn-prev" onClick={this.onPrev.bind(this)}><Icon iconName="angle-left"/></button>
                <ul className="pager">
                    {pagination}
                </ul>
                <button className="btn-next" onClick={this.onNext.bind(this)}><Icon iconName="angle-right"/></button>
            </div>
        )
    }
}

Pagination.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    pageSize: React.PropTypes.number,
    currentPage: React.PropTypes.number,
    total: React.PropTypes.number,
    onCurrentChange:React.PropTypes.func,
}
Pagination.defaultProps={
    pageSize: 10,
    currentPage: 1,
    total: 0,
    onCurrentChange:()=>{},
};//设置默认属性

//导出组件
export default Pagination;