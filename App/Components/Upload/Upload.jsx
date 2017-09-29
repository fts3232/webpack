import css from './Scss/Main.scss';
import Button from '../Button';
import Icon from '../Icon';
import Component from '../Component';
import ajax from './ajax.js';
//import Dropzone from 'react-dropzone';
class Upload extends Component {
	constructor(props){
		super(props);
        this.state = {
            fileList:props.fileList || [],
            tempIndex:1
        }
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
        try{
            this.beforeUpload(file);
            this.post(file);
        }catch(err){
            console.log(err);
            return false;
        }
        /*const { beforeUpload } = this.props;
        if (!beforeUpload) {
            return this.post(rawFile);
        }
        const before = beforeUpload(rawFile);
        if (before && before.then) {
          before.then(
            processedFile => {
              if (
                Object.prototype.toString.call(processedFile) === '[object File]'
              ) {
                this.post(processedFile);
              } else {
                this.post(rawFile);
              }
            },
            () => {
              if (file) this.onRemove(file);
            }
          );
        } else if (before !== false) {
          this.post(rawFile);
        } else {
          if (file) this.onRemove(file);
        }*/
    }
    beforeUpload(){
        
    }
    post(file){
        let {action,name} = this.props
        ajax({
            action:action,
            data:{},
            file:file,
            filename:name,
            withCredentials:true,
            onProgress:(e)=>{this.onProgress(e)},
            onError:(err)=>{this.uploadSuccess(err,file)},
            onSuccess:(res)=>{this.uploadSuccess(res,file)},
        })
         /*const {
          name: filename,
          headers,
          withCredentials,
          data,
          action,
          onProgress,
          onSuccess,
          onError
        } = this.props;
        ajax({
          headers,
          withCredentials,
          file,
          data,
          filename,
          action,
          onProgress: e => onProgress(e, file),
          onSuccess: res => onSuccess(res, file),
          onError: err => onError(err, file)
        });*/
    }
    onProgress(e){
        console.log(e)
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
    removeItem(index){
        let {fileList} = this.state;
        let delFile = fileList[index];
        fileList.splice(index,1);
        this.setState({fileList},()=>{
            if(this.props.onRemove){
                this.props.onRemove(delFile);
            }
        })
    }
    render() {
        let {name,tip,accept,multiple,trigger} = this.props;
        let {fileList} = this.state;
        return(
            <div className={this.className('upload')} >
                <div className="upload-trigger" onClick={this.handleClick.bind(this)}>
                    {trigger}
                    <input type="file" name={name} className="upload-input" ref='input'  onChange={(e) => {this.handleChange(e)}}  multiple={multiple}/>
                </div>
                <div className="upload-tip">{tip}</div>
                <ul className="upload-list">
                    {fileList.map((v,index)=>{
                        let statusIcon = v.status=='error'?'is-error':'is-success';
                        let icon = v.status=='error'?'times-circle':'check-circle';
                        return (
                            <li className="upload-list-item">
                                <Icon iconName="file-o" className="file-icon"/>
                                <span>{v.name}</span>
                                <Icon iconName="close" onClick={this.removeItem.bind(this,index)} className="close-icon"/>
                                {v.status!='ready'?(
                                    <Icon iconName={icon} className={this.classNames('status-icon',statusIcon)}/>
                                ):null}
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
    action:React.PropTypes.string,
    autoUpload:React.PropTypes.bool,
    fileList:React.PropTypes.array,
    onRemove:React.PropTypes.func,
    onSuccess:React.PropTypes.func,
    onError:React.PropTypes.func,
    name:React.PropTypes.string,
    tip:React.PropTypes.string,
}
Upload.defaultProps={
    trigger:null,
    multiple:false,
   /* accept:'image/*',*/
    action:'',
    autoUpload:true,
    fileList:[
        {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'}, 
        {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'}
    ],
    onRemove:()=>{},
    onSuccess:()=>{},
    onError:()=>{},
    name:'file',
    tip:'',
    
};//设置默认属性

//导出组件
export default Upload;