import css from './Scss/Radio.scss';
class Radio extends React.Component {
	constructor(props){
		super(props);
	}
    clickHandler(ref){
        if(!hasClass(this.refs[ref],'is-checked') && !hasClass(this.refs[ref],'is-disabled')){
            let _this = this;
            this.props.data.map((val,key)=>{
                let ref = 'input-'+key
                removeClass(this.refs[ref],'is-checked')
            })
            addClass(this.refs[ref],'is-checked');  
        }
    }
    render() {
        return(
            <div className="radio-group">
                {this.props.data.map((val,key)=>{
                    let ref='input-'+key
                    let className = 'radio-input';
                    if(val.checked)
                        className +=' is-checked';
                    if(val.disabled)
                        className +=' is-disabled';
                    return (
                        <label className="radio">
                            <span className={className}  ref={ref}>
                                <span className="radio-input-inner"></span>
                                <input type="radio" name={this.props.name} value={val.value} onClick={this.clickHandler.bind(this,ref)}/>
                            </span>
                            <span className="radio-label">{val.label}</span>
                        </label>
                    )
                })}
            </div>
            
        )
    }
}

Radio.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    name:React.PropTypes.string,
    data:React.PropTypes.array
}
Radio.defaultProps={
    name:'',
    data:[]
};//设置默认属性

//导出组件
export default Radio;