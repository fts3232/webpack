//Component1.jsx
/*import React from 'react';*/
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
        let menu = props.menu 
        let location = props.location
        let filePath = componentName;
        if(filePath.indexOf('jsx')==-1)
            filePath+='/index.js';
        System.import("../Views/"+filePath).then((component)=>{
            let Component = component.default;
            this.setState({'Component':<Component menu={menu} match={props.match} location={location} />,path:this.props.path})

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
        return (
            <div className="Loader">
                {this.state.Component}
            </div>
        )
    }
}

Loader.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    menu: React.PropTypes.array,
    path:React.PropTypes.string,
    location:React.PropTypes.object
}
Loader.defaultProps={
    menu:[],
    path:'',
    location:{}
};//设置默认属性

//导出组件
export default Loader;