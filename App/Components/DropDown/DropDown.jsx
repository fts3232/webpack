//Component1.jsx
import Link from 'react-router-dom/Link.js';
import css from './Scss/Main.scss';
import Svg from '../Svg';
class DropDown extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            'status':'hide'
        }
	}
    clickHandle(){
        let status = this.state.status=='hide'?'show':'hide';
        this.setState({status:status})
    }
    render() {
        let className = 'button '+this.state.status
        return (
            <div className="dropDown">
               <div className={className} onClick={this.clickHandle.bind(this)}><span>{this.props.data.cnName}</span><Svg name="Down" /></div>
               <ul className={this.state.status}>
                {this.props.data.list.map((val)=>{
                    return (<Link to={val.path}><li>{val.cnName}</li></Link>)
                })}
               </ul>
            </div>
        )
    }
}

DropDown.propTypes={//属性校验器，表示改属性必须是bool，否则报错

}
DropDown.defaultProps={

};//设置默认属性

//导出组件
export default DropDown;