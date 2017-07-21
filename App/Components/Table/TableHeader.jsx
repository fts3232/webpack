import Component from '../Component';
import CheckBox from '../CheckBox';
class TableHeader extends Component {
	constructor(props){
		super(props);
        this.state = {
            allChecked:false
        }
	}
    getTable(){
        return this.context.table;
    }
    onAllChecked(checked){
        this.setState({allChecked: checked});
        this.getTable().refs.mainBody.selectAll(checked);
    }
    render() {
        let checked = this.state.allChecked;
        return (
            <thead>
                <tr >
                    {this.props.columns.map((column)=>{
                        return (
                            <th 
                                className={this.classNames({'is-center':column.align=='center','is-left':column.align=='left','is-right':column.align=='right',}) }
                                width={typeof column.width!='undefined'?column.width:null}
                            >
                                {column.type=='selection'?(<CheckBox name="check" checked={checked} onChange={this.onAllChecked.bind(this)} indeterminate={true}/>):column.label}
                            </th>
                        )
                    })}
                </tr>
            </thead>
        )
    }
}

TableHeader.contextTypes = {
  table: React.PropTypes.any
};

TableHeader.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    columns:React.PropTypes.array,
}
TableHeader.defaultProps={
    columns:[],
};//设置默认属性

//导出组件
export default TableHeader;