@extends('home.app')

@section('content-container')
<div class="login_body">
	<div class="container">
		<img src="{{ asset($cdnPath.'/img/log_bg.png') }}" alt="" class="log_bg">
		<div class="login_box">
			<h3 class="log_tit yellow">cidt global</h3>
			<form class="login_form clearfix">
				<p class="log_tip">Please use MT4 account and password landing</p>
				<div class="inputbox uname">
					<input type="text" class="lft" name="uname">
				</div>
				<div class="inputbox pwd">
					<input type="password" class="lft" name="pwd">
				</div>
				<div class="inputbox checkcode">
					<input type="password" class="lft" name="pwd">
				</div>
				<input type="text" class="code red ref_code" value="ABCD" readonly>
				<input type="button" value="Login" class="btn bg login_btn" />
				<div class="link_group">
					<a href="#">Forget Password</a>
					<a href="trading_accounts.php" class="red">Registered</a>
				</div>
			</form>
		</div>
	</div>
</div>
<div id="shadow" class="login">
	<div class="correctbox">
		<span class="corr_bg"></span>
		<p>Account or password is wrong<br/>if you forget the password please contact customer service</p>
		<a href="javascript:;" class="btn next_btn bg">Close</a>
	</div>
</div>
<!--footer-->
@component('home.footer')
@endcomponent
<script>
$(function(){
	$('.code').val(createCode(4,0,false));
	$('.ref_code').on('click',function(){
		$('.code').val(createCode(4,0,false));
	});
})
</script>
@endsection