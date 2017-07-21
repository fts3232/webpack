//Component1.jsx
/*import React from 'react';*/
const Link = ReactRouterDOM.Link;
import Layout from '../../Components/Layout';
import Breadcrumb from '../../Components/Breadcrumb';
import Table from '../../Components/Table';
import Button from '../../Components/Button';
const request = superagent;
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
                            <Table data={this.state.data.result} columns={this.props.columns} />
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
    columns:[
        {
            'type':'selection',
            'align': 'center'
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
            'prop':'age'
        },
        {
            'label':'地址',
            'prop':'address'
        },
        {
            'label':'操作',
            'width':100,
            'render':()=>{
                return (<div><Link to="/user/edit">修改</Link><Link to="/user/del">删除</Link></div>)
            }
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