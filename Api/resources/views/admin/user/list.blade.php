@extends('admin.app')

@section('content-container')
<div class="content-container">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item >用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <hr/>
    <div class="content" >
        <div class="tools">
          <div class="search">
            <el-input placeholder="请输入内容" v-model="input">
              <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="用户名" value="1"></el-option>
                <el-option label="邮箱" value="2"></el-option>
              </el-select>
              <el-button slot="append" icon="search" @click='search'></el-button>
            </el-input>
          </div>
          <a href="{{ url('/admin/user/add') }}"><el-button type="primary">添加</el-button></a>
          <el-button type="danger" @click='multiDel'>删除</el-button>
        </div>
        <div class="table">
            <template>
                <el-table
                ref="multipleTable"
                :data="user"
                border
                tooltip-effect="dark"
                @selection-change="handleSelectionChange"
                style="width: 100%">
                    <el-table-column
                      type="selection"
                      width="55">
                    </el-table-column>
                    <el-table-column
                      label="id"
                      width="120">
                      <template scope="scope">@{{ scope.row.id }}</template>
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="用户名">
                    </el-table-column>
                    <el-table-column
                      prop="created_at"
                      label="创建时间"
                      show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                      prop="action"
                      label="操作">
                        <template scope="scope">
                            <a v-bind:href="[ '{{ url('/admin/user/edit/') }}/'+scope.row.id ]"><el-button
                              type="text"
                              size="small">
                              修改
                            </el-button></a>
                            <el-button
                              @click="del(scope.row.id)"
                              type="text"
                              size="small">
                              删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </div>
        <div class="paginator">
            <template>
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :page-sizes="[10, 20, 30, 40]"
                  :page-size="currentLimit"
                  :current-page="currentPage"
                  layout="total, sizes, prev, pager, next"
                  :total="{{ $total }}">
                </el-pagination>
            </template>
        </div>
    </div>
</div>

@endsection
@section('js')
@@parent
<script>
  var vueData = {
        navActiveIndex:'2',
        user:{!! json_encode($users) !!},
        multipleSelection: [],
        input:'',
        select:'1',
        currentPage:{{ $page }},
        currentLimit:{{ $pageSize }}
      };
  var vueMethods= {
        handleSizeChange(val) {
          this.currentLimit = val;
          location.href=location.origin+location.pathname+'?'+query({'pageSize':val,page:1});
          //console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          this.currentPage = val;
          location.href=location.origin+location.pathname+'?'+query({pageSize:this.currentLimit,'page':val});
          //console.log(`当前页: ${val}`);
        },
        handleSelectionChange(val) {
          this.multipleSelection =val;
        },
        search(){
          var searchKey = this.select;
          var searchValue = this.input;
          location.href=location.origin+location.pathname+'?'+query({'searchKey':searchKey,searchValue:searchValue});
          console.log(this.select)
        },
        multiDel(){
          var ids = [];
          var _this = this;
          for(var index in this.multipleSelection){
            ids.push(this.multipleSelection[index].id)
          }
          if(ids!=''){
            $.ajax({
              url:'{{ url("/admin/user/del") }}',
              type:'post',
              data:{
                'id':ids,
                '_method':'DELETE',
                '_token':'{{ csrf_token() }}'
              },
              dataType:'json',
              timeout:5000,
              beforeSend:function(){
                _this.fullscreenLoading = true;
              },
              success:function(data){
                var type = data.status?'success':'error';
                _this.$message({
                  duration:0,
                  showClose: true,
                  message: data.msg,
                  type: type
                });
                if(data.status)
                  location.reload();
              },
              error:function(){
                _this.$message({
                  duration:0,
                  showClose: true,
                  type: 'error',
                  message: '网络繁忙，请稍后再试'
                });
              },
              complete:function(){
                _this.fullscreenLoading = false;
              }
            })
          }
        },
        del(id) {
          var _this = this;
          this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            $.ajax({
              url:'{{ url("/admin/user/del") }}',
              type:'post',
              data:{
                'id':id,
                '_method':'DELETE',
                '_token':'{{ csrf_token() }}'
              },
              dataType:'json',
              timeout:5000,
              beforeSend:function(){
                _this.fullscreenLoading = true;
              },
              success:function(data){
                var type = data.status?'success':'error';
                _this.$message({
                  duration:0,
                  showClose: true,
                  message: data.msg,
                  type: type
                });
                if(data.status)
                  location.reload();
              },
              error:function(){
                _this.$message({
                  duration:0,
                  showClose: true,
                  type: 'error',
                  message: '网络繁忙，请稍后再试'
                });
              },
              complete:function(){
                _this.fullscreenLoading = false;
              }
            })
            
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });          
          });
        }
      }
</script>
@endsection