//Component1.jsx
const Link = ReactRouterDOM.Link;
import Component from '../Component';
import CheckBox from '../CheckBox';
class TableBodyItem extends Component {
	constructor(props){
		super(props);
	}
    getTable(){
        return this.context.table;
    }
    render() {
        return (
            <tr>
                {this.props.columns.map((column)=>{
                    return (
                        <td 
                            className={this.classNames({'is-center':column.align=='center','is-left':column.align=='left','is-right':column.align=='right',})} 
                            width={column.type=='selection'?'48px':typeof column.width!='undefined'?column.width:null}
                        >
                            {column.type=='selection'?(<CheckBox checked={this.props.selected} name="check"/>):typeof column.render!='undefined'?column.render():this.props.data[column.prop]}
                        </td>
                    )
                })}
            </tr>
        )
    }
}

TableBodyItem.contextTypes = {
  table: React.PropTypes.any
};

TableBodyItem.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    columns:React.PropTypes.array,
    selected:React.PropTypes.bool,
    data:React.PropTypes.object
}
TableBodyItem.defaultProps={
    columns:[],
    selected:false,
    data:{}

};//设置默认属性

//导出组件
export default TableBodyItem;