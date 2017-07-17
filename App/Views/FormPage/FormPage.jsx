//Component1.jsx
/*import React from 'react';*/
import Form from '../../Components/Form';
import Switch from '../../Components/Form/Switch.jsx';
import CheckBox from '../../Components/Form/CheckBox.jsx';
import DateTimePicker from '../../Components/Form/DateTimePicker.jsx';
import ColorPicker from '../../Components/Form/ColorPicker.jsx';
import Editor from '../../Components/Form/Editor.jsx';
import Radio from '../../Components/Form/Radio.jsx';
import Svg from '../../Components/Svg';
import Input from '../../Components/Form/Input.jsx';
import Select from '../../Components/Form/Select.jsx';
class FormPage extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            data:''
        };
	}
    changeData(){
        
    }
    componentDidMount(){
        let _this = this;
        $.ajax({
            url:this.props.url,
            dataType:'json',
            success:function(data){
                _this.setState({data:data})
            },
            error:function(){
                console.log('getDateError');
            }
        })
    }
    render() {
        return (
        	<div className="content-block">
               <Form style="">
                    <div className="form-group">
                        <label>Email address</label>
                        <Input name="address" placeholder="请输入内容" size="large"/>
                        <Input name="address" placeholder="请输入内容" size="small"/>
                        <Input name="address" placeholder="请输入内容" size="mini"/>
                        <Input name="address" placeholder="请输入内容"/>
                        <Input name="address" placeholder="请输入内容" rows="2" cols="5" type="textarea"/>
                        <Input name="address" placeholder="请输入内容" append=".com"/>
                        <Input name="address" placeholder="请输入内容" prepend="http://"/>
                        <Input name="address" placeholder="请输入内容" prepend="http://" append=".com"/>
                        <Input name="address" type="number" start="2" min="0" max="10" step="1"/>
                        <Input name="address" type="number" start="2" min="0" max="10" step="1" size="large"/>
                        <Input name="address" type="number" start="2" min="0" max="10" step="1" size="small"/>
                        <Input name="address" type="number" start="2" min="0" max="10" step="1" size="mini"/>
                        <Select data={
                            [
                                {
                                    'title':'ada',
                                    'value':[
                                        {label:'a',value:'a',disabled:true},
                                        {label:'b',value:'b'},
                                        {label:'c',value:'c'},
                                        {label:'d',value:'d'}
                                    ]
                                }
                                
                            ]}/>
                        <Select data={[{label:'a',value:'a',disabled:true},{label:'b',value:'b'},{label:'c',value:'c'},{label:'d',value:'d'}]} disabled={true}/>
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <Input name="address" placeholder="请输入内容" disabled={true}/>
                    </div>  
                    <div className="form-group">
                        <label>Button addons</label>
                        <div className="input-group">
                            <span className="input-group-btn">
                                <button className='btn'><Svg name="Search" /></button>
                            </span>
                            <input type="text" className="form-control" />
                        </div>
                    </div>  
                    <div className="form-group">
                        <Switch />
                    </div>
                    <div className="form-group">
                        <CheckBox name="checkbox"  data={[{label:'已',value:'a',disabled:true},{label:'已',value:'b',checked:true},{label:'已',value:'c'}]}/>
                    </div>
                    <div >
                        <Radio name="radio" name="radio"  data={[{label:'a',value:'a'},{label:'b',value:'b'},{label:'c',value:'c','checked':false,'disabled':true}]}/>
                    </div>
                    <div className="form-group">
                        <DateTimePicker />
                    </div>
                    <div className="form-group">
                        <ColorPicker />
                    </div>
                    <div className="form-group">
                        <Editor />
                    </div>
               </Form>
            </div>
        )
    }
}

FormPage.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    url: React.PropTypes.string,
    columns:React.PropTypes.array,
    action:React.PropTypes.array,
    tools:React.PropTypes.array
}
FormPage.defaultProps={
    url:'/api/getUser',
    tools:{
        left:{
            'name':'Add',
            'cnName':'添加',
            'path':'/User/add'
        },
        right:{
            'name':'tools',
            'cnName':'工具',
            'list':[
                {
                    'name':'Print',
                    'cnName':'打印',
                    'path':'/User/Print'
                },
                {
                    'name':'Save as PDF',
                    'cnName':'保存为pdf文件',
                    'path':'/User/saveAsPDF'
                },
                {
                    'name':'Export to Excel',
                    'cnName':'导出为Excel文件',
                    'path':'/User/exportToEXCEL'
                }
            ]
        } 
    },
    columns:[
        {
            field:'id',
            title:'ID',
            order:'asc'
        },
        {
            field:'name',
            title:'名字'
        },
        {
            field:'age',
            title:'年龄',
            order:''
        },
        {
            field:'address',
            title:'地址'
        }
    ],
    action:[
        {
            'name':'edit',
            'cnName':'修改',
            'path':'/User/edit/:id'
        },
        {
            'name':'delete',
            'cnName':'删除',
            'path':'/User/delete/:id'
        },
        {
            'name':'audit',
            'cnName':'审核',
            'path':'/User/audit/:id'
        }
    ]
};//设置默认属性

//导出组件
export default FormPage;