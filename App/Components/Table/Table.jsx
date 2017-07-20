//Component1.jsx
const Link = ReactRouterDOM.Link;
import Component from '../Component';
import css from './Scss/Main.scss';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
class Table extends Component {
	constructor(props){
		super(props);
        console.log(props)
	}
    getContent(){
        let {data,columns} = this.props;
        
        let result = [];
        if(JSON.stringify(data) != "{}"){
            console.log(data.result)
            data.result.map((val)=>{
                let row = [];
                columns.map((column)=>{
                    row.push(val[column.prop])
                })
                result.push(row)
            })
        }
        return result;
    }
    render() {
        let data = this.getContent()
        return (
            <table className="table" cellSpacing="0" cellPadding="0">
               <TableHeader columns={this.props.columns}/>
               <TableBody data={data} />

            </table>
        )
    }
}

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