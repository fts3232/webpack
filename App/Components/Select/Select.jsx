import css from './Scss/Main.scss';
import Input from '../Input';
import Component from '../Component';
import Scrollbar from '../Scrollbar';
import ClickOutside from 'react-click-outside';
class Select extends Component {
	constructor(props){
		super(props);
        this.state = {
            value:'',
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
    handleOptionClick(value){
        this.setState({value:value,visible:false});
    }
    render() {
        return(
            <div className={this.classNames('select',{'is-visible':this.state.visible})} ref='root'>
                <Input placeholder={this.props.placeholder} name={this.props.name} readonly="true" disabled={this.props.disabled} icon='caret-down' value={this.state.value} onMouseDown={this.onMouseDown.bind(this)}/>
                <div className="select-dropdown">
                    <Scrollbar>
                        <ul >
                            {this.props.children}
                        </ul>
                    </Scrollbar>
                </div>
                
            </div>
        )
    }
}

Select.childContextTypes = {
    component: React.PropTypes.any
};

Select.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    disabled:React.PropTypes.bool,
    name:React.PropTypes.string,
    placeholder:React.PropTypes.string,
}
Select.defaultProps={
    disabled:false,
    name:'',
    placeholder:'请输入'
};//设置默认属性

//导出组件
export default ClickOutside(Select);