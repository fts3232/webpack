import Panel from '../../Components/Panel';
import MediaGallery from '../../Components/MediaGallery';
import image1 from '../../../Assets/images/image1.jpg';
import image2 from '../../../Assets/images/image2.jpg';
import image3 from '../../../Assets/images/image3.jpg';
class MediaGalleryPage extends React.Component {
	constructor(props){
		super(props);
	}
    render() {
        return(
            <div className="content-block">
                <Panel title="MEDIA MANAGER">
                    <MediaGallery data={this.props.data}/>
                </Panel>
            </div>
        )
    }
}

MediaGalleryPage.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    data:React.PropTypes.object
}
MediaGalleryPage.defaultProps={
    data:{
        images:{
            totalCount:21,
            pageSize:9,
            list:[
                {
                    url:image1,
                    name:'image1.png'
                },
                {
                    url:image2,
                    name:'image2.png'
                },
                {
                    url:image3,
                    name:'image3.png'
                },
                {
                    url:image1,
                    name:'image1.png'
                },
                {
                    url:image2,
                    name:'image2.png'
                },
                {
                    url:image3,
                    name:'image3.png'
                },
                {
                    url:image1,
                    name:'image1.png'
                },
                {
                    url:image2,
                    name:'image2.png'
                },
                {
                    url:image3,
                    name:'image3.png'
                },
                
            ]
        }
    }
};//设置默认属性

//导出组件
export default MediaGalleryPage;