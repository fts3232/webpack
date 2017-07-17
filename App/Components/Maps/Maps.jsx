class Maps extends React.Component {
	constructor(props){
		super(props)
	}
	componentWillUnmount(){
		Highcharts = undefined;
		document.querySelector('script#highmaps').remove();
		document.querySelector('script#cn-map').remove();
	}
	componentDidMount(){
		if(document.querySelector('script#highmaps')==null){
			let script = document.createElement('script');
			script.type="text/javascript";
			script.id = 'highmaps';
			script.src="https://img.hcharts.cn/highmaps/highmaps.js"
			document.body.appendChild(script)
			let _this = this;
			script.onload = function(){
				let script2 = document.createElement('script');
				script2.type="text/javascript";
				script2.id = 'cn-map'
				script2.src="http://code.highcharts.com/mapdata/countries/cn/custom/cn-all-sar-taiwan.js"
				document.body.appendChild(script2)
				script2.onload = function(){
					if(typeof Highcharts!='undefined'){
						Highcharts.setOptions({
							colors:['#7cb5ec',"#434348","#90ed7d","#f7a35c","#8085e9","#f15c80","#e4d354","#2b908f","#f45b5b","#91e8e1"]
						})
						_this.initMap();
					}
				}
			}
		}else{
			if(typeof Highcharts!='undefined'){
				Highcharts.setOptions({
					colors:['#7cb5ec',"#434348","#90ed7d","#f7a35c","#8085e9","#f15c80","#e4d354","#2b908f","#f45b5b","#91e8e1"]
				})
				this.initMap();
			}
		}
	}
	initMap(){
		
		var mapdata = Highcharts.maps['countries/cn/custom/cn-all-sar-taiwan']
        var data = [];
        Highcharts.each(mapdata.features, function(md, index) {
	        data.push({
	            'hc-key': md.properties['hc-key'],
	            value: Math.floor((Math.random()*100)+1)  // 生成 1 ~ 100 随机值
	        })
	    })
	    let chart = new Highcharts.Map({// 图表初始化函数，其中 container 为图表的容器 div	
	        title : {
	            text : 'Highmaps 基础例子'
	        },
	        chart : {
				type: 'map' ,
				renderTo : "container"
			},
	        credits:{
			     enabled:false // 禁用版权信息
			},
	        mapNavigation: {
	            enabled: true,
	            buttonOptions: {
	                verticalAlign: 'bottom'
	            }
	        },
	        colorAxis: {
	            min: 0,
	            stops: [
	                [0, '#EFEFFF'],
	                [0.5, Highcharts.getOptions().colors[0]],
	                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.5).get()]
	            ]
	        },
	        series : [{
	            data : data,
	            mapData: mapdata,
	            joinBy: 'hc-key',
	            name: '中国',
	            states: {
	                hover: {
	                    color: '#a4edba'
	                }
	            },
	            dataLabels: {
	                enabled: false,
	                format: '{point.name}'
	            }
	        }]
	    })
	}
	render(){
		return(
			<div  className="mapArea">
				<div id="container" className="map"></div>
			</div>
		)
	}
}

Maps.PropTypes = {
	title:React.PropTypes.object,
	chart:React.PropTypes.object,
	series:React.PropTypes.array,
	xAxis:React.PropTypes.object,
	yAxis:React.PropTypes.object
}

Maps.defaultProps = {
	title : {},
	chart:{},
	series : [],
	xAxis : {},
	yAxis : {},   
}

export default Maps;