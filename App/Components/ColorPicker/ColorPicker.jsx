import css from './Scss/Main.scss';
import Component from '../Component';
import Icon from '../Icon';
import ClickOutside from 'react-click-outside';
import Color from './color.js';
import SvPanel from './Panel/SvPanel.jsx';
import HueSlider from './Panel/HueSlider.jsx';
import AlphaSlider from './Panel/AlphaSlider.jsx';
class ColorPicker extends Component {
	constructor(props){
		super(props)   
		
		const color = new Color({
	      enableAlpha: props.showAlpha,
	      format: props.colorFormat
	    });
	    color.fromString(props.value);
	    this.state = {
	    	color:color,
	    	value:props.value,
	    	showPicker:false,
	    }
	}
	onPick(){
		this.setState({showPicker:false});
	}
	onClear(){
		this.setState({showPicker:false,value:null});
	}
	handleChange(color){
		this.setState({
	    	color:color,
	    	value:color.value
	    })
	}
	handleClickOutside() {
    	this.setState({ showPicker: false });
  	}
	getChildContext() {
	    return {
	      onChange: this.handleChange.bind(this)
	    };
  	}
	render(){
		let {color,value,showPicker} = this.state
		let {showAlpha} = this.props
		const { r, g, b } = color.toRgb();
      	const alpha = color.get('alpha');
      	let displayColor = showAlpha? `rgba(${r}, ${g}, ${b}, ${alpha / 100})`: `rgb(${r}, ${g}, ${b})`;
		return(
			<div className={this.className('color-picker')}>
				<div className="color-picker-trigger" onClick={()=>{this.setState({ showPicker: !showPicker })}}>
					<span className={this.classNames('color-picker-color',showAlpha && 'is-alpha')}>
						{value?(
							<span className="color-picker-color-inner" style={{backgroundColor:displayColor}}></span>
						):(
							<Icon iconName="close"/>						
						)}
					</span>
					<Icon iconName="caret-down"/>
				</div>
				{showPicker && (
					<div className="color-picker-panel">
						<div className="color-picker-panel-wrapper">
							<SvPanel color={color}/>
					        <HueSlider color={color}/>
					        {showAlpha?(<AlphaSlider color={color}/>):null}
						</div>
						<div className="color-picker-panel-btns">
							<span className="color-picker-panel-value">{color.value}</span>
							<span className="color-picker-panel-link" onClick={this.onClear.bind(this)}>清空</span>
							<button className="color-picker-panel-btn" onClick={this.onPick.bind(this)}>确定</button>
						</div>
					</div>
				)}
			</div>
		)
	}
}

ColorPicker.childContextTypes = {
  	onChange: React.PropTypes.func
};

ColorPicker.PropTypes = {
	showAlpha:React.PropTypes.bool,
	value:React.PropTypes.string,
	colorFormat:React.PropTypes.oneOf(['rgb','hsl','hsv','hex']),
	onChange:React.PropTypes.func,
}

ColorPicker.defaultProps = {
	showAlpha:false,
	value:null,
	onChange:()=>{}
}

export default ClickOutside(ColorPicker);