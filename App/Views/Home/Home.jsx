import css from './Scss/Main.scss';
import Layout from '../../Components/Layout';
import Breadcrumb from '../../Components/Breadcrumb';
import Button from '../../Components/Button';
import Radio from '../../Components/Radio';
import CheckBox from '../../Components/CheckBox';
import Input from '../../Components/Input';
import DatePicker from '../../Components/DatePicker';
import Select from '../../Components/Select';
import Switch from '../../Components/Switch';
import {TimePicker} from '../../Components/DatePicker';
import Transfer from '../../Components/Transfer';
import Rate from '../../Components/Rate';
import Table from '../../Components/Table';
import Tag from '../../Components/Tag';
import Tree from '../../Components/Tree';
import Pagination from '../../Components/Pagination';
import Badge from '../../Components/Badge';
import Alert from '../../Components/Alert';
import Loading from '../../Components/Loading';
import Message from '../../Components/Message';
import MessageBox from '../../Components/MessageBox';
import Notification from '../../Components/Notification';
import Tabs from '../../Components/Tabs';
import DropDown from '../../Components/DropDown';
import Steps from '../../Components/Steps';
import Dialog from '../../Components/Dialog';
import Tooltip from '../../Components/Tooltip';
import Popover from '../../Components/Popover';
const Link = ReactRouterDOM.Link;
class Home extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            data:{},
            yesterday:null,
            today:null,
            series:[{
                type: 'area',
                name: '浏览量(PV)',
                data: null
            }],
            dialogVisible:false,
        }
	}
    componentDidMount(){
        let _this = this;
        new Promise((resolve,reject)=>{
            request.post('/api/getUser')
                   .end(function(err, res){
                        if(res.ok){
                            resolve(JSON.parse(res.text))
                        }else{
                            reject(err)
                        }
                   })
        }).then((data)=>{
            _this.setState({'data':data})
        })
    }
