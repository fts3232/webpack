import Slider from '../../Components/Slider';
class SliderPage extends React.Component {
	constructor(props){
		super(props);	}
    render() {
        return (
        	<Slider min="0" max="10" unit="$" step="2.5"/>
        )
    }
}

SliderPage.propTypes={//属性校验器，表示改属性必须是bool，否则报错
}
SliderPage.defaultProps={
};//设置默认属性

//导出组件
export default SliderPage;


