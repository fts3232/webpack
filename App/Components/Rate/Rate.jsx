import css from './Scss/Main.scss';
import Component from '../Component';
import Icon from '../Icon';
class Rate extends Component {
	constructor(props){
		super(props);
        this.state = {
            value:props.value,
            index:-1,
            clickValue:0,
        };
	}
    onMouseMove(index){
        let {allowHalf} = this.props;
        let {target,clientX} = event;
        let value;
        if(allowHalf && !(target.getBoundingClientRect().left+10<=clientX)){
            value = index + 0.5
        }else{
            value = index + 1
        }
        this.setState({'value':value,index:index});
    }
    onMouseOut(){
        let {clickValue} = this.state;
        this.setState({'value':clickValue,index:-1});
    }
    onClick(index){
        let {allowHalf} = this.props;
        let {target,clientX} = event;
        let value;
        if(allowHalf && !(target.getBoundingClientRect().left+10<=clientX)){
            value = index + 0.5
        }else{
            value = index + 1
        }
        this.setState({'clickValue':value,index:index});
    }
    render() {
        let {value,clickValue,index} = this.state;
        let {disabled,max,allowHalf,showText,texts,showValue,name} = this.props;
        return(
            <div className={this.classNames('rate',{'is-disabled':disabled})}>
                {[...Array(max)].map((val,index)=>{
                    let iconName = value>=index+1?'star':'star-o';
                    if(allowHalf && parseInt(value)==index && value>=index+ 0.5){
                        iconName = 'star-half-o'
                    }
                    let onMouseMove = disabled?null:this.onMouseMove.bind(this,index);
                    let onClick =  disabled?null:this.onClick.bind(this,index);
                    let onMouseOut =  disabled?null:index==0?this.onMouseOut.bind(this):null;
                    return (<Icon iconName={iconName} onMouseMove={onMouseMove} onClick={onClick} onMouseOut={onMouseOut}/>)
                })}
                {showValue?(
                    <span>{value}</span>  
                ):showText?(
                    <span>{texts[index]}</span>
                ):null}
                <input type="hidden" value={clickValue || value} name={name}/>
            </div>
        )
    }
}

Rate.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    name:React.PropTypes.string,
    disabled:React.PropTypes.bool,
    allowHalf:React.PropTypes.bool,
    max:React.PropTypes.number,
    value:React.PropTypes.number,
    showValue:React.PropTypes.bool,
    showText:React.PropTypes.bool,
    texts:React.PropTypes.array,
}
Rate.defaultProps={
    name:'',
    disabled:false,
    allowHalf:false,
    max:5,
    value:0,
    showValue:false,
    showText:false,
    texts:['极差', '失望', '一般', '满意', '惊喜'],
};//设置默认属性

//导出组件
export default Rate;