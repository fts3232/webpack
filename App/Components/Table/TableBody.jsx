//Component1.jsx
const Link = ReactRouterDOM.Link;
import Component from '../Component';

class TableBody extends Component {
	constructor(props){
		super(props);
        
	}
    
    render() {
        return (
            <tbody>
                {this.props.data.map((row)=>{
                    return (
                        <tr>
                            {row.map((data)=>{
                                return (
                                    <td>{data}</td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        )
    }
}

TableBody.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    data:React.PropTypes.array
}
TableBody.defaultProps={
    data:[],

};//设置默认属性

//导出组件
export default TableBody;