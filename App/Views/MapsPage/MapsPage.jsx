import Maps from '../../Components/Maps';
class MapsPage extends React.Component {
	constructor(props){
		super(props)   
	}
	render(){
		return(
			<div className="content-block">
				<Maps chart={this.props.chart} title={this.props.title}  series={this.props.series} xAxis={this.props.xAxis} yAxis={this.props.yAxis}/>
			</div>
		)
	}
}

MapsPage.PropTypes = {
	title:React.PropTypes.object,
	chart:React.PropTypes.object,
	series:React.PropTypes.array,
	xAxis:React.PropTypes.object,
	yAxis:React.PropTypes.object
}

MapsPage.defaultProps = {
	title : {
		text:'用户图标',
		align:'left',
		style:{
			color: '#535351',
    		fontSize: '14px'
		}
	},
	chart : {
		type: 'bar' ,
		renderTo : "container"
	},
	series : [
		{                                 //指定数据列
	        name: '小明',                          //数据列名
	        data: [1, 0, 4]                        //数据
	    }, 
	    {
	        name: '小红',
	        data: [5, 7, 3]
	    }
    ],
	xAxis : {
        categories: ['苹果', '香蕉', '橙子']   //指定x轴分组
    },
	yAxis : {
        title: {
            text: 'something'                 //指定y轴的标题
        }
    }		   
}

export default MapsPage;