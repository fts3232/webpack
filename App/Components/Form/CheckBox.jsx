import css from './Scss/CheckBox.scss';
import Svg from '../Svg';
class CheckBox extends React.Component {
	constructor(props){
		super(props);
	}
    clickHandler(ref){
        if(hasClass(this.refs[ref],'is-disabled')){
            return false;
        }
        if(hasClass(this.refs[ref],'is-checked')){
            removeClass(this.refs[ref],'is-checked');
        }else{
            addClass(this.refs[ref],'is-checked'); 
        }
    }
    checkAllHandler(){
        let _this = this;
        let checkAll = true;
        this.props.data.map((val,key)=>{
            let ref='input-'+key
            if(!hasClass(_this.refs[ref],'is-checked'))
                checkAll = false;
        })
        this.props.data.map((val,key)=>{
            let ref='input-'+key
            if(!checkAll){
                if(!hasClass(_this.refs[ref],'is-checked'))
                    addClass(_this.refs[ref],'is-checked')
            }else{
                if(hasClass(_this.refs[ref],'is-checked'))
                    removeClass(_this.refs[ref],'is-checked')
            }
            
        })
    }
    render() {
        return(
            <div className="checkbox-group">
                <div onClick={this.checkAllHandler.bind(this)}>全选</div>
                {this.props.data.map((val,key)=>{
                    let ref='input-'+key
                    let className = 'checkbox-input';
                    if(val.checked)
                        className +=' is-checked';
                    if(val.disabled)
                        className +=' is-disabled';
                    return(
                         <label className="checkbox">
                            <span className={className} ref={ref}>
                                <span className="checkbox-input-inner">
                                    <Svg name="Tick"/>
                                </span>
                                <input type="checkbox" name={this.props.name} value={val.value}  onClick={this.clickHandler.bind(this,ref)}/>
                            </span>
                            <span className="checkbox-label">{val.label}</span>
                        </label>
                    )
                })}
            </div>
            
        )
    }
}

CheckBox.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    name:React.PropTypes.string,
    data:React.PropTypes.array
}
CheckBox.defaultProps={
    name:'',
    data:[]
};//设置默认属性

//导出组件
export default CheckBox;