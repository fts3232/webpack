import css from './Scss/Main.scss';
import Component from '../Component';
class Col extends Component {
	constructor(props){
		super(props)   
	}
	getStyle() {
	    let style = {};
	    if (this.context.gutter) {
	      style.paddingLeft = `${this.context.gutter / 2}px`;
	      style.paddingRight = style.paddingLeft;
	    }

	    return style;
	  }
	render(){
		let offset = this.props.offset>0?'col-offset-'+this.props.offset:null;
		return(
			<div className={this.classNames('col','col-'+this.props.span,offset)} style={this.style(this.getStyle())}>{this.props.children}</div>
		)
	}
}

Col.contextTypes = {
  gutter: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
};

Col.PropTypes = {
	span:React.PropTypes.number,
	offset:React.PropTypes.number,
}

Col.defaultProps = {
	span:24,
	offset:0,
}

export default Col;