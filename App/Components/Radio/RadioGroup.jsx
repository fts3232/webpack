import css from './Scss/Main.scss';
import Component from '../Component';
class RadioGroup extends Component {
	constructor(props){
		super(props);
        this.state={
            value:this.props.value
        }
	}
    onChange(value){
        this.setState({ value:value });
    }
    render() {
        return(
            <div className={this.classNames('radio-group')}>
                {this.props.children.map((element)=>{
                    if(!element || (element.type.name!='Radio' && element.type.name!='RadioButton') ){
                        return null;
                    }
                    return React.cloneElement(element, Object.assign({}, element.props, {
                      onChange: this.onChange.bind(this),
                      checked:element.props.value==this.state.value
                    }))
                })}
            </div>
        )
    }
}

RadioGroup.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    value:React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
}
RadioGroup.defaultProps={
    value:''
};//设置默认属性

//导出组件
export default RadioGroup;