import Component from '../Component';
import CheckBox from '../CheckBox';
import Icon from '../Icon';
class TableHeader extends Component {
	constructor(props){
		super(props);
        this.state = {
            allChecked:false,
            sortStatus:0
        }
	}
    getTable(){
        return this.context.table;
    }
    onAllChecked(checked){
        this.setState({allChecked: checked});
        this.getTable().refs.mainBody.selectAll(checked);
    }
    cancelAllChecked() {
        this.setState({ allChecked: false });
    }
    onSort(column){
        let {sortStatus} = this.state;
        let nextStatus;
        switch(sortStatus){
            case 0:
                nextStatus = 1;
                break;
            case 1:
                 nextStatus = 2;
                break;
            case 2:
                 nextStatus = 0;
                break;
        }
        this.setState({
            sortStatus:nextStatus,
            sortColumn:column
        })
        this.getTable().sortBy(nextStatus,column.prop,column.sortMethod)
      }
    render() {
        let {allChecked,sortStatus,sortColumn} = this.state;
        
        return (
            <thead>
                <tr >
                    {this.props.columns.map((column)=>{
                        let style = typeof column.width!='undefined'?{'width':column.width}:{};
                        return (
                            <th 
                                className={this.classNames({'asc':sortStatus==1 && sortColumn==column,'desc':sortStatus==2 && sortColumn==column,'is-checkbox':column.type=='selection','is-center':column.align=='center','is-left':column.align=='left','is-right':column.align=='right',}) }
                                style={this.style(style)}
                            >
                                    {column.type=='selection'?(<CheckBox name="check" checked={allChecked} onChange={this.onAllChecked.bind(this)} indeterminate={true}/>):column.label}
                                    {column.sortable?(<span className="sort-wrapper" onClick={this.onSort.bind(this,column)}><Icon iconName="sort-asc"/><Icon iconName="sort-desc"/></span>):null}
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