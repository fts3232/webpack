import css from './Scss/Main.scss';
import Svg from '../Svg';
import React from 'react';
class Alert extends React.Component {
	constructor(props){
		super(props)
		this.props.style = this.props.style!=''?this.props.style:'default';
	}
	closeHandle(){
		let _this = this;
		removeClass(this.refs['alert'],'fade-in');
		addClass(this.refs['alert'],'fade-out');
		setTimeout(function(){
			_this.refs['alert'].remove();
		},500)
	}
	componentDidMount(){
		let _this = this;
		setTimeout(function(){
			if(typeof _this.refs['alert'] !='undefined'){
				addClass(_this.refs['alert'],'fade-in');
			}
		},500)
	}
	render(){
		let className = 'alert ' + this.props.style;
		return(
			<div className={className} ref="alert">
				<span className="alert-info">{this.props.children}</span>
				<div onClick={this.closeHandle.bind(this)}>
					<Svg name="Close" className="close" />
				</div>
			</div>
		)
	}
}

Alert.PropTypes = {
	style:React.PropTypes.string
}

Alert.defaultProps = {
	style:'default'
}

export default Alert;