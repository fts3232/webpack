import svgConfig from './Data';
import React from 'react';
class Svg extends React.Component {
	constructor(props){
		super(props);
    this.state = {
      name:props.name,
    }
	}
  changeSvg(name){
    this.setState({name:name})
  }
  render() {
    let svgName = this.state.name;
    if(typeof svgConfig[svgName] == 'undefined'){
      svgName = 'Default';
    }
    let viewBox = svgConfig[svgName].viewBox;
    let path = svgConfig[svgName].path;
    let className = "icon "+this.props.className;
    return (
        <svg className={className} name={svgName} viewBox={viewBox} version="1.1" xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{__html: path}} ></svg>
    )
  }
}

Svg.propTypes={//属性校验器，表示改属性必须是bool，否则报错
  name: React.PropTypes.string,
  className:React.PropTypes.string
}
Svg.defaultProps={
    name:'Default',
    className:''
};//设置默认属性

//导出组件
export default Svg;