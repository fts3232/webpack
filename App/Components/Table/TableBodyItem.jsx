//Component1.jsx
const Link = ReactRouterDOM.Link;
import Component from '../Component';
import CheckBox from '../CheckBox';
import Icon from '../Icon';
class TableBodyItem extends Component {
	constructor(props){
		super(props);
        this.state = {
            expand:false,
            selected:this.props.selected
        }
	}
    getTable(){
        return this.context.table;
    }
    onExpand(expandPannel){
        let {expand} = this.state;
        let {root} = this.refs;
        if(expand){
            root.parentNode.removeChild(root.nextElementSibling);
        }else{
            const table = root.parentNode.parentNode;
            let index =root.rowIndex ;
            const row = table.insertRow(index + 1);
            const td = document.createElement('td');
            td.colSpan = this.props.columns.length;
            td.className = 'expanded-cell';
            row.appendChild(td);
            ReactDOM.render(expandPannel(this.props.data), td);
        }
        this.setState({expand:!expand})
    }
    componentWillReceiveProps(props){
        this.setState({selected:props.selected})
    }
    render() {
        return (
            <tr ref="root">
                {this.props.columns.map((column)=>{
                    return (
                        <td 
                            className={this.classNames({'is-checkbox':column.type=='selection','expand':column.type=='expand','is-expand':this.state.expand,'is-center':column.align=='center','is-left':column.align=='left','is-right':column.align=='right',})} 
                            width={column.type=='selection'?'48px':typeof column.width!='undefined'?column.width:null}
                        >
                            {column.type=='expand'?(<Icon iconName="angle-right" onClick={this.onExpand.bind(this,column.expandPannel)}/>):column.type=='selection'?(<CheckBox checked={this.state.selected}  onChange={checked => this.props.onSelected(checked,this.props.data)}  name="check"/>):typeof column.render!='undefined'?column.render(this.props.data):this.props.data[column.prop]}
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
    index:React.PropTypes.number,
    data:React.PropTypes.object,
    onSelected:React.PropTypes.func
}
TableBodyItem.defaultProps={
    columns:[],
    selected:false,
    data:{},
    onSelected:()=>{}
};//设置默认属性

//导出组件
export default TableBodyItem;