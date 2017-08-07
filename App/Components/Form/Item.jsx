import css from './Scss/Item.scss';
class Item extends React.Component {
	constructor(props){
		super(props);
        
	}
    render() {
        return(
            <div className="form-item">
                {this.props.children}
            </div>
        )
    }
}

Item.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    
}
Item.defaultProps={
    
};//设置默认属性

//导出组件
export default Item;