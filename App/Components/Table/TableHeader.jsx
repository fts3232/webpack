import Component from '../Component';
class TableHeader extends Component {
	constructor(props){
		super(props);
        
	}
    
    render() {
        return (
            <thead>
                <tr>
                    {this.props.columns.map((column)=>{
                        return (<th>{column.label}</th>)
                    })}
                </tr>
            </thead>
        )
    }
}

TableHeader.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    columns:React.PropTypes.array,
}
TableHeader.defaultProps={
    columns:[],
};//设置默认属性

//导出组件
export default TableHeader;