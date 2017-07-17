import css from './Scss/Main.scss';
class Charts extends React.Component {
	constructor(props){
		super(props)
	}
	initChart(){
		
		let chart = new Highcharts.Chart({// 图表初始化函数，其中 container 为图表的容器 div               
		    chart: this.props.chart,
		    title: this.props.title,
		    xAxis: this.props.xAxis,
		    yAxis: this.props.yAxis,
		    series:this.props.series,
		    credits:{
			     enabled:false // 禁用版权信息
			},
			exporting: {
		        enabled: true
		    },
		    tooltip: {
		        dateTimeLabelFormats: {
		            millisecond: '%H:%M:%S.%L',
		            second: '%Y-%m-%d %H:%M:%S',
		            minute: '%H:%M',
		            hour: '%H:%M',
		            day: '%Y-%m-%d',
		            week: '%m-%d',
		            month: '%Y-%m',
		            year: '%Y'
		        }
		    },
		    plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
			lang:{
		       contextButtonTitle:"图表导出菜单",
		       decimalPoint:".",
		       downloadJPEG:"下载JPEG图片",
		       downloadPDF:"下载PDF文件",
		       downloadPNG:"下载PNG文件",
		       downloadSVG:"下载SVG文件",
		       drillUpText:"返回 {series.name}",
		       loading:"加载中",
		       months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
		       noData:"没有数据",
		       numericSymbols: [ "千" , "兆" , "G" , "T" , "P" , "E"],
		       printChart:"打印图表",
		       resetZoom:"恢复缩放",
		       resetZoomTitle:"恢复图表",
		       shortMonths: [ "Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"],
		       thousandsSep:",",
		       weekdays: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六","星期天"]
		    }
		})
	}
	componentWillUnmount(){
		Highcharts = undefined;
		document.querySelector('script#highcharts').remove();
	}
	componentDidMount(){
		if(document.querySelector('script#highcharts')==null){
			let script = document.createElement('script');
			script.type="text/javascript";
			script.id = 'highcharts';
			script.src="https://cdn.bootcss.com/highcharts/5.0.11/highcharts.js"
			document.body.appendChild(script)
			let _this = this;
			script.onload = function(){
				System.import('highcharts/modules/exporting').then((exporting)=>{
					if(typeof Highcharts!='undefined'){
						exporting(Highcharts)
						_this.initChart();
					}
				})
			}
		}else{
			if(typeof Highcharts!='undefined'){
				exporting(Highcharts)
				this.initChart();
			}
		}
		
	}
	render(){
		return(
			<div id={this.props.chart.renderTo} className="chart"></div>
		)
	}
}

Charts.PropTypes = {
	title:React.PropTypes.object,
	chart:React.PropTypes.object,
	series:React.PropTypes.array,
	xAxis:React.PropTypes.object,
	yAxis:React.PropTypes.object
}

Charts.defaultProps = {
	title : {},
	chart:{},
	series : [],
	xAxis : {},
	yAxis : {},   
}

export default Charts;