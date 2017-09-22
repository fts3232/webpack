import css from './Scss/Main.scss';
import Component from '../Component';
import Icon from '../Icon';
class Loading extends Component {
	constructor(props){
		super(props);
	}
    
    render() {
        let {children,text} = this.props;
        return(
            <div className={this.className('loading')}>
                {children}
                <div className="loading-mask">
                    <div className="loading-spinner">
                        <Icon iconName="spinner" isPulse={true}/>
                        {text?(<div className="loading-spinner-text">{text}</div>):null}
                    </div>
                </div>
            </div>
        )
    }
}

Loading.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    text:React.PropTypes.string,
}
Loading.defaultProps={
    text:'',
};//设置默认属性

//导出组件
export default Loading;