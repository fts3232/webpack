import css from './Scss/Main.scss';
import Component from '../Component';
import Icon from '../Icon';
class Input extends Component {
	constructor(props){
		super(props);
        this.state = {
            value:props.value,
        }
	}
    minusHandler(){
        if(helper.hasClass(this.refs['input-number-minus'],'is-disabled')){
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
            helper.addClass(this.refs['input-number-minus'],'is-disabled');
        }else{
            helper.removeClass(this.refs['input-number-minus'],'is-disabled');
        }
        helper.removeClass(this.refs['input-number-plus'],'is-disabled');
        this.refs['input-number'].value = value;
    }
    plusHandler(){
        if(helper.hasClass(this.refs['input-number-plus'],'is-disabled')){
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
            helper.addClass(this.refs['input-number-plus'],'is-disabled');
        }else{
            helper.removeClass(this.refs['input-number-plus'],'is-disabled');
        }
        helper.removeClass(this.refs['input-number-minus'],'is-disabled');
        this.refs['input-number'].value = value;
    }
    onKeyDown(e){
        switch (e.keyCode) {
          case 38: // KeyUp
            e.preventDefault();
            this.plusHandler();
            break;
          case 40: // KeyDown
            e.preventDefault();
            this.minusHandler();
            break;
          default:
            break;
        }
    }
    onInput(){
        let value = this.refs['input-number'].value;
        this.setState({value:value }, () => {
          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            this.onBlur();
          }, 300);
        });
    }
    onBlur(){
        let value = this.state.value;
        if (this.isValid()) {
          value = Number(value);

          if (value > this.props.max) {
            value = Number(this.props.max);
          } else if (value < this.props.min) {
            value = Number(this.props.min);
          }
        } else {
          value = '';
        }
        this.refs['input-number'].value = value;
        this.setState({ value:value });
    }
    isValid(){
        return this.state.value !== '' && !isNaN(Number(this.state.value));
    }
    onChange(){
        if(this.props.autosize){
            this.refs['textarea'].style.height = 'auto'
            const style = window.getComputedStyle(this.refs['textarea'])
            const borderSize = parseFloat(style['border-bottom-width']) + parseFloat(style['border-top-width']);
            const height = this.refs['textarea'].scrollHeight + borderSize
            this.refs['textarea'].style.height = `${height}px`
        }
    }
    render() {
        const {type,disabled,readonly,size,placeholder} = this.props;
        let value = this.state.value;
        switch(type){
            case 'textarea':
                const {rows} = this.props;
                return(
                    <div className={this.classNames('form-textarea',{'is-disabled':disabled})}>
                        <textarea autocomplete="off" defaultValue={value} readOnly={readonly?'readonly':null} placeholder={placeholder} rows={rows} className='input-inner' disabled={disabled} onChange={this.onChange.bind(this)} ref="textarea"></textarea>
                    </div>
                )
                break;
            case 'text':
                const {append,prepend} = this.props;
                return(
                    <div className={this.classNames(
                        'form-input',
                        {'is-disabled':disabled},
                        size && `input-${size}`,
                        {'input-group':prepend || append},
                        {'input-group-prepend':prepend},
                        {'input-group-append':append}
                    )}>
                        {prepend?(<div className="input-prepend">{prepend}</div>):null}
                        <input type="text" defaultValue={value} readOnly={readonly?'readonly':null} autocomplete="off" placeholder={placeholder} className='input-inner' disabled={disabled} />
                        {append?(<div className="input-append">{append}</div>):null}
                    </div>
                )
                break;
            case 'number':
                const {start} = this.props;
                return(
                    <div className={this.classNames(
                        'form-input-number',
                        {'is-disabled':disabled},
                        size && `input-${size}`
                    )}>
                        <input type="text" autocomplete="off" defaultValue={value} readOnly={readonly?'readonly':null} value={start} placeholder={placeholder} className='input-inner' disabled={disabled} ref="input-number" onKeyDown={this.onKeyDown.bind(this)} onChange={this.onInput.bind(this)}/>
                        <span className={this.classNames('input-number-minus',{'is-disabled':disabled})} onClick={this.minusHandler.bind(this)} ref="input-number-minus"><Icon iconName='minus'></Icon></span>
                        <span className={this.classNames('input-number-plus',{'is-disabled':disabled})} onClick={this.plusHandler.bind(this)} ref="input-number-plus"><Icon iconName='plus'></Icon></span>
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
    autosize:React.PropTypes.bool,
    max:React.PropTypes.number,
    min:React.PropTypes.number,
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
    readonly:false,
    autosize:false,
    max: Infinity,
    min: 0
};//设置默认属性

//导出组件
export default Input;