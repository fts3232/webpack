import css from './Scss/Input.scss';
class Input extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            value:'',
        }
	}
    minusHandler(){
        if(hasClass(this.refs['input-number-minus'],'is-disabled')){
            return false;
        }
        let value = Number(this.refs['input-number'].value);
        let step = Number(this.props.step);
        if(value-step<this.props.min){
            value = this.props.min;
        }else{
            value -= step;
        }
        if(value==this.props.min){
            addClass(this.refs['input-number-minus'],'is-disabled');
        }else{
            removeClass(this.refs['input-number-minus'],'is-disabled');
        }
        removeClass(this.refs['input-number-add'],'is-disabled');
        this.refs['input-number'].value = value;
    }
    setValue(value){
        this.setState({value:value})
    }
    addHandler(){
        if(hasClass(this.refs['input-number-add'],'is-disabled')){
            return false;
        }
        let value = Number(this.refs['input-number'].value);
        let step = Number(this.props.step);
        if(value+step>this.props.max){
            value = this.props.max;
        }else{
            value += step;
        }
        if(value==this.props.max){
            addClass(this.refs['input-number-add'],'is-disabled');
        }else{
            removeClass(this.refs['input-number-add'],'is-disabled');
        }
        removeClass(this.refs['input-number-minus'],'is-disabled');
        this.refs['input-number'].value = value;
    }
    render() {
        let className;
        switch(this.props.type){
            case 'textarea':
                className = "form-textarea"
                if(this.props.disabled)
                    className += " is-disabled";
                return(
                    <div className={className}>
                        <textarea  autocomplete="off" defaultValue={this.state.value} readOnly={this.props.readonly?'readonly':null} placeholder={this.props.placeholder} rows={this.props.rows} className='input-inner' disabled={this.props.disabled}></textarea>
                    </div>
                )
                break;
            case 'text':
                className = "form-input"
                if(this.props.disabled)
                    className += " is-disabled";
                if(this.props.size)
                    className += " input-"+this.props.size;
                if(this.props.prepend || this.props.append)
                    className += " input-group";
                if(this.props.prepend)
                    className += " input-group-prepend";
                if(this.props.append)
                    className += " input-group-append";
                return(
                    <div className={className}>
                        {this.props.prepend?(<div className="input-prepend">{this.props.prepend}</div>):null}
                        <input type="text" value={this.state.value} readOnly={this.props.readonly?'readonly':null} autocomplete="off" placeholder={this.props.placeholder} className='input-inner' disabled={this.props.disabled} />
                        {this.props.append?(<div className="input-append">{this.props.append}</div>):null}
                    </div>
                )
                break;
            case 'number':
                className = "form-input-number"
                if(this.props.disabled)
                    className += " is-disabled";
                if(this.props.size)
                    className += " input-"+this.props.size;
                return(
                    <div className={className}>
                        <input type="text" autocomplete="off" value={this.state.value} readOnly={this.props.readonly?'readonly':null} value={this.props.start} className='input-inner' disabled={this.props.disabled} ref="input-number"/>
                        <span className="input-number-minus" onClick={this.minusHandler.bind(this)} ref="input-number-minus">-</span>
                        <span className="input-number-add" onClick={this.addHandler.bind(this)} ref="input-number-add">+</span>
                    </div>
                )
                break;
        }
    }
}

Input.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    placeholder:React.PropTypes.string,
    disabled:React.PropTypes.bool,
    type:React.PropTypes.oneOf(['text','textarea','number']),
    icon:React.PropTypes.string,
    size:React.PropTypes.oneOf(['large','small','mini']),
    rows:React.PropTypes.number,
    append:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.object]),
    prepend:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.object]),
    readonly:React.PropTypes.bool,
}
Input.defaultProps={
    placeholder:'',
    disabled:false,
    type:'text',
    icon:false,
    size:false,
    rows:2,
    append:false,
    prepend:false,
    readonly:false
};//设置默认属性

//导出组件
export default Input;