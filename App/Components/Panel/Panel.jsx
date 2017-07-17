import css from './Scss/Main.scss';
import Svg from '../Svg';
class Panel extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            'status':this.props.status
        }
	}
    clickHandler(){
        let status = this.state.status=='Down'?'Up':'Down';
        this.refs['toggle'].changeSvg(status)
        this.setState({'status':status})
    }
    render() {
        let className = "panel-content "+this.state.status
        return (
            <div className="panel">
                <div className="panel-header">
                	<h3>{this.props.title}</h3>
                    <a href="javascript:void(0)" className="toggle" onClick={this.clickHandler.bind(this)}>
                        {this.state.status=='Down'?(<Svg name="Down" ref="toggle"  />):(<Svg name="Up" ref="toggle"  />)}
                    </a>
                </div>
                <div className={className}>
                	{this.props.children}
                </div>
            </div>
        )
    }
}

Panel.propTypes={//属性校验器，表示改属性必须是bool，否则报错
	title:React.PropTypes.string,
    status:React.PropTypes.string
}
Panel.defaultProps={
	title:'default title',
    status:'Down'
};//设置默认属性

//导出组件
export default Panel;