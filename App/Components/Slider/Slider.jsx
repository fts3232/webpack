import css from './Scss/Main.scss';
import Component from '../Component';
import Button from './Button';
import draggable from '../../Lib/draggable';
class Slider extends Component {
	constructor(props){
		super(props);
        this.state = {
            firstValue:props.range?props.value[0]:props.value,
            secondValue:props.range?props.value[1]:0,
        }
	}
    componentDidMount() {
        const {disabled,range} = this.props;
        if(!disabled){
            const { firstButton } = this.refs;
            let firstBar = firstButton.refs.bar;
            
            const dragConfig = {
              drag:(event) => {
                this.handleDrag(event);
              },
              end:(event) => {
                this.handleDrag(event);
              }
            };
            draggable(firstBar, dragConfig);
            if(range){
                const {secondButton} = this.refs;
                let secondBar = secondButton.refs.bar;
                const dragConfig2 = {
                  drag:(event) => {
                    this.handleDrag2(event);
                  },
                  end:(event) => {
                    this.handleDrag2(event);
                  }
                };
                draggable(secondBar, dragConfig2);
            }
            
        }
    }
    handleDrag(event) {
        let {vertical,max,min} = this.props
        const rect = this.$el.getBoundingClientRect();
        let value;
        if(vertical){
            let bottom =  rect.bottom - event.clientY;
            value = parseInt(bottom /  this.$el.offsetHeight * 100, 10);
        }else{
            let left = event.clientX - rect.left;
            value = parseInt(left /  this.$el.offsetWidth * 100, 10);
        }
        value = value>max?max:value;
        value = value<min?min:value;
        this.setState({firstValue:value});
    }
    handleDrag2(event) {
        let {vertical,max,min} = this.props
        const rect = this.$el.getBoundingClientRect();
        let value;
        if(vertical){
            let bottom =  rect.bottom - event.clientY;
            value = parseInt(bottom /  this.$el.offsetHeight * 100, 10);
        }else{
            let left = event.clientX - rect.left;
            value = parseInt(left /  this.$el.offsetWidth * 100, 10);

        }
        value = value>max?max:value;
        value = value<min?min:value;
        this.setState({secondValue:value});
    }
    handleClick(event){
        let {vertical,max,min,range} = this.props
        const rect = this.$el.getBoundingClientRect();
        let value;
        if(vertical){
            let bottom =  rect.bottom - event.clientY;
            value = parseInt(bottom /  this.$el.offsetHeight * 100, 10);
        }else{
            let left = event.clientX - rect.left;
            value = parseInt(left /  this.$el.offsetWidth * 100, 10);
        }
        value = value>max?max:value;
        value = value<min?min:value;
        if(range){
            let {firstValue,secondValue} = this.state;
            if( (firstValue<=secondValue && value<firstValue) || (firstValue>secondValue && value>firstValue) ){
                this.setState({firstValue:value});
            }else if( (secondValue<firstValue && value<firstValue) || (secondValue>firstValue && value>firstValue) ){
                this.setState({secondValue:value});
            }
        }else{
            this.setState({firstValue:value});
        }
        
    }
    barStyle(){
        return this.props.vertical ? {
            height: this.barSize(),
            bottom: this.barStart()
          } : {
            width: this.barSize(),
            left: this.barStart()
          };
    }
    getChildContext(){
        return {
            component:this
        }
    }
    maxValue(){
        return Math.max(this.state.firstValue, this.state.secondValue);
    }
    minValue(){
        return Math.min(this.state.firstValue, this.state.secondValue);
    }
    barSize(){
        return this.props.range
          ? `${ 100 * (this.maxValue() - this.minValue()) / (this.props.max - this.props.min) }%`
          : `${ 100 * (this.state.firstValue - this.props.min) / (this.props.max - this.props.min) }%`;
    }

    barStart(){
        return this.props.range
          ? `${ 100 * (this.minValue() - this.props.min) / (this.props.max - this.props.min) }%`
          : '0%';
    }
    render() {
        let {vertical,disabled,range} = this.props
        let {firstValue,secondValue} = this.state
        return (
            <div className={this.className('slider','is-vertical':vertical)} ref={el => this.$el = el} onClick={this.handleClick.bind(this)}>
                <div className={this.classNames('runway',disabled && 'is-disabled')} >
                    <div className="bar" style={this.barStyle()}></div>
                    <Button ref='firstButton' vertical={vertical} value={firstValue}/>
                    {range?(<Button ref='secondButton' vertical={vertical} value={secondValue}/>):null}
                    
                </div>
            </div>
        )
    }
}
Slider.childContextTypes = {
    component:React.PropTypes.any
}
Slider.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    step:React.PropTypes.number,
    min:React.PropTypes.number,
    max:React.PropTypes.number,
    vertical:React.PropTypes.bool,
    range:React.PropTypes.bool,
    value:React.PropTypes.oneOf([React.PropTypes.number,React.PropTypes.array]),
    diabled:React.PropTypes.bool,
}
Slider.defaultProps={
    step:1,
    min:0,
    max:100,
    vertical:true,
    range:true,
    value:[40,50],
    disabled:false
};//设置默认属性

//导出组件
export default Slider;