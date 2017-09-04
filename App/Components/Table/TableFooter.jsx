const Link = ReactRouterDOM.Link;
import Component from '../Component';
class TableFooter extends Component {
	constructor(props){
		super(props);
	}
    render() {
        
        return (
            <div className="table">
                
            </div>
        )
    }
}

TableFooter.propTypes={//属性校验器，表示改属性必须是bool，否则报错
   
}
TableFooter.defaultProps={
    
};//设置默认属性

//导出组件
export default TableFooter;