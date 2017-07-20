//Component1.jsx
/*import React from 'react';*/
import Layout from '../../Components/Layout';
import Breadcrumb from '../../Components/Breadcrumb';
import Table from '../../Components/Table';
import Button from '../../Components/Button';
import request from 'superagent';
class Show extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            data:{}
        };
	}
    componentDidMount(){
        let _this = this;
        new Promise((resolve,reject)=>{
            request.post(this.props.url)
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
    render() {
        return (
            <div className="user-show-page">
                <Layout.Row>
                    <Layout.Col span='22' offset='1'>
                        <Breadcrumb item={[{name:'用户列表',path:'/User/Show'}]}/>
                    </Layout.Col>
                </Layout.Row>
                <Layout.Row>
                    <Layout.Col span='22' offset='1'>
                        <div className="block">
                            <Table data={this.state.data} columns={this.props.columns} />
                        </div>
                    </Layout.Col>
                </Layout.Row>
            </div>
        )
    }
}

Show.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    url: React.PropTypes.string,
    columns:React.PropTypes.array,
    action:React.PropTypes.array,
    tools:React.PropTypes.array
}
Show.defaultProps={
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
            'label':'id',
            'prop':'id'
        },
        {
            'label':'名字',
            'prop':'name'
        },
        {
            'label':'年龄',
            'prop':'age'
        },
        {
            'label':'地址',
            'prop':'address'
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
export default Show;