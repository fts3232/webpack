import css from './Scss/Main.scss';
import Svg from '../Svg';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import image1 from '../../../Assets/images/image1.jpg';
class Upload extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            uploadFile:[]
        }
        this.locationItem = this.locationItem.bind(this);
	}
    fileSelectHandler(e){
        this.uploadHandler(e.target.files);
        //console.log(e.target.files)
        /*let upload = request.post('upload').field('file', file);
        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }
     
            console.log(response)
        });*/
    }
    uploadHandler(files){
            //创建xhr
            var xhr = new XMLHttpRequest();

            var url = "http://localhost/webpack/Api/upload.php";
            //FormData对象
            var fd = new FormData();
            fd.append("file", files[0]);
            //进度条部分
           
            xhr.open("POST", url, true);
            xhr.send(fd);
            let _this = this;
            let uploadFile = this.state.uploadFile;
            xhr.onreadystatechange = function (data) {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var result = JSON.parse(xhr.responseText);
                    result.map((val,i)=>{
                        let temp = {};
                        let size = _this.convertUnit(files[i].size)
                        temp.size = size.size;
                        temp.sizeUnit = size.unit;
                        temp.name = files[i].name;
                        temp.url = val;
                        uploadFile.push(temp)
                    })
                    _this.refs['upload'].reset();
                    _this.setState({uploadFile:uploadFile})
                    //document.getElementById("result").innerHTML = result;
                }
            }


        /*let length = files.length;
        let uploadFile = this.state.uploadFile;
        for(let i=0;i<length;i++){
            let temp = {};
            let size = this.convertUnit(files[i].size)
            temp.size = size.size;
            temp.sizeUnit = size.unit;
            temp.name = files[i].name;
            temp.url = '';
            uploadFile.push(temp)
        }
        this.refs['upload'].reset();
        this.setState({uploadFile:uploadFile})*/
    }
    convertUnit(size){
        let unit = 'b';
        size = parseInt(size);
        if(size>=1024){
            size = parseInt(size / 1024);
            unit = 'kb';
            if(size>=1024){
                size = parseInt(size / 1024);
                unit = 'mb'
            }
        }
        return {unit:unit,size:size}
    }
    delHandler(index){
        let uploadFile = this.state.uploadFile;
        uploadFile.splice(index,1)
        this.setState({uploadFile:uploadFile})
    }
    locationItem(){
        let count = this.state.uploadFile.length;
        let itemWidth = 125;
        let itemHeight = 146;
        let width = this.refs['upload-list'].clientWidth;
        let col = parseInt(width / itemWidth);

        let row = Math.ceil(count / col);
        this.refs['upload-list'].style.height = row * itemHeight +'px';
        let y = 10;
        let x = 15;
        for(let i = 0;i<count;i++){
            if(i % col!=0){
               x += itemWidth;
            }else{
                x = 15
            }
            if(typeof this.refs['item-'+i].style.transform =='undefined'){
                this.refs['item-'+i].style.top = y+'px';
                this.refs['item-'+i].style.left = x+'px'
            }else{
                this.refs['item-'+i].style.transform = 'translate('+x+'px, '+y+'px)'
            }
            if(i % col== (col-1) ){
                y +=itemHeight
            }
        }
    }
    componentDidMount(){
        window.addEventListener("resize", this.locationItem);
        this.locationItem();
    }
    componentWillUnmount(){
        window.removeEventListener("resize", this.locationItem);
    }
    componentDidUpdate(){
        this.locationItem();
    }
    render() {
        return(
            <div className='upload'  >
                <form ref='upload'>
                    {this.props.multiple?(
                        <input type="file" onChange={this.fileSelectHandler.bind(this)} accept={this.props.accept} multiple/>
                    ):(
                        <input type="file" onChange={this.fileSelectHandler.bind(this)} accept={this.props.accept}/>
                    )}
                    <p className="msg">Drop files here or click to upload.</p>
                    
                </form>
                <div className="upload-list" ref='upload-list'>
                        {this.state.uploadFile.map((val,key)=>{
                            let ref = 'item-'+key;
                            return (
                                <div className="item" ref={ref}>
                                    <img src={val.url}/>
                                    <div className="filename">{val.name}</div>
                                    <div className="filesize"><strong>{val.size}</strong> {val.sizeUnit}</div>
                                    <a onClick={this.delHandler.bind(this,key)}><Svg name="Close" /></a>
                                </div>
                            )
                        })}
                    </div>
            </div>
        )
    }
}

Upload.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    multiple:React.PropTypes.bool,
    accept:React.PropTypes.string
}
Upload.defaultProps={
    multiple:false,
    accept:'image/*'
};//设置默认属性

//导出组件
export default Upload;