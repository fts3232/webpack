import css from './Scss/Main.scss';
import Component from '../Component';
class Row extends Component {
	constructor(props){
		super(props)   
	}
	getChildContext() {
	    return {
	      gutter: this.props.gutter
	    };
	}
	getStyle(){
		let style = {};
	    if (this.props.gutter) {
	      style.marginLeft = `-${this.props.gutter / 2}px`;
	      style.marginRight = style.marginLeft;
	    }

	    return style;
	}
	render(){
		return(
			<div className={this.classNames('row')} style={this.style(this.getStyle())}>
				{this.props.children}
			</div>
		)
	}
}

Row.childContextTypes = {
	gutter: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string])
};

Row.PropTypes = {
	gutter: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
}

Row.defaultProps = {
	gutter:0
}

export default Row;