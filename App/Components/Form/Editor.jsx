import css from './Scss/quill.snow.css';
var modules = {
    toolbar: [
        [{ font: [] }, { size: [] }],
        [{ align: [] }, 'direction' ],
        [ 'bold', 'italic', 'underline', 'strike' ],
        [{ color: [] }, { background: [] }],
        [{ script: 'super' }, { script: 'sub' }],
        ['blockquote', 'code-block' ],
        [{ list: 'ordered' }, { list: 'bullet'}, { indent: '-1' }, { indent: '+1' }],
        [ 'link', 'image', 'video' ],
        [ 'clean' ]
    ],
};
class Editor extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            'scriptLoading':false
        }
	}
    componentDidMount(){
        let script = document.createElement('script');
        script.type="text/javascript";
        script.src="https://cdn.bootcss.com/react-quill/1.0.0-beta-2/react-quill.min.js"
        document.body.appendChild(script)
        let _this = this;
        script.onload = function(){
            _this.setState({scriptLoading:true});
        }
    }
    render() {
        if(this.state.scriptLoading){
            
            return(
                <ReactQuill modules={modules} />
            )
        }else{
            return(
                <div></div>
            )
        }
        
    }
}

Editor.propTypes={//属性校验器，表示改属性必须是bool，否则报错

}
Editor.defaultProps={

};//设置默认属性

//导出组件
export default Editor;