import css from './Scss/Main.scss';
import Button from '../Button';
import Icon from '../Icon';
import Component from '../Component';
import ajax from './ajax.js';
import Progress from '../Progress';
import Message from '../Message';
//import Dropzone from 'react-dropzone';
class Upload extends Component {
	constructor(props){
		super(props);
        this.state = {
            fileList: [],
            tempIndex:1
        }
	}
    componentWillMount() {
        this.init(this.props);
    }

    init(props){
        let { tempIndex } = this.state;
        const { fileList } = props;
        const uploadFiles = fileList.map(file => {
          file.uid = file.uid || Date.now() + tempIndex++;
          file.status = 'success';
          return file;
        });
        this.setState({ fileList: uploadFiles });
    }
    clearFileList(){
        this.setState({fileList:[]})
    }
    handleClick(){
        this.refs.input.click();
    }
    handleChange(e) {
        const files = e.target.files;
        if (!files) {
            return;
        }
        this.uploadFiles(files);
        this.refs.input.value = null;
    }
    getFile(file){
        let {fileList} = this.state;
        return fileList.find((item)=>{return item.uid==file.uid});
    }
    uploadFiles(files){
        const { multiple ,autoUpload} = this.props;
        let postFiles = Array.prototype.slice.call(files);
        if (postFiles.length === 0) {
          return;
        }
        if (!multiple) {
          postFiles = postFiles.slice(0, 1);
        }
        postFiles.forEach(file => {
          this.addFileList(file);
          if (autoUpload) 
            this.upload(file);
        });
    }
    addFileList(file) {
        let { tempIndex, fileList } = this.state;

        file.uid = Date.now() + tempIndex++;

        let _file = {
            status: 'ready',
            name: file.name,
            size: file.size,
            percentage: 0,
            uid: file.uid,
            raw: file
        };

        try {
            _file.url = URL.createObjectURL(file);
        } catch (err) {
            return;
        }

        fileList.push(_file);
        this.setState({
            fileList,
            tempIndex
        });
    }

    upload(file){
        if(!this.beforeUpload(file)){
            this.removeItem(file);
            return false;
        }
        this.post(file);
    }
    beforeUpload(file){
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
            Message('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
            Message('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
    }
    post(file){
        let {action,name} = this.props
        ajax({
            action:action,
            data:{},
            file:file,
            filename:name,
            onProgress:(e)=>{this.onProgress(e,file)},
            onError:(err)=>{this.uploadSuccess(err,file)},
            onSuccess:(res)=>{this.uploadSuccess(res,file)},
        })
    }
    onProgress(e,file){
        let {fileList} = this.state;
        let _file = this.getFile(file);
        if (_file) {
            _file.percentage = e.percent || 0;
            _file.status = 'uploading';
            //this.props.onProgress(e, _file, fileList);
            this.setState({ fileList });
        }
    }
    uploadSuccess(res,file){
        let {fileList} = this.state;
        let _file = this.getFile(file);
        _file.status = res.status==true?'success':'error';
        _file.response = res;
        setTimeout(()=>{
             this.setState({fileList},()=>{
                if(this.props.onSuccess){
                    this.props.onSuccess(res,file);
                }
             })
        },1000)
    }
    uploadError(err, file){
        let {fileList} = this.state;
        let _file = this.getFile(file);
        _file.status = 'error';
        _file.response = res;
        setTimeout(()=>{
             this.setState({fileList},()=>{
                if(this.props.onError){
                    this.props.onError(err,file);
                }
             })
        },1000)
    }
    removeItem(file){
        let {fileList} = this.state;
        fileList.splice(fileList.indexOf(file), 1);
        this.setState({fileList},()=>{
            if(this.props.onRemove){
                this.props.onRemove(file);
            }
        })
    }
    onPreview(file){
        if(file.status=='success'){
            this.props.onPreview(file);
        }
    }
    render() {
        let {name,tip,accept,multiple,trigger,listType} = this.props;
        let {fileList} = this.state;
        return(
            <div className={this.className('upload')} >
                <div className="upload-trigger" onClick={this.handleClick.bind(this)}>
                    {trigger}
                    <input type="file" name={name} className="upload-input" ref='input'  onChange={(e) => {this.handleChange(e)}}  multiple={multiple}/>
                </div>
                <div className="upload-tip">{tip}</div>
                <ul className={this.classNames('upload-list',`upload-${listType}`)}>
                    {fileList.map((v,index)=>{
                        let statusIcon = v.status=='error'?'is-error':'is-success';
                        let icon ;
                        if(['picture','picture-card'].includes(listType)){
                            icon = v.status=='error'?'times':'check';
                        }else{
                            icon = v.status=='error'?'times-circle':'check-circle';
                        }
                        
                        return (
                            <li className="upload-list-item" onClick={this.onPreview.bind(this,v)}>
                                {['picture','picture-card'].includes(listType) && v.status=='success'?(
                                        <img className="upload-list-item-thumbnail" src={v.url} alt=""/>
                                    ):(
                                        <Icon iconName="file-o" className="file-icon"/>
                                    )
                                }
                                {!['picture','picture-card'].includes(listType) && (<span className="upload-list-item-name">{v.name}</span>)}
                                <Icon iconName="close" onClick={this.removeItem.bind(this,v)} className="close-icon"/>
                                {v.status=='success' || v.status=='error'?(
                                    <label className="upload-list-item-status-label">
                                        <Icon iconName={icon} className={this.classNames('status-icon',statusIcon)}/>
                                    </label>
                                ):null}
                                {v.status === 'uploading' &&
                                  <Progress
                                    strokeWidth={2}
                                    type={listType=='picture-card'?'circle':'line'}
                                    percentage={parseInt(v.percentage, 10)}
                                    status={
                                      v.status=='success' ? 'success' : ''
                                    }
                                />}
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

Upload.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    trigger:React.PropTypes.any,
    multiple:React.PropTypes.bool,
    /*accept:React.PropTypes.string,*/
    listType:React.PropTypes.oneOf(['text','picture','picture-card']),
    action:React.PropTypes.string,
    autoUpload:React.PropTypes.bool,
    fileList:React.PropTypes.array,
    onRemove:React.PropTypes.func,
    onSuccess:React.PropTypes.func,
    onError:React.PropTypes.func,
    onPreview:React.PropTypes.func,
    name:React.PropTypes.string,
    tip:React.PropTypes.string,

}
Upload.defaultProps={
    trigger:null,
    multiple:false,
    /* accept:'image/*',*/
    listType:'text',
    action:'',
    autoUpload:true,
    fileList:[
        {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'}, 
        {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'}
    ],
    onRemove:()=>{},
    onSuccess:()=>{},
    onError:()=>{},
    onPreview:()=>{},
    name:'file',
    tip:'',
    
};//设置默认属性

//导出组件
export default Upload;