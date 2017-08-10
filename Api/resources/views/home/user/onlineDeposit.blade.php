@extends('home.app')

@section('content-container')
@component('home.header')
@slot('index')
    2
@endslot
@slot('isLogin')
    {{ $isLogin }}
@endslot
@endcomponent
@component('home.user.banner')
@slot('cdnPath')
    {{ $cdnPath }}
@endslot
@endcomponent
<div class="accounts_body aboutus clearfix">
	<div class="container">
		<div class="location">
			<i class="icon"></i>Location： <a href="{{ url('/') }}" class="link">Home</a> > Customer Center > Online Deposit
		</div>
		<div class="navbox">
			<!--左侧导航-->
			@component('home.user.sidebar')
			@slot('index')
			    2
			@endslot
			@endcomponent
			<div class="rgtcon">
				<div class="this_tit dep yellow"><i class="icon"></i>Online Deposit</div>
				<form class="personal_info" action="{{ url('/user/onlineDeposit') }}" method="post">
					<div class="comfirm_info">
						<div class="infomation">
							<ul>
								<li>
									<div class="td">Account Number : 91000244</div>
									<div class="td"><span>Account Status:</span> <span class="green">Enabled</span></div>
								</li>
								<li>
									<div class="td">Deposit Amount : <input type="number" class="input_p" name="dep_amount" /></div>
									<div class="td">Deposit Card Class : Debit Card</div>
								</li>
								<!-- <li>
									<div class="tr">
										<span>Deposit bank :</span>
										<div class="selectbox" style="">
											<div class="thisVal"></div>
											<ul>
												<li>ICBC</li>
												<li>CCB</li>
												<li>CBC</li>
												<li>ABC</li>
											</ul>
											<input type="hidden" name="bank_name" />
										</div>
									</div>
								</li> -->
								<!-- <li>
									<div class="td">
										<span>Payment Method :</span> <span class="payMtd selected"></span><span class="payMtd"></span>
										<input type="hidden" name="pay_method" value="0" />
									</div>
									<div class="td"></div>
								</li> -->
								<li>
									<div class="td">Name : XiaoMing Zhang</div>
									<div class="td">Mobile : +86 13888888888</div>
								</li>
								<li>
									<div class="td">E-Mail : XiaoMing Zhang@gmail.com</div>
								</li>
								<li>
									<div class="tr">
										Remarks : <br/>
										<textarea name="remark" class="rk" placeholder="say something?"></textarea>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="btn_group">
					     {{ csrf_field() }}
					    <input type="hidden" name="domain" value="202.hk"/>
					    <input type="hidden" name="account" value="91000244"/>
						<input type="submit" class="btn sbtn disabled" value="Submit" disabled>
						<input type="reset" class="btn sbtn" value="Reset">
					</div>
				</form>
				<div class="congratulate">
					<img src="{{ asset($cdnPath.'/img/correct.png') }}" alt="">
					<p>Congratulations<br/>your operation is successful</p>
					<a href="{{ url('/') }}" class="btn sbtn bg">Home</a>
					<a href="javascript:;" class="btn sbtn bg carry">Carry On</a>
				</div>
				<div class="attention">
					<h3 class="red">Attention:</h3>
					<ul class="mt4_list">
						<li>CIDT global does not accept deposits from third parties</li>
						<li>CIDT global accepts debit cards for deposits and does not accept credit card payments</li>
						<li>Please submit your identification card and bank card information within 14 days of your account to ensure that the funds of your trading account are legally and safely supervised.</li>
						<li>I confirm that the account holder and the ultimate beneficial owner of the funds and that the deposit has nothing to do with any illegal activity.</li>
						<li>I promise that the bank card used for the deposit is legally held by me and all the deposits are operated by me.</li>
						<li>I agree to use the bank card to invest in Daejeon Global Investment.</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<div id="shadow" class="online_deposit">
	<div class="correctbox">
		<span class="corr_bg"></span>
		<p>CAfter the online banking funds arrived,<br>the transaction funds will arrive at the account<br/><span class="yellow">within 10 minutes.</span></p>
		<a href="javascript:;" class="btn sbtn bg">Determine</a>
	</div>
</div>
<!--footer-->
@component('home.footer')
@endcomponent
<script>
$(function(){
	$('.personal_info .payMtd').on('click',function(){
		var index = $(this).index();
		$(this).addClass('selected').siblings('.payMtd').removeClass('selected');
		//0盛付通，1环球付
		index == 1 ? $(this).siblings('input[name="pay_method"]').val(0) : $(this).siblings('input[name="pay_method"]').val(1);
	});
	$('input[type="submit"]').on('click',function(){
		$('form').submit();
	})
})
</script>
@endsection