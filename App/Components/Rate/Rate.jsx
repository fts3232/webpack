import css from './Scss/Main.scss';
import Component from '../Component';
import Icon from '../Icon';
class Rate extends Component {
	constructor(props){
		super(props);
	}
    onMouseOver(index){

    }
    render() {
        return(
            <div className="rate">
                <Icon iconName='star-o' onMouseOver={this.onMouseOver.bind(this)}/>
                <Icon iconName='star-o' onMouseOver={this.onMouseOver.bind(this)}/>
                <Icon iconName='star-o' onMouseOver={this.onMouseOver.bind(this)}/>
                <Icon iconName='star-o' onMouseOver={this.onMouseOver.bind(this)}/>
                <Icon iconName='star-o' onMouseOver={this.onMouseOver.bind(this)}/>
            </div>
        )
    }
}

Rate.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    
}
Rate.defaultProps={
    
};//设置默认属性

//导出组件
export default Rate;