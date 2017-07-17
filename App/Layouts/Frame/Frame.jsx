import restCss from './Scss/Reset.scss';
import css from './Scss/Main.scss';
class Frame extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className="layout">
				{this.props.children}
			</div>
		);
	}
}


Frame.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    
}
Frame.defaultProps={
    
};//设置默认属性

export default Frame;