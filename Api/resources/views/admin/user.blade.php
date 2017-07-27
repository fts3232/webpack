@extends('admin.app')

@section('content-container')
<div class="content-container">
    <div class="breadcrumb">
        <span class="item">用户管理</span>
    </div>
    <div class="content" >
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>用户名</th>
                        <th>邮箱</th>
                        <th>创建时间</th>
                        <th>更新时间</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($users as $user)
                        <tr>
                            <td>{{ $user->id }}</td>
                            <td>{{ $user->name }}</td>
                            <td>{{ $user->email }}</td>
                            <td>{{ $user->created_at }}</td>
                            <td>{{ $user->updated_at }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        <div class="paginator">
            <ul>
                @for ($i = 1; $i <= $totalPage; $i++)
                    <li class="item"><a href="{{ url('/admin/user?page='.$i) }}">{{ $i }}</a></li>
                @endfor
            </ul>
        </div>
    </div>
</div>
@endsection
