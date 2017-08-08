@extends('home.app')

@section('content-container')
@component('home.header')
@slot('index')
    3
@endslot
@endcomponent
<div class="cntbox">
	<div class="container">
		<div class="clearfix">
			<div class="tbox">
				<h3 class="ptit yellow">online trading<br/>
					<a href="trading_accounts.php" target="_blank" class="link">trading accounts</a>
					<a href="#" target="_blank" class="link">deom accounts</a>
				</h3>
			</div>
			<img src="{{ asset($cdnPath.'/img/tr.png') }}" alt="" class="tr_img">
		</div>
	</div>
</div>
<div class="accounts_body aboutus clearfix">
	<div class="container">
		<div class="location">
			<i class="icon"></i>Location： <a href="index.php" class="link">Home</a> > Online Trading > Demo Accounts
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
						<div class="stepcnt" style="display: block;">
							<div class="risk">
								<h3 class="yellow">Free Trial & No Risk</h3>
								<p>Simulated accounts allow you to be familiar with our trading rules and system <br/>operations. If you encounter any problems in the process of simulation, please<br/>contact us for 24 hours online to answer your questions</p>
							</div>

							<p class="listname">Account Type :</p>
							<div class="selectbox">
								<div class="thisVal"></div>
								<ul>
									<li>模拟账户</li>
									<li>真实账户</li>
								</ul>
								<input type="hidden" name="account_type" />
							</div>
							<span class="tip">Please select the type of account you need.</span>

							<div style="clear: both;"></div>
							<p class="listname">Your Name :</p>
							<input type="text" name="uname" class="input_p">
							<span class="tip">Please fill in your real name</span>

							<div style="clear: both;"></div>
							<p class="listname">E-mail Address :</p>
							<input type="text" name="email" class="input_p">
							<span class="tip"><i class="icon"></i>Please fill in the correct E-mail address</span>

							<div style="clear: both;"></div>
							<p class="listname">Cellphone Number :</p>
							<input type="text" name="call_number" class="input_p">
							<span class="tip">Please fill in the correct phone number, Important information will be sent to this number</span>

							<div style="clear: both;"></div>
							<p class="listname">Region :</p>
							<div class="selectbox">
								<div class="thisVal"></div>
								<ul>
									<li>天河区</li>
									<li>越秀区</li>
									<li>白云区</li>
									<li>海珠区</li>
								</ul>
								<input type="hidden" name="region" />
							</div>
							<span class="tip">Please select your region</span>

							<div style="clear: both;"></div>
							<p class="listname">PIN :</p>
							<div class="codebox">
								<input type="text" name="code" class="input_p" style="width: 130px;">
								<i></i>
							</div>
								<span class="code red ref_code">ABCD</span>
							<span class="tip"><i class="icon refresh ref_code"></i></span>

							<div class="btn_group">
								<input type="submit" class="btn sbtn nextStep disabled" value="Submit" disabled />
								<input type="reset" class="btn sbtn" value="Reset" />
							</div>
						</div>
						<div class="stepcnt">
							<div class="correctbox">
								<span class="corr_bg"></span>
								<p>Congratulations<br/>the demo account activation was successful</p>
								<a href="cidt_mt4.php" class="btn next_btn">CITD MT4</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- submit success shadow page -->
<div id="shadow" class="accounts_form">
	<div class="correctbox">
		<span class="corr_bg"></span>
		<p>Congratulations<br/>the demo account activation was successful</p>
		<a href="index.php" class="btn sbtn bg">Determine</a>
		<a href="cidt_mt4.php" class="btn sbtn yellow">CITD MT4</a>
	</div>
</div>
<!--footer-->
@component('home.footer')
@endcomponent
<script>
$(function(){
	$('.code').text(createCode(4,0,false));
	$('.ref_code').on('click',function(){
		$('.code').text(createCode(4,0,false));
	});
});
</script>
@endsection