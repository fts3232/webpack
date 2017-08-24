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
			<div className={this.classNames('row',this.props.className)} style={this.style(this.getStyle())}>
				{this.props.children}
			</div>
		)
	}
}

Row.childContextTypes = {
	gutter: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string])
};

Row.PropTypes = {
	className:React.PropTypes.string,
	gutter: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
}

Row.defaultProps = {
	className:null,
	gutter:0
}

export default Row;