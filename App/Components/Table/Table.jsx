//Component1.jsx
import Link from 'react-router-dom/Link.js';
import css from './Scss/Main.scss';
import Pagination from '../Pagination';
import DropDown from '../DropDown';
class Table extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            checkBox:false,
            columns:props.columns
        }
	}
    checkAll(){
        let status = this.state.checkBox?false:true;
        for(let v in this.refs){
            this.refs[v].checked=status
        }
        this.setState({checkBox:status});
    }
    changeOrder(field){
        let columns = this.state.columns;
        columns.map((column,key)=>{
            if(column.field==field){
                let order = column.order=='asc'?'desc':'asc';
                columns[key].order = order
            }
        })
        this.setState({columns:columns})
    }
    render() {
        let data = this.props.data.result;
        let i = 0;
        let toolsLeft = this.props.tools.left;
        let toolsRight = this.props.tools.right;
        return (
            <div className="table">
                {this.props.tools!=''?(
                    <div className="tools">
                        <div className="left">
                            {typeof toolsLeft.list=='undefined'?(
                                <Link to={toolsLeft.path}><button className="button">{toolsLeft.cnName}</button></Link>
                            ):(
                                <DropDown data={toolsLeft} />
                            )}
                        </div>
                        <div className="right">
                            {typeof toolsRight.list=='undefined'?(
                                <Link to={toolsRight.path}><button className="button">{toolsRight.cnName}</button></Link>
                            ):(
                                <DropDown data={toolsRight} />
                            )}
                        </div>
                    </div>
                ):''}
                <div className="page-size">
                    <label>
                        <select >
                            {this.props.pageList.map((val)=>{
                                return (
                                    <option>{val}</option>
                                )
                            })}
                        </select>
                        records per page
                    </label>
                </div>
                {this.props.search==true?(
                    <div className="search">
                        <input type="text"/>
                        <button>搜索</button>
                    </div>
                ):''}
                <table>
                    <thead>
                        {this.props.checkBox==true?(
                            <td className="check-all" onClick={this.checkAll.bind(this)}>全选</td>
                        ):''}
                        {this.state.columns.map((column)=>{
                            if(typeof column.order!='undefined'){
                                let className = typeof column.order!='undefined'?'order '+column.order:'';
                                let ref = 'order-'+column.field;
                                return (
                                    <td className={className} onClick={this.changeOrder.bind(this,column.field)}>{column.title}</td>
                                )
                            }else{
                                return (
                                    <td>{column.title}</td>
                                )
                            }
                            
                        })}
                        {this.props.action!=''?(
                            <td>操作</td>
                        ):''}
                    </thead>
                    <tbody>
                        {this.props.data!=''?this.props.data.result.map((row)=>{
                            i++;
                            let ref = 'checkAll-'+ i
                            return (
                                <tr>
                                    {this.props.checkBox==true?(
                                        <td className="check-all"><input ref={ref} type="checkbox"/></td>
                                    ):''}
                                    {this.state.columns.map((column)=>{
                                        return (
                                            <td>{row[column['field']]}</td>
                                        )
                                    })}
                                    {this.props.action!=''?(
                                        <td className="action">
                                            {this.props.action.map((action)=>{
                                                let path = action.path.replace(':id',row['id']);
                                                return (
                                                    <Link to={path}>{action.cnName}</Link>
                                                )
                                            })}
                                        </td>
                                    ):''}
                                </tr>
                            )
                        }):''}
                    </tbody>
                </table>
                {this.props.pagination==true?(
                    <Pagination totalCount={this.props.data.totalCount}  pageSize={this.props.pageSize} />
                ):''}
            </div>
        )
    }
}

Table.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    columns:React.PropTypes.array,
    tools:React.PropTypes.object,
    data:React.PropTypes.object,
    search:React.PropTypes.bool,
    pagination:React.PropTypes.bool,
    checkBox:React.PropTypes.bool,
    pageSize:React.PropTypes.number,
    pageList:React.PropTypes.array
}
Table.defaultProps={
    columns:[],
    tools:{},
    data:{},
    search:true,
    pagination:true,
    checkBox:true,
    pageSize:10,
    pageList:[10,25,50,100]
};//设置默认属性

//导出组件
export default Table;