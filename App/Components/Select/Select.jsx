import css from './Scss/Main.scss';
import Input from '../Input';
import Component from '../Component';
class Select extends Component {
	constructor(props){
		super(props);
        this.retract = this.retract.bind(this)
        this.state = {
            value:null
        }
	}
    clickItemHandler(ref){
        event.stopImmediatePropagation()
        if(!hasClass(this.refs[ref],'is-disabled')){
            let value = this.refs[ref].getAttribute('value');
            this.refs['input'].setValue(value);
            this.setState({value:value})
            this.expandedHandler()
        }

    }
    expandedHandler(){
        let _this = this;
        event.stopImmediatePropagation()
        if(!this.props.disabled){
            let expanded = this.refs['dropdown'].getAttribute('data-expanded');
            if(expanded=='false'){
                this.refs['dropdown'].setAttribute('data-expanded','true');
            }else{
                this.refs['dropdown'].setAttribute('data-expanded','false');
            }
        }
    }
    retract(){
        let expanded = this.refs['dropdown'].getAttribute('data-expanded');
        if(expanded=='true'){
            this.refs['dropdown'].setAttribute('data-expanded','false');
        }
    }
    resetHandler(){
        event.stopImmediatePropagation()
         this.refs['input'].setValue('');
        this.setState({value:null})
    }
    componentDidMount(){
        let _this = this;
        window.addEventListener("click", this.retract)
    }
    componentWillUnmount(){
        window.removeEventListener("click", this.retract);
    }
    render() {
        let className;
        return(
            <div className="select">
                <div className="select-input-wrapper" >
                    <div className="select-input" onClick={this.expandedHandler.bind(this)}>
                       <Input name={this.props.name} disabled={this.props.disabled} value={this.state.value} readonly={true} placeholder="请选择" ref='input'/>
                    </div>
                    {this.state.value!=null?(
                        <span className="close" onClick={this.resetHandler.bind(this)}>x</span>
                    ):null}
                </div>
                <div className="select-dropdown" data-expanded="false" ref="dropdown">
                    <div className="scrollbar">
                        <ul className="dropdown-list">
                            {this.props.data.map((val,key)=>{
                                
                                if(typeof val.title !='undefined'){
                                    let ref = 'item-'+key;
                                    let item = [];
                                    val.value.map((v,k)=>{
                                        ref = ref+'-'+k;
                                        let className = 'dropdown-item';
                                        if(v.disabled)
                                            className += ' is-disabled';
                                        item.push (
                                            <li className={className} value={v.value} ref={ref} onClick={this.clickItemHandler.bind(this,ref)}>{v.label}</li>
                                        )
                                    })
                                    return (
                                        <ul className="dropdown-group-wrapper">
                                            <li className="dropdown-group-title">{val.title}</li>
                                            <li>
                                                <ul className="dropdown-gourp">
                                                    {item}
                                                </ul>
                                            </li>
                                        </ul>
                                    );
                                }else{
                                    let ref = 'item-'+key;
                                    let className = 'dropdown-item';
                                    if(val.disabled)
                                        className += ' is-disabled';
                                    return (
                                        <li className={className} value={val.value} ref={ref} onClick={this.clickItemHandler.bind(this,ref)}>{val.label}</li>
                                    )
                                }
                                
                            })}
                        </ul>
                    </div>
                </div>  
            </div>
        )
    }
}

Select.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    datar:React.PropTypes.array,
    name:React.PropTypes.string,
    disabled:React.PropTypes.bool,
    multiple:React.PropTypes.number,
    clearable:React.PropTypes.bool
}
Select.defaultProps={
    data:[],
    name:'',
    disabled:false,
    multiple:0,
    clearable:true,
};//设置默认属性

//导出组件
export default Select;