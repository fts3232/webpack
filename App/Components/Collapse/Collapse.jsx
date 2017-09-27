import css from './Scss/Main.scss';
import Component from '../Component';
class Collapse extends Component {
	constructor(props){
		super(props)   
		this.state = {
			activeIndex:props.activeIndex||0,
		}
	}
	render(){
		let {activeIndex} = this.state;
		let {children} = this.props;
		return(
			<div className={this.className('collapse')} style={this.style()}>
				{React.Children.map(children, (v, idx) => {
					return React.createElement(v.type,v.props,v.props.children);
				})}
			</div>
		)
	}
}

Collapse.PropTypes = {
	
}

Collapse.defaultProps = {
	
}

export default Collapse;