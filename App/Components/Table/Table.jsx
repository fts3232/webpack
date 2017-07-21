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
	}
    getChildContext(){
        return {
          table: this
        };
    }
    selectAll(){
        console.log(this.refs)
    }
    render() {
        return (
            <table className="table" cellSpacing="0" cellPadding="0">
               <TableHeader columns={this.props.columns}/>
               <TableBody ref="mainBody" columns={this.props.columns} data={this.props.data} />

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