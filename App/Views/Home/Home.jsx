/*import Charts from '../../Components/Charts';*/
import css from './Scss/Main.scss';
/*import Button from '../../Components/Button';*/
import Layout from '../../Components/Layout';
import Breadcrumb from '../../Components/Breadcrumb';
class Home extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            yesterday:null,
            today:null,
            series:[{
                type: 'area',
                name: '浏览量(PV)',
                data: null
            }]
        }
	}
    componentDidMount(){
        /*let _this = this;
        $.ajax({
            url:'/api/getPv',
            dataType:'json',
            success:function(data){
                let series = _this.state.series;
                series[0].data = data.record;
                _this.setState({series:series,yesterday:data.yesterday,today:data.today})
            },
            error:function(){
                console.log('getDateError');
            }
        })*/
    }
    render() {
        return (
            <div className="home-page">
                <Layout.Row>
                    <Layout.Col span='22' offset='1'>
                        <Breadcrumb item={[{name:'首页',path:'/'}]}/>
                    </Layout.Col>
                </Layout.Row>
                <Layout.Row>
                    <Layout.Col span='22' offset='1'>
                        <div className="block">
                            1212
                        </div>
                    </Layout.Col>
                </Layout.Row>
               {/* <Breadcrumb item={[{name:'a',path:'User'},{name:'b',path:'b'},{name:'c',path:'c'},{name:'d',path:'d'}]}/>
                <Button>asd</Button>
                <Button type="primary">asd</Button>
                <Button type="success">asd</Button>
                <Button type="warning">asd</Button>
                <Button type="info">asd</Button>
                <Button type="danger">asd</Button>
                <Button type="text" disabled={true}>asd</Button>
                <Button disabled={true}>asd</Button>
                <Button type="primary" loading={true}>asd</Button>*/}
            </div>
        )
        if(this.state.series[0].data!=null){
            return (
                <div className="home-page">
                    <div className="content-block">
                        <h4>今日流量</h4>
                        <table>
                            <tr>
                                <th></th>
                                <th>浏览量(PV)</th>
                                <th>访客数(UV)</th>
                                <th>IP数</th>
                            </tr>
                            <tr>
                                <td className="left">昨天</td>
                                <td>{this.state.yesterday.pv}</td>
                                <td>{this.state.yesterday.uv}</td>
                                <td>{this.state.yesterday.ip}</td>
                            </tr>
                            <tr>
                                <td className="left">今天</td>
                                <td>{this.state.today.pv}</td>
                                <td>{this.state.today.uv}</td>
                                <td>{this.state.today.ip}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="content-block">
                        <Charts chart={this.props.chart} title={this.props.title}  series={this.state.series} xAxis={this.props.xAxis} yAxis={this.props.yAxis}/>
                    </div>
                </div>
            )
        }else{
            return false;
        }
        
    }
}

Home.PropTypes = {
    title:React.PropTypes.object,
    chart:React.PropTypes.object,
    xAxis:React.PropTypes.object,
    yAxis:React.PropTypes.object
}

Home.defaultProps = {
    title : {
        text:'浏览量(PV)',
        align:'center',
        style:{
            color: '#535351',
            fontSize: '14px'
        }
    },
    chart : {
        zoomType: 'x',
        renderTo : "container"
    },
    tooltip: {
        dateTimeLabelFormats: {
            millisecond: '%H:%M:%S.%L',
            second: '%H:%M:%S',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%Y-%m-%d',
            week: '%m-%d',
            month: '%Y-%m',
            year: '%Y'
        }
    },
    xAxis : {
        type: 'datetime',
        dateTimeLabelFormats: {
            millisecond: '%H:%M:%S.%L',
            second: '%H:%M:%S',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%m-%d',
            week: '%m-%d',
            month: '%Y-%m',
            year: '%Y'
        }
    },
    yAxis : {
        title: {
            text: '浏览量(PV)'                 //指定y轴的标题
        }
    }          
}

//导出组件
export default Home;