@extends('home.app')

@section('content-container')
@component('home.header')
@slot('index')
    3
@endslot
@slot('isLogin')
    {{ $isLogin }}
@endslot
@endcomponent
@component('home.account.banner')
@slot('cdnPath')
    {{ $cdnPath }}
@endslot
<div class="accounts_body aboutus clearfix">
	<div class="container">
		<div class="location">
			<i class="icon"></i>Location： <a href="{{ url('/') }}" class="link">Home</a> > Online Trading > Demo Accounts
		</div>
		<div class="navbox">
			<!--左侧导航-->
			@component('home.account.sidebar')
			@slot('index')
			    2
			@endslot
			@endcomponent
			<div class="rgtcon">
				<div class="this_tit da yellow"><i class="icon"></i>Demo Accounts</div>
				<div class="content">
					<form class="accounts_form">
						<div class="stepcnt" style="display:block">
							<div class="correctbox cnx">
								@if($result['status'])
								<span class="corr_bg"></span>
								<p>Congratulations<br/>Account Nunber: {{ $result['login'] }}<br/>Password: {{ $result['password'] }}<br/>Server: DT-Group Demo</p>
								@else
								<span class="err_bg"></span>
								<p>{{ $result['msg'] }}</p>
								@endif
								<a href="{{ url('/account/cidtMT4') }}" class="btn bg sbtn">CITD MT4</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
@component('home.footer')
@endcomponent
@endsection