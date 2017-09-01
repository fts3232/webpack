import css from './Scss/Main.scss';
import Component from '../Component';
class CheckBoxGroup extends Component {
	constructor(props){
		super(props);
        this.state = {
            value: props.value || [],
        }
	}
    onChange(value,checked){
        const index = this.state.value.indexOf(value);
        if (checked) {
          if (index === -1) {
            this.state.value.push(value);
          }
        } else {
          this.state.value.splice(index, 1);
        }
        this.setState({value:this.state.value})
        if(this.props.onChange){
            this.props.onChange(this.state.value)
        }
    }
    componentWillReceiveProps(props){
        this.state = {
            value: props.value,
        }
    }
    render() {

        return(
            <div className={this.classNames('checkbox-group')}>
                {this.props.children.map((element)=>{
                    if(!element || (element.type.name!='CheckBox' && element.type.name!='CheckBoxButton') ){
                        return null;
                    }
                    return React.cloneElement(element, Object.assign({}, element.props, {
                      onChange: this.onChange.bind(this,element.props.value),
                      checked:element.props.checked || this.state.value.indexOf(element.props.value)>=0
                    }))
                })}
            </div>
        )
    }
}

CheckBoxGroup.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    value:React.PropTypes.array,
    onChange:React.PropTypes.func,
}
CheckBoxGroup.defaultProps={
    value:[],
    onChange:()=>{}
};//设置默认属性

//导出组件
export default CheckBoxGroup;