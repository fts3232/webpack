import Component from '../Component';
class Panel extends Component {
	constructor(props){
		super(props)
	}
	
	render(){
		let {children} = this.props
		return(
			<div className={this.className('tabs-panel')} >
				{children}
			</div>
		)
	}
}

Panel.PropTypes = {
	
}

Panel.defaultProps = {
	
}

export default Panel;