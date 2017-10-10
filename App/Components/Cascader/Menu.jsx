import Component from '../Component';
import Icon from '../Icon';
import Scrollbar from '../Scrollbar';
class Menu extends Component {
	constructor(props){
		super(props);
        this.state = {
            'activeValue':[],
            'menus':[]
        };
	}
    parent() {
        return this.context.component;
    }
    activeOptions(){

    }
    loadActiveOptions(options,activeOptions=[]){
        if(typeof options == 'undefined'){
            options = this.props.options
        }
        const activeValue = this.state.activeValue;
        const level = activeOptions.length;
        activeOptions[level] = options;
        let active = activeValue[level];
        if (active) {
            options = options.filter((option)=>{return  option.value === active})[0];
            if (options && options.children) {
              this.loadActiveOptions(options.children, activeOptions);
            }
        }
        return activeOptions;
    }
    activeItem(item,index){
        const activeOptions = this.loadActiveOptions();
        let {activeValue} = this.state
        activeValue.splice(index,activeOptions.length,item.value);
        this.setState({activeValue},()=>{
            if(typeof item.children=='undefined'){
                this.parent().handleChange(activeValue);
            }
        });
    }
    render() {
        const activeOptions = this.loadActiveOptions();
        let {activeValue} = this.state
        return(
            <div className="cascader-menus">
                {activeOptions.map((menu,menuIndex)=>{
                    let item = menu.map((item,itemIndex)=>{
                        return (
                            <li className={this.classNames("cascader-menu-item",activeValue.includes(item.value) && 'is-selected')} onClick={this.activeItem.bind(this,item,menuIndex)}>
                                <span>{item.label}</span>
                                {typeof item.children!='undefined'?(<Icon iconName="caret-right"/>):null}
                            </li>
                        )
                    })
                    return (
                        <Scrollbar>
                            <ul className="cascader-menu">
                                {item}
                            </ul>
                        </Scrollbar>
                    )
                })}
            </div>
        )
    }
}

Menu.contextTypes = {
	component: React.PropTypes.any
};

Menu.PropTypes = {
	value:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number]),
    label:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number]),
    disabled:React.PropTypes.bool
}

Menu.defaultProps = {
	value:'',
    label:'',
    disabled:false
}

export default Menu;