@extends('admin.app')

@section('content-container')
<div class="content-container">
    首页
</div>

@endsection

@section('pageJs')
@@parent
<script>
  var vueData = {
        navActiveIndex:'1',
      };
</script>
@endsection