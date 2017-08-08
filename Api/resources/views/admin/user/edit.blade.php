@extends('admin.app')

@section('content-container')
<div class="content-container">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item ><a href="{{ url('/admin/user') }}">用户管理</a></el-breadcrumb-item>
        @if ($action=='add')
        <el-breadcrumb-item >添加</el-breadcrumb-item>
        @else
        <el-breadcrumb-item >修改</el-breadcrumb-item>
        @endif
    </el-breadcrumb>
    <hr/>
    <div class="content" >
      <el-form ref="form" :model="form" method='post' action="{{ url('admin/user/add') }}" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
           <el-input type='email' v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="密码">
           <el-input type='password' v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="身份证">
          <el-upload
            class="file-uploader"
            action="{{ url('admin/user/uploadPic') }}"
            :show-file-list="false"
            :data = 'uploadParam'
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="form.idPic" :src="form.idPic" class="file">
            <i v-else class="el-icon-plus file-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label-width="80px">
          @if ($action=='add')
          <el-button type="primary" @click="add" v-loading.fullscreen.lock="fullscreenLoading">立即添加</el-button>
          @else
          <el-button type="primary" @click="edit" v-loading.fullscreen.lock="fullscreenLoading">修改</el-button>
          @endif
          <a href="{{ url('/admin/user') }}"><el-button>取消</el-button></a>
        </el-form-item>
        <el-input type='hidden' v-model="form._method"></el-input>
        <el-input type='hidden' v-model="form._token" ></el-input>
      </el-form>
        
        
    </div>
</div>

@endsection
@section('pageJs')
@@parent
<script>
  var vueData = {
        navActiveIndex:'1',
        
        form: {
          name: '{{ isset($user)?$user->name:'' }}',
          email:'{{ isset($user)?$user->email:'' }}',
          password: '',
          idPic: '',
          @if ($action=='edit')
          id:'{{ $user->id }}',
          @endif
          _method:'{{ $action=='add'?'POST':'PUT' }}',
          _token:'{{ csrf_token() }}'
        },
        uploadParam:{
          _method:'{{ $action=='add'?'POST':'PUT' }}',
          _token:'{{ csrf_token() }}'
        },
        fullscreenLoading: false
      };
  var vueMethods= {
       add() {
          var _this = this;
          $.ajax({
            type:'post',
            data:_this.form,
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
              if(data.status){
                _this.form.name=''
                _this.form.email=''
                _this.form.password=''
              }
            },
            error:function(){
               _this.$message({
                duration:0,
                showClose: true,
                message: '网络繁忙，请稍后再试',
                type: 'error'
              });
            },
            complete:function(){
              _this.fullscreenLoading = false;
            }
          })
        },
        edit() {
          var _this = this;
          $.ajax({
            url:'{{ url("/admin/user/edit") }}',
            type:'post',
            data:_this.form,
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
              
            },
            error:function(){
               _this.$message({
                duration:0,
                showClose: true,
                message: '网络繁忙，请稍后再试',
                type: 'error'
              });
            },
            complete:function(){
              _this.fullscreenLoading = false;
            }
          })
        },
        handleAvatarSuccess(res, file) {
          this.form.idPic = res.msg;
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        }
      }
</script>
@endsection