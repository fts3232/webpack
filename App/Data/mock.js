// 使用 Mock
var Mock = require('mockjs');
var Random = Mock.Random;
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'menu': [
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        {
        	name:'Home',
            cnName:'网站概况',
        	path:'',
            component:'Home'
        },
        {
        	name:'Setting',
            cnName:'设置',
        	subMenu:[
                {
                    name:'subMenu-1',
                    cnName:'子菜单1',
                    path:'Setting/subMenu-1',
                    component:'HomePage'
                },
                {
                    name:'subMenu-2',
                    cnName:'子菜单2',
                    path:'Setting/subMenu-2',
                    component:'HomePage'
                }
            ]
        },
        {
        	name:'User',
            cnName:'用户列表',
            path:'User',
            component:'User/Index.jsx',
            subMenu:[
                {
                    name:'add',
                    cnName:'添加',
                    path:'User/add',
                    component:'User/Add.jsx'
                },
                {
                    name:'edit',
                    cnName:'修改',
                    path:'User/edit/:id',
                    component:'User/Edit.jsx'
                },
                {
                    name:'delete',
                    cnName:'删除',
                    path:'User/delete/:id',
                    component:'User/Delete'
                },
                {
                    name:'audit',
                    cnName:'审核',
                    path:'User/audit/:id',
                    component:'User/Audit'
                },
                {
                    name:'print',
                    cnName:'打印',
                    path:'User/print',
                    component:'User/Print'
                },
                {
                    name:'saveAsPDF',
                    cnName:'保存为PDF',
                    path:'User/saveAsPDF',
                    component:'User/SaveAsPDF'
                },
                {
                    name:'exportToEXCEL',
                    cnName:'保存为EXCEL',
                    path:'User/exportToEXCEL',
                    component:'User/ExportToEXCEL'
                },
            ]
        },
        {
            name:'Chart',
            cnName:'图表',
            path:'Chart',
            component:'ChartsPage'
        },
        {
            name:'Map',
            cnName:'地图',
            path:'Map',
            component:'MapsPage'
        },
        {
            name:'Panel',
            cnName:'面板',
            path:'Panel',
            component:'PanelPage'
        },
        {
            name:'Slider',
            cnName:'滑块',
            path:'Slider',
            component:'SliderPage'
        },
        {
            name:'Tree',
            cnName:'树状图',
            path:'Tree',
            component:'TreePage'
        },
        {
            name:'MediaGallery',
            cnName:'图库',
            path:'MediaGallery',
            component:'MediaGalleryPage'
        },
        {
            name:'Form',
            cnName:'表单',
            path:'Form',
            component:'FormPage'
        },
        {
            name:'Alert',
            cnName:'通知',
            path:'Alert',
            component:'AlertPage'
        },
        {
            name:'Calendar',
            cnName:'日历',
            path:'Calendar',
            component:'CalendarPage'
        },
        {
            name:'Chat',
            cnName:'聊天室',
            path:'Chat',
            component:'ChatPage'
        },
        {
            name:'Todo',
            cnName:'备忘录',
            path:'Todo',
            component:'TodoPage'
        }
    ]
})

Mock.mock('/api/getMenu', data);

let userData = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    totalCount:10,
    'result|10':[
        {
            'id|+1':1,
            'name':'@first()',
            'age':'@natural(20, 40)',
            'address':'@region()'
        }
    ]
})

Mock.mock('/api/getUser', userData);

let pv = Mock.mock({
    yesterday:{pv:100,uv:100,ip:50},
    today:{pv:100,uv:100,ip:50},
    record:[
        [Date.UTC(2013,5,2,13,55,44),1],
        [Date.UTC(2013,5,2,16,55,44),2],
        [Date.UTC(2013,5,2,17,55,44),3],
        [Date.UTC(2013,5,2,18,55,44),1],
        [Date.UTC(2013,5,2,20,55,44),1],
        [Date.UTC(2013,5,3,13,55,44),5],
        [Date.UTC(2013,5,4,13,55,44),10],
        [Date.UTC(2013,5,5,13,55,44),50],
        [Date.UTC(2013,5,6,13,55,44),10],
        [Date.UTC(2013,5,7,13,55,44),20],
        [Date.UTC(2013,5,8,13,55,44),30],
        [Date.UTC(2013,5,9,13,55,44),110],
        [Date.UTC(2013,5,10,13,5,44),120],
        [Date.UTC(2013,5,11,13,55,44),10],
        [Date.UTC(2013,5,12,13,55,44),150],
        [Date.UTC(2013,5,13,13,55,44),10],
        [Date.UTC(2013,5,14,13,55,44),1330],
        [Date.UTC(2013,5,15,13,55,44),120],
    ]
})

Mock.mock('/api/getPv', pv);