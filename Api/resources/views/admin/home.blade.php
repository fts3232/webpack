@extends('admin.app')

@section('content')
<div class="container" >
    <form action="{{url('/admin')}}" method="post" enctype="multipart/form-data">
    	<input type="file" name="file"/>
    	{{ csrf_field() }}
    	<input type="submit"/>
    </form>
</div>
@endsection
