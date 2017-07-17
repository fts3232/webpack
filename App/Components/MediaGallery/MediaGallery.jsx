import css from './Scss/Main.scss';
import Svg from '../Svg';
import Pagination from '../Pagination';
import Upload from '../Upload';
class MediaGallery extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            'Modal':''
        }
        this.locationItem = this.locationItem.bind(this);
	}
    locationItem(){
        let count = 9;
        let itemWidth = 238;
        let itemHeight = 245;
        let width = this.refs['gallery'].clientWidth;
        let col = parseInt(width / itemWidth);

        let row = Math.ceil(count / col);
        this.refs['gallery'].style.height = row * itemHeight +'px';
        let y = 0;
        let x = 0;
        for(let i = 0;i<count;i++){
            if(i % col!=0){
               x += itemWidth;
            }else{
                x = 0
            }
            if(typeof this.refs['gallery-item-'+i].style.transform =='undefined'){
                this.refs['gallery-item-'+i].style.top = y+'px';
                this.refs['gallery-item-'+i].style.left = x+'px'
            }else{
                this.refs['gallery-item-'+i].style.transform = 'translate('+x+'px, '+y+'px)'
            }
            if(i % col== (col-1) ){
                y +=itemHeight
            }
        }
    }
    hideModal(){
        this.setState({'Modal':''})
    }
    clickHandler(image,name){
         System.import("../Modal").then((component)=>{
            let Modal = component.default;
            this.setState({'Modal':
                    (<Modal title="Edit Image" width='600' clickHandler={this.hideModal.bind(this)}>
                        <div className="left">
                            <div className="pic" style={{background:'url('+image+') no-repeat center','background-size':'cover'}}></div>
                            <p><b>File Name:</b> {name}</p>
                            <p><b>File Type:</b> jpg</p>
                            <p><b>Resolution:</b> 300x200</p>
                            <p><b>Uploaded By:</b> ThemeBucket</p>
                        </div>
                        <div className="right">
                            <div className="form-group">
                                <label> Name</label>
                                <input id="name" value={name} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label> Tittle Text</label>
                                <input id="name" value={name} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label> Description</label>
                                <textarea className="form-control" rows="2"></textarea>
                            </div>
                            <div className="form-group">
                                <label> Link URL</label>
                                <input id="name" value={name} className="form-control"/>
                            </div>
                            <div className="pull-right">
                                <button className="btn btn-danger btn-sm" type="button">Delete</button>

                                <button className="btn btn-success btn-sm" type="button">Save changes</button>
                            </div>
                        </div>
                    </Modal>)
            })
        }).catch((err)=>{
            console.log(err);
        });
    }
    uploadHandler(){
        System.import("../Modal").then((component)=>{
            let Modal = component.default;
            this.setState({'Modal':
                    (<Modal title="Upload" width="800" clickHandler={this.hideModal.bind(this)}>
                        <Upload multiple={true} />
                    </Modal>)
            })
        }).catch((err)=>{
            console.log(err);
        });
    }
    componentDidMount(){
        window.addEventListener("resize", this.locationItem);
        this.locationItem();
    }
    componentWillUnmount(){
        window.removeEventListener("resize", this.locationItem);
    }
    render() {
        let i = 0;
        return(
            <div className="mediaGallery">
                <div className="mediaGallery-header">
                    <ul className="media-filter">
                        <li><a href="#" data-filter="*"> All</a></li>
                        <li><a href="#" data-filter=".images">Images</a></li>
                        <li><a href="#" data-filter=".audio">Audio</a></li>
                        <li><a href="#" data-filter=".video">Video</a></li>
                        <li><a href="#" data-filter=".documents">Documents</a></li>
                    </ul>
                    <div className="btn-group">
                        <a className="btn"><Svg name="SelectAll"/> <span>Select all</span></a>
                        <a className="btn"><Svg name="Plus"/> <span>Add New</span></a>
                        <a className="btn"><Svg name="Delete"/> <span>Delete</span></a>
                        <a className="btn" onClick={this.uploadHandler.bind(this)}><Svg name="Upload"/> <span>Upload New File</span></a>
                    </div>
                </div>
                <div className="gallery" ref="gallery">
                    {this.props.data.images.list.map((val)=>{
                        let ref = 'gallery-item-'+i;
                        i++;
                        return (
                            <div className="item" ref={ref} onClick={this.clickHandler.bind(this,val.url,val.name)}>
                                <div className="pic" style={{background:'url('+val.url+') no-repeat center','background-size':'cover'}}></div>
                                <p>{val.name}</p>
                            </div>
                        )
                    })}
                </div>
                <Pagination totalCount={this.props.data.images.totalCount} pageSize={this.props.data.images.pageSize}/>
                {this.state.Modal}
            </div>
        )
    }
}

MediaGallery.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    data:React.PropTypes.object
}
MediaGallery.defaultProps={
    data:{}
};//设置默认属性

//导出组件
export default MediaGallery;