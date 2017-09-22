//Component1.jsx
import css from './Scss/Main.scss';
import Icon from '../Icon';
import Component from '../Component';
class Steps extends Component {
	constructor(props){
		super(props);
	}
    render() {
        let {direction,children,space,active} = this.props;
        return (
            <div className={this.className('steps',`is-${direction}`)}>
                {React.Children.map(children,(v,index)=>{
                    
                    let props = Object.assign(v.props,{index:index+1,showLine:children.length-1>index,space:space,active:active,direction:direction});
                    return React.createElement(v.type,props,v.children);
                })}
            </div>
        )
    }
}

Steps.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    active:React.PropTypes.number,
    space:React.PropTypes.number,
    direction:React.PropTypes.oneOf(['horizontal','vertical']),
}
Steps.defaultProps={
    active:0,
    space:200,
    direction:'horizontal',
};//设置默认属性

//导出组件
export default Steps;