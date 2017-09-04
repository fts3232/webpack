//Component1.jsx
import Component from '../Component';
import css from './Scss/Main.scss';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
class Table extends Component {
	constructor(props){
		super(props);
        this.state = {
            sortList:null
        }
	}
    getChildContext(){
        return {
          table: this
        };
    }
    sortBy(sort,prop,sortMethod){
        if(sort==0){
            this.setState({sortList:null})
        }else{
            const data = this.props.data;
            const sortList = data.slice(0);
            const defaultMethod = (a, b)=>{
                if(sort == 2){ var t = b; b = a; a = t;}
                return (a[prop] > b[prop] ? 1 : -1);
            }
            sortList.sort(sortMethod ? sortMethod : defaultMethod);
            this.setState({sortList});
        }
    }
    render() {
        let {sortList} = this.state;
        let {data,columns} = this.props;
        data = sortList || data;
        return (
            <table className="table" cellSpacing="0" cellPadding="0">
               <TableHeader ref='header' columns={columns}/>
               <TableBody ref="mainBody" columns={columns} data={data} />
            </table>
        )
    }
}
Table.childContextTypes = {
    table: React.PropTypes.any
};

Table.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    columns:React.PropTypes.array,
    data:React.PropTypes.array,
}
Table.defaultProps={
    columns:[],
    data:[],
};//设置默认属性

//导出组件
export default Table;