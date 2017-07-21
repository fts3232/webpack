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
                selected.push(key)
            })
        }else{
            selected = [];
        }
        this.setState({selected:selected})
    }
    render() {
        return (
            <tbody>
                {this.props.data.map((data,key)=>{
                    return (
                        <TableBodyItem selected={this.state.selected.indexOf(key)>-1} data={data} columns={this.props.columns}/>
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