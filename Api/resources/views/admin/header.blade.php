<div class="header">
    <div class="user">
        <span class="name"> {{ Auth::guard('admin')->user()->name }} </span>
        <a href="{{url('/admin/logout')}}">登出</a>
    </div>
</div>