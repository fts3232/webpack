//Component1.jsx
/*import React from 'react';*/
import Table from '../../Components/Table';
class Index extends React.Component {
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
        	   <Table action={this.props.action} changeData={this.changeData.bind(this)} data={this.state.data} columns={this.props.columns} search={true}  pagination={true} checkBox={true} tools={this.props.tools} pageSize='10'/>
            </div>
        )
    }
}

Index.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    url: React.PropTypes.string,
    columns:React.PropTypes.array,
    action:React.PropTypes.array,
    tools:React.PropTypes.array
}
Index.defaultProps={
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
export default Index;