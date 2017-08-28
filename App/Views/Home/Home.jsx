import css from './Scss/Main.scss';
import Layout from '../../Components/Layout';
import Breadcrumb from '../../Components/Breadcrumb';
import Button from '../../Components/Button';
import Radio from '../../Components/Radio';
import CheckBox from '../../Components/CheckBox';
import Input from '../../Components/Input';
import DatePicker from '../../Components/DatePicker';
import Select from '../../Components/Select';
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
                        <Button.Group>
                            <Button onClick={()=>{console.log('click')}}>按钮1</Button>
                            <Button onClick={()=>{console.log('click')}}>按钮2</Button>
                            <Button onClick={()=>{console.log('click')}}>按钮3</Button>
                            <Button onClick={()=>{console.log('click')}}>按钮4</Button>
                        </Button.Group>
                        <Radio.Group>
                            <Radio value="1" name='a'>背景</Radio>
                            <Radio value="2" name='a'>背景2</Radio>
                            <Radio value="3" name='a'>背景3</Radio>
                        </Radio.Group>
                        <Radio.Group>
                            <Radio.Button value="1" name='a'>背景</Radio.Button>
                            <Radio.Button value="2" name='a' disabled="true">背景2</Radio.Button>
                            <Radio.Button value="3" name='a'>背景3</Radio.Button>
                        </Radio.Group>
                        <CheckBox value="1" name='b' disabled='true'/>
                        <CheckBox.Group>
                            <CheckBox value="1" name='b'/>
                            <CheckBox value="2" name='b' disabled='true'/>
                        </CheckBox.Group>
                        <CheckBox.Group>
                            <CheckBox.Button value="1" name='b'>背景</CheckBox.Button>
                            <CheckBox.Button value="2" name='b' disabled='true'>背景2</CheckBox.Button>
                            <CheckBox.Button value="3" name='b' >背景3</CheckBox.Button>
                            <CheckBox.Button value="4" name='b' >背景4</CheckBox.Button>
                        </CheckBox.Group>
                        <Input placeholder="请输入" value="121"/>
                        <Input placeholder="请输入" type="textarea" autosize="true"/>
                        <Input placeholder="请输入" type="number" step='2'/>
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