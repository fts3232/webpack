import css from './Scss/Main.scss';
import Component from '../Component';
import Tooltip from '../Tooltip';
class Button extends Component {
	constructor(props){
		super(props);
	}
    min(){
        return this.parent().props.min;
    }
    max(){
        return this.parent().props.max;
    }
    parent(){
        return this.context.component
    }
    currentPosition() {
        return `${ (this.props.value - this.min()) / (this.max() - this.min()) * 100 }%`;
    }

    wrapperStyle() {
        return this.props.vertical ? { bottom: this.currentPosition() } : { left: this.currentPosition() };
    }
    render() {
        let {value} = this.props
        return (
            <div className={this.className('slider-button-wrapper')} style={this.wrapperStyle()}>
                <Tooltip ref="tooltip" placement="top" content={<span>{value}</span>} >
                  <div className={this.classNames('slider-button')} ref="bar"></div>
                </Tooltip>
            </div>
        )
    }
}

Button.contextTypes = {
    component: React.PropTypes.any
};

Button.propTypes={//属性校验器，表示改属性必须是bool，否则报错
	vertical:React.PropTypes.bool,
}
Button.defaultProps={
	vertical:false,
};//设置默认属性

//导出组件
export default Button;