@extends('admin.app')

@section('content-container')
<div class="content-container">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item >用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content" >
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
                            <a v-bind:href="[ '{{ url('/admin/user/del/') }}/'+scope.row.id ]"><el-button
                              type="text"
                              size="small">
                              删除
                            </el-button></a>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </div>
        <div class="paginator">
            <template>
                <el-pagination
                  :page-sizes="[100, 200, 300, 400]"
                  :page-size="100"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="400">
                </el-pagination>
            </template>
        </div>
    </div>
</div>
</div>  
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
   new Vue({
        el: '#app',
        data:{
            'user':{!! json_encode($users) !!},
            multipleSelection: []
        },
        methods: {
          toggleSelection(rows) {
            if (rows) {
              rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
              });
            } else {
              this.$refs.multipleTable.clearSelection();
            }
          },
          handleSelectionChange(val) {
            coonsole.log(1)
            this.multipleSelection = val;
          }
        }
    })

</script>
@endsection
