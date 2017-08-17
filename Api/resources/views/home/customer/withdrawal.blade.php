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
@component('home.customer.banner')
@slot('cdnPath')
    {{ $cdnPath }}
@endslot
@endcomponent
<div class="accounts_body aboutus clearfix">
	<div class="container">
		<div class="location">
			<i class="icon"></i>Location： <a href="{{ route('home') }}" class="link">Home</a> > Customer Center > Account withdrawal
		</div>
		<div class="navbox">
			<!--左侧导航-->
			@component('home.customer.sidebar')
			@slot('index')
			    4
			@endslot
			@endcomponent
			<div class="rgtcon">
				<div class="this_tit wd yellow"><i class="icon"></i>Online Deposit</div>
				<form class="personal_info">
					<div class="comfirm_info">
						<div class="infomation">
							<ul>
								<li>
									<div class="td">Account Number : <small>91000244</small></div>
									<div class="td"><span>Account Status :</span> <span class="green">Enabled</span></div>
								</li>
								<li>
									<div class="tr">Desirable Funds : <strong class="yellow">1,000</strong> <small>USD</small></div>
								</li>
								<li>
									<div class="td">Name : <small>XiaoMing Zhang</small></div>
									<div class="td">Beneficiary Bank : <small>ICBC</small></div>
								</li>
								<li>
									<div class="tr">Receiving Bank Account Number : <small>6212****330</small></div>
								</li>
								<li>
									<div class="tr">Receiving Bank Address : <small>China 's Guangdong Province, Yuexiu District, Guangzhou City, Guangdong Province, 488, Datong Commercial Building, South Block, 1st Floor</small></div>
								</li>
								<li>
									<div class="td">Withdrawal Amount : <input type="text" name="withd_amot" class="input_p" placeholder="Fill out the withdrawal amount"></div>
								</li>
								<li>
									<div class="tr ">
										<p><input type="checkbox" id="checkbox" class="checkbox" name="agree" />
										<label for="checkbox" class="ckbox"><i class="icon"></i></label>A single withdrawal of less than $50 will be deducted from the withdrawal amount of $3 as a withdrawal fee</p>
									</div>
								</li>
								<li>
									<div class="td">Credited Currency : 
										<div class="selectbox" style="float: right;">
											<div class="thisVal"></div>
											<ul>
												<li>USD</li>
												<li>CHF</li>
												<li>PYS</li>
											</ul>
											<input type="hidden" name="cred_curr" />
										</div>
									</div>
								</li>
								<li>
									<div class="tr">
										System exchange rate : <strong class="green">6.7590</strong> (for reference only)
									</div>
								</li>
								<li>
									<div class="tr">
										The amount of money credited: <strong class="red">0.0000</strong> <span class="yellow">USD</span> (for reference only)
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="btn_group">
					      {{ csrf_field() }}
						<input type="submit" class="btn sbtn disabled" value="Submit" disabled>
						<input type="reset" class="btn sbtn" value="Reset">
					</div>
				</form>
				<div class="attention">
					<h3 class="red">Attention:</h3>
					<ul class="mt4_list attr">
						<li>Please make sure that your bank account information is correct and that the withdrawal amount will be credited to your registered bank account before submitting your withdrawal instructions. The withdrawal currency is the same as the currency of your registered bank account.</li>
						<li>In the case of withdrawals from non-Renminbi, the Company shall pay the withdrawal in the form of telegraphic transfer, and the administrative expenses required for the branch bank, transit bank and receiving bank will be deducted from the withdrawal amount.</li>
						<li>The amount of money credited is for reference only (which may incur charges)</li>
						<li>System exchange rate is for reference only, to the actual bank exchange rate prevail.</li>
						<li>A single withdrawal of less than $ 50 will be charged for a $ 3 withdrawal fee</li>
						<li>If 50% of the deposit amount is not used for Jiancang transaction, withdrawals will charge 6% of the handling fee.</li>
						<li>Under normal circumstances withdrawals the fastest 2 hours to arrive, the details of the withdrawal time to follow this understanding.</li>
						<li>If the amount of withdrawals is greater than US $ 500,000, we will process the payment within 2 hours. The actual date of arrival is subject to bank arrangement. For details, please contact customer service.</li>
						<li>The Company's designated account currency is US $, and the deposit of other currencies is converted into US dollars by the market exchange rate published by the Company. For details, please refer to the following exchange rate note.</li>
						<li>Vacation or weekend market products need to increase the margin, please pay attention to the state before the withdrawal of funds.</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<!--footer-->
@component('home.footer')
@endcomponent
<script>
$(function(){
	$('input[type="submit"]').on('click',function(){
		$.ajax({
			'url':"{{ route('withdraw') }}",
			'type':'post',
			'data':$('form').serialize(),
			'dataType':'json',
			'timeout':5000,
			'beforeSend':function(){
				$('input[type="submit"]').addClass('disabled').removeClass('bg').attr('disabled',true);
			},
			'success':function(data){
				alert(data.msg)
			},
			'error':function(){
				alert("{{ __('errors.ajaxSendFail') }}")
			},
			'complete':function(){
				$('input[type="submit"]').removeClass('disabled').addClass('bg').attr('disabled',false);
			}
		})
	})
})
</script>
@endsection