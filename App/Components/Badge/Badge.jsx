import css from './Scss/Main.scss';
import Component from '../Component';
class Badge extends Component {
	constructor(props){
		super(props);
	}
    
    render() {
        let {value,max,isDot,children} = this.props;
        if(max && value>max){
            value = `${max}+`;
        }
        if(isDot){
            value = '';
        }
        return(
            <div className={this.className('badge')}>
                {children}
                <span className={this.classNames('badge-content',{'is-dot':isDot,'is-fixed':children})}>{value}</span>
            </div>
        )
    }
}

Badge.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    value:React.PropTypes.string,
    max:React.PropTypes.number,
    isDot:React.PropTypes.bool,
}
Badge.defaultProps={
    value:'',
    max:null,
    isDot:false,
};//设置默认属性

//导出组件
export default Badge;