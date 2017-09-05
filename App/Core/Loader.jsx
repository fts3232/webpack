//Component1.jsx
/*import React from 'react';*/
import Scrollbar from '../Components/Scrollbar';
class Loader extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            'Component':null,
            'path':null
        }
	}
    loadPage(props){
        let componentName = props.name;
        let location = props.location
        let filePath = componentName;
        if(filePath.indexOf('jsx')==-1)
            filePath+='/index.js';
        import(/* webpackChunkName: "lazy" */`../Views/${filePath}`).then((component)=>{
            let Component = component.default;
            this.setState({'Component':<Component location={location} />,path:this.props.path})

        }).catch((err)=>{
            console.log(err);
        });
    }
    componentWillReceiveProps (props){
        this.loadPage(props)
    }
    componentDidMount(){

        this.loadPage(this.props)
    }
    render() {
        let height = document.body.clientHeight - 60;
        return (
            <div className="Loader">
                <Scrollbar height={height}>
                    {this.state.Component}
                </Scrollbar>
            </div>
        )
    }
}

Loader.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    path:React.PropTypes.string,
    location:React.PropTypes.object
}
Loader.defaultProps={
    path:'',
    location:{}
};//设置默认属性

//导出组件
export default Loader;