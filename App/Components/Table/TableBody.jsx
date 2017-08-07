//Component1.jsx
const Link = ReactRouterDOM.Link;
import Component from '../Component';
import TableBodyItem from './TableBodyItem';
class TableBody extends Component {
	constructor(props){
		super(props);
        this.state = {
            'selected':[]
        }
	}
    getTable(){
        return this.context.table;
    }
    selectAll(checked){
        let {data} = this.props;
        let selected = [];
        if(checked){
            data.map((val,key)=>{
                selected.push(val)
            })
        }else{
            selected = [];
        }
        this.setState({selected:selected})
    }
    onSelected(checked,data){
        let {selected} = this.state;
        let dataList = this.props.data
        checked = checked ? selected.push(data) : selected.splice(selected.indexOf(data), 1);

        this.getTable().refs.header.setState({allChecked : dataList.length == selected.length});
        this.setState({ selected });
    }
    render() {
        return (
            <tbody>
                {this.props.data.map((data,index)=>{
                    return (
                        <TableBodyItem selected={this.state.selected.indexOf(data)>-1} onSelected={this.onSelected.bind(this)} data={data} columns={this.props.columns}/>
                    )
                })}
            </tbody>
        )
    }
}

TableBody.contextTypes = {
  table: React.PropTypes.any
};

TableBody.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    data:React.PropTypes.array
}
TableBody.defaultProps={
    data:[],

};//设置默认属性

//导出组件
export default TableBody;