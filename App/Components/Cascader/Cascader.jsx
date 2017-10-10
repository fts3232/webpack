import css from './Scss/Main.scss';
import Component from '../Component';
import Icon from '../Icon';
import Scrollbar from '../Scrollbar';
import Input from '../Input';
import ClickOutside from 'react-click-outside';
import Menu from './Menu.jsx';
class Cascader extends Component {
	constructor(props){
		super(props);
        this.state = {
            value:props.value || [],
            menus:props.options || [] ,
            visible:false,
        }
	}
    getChildContext(){
        return {
          component: this
        };
    }
    toggleMenu(){
        let {visible} = this.state;
        this.setState({visible:!visible})
    }
    onMouseDown(){
        if(!this.props.disabled){
            this.toggleMenu();
        }
    }
    handleClickOutside() {
        if (this.state.visible) {
          this.setState({ visible: false });
        }
    }
    handleChange(value){
        this.setState({value:value,visible:false});
        if(this.props.onChange){
            this.props.onChange(value);
        }
    }
    currentLabels(){
        let options = this.props.options;
        let labels = [];
        this.state.value.forEach((value) => {
          const targetOption = options && options.filter(option => option['value'] === value)[0];
          if (targetOption) {
            labels.push(targetOption['label']);
            options = targetOption['children'];
          }
        });

        return labels;
    }
    render() {
        const {options} = this.props
        let {menus} = this.state
        let value = this.state.value;
        let currentLabels = this.currentLabels();
        return(
            <div className={this.classNames('cascader',{'is-visible':this.state.visible})} ref='root'>
                <Input placeholder={value==''?this.props.placeholder:null} name={this.props.name} readonly="true" disabled={this.props.disabled} icon='caret-down'/>
                <div className="cascader-label" onMouseDown={this.onMouseDown.bind(this)}>
                    {currentLabels.map((v,index)=>{
                        return (
                            <label>
                                {v}
                                {index<currentLabels.length-1?(<span> / </span>):null}
                            </label>
                        );
                    })}
                </div>
                <Menu options={options}/>
            </div>
        )
    }
}

Cascader.childContextTypes = {
    component: React.PropTypes.any
};

Cascader.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    disabled:React.PropTypes.bool,
    name:React.PropTypes.string,
    placeholder:React.PropTypes.string,
    value:React.PropTypes.string,
    onChange:React.PropTypes.func,
    options:React.PropTypes.array,
}
Cascader.defaultProps={
    disabled:false,
    name:'',
    placeholder:'请输入',
    value:'',
    onChange:false,
    options:[],
};//设置默认属性

//导出组件
export default ClickOutside(Cascader);