import css from './Scss/Main.scss';
import Component from '../Component';
class OptionGroup extends Component {
	constructor(props){
		super(props);
	}
    render() {
        return(
            <ul className="select-group-wrap">
                <li className="select-group-title">{this.props.label}</li>
                <li>
                    <ul className="select-group">
                        {this.props.children}
                    </ul>
                </li>
            </ul>
        )
    }
}

OptionGroup.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    label:React.PropTypes.string
}
OptionGroup.defaultProps={
    label:''
};//设置默认属性

//导出组件
export default OptionGroup;