/*    componentDidMount(){
        let _this = this;
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
        })
    }*/
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
                        <Input placeholder="请输入" value="121" />
                        <Input placeholder="请输入" type="textarea" autosize="true"/>
                        <Input placeholder="请输入" type="number" step='2'/>
                        <Select>
                            <Select.OptionGroup label='分组1'>
                                <Select.Option value='1'></Select.Option>
                                <Select.Option value='2' ></Select.Option>
                            </Select.OptionGroup>
                            <Select.OptionGroup label='分组2'>
                                <Select.Option value='3'></Select.Option>
                                <Select.Option value='4' ></Select.Option>
                            </Select.OptionGroup>
                        </Select>
                        <Switch width='62' onColor="#13ce66" onValue='1' offValue='0' offColor="#ff4949"/>
                        <TimePicker/>
                        <Transfer/>
                        <Rate/>
                        <Table data={this.state.data.result} columns={this.props.columns} />
                        <Tag >标签1</Tag>
                        <Tag type='gray'>标签2</Tag>
                        <Tag type='success'>标签3</Tag>
                        <Tag type='warning'>标签4</Tag>
                        <Tag type='danger'>标签5</Tag>
                        <Tag type='primary'>标签6</Tag>
                        <Tree/>
                        <Pagination pageSize="10" total="100" currentPage="5" onCurrentChange={(currentPage,pageSize)=>{console.log(currentPage,pageSize)}}/>
                        <Badge className="mark" value="12" max={5} >
                            <Button size="small">评论</Button>
                        </Badge>
                        <Alert title="成功提示的文案" type="success" closeText="知道了"/>
                        <Alert title="消息提示的文案" type="info" closable={false}/>
                        <Alert title="警告提示的文案" type="warning" description="description" />
                        <Alert title="错误提示的文案" type="error" showIcon={true} />
                        <Loading text="拼命加载中">
                            <span>111</span>
                        </Loading>
                        <Button onClick={()=>{Message('success','success')}}>success</Button>
                        <Button onClick={()=>{Message('error','error')}}>error</Button>
                        <Button onClick={()=>{Message('info','info')}}>info</Button>
                        <Button onClick={()=>{Message({message:'warning',type:'warning',showClose:true})}}>warning</Button>

                        <Button onClick={()=>{MessageBox.alert('标题','内容').then(() => {
                          Message({
                            type: 'success',
                            message: '确定'
                          });
                        }).catch(() => {
                          Message({
                            type: 'info',
                            message: '取消'
                          });       
                        })  }}>alert</Button>

                        <Button onClick={()=>{MessageBox.confirm('标题','内容',{'type':'warning'}).then(() => {
                          Message({
                            type: 'success',
                            message: '确定'
                          });
                        }).catch(() => {
                          Message({
                            type: 'info',
                            message: '取消'
                          });       
                        })  }}>confirm</Button>

                        <Button onClick={()=>{MessageBox.prompt('标题','内容').then((v) => {
                          Message({
                            type: 'success',
                            message: '你输入的内容是'+v
                          });
                        }).catch(() => {
                          Message({
                            type: 'info',
                            message: '取消输入'
                          });       
                        })  }}>prompt</Button>

                        <Button onClick={()=>{Notification('标题','内容')}}>Notification</Button>

                        <Button onClick={()=>{Notification('标题','内容',{type:'success',offset:100})}}>success</Button>
                        <Button onClick={()=>{Notification('标题','内容',{type:'warning'})}}>warning</Button>
                        <Button onClick={()=>{Notification('标题','内容',{type:'error'})}}>error</Button>
                        <Button onClick={()=>{Notification('标题','内容',{type:'info'})}}>info</Button>

                        <Tabs>
                            <Tabs.Panel label="选项卡1">选项卡1</Tabs.Panel>
                            <Tabs.Panel label="选项卡2">选项卡2</Tabs.Panel>
                            <Tabs.Panel label="选项卡3">选项卡3</Tabs.Panel>
                            <Tabs.Panel label="选项卡4">选项卡4</Tabs.Panel>
                        </Tabs>

                        <DropDown label="下拉菜单" onCommand={(command)=>{console.log(command)}}>
                            <DropDown.Item command="选项1">选项1</DropDown.Item>
                            <DropDown.Item command="选项2" disabled={true}>选项2</DropDown.Item>
                            <DropDown.Item command="选项3">选项3</DropDown.Item>
                            <DropDown.Item command="选项4">选项4</DropDown.Item>
                        </DropDown>

                        <Steps active={2} direction="vertical">
                            <Steps.Step title="步骤 1" description="这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字"/>
                            <Steps.Step title="步骤 2" description="这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字"/>
                            <Steps.Step title="步骤 3" description="这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字"/>
                        </Steps>

                        <Button onClick={()=>{this.setState({'dialogVisible':true})}}>dialog</Button>
                        <Dialog  visible={ this.state.dialogVisible }>
                            1212121
                        </Dialog>

                        <Tooltip content="Top Left 提示文字" placement="top-left">
                          <Button>上左</Button>
                        </Tooltip>
                        <Tooltip content="Top Center 提示文字11111111111111" placement="top">
                          <Button>上边</Button>
                        </Tooltip>
                        <Tooltip content="Top Right 提示文字" placement="top-right">
                          <Button>上右</Button>
                        </Tooltip>

                        <Tooltip content="Top Left 提示文字" placement="bottom-left">
                          <Button>下左</Button>
                        </Tooltip>
                        <Tooltip content="Top Center 提示文字11111111111111" placement="bottom">
                          <Button>下边</Button>
                        </Tooltip>
                        <Tooltip content="Top Right 提示文字" placement="bottom-right">
                          <Button>下右</Button>
                        </Tooltip>

                        <Tooltip content={ <div>多行信息<br/>第二行信息</div>} placement="left-top">
                          <Button>左上</Button>
                        </Tooltip>
                        <Tooltip content={ <div>多行信息<br/>第二行信息</div>} placement="left">
                          <Button>左边</Button>
                        </Tooltip>
                        <Tooltip content={ <div>多行信息<br/>第二行信息</div>} placement="left-bottom">
                          <Button>左下</Button>
                        </Tooltip>

                        <Tooltip content={ <div>多行信息<br/>第二行信息</div>} placement="right-top">
                          <Button>右上</Button>
                        </Tooltip>
                        <Tooltip content={ <div>多行信息<br/>第二行信息</div>} placement="right">
                          <Button>右边</Button>
                        </Tooltip>
                        <Tooltip content={ <div>多行信息<br/>第二行信息</div>} placement="right-bottom">
                          <Button>右下</Button>
                        </Tooltip>

                        <Popover content={ <div>多行信息<br/>第二行信息</div>} placement="right-top" title="标题">
                          <Button>右上</Button>
                        </Popover>

                        <Popover content={ <div>多行信息<br/>第二行信息</div>} placement="left-top" title="标题">
                          <Button>左上</Button>
                        </Popover>

                        <Popover content={ <div>多行信息<br/>第二行信息</div>} placement="top" title="标题">
                          <Button>上</Button>
                        </Popover>

                        <Popover content={ <div>多行信息<br/>第二行信息</div>} placement="bottom" title="标题">
                          <Button>下</Button>
                        </Popover>

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
    columns:[
        {
            type: 'expand',
            'width':'48',
            'expandPannel': function(data){
                return (
                    <div>{data.msg}</div>
                )
            }
        },
        {
            'type':'selection',
            'align': 'center',
            'width':'48'
        },
        {
            'label':'id',
            'prop':'id'
        },
        {
            'label':'名字',
            'prop':'name'
        },
        {
            'label':'年龄',
            'prop':'age',
            'sortable': true
        },
        {
            'label':'地址',
            'prop':'address'
        },
        {
            'label':'操作',
            'width':100,
            'render':(data)=>{
                let editUrl = '/user/edit/'+data.id;
                let delUrl = '/user/del/'+data.id;
                return (<div><Link to={editUrl}>修改</Link><Link to={delUrl}>删除</Link></div>)
            }
        }

    ],
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