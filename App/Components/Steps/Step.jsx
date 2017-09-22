//Component1.jsx
import Component from '../Component';
import Icon from '../Icon';
class Step extends Component {
	constructor(props){
		super(props);
	}
    render() {
        let {title,description,index,showLine,space,direction,active} = this.props
        let className = active==index?'is-process':active>index?'is-success':'is-wait';
        let style = direction=='horizontal'?{'width':`${space}px`}:{'height':`${space}px`}
        return (
            <div className={this.className('step',className)} style={this.style(style)}>
                <div className="step-header">
                    <div className="step-icon">{active>index?(<Icon iconName="check" />):index}</div>
                    {showLine?(
                        <div className="step-line" >
                            <div className="step-line-inner"></div>
                        </div>
                    ):null}
                </div>
                <div className="step-main">
                    <div className="step-main-title">{title}</div>
                    <div className="step-main-desc">{description}</div>
                </div>
            </div>
        )
    }
}

Step.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    index:React.PropTypes.number,
    title:React.PropTypes.string,
    description:React.PropTypes.string,
    showLine:React.PropTypes.bool,
    space:React.PropTypes.number,
    active:React.PropTypes.number,
    direction:React.PropTypes.oneOf(['horizontal','vertical']),
}
Step.defaultProps={
    index:0,
    title:'',
    description:null,
    showLine:true,
    space:100,
    active:0,
    direction:'horizontal'
};//设置默认属性

//导出组件
export default Step;