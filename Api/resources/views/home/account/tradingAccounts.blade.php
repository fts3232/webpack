@extends('home.app')

@section('content-container')
@component('home.header')
@slot('path')
    /account
@endslot
@endcomponent
<div class="cntbox">
	<div class="container">
		<div class="clearfix">
			<div class="tbox">
				<h3 class="ptit yellow">online trading<br/>
					<a href="trading_accounts.php" target="_blank" class="link">trading accounts</a>
					<a href="demo_accounts.php" target="_blank" class="link">deom accounts</a>
				</h3>
			</div>
			<img src="{{ asset($cdnPath.'/img/tr.png') }}" alt="" class="tr_img">
		</div>
	</div>
</div>
<div class="accounts_body aboutus clearfix">
	<div class="container">
		<div class="location">
			<i class="icon"></i>Location： <a href="index.php" class="link">Home</a> > Online Trading > Trading Accounts
		</div>
		<div class="navbox">
			<!--左侧导航-->
			@component('home.account.sidebar')
			@slot('index')
			    1
			@endslot
			@endcomponent
			<div class="rgtcon">
				<div class="this_tit tr yellow"><i class="icon"></i>Trading Accounts</div>
				<div class="operate_step clearfix">
					<div class="curr">Accounts Information</div>
					<div>Bank card information</div>
					<div>Confirmed</div>
					<div>Create Success</div>
				</div>
				<div class="content">
					<form class="accounts_form trad_form">
						<div class="stepcnt" style="display: block;">
							<p class="listname">Trading Platform :</p>
							<div class="selectbox">
								<div class="thisVal"></div>
								<ul>
									<li>MT4</li>
									<li>FX Trader</li>
								</ul>
								<input type="hidden" name="platform" />
							</div>

							<div style="clear: both;"></div>
							<p class="listname">Account Type :</p>
							<div class="selectbox">
								<div class="thisVal"></div>
								<ul>
									<li>Mini Account</li>
									<li>Standard account</li>
								</ul>
								<input type="hidden" name="account_type" />
							</div>

							<div style="clear: both;"></div>
							<p class="listname">Account Currency :</p>
							<div class="selectbox">
								<div class="thisVal"></div>
								<ul>
									<li>USD</li>
									<li>CHF</li>
								</ul>
								<input type="hidden" name="account_currency" />
							</div>

							<div style="clear: both;"></div>
							<p class="listname">Your Name :</p>
							<input type="text" name="uname" class="input_p" />
							<span class="tip">To ensure the safety of your funds, please fill in the same name on the document</span>

							<div style="clear: both;"></div>
							<p class="listname">Type of Certificate :</p>
							<div class="selectbox">
								<div class="thisVal"></div>
								<ul>
									<li>ID Cart</li>
									<li>Number 1</li>
									<li>Number 2</li>
								</ul>
								<input type="hidden" name="certificate_type" />
							</div>

							<div style="clear: both;"></div>
							<p class="listname">Document Number :</p>
							<input type="text" name="document_number" class="input_p" />
							<span class="tip">Please fill in the correct document number</span>
							
							<!--日期-->
							<div style="clear: both;"></div>
							<p class="listname">Date Of Birth :</p>
							<div class="datebox">
								<input type="hidden" name="month" />
								<input type="hidden" name="day" />
								<input type="hidden" name="year" />
							</div>

				
							<div style="clear: both;"></div>
							<p class="listname">Resident Address :</p>
							<input type="text" name="resid_addr" class="input_p" style="width: 660px;" />

							<div style="clear: both;"></div>
							<p class="listname">Cellphone Number :</p>
							<input type="text" name="call_number" class="input_p" />
							<span class="tip">Please fill in the correct phone number, Important information </span>

							<div style="clear: both;"></div>
							<p class="listname">E-mail Address :</p>
							<input type="text" name="email" class="input_p" />
							<span class="tip">Please fill in the correct E-mail address <i class="icon"></i></span>


							<div style="clear: both;"></div>
							<p class="listname">PIN :</p>
							<div class="codebox">
								<input type="text" name="code" class="input_p" />
								<i></i>
							</div>
							<span class="code red ref_code"></span>
							<span class="tip"><i class="icon refresh ref_code"></i></span>
							
							<div style="clear: both;"></div>
							<input type="button" class="submit nextStep btn disabled" value="Complete the information" disabled />

							<div style="clear: both;"></div>
							<div class="agree_check clearfix" onselectstart="return false;">
								<div>
									<input type="checkbox" id="checkbox" class="checkbox">
									<label for="checkbox">
										<i class="icon"></i>
										<span>Agree</span>
									</label>
									<a href="#" class="agreelink yellow" target="_blank">《Customer Agreement》</a>
								</div>
								<div>
									<input type="checkbox" id="checkbox" class="checkbox">
									<label for="checkbox">
										<i class="icon"></i>
										<span>Agree</span>
									</label>
									<a href="#" class="agreelink yellow" target="_blank">《Risk Disclosure Statement》</a> and <a href="#" class="agreelink yellow" target="_blank">《Disclaimer Agreement》</a>
								</div>
							</div>

							<div class="customer_notice">
								<h3 class="yellow">Customer notice</h3>
								<div class="cnt">
									<p class="content_box">This agreement is legally binding and should be reviewed carefully.<br/>(Hereinafter referred to as "Daejeon Global"); a limited company, its successor or assignor established under the laws of the Hong Kong Special Administrative Region, jointly with the contractor of this document (hereinafter referred to as the " client").<br/>The Client acknowledges that the following factors relating to leveraged OTCGOLD transactions have been made in connection with the opening of an account in Daejeon Global for the purpose of speculation and / or the purchase of spot precious metals (hereinafter referred to as "OTCGOLD") through the OTC market in the Precious Metals OTC market, Customer's risk disclosure statement.<br/>1. OTCGOLD trading is only applicable to professional institutions or individuals, and their financial resources can withstand losses that may exceed the margin or deposit value.<br/>2. OTCGOLD business is not in the organized market transactions, so do not open outcry. Although many computer-based systems offer quotes and actual prices, the two may vary by market liquidity. Many electronic trading facilities are supported by computer-based </p></div>
							</div>
						</div>
						<div class="stepcnt">
							<p class="listname">Account holder name :</p>
							<input type="text" name="account_name" class="selectbox">
							<span class="tip">The account holder's name must be the same as the name in the profile</span>

							<div style="clear: both;"></div>
							<p class="listname">Bank :</p>
							<div class="selectbox">
								<div class="thisVal"></div>
								<ul>
									<li>ICBC</li>
									<li>SPA</li>
									<li>IIS</li>
								</ul>
								<input type="hidden" name="bank_name" />
							</div>
							<span class="tip">Please select the bank you are using for withdrawals</span>

							<div style="clear: both;"></div>
							<p class="listname">Bank Account :</p>
							<input type="text" name="bank_account" class="selectbox">
							<span class="tip">Please fill in the correct bank account number</span>

							<div style="clear: both;"></div>
							<p class="listname">Bank Address :</p>
							<div class="selectbox">
								<div class="thisVal"></div>
								<ul>
									<li>Country</li>
									<li>CHINA</li>
									<li>USA</li>
								</ul>
								<input type="hidden" name="bank_address" />
							</div>
							<input type="text" name="area" class="selectbox" style="margin-left: 10px;width: 400px;" />

							<div style="clear: both;"></div>
							<p class="listname">Account Branch Bank :</p>
							<input type="text" name="acct_bran_bank" class="selectbox">
							<span class="tip">Please fill in the correct account Branch bank</span>

							<div style="clear: both;"></div>
							<p class="listname">Account Type :</p>
							<div class="selectbox">
								<div class="thisVal"></div>
								<ul>
									<li>Debit Card</li>
									<li>ICBC Card</li>
									<li>BBK Card</li>
								</ul>
								<input type="hidden" name="cart_type" />
							</div>

							<div style="clear: both;"></div>
							<p class="listname">Account Currency :</p>
							<div class="selectbox">
								<div class="thisVal"></div>
								<ul>
									<li>USD</li>
									<li>IIS</li>
									<li>CHF</li>
								</ul>
								<input type="hidden" name="cart_currency" />
							</div>
							<div style="clear: both;"></div><br/><br/>
							<input type="button" class="btn nextStep next_btn disabled" disabled value="Next Step" />
						</div>
						<div class="stepcnt">
							<div class="comfirm_info clearfix">
								<div class="infomation">
									<p class="caption">Personal Information</p>
									<ul>
										<li>Trading Platform : <span class="td_pf"></span></li>
										<li>Account Type : <span class="acc_ty"></span></li>
										<li>Account Currency : <span class="acc_curr"></span></li>
										<li>Your Name : <span class="yr_nm"></span></li>
										<li>Type of Certificate : <span class="ty_of_cf"></span></li>
										<li>Document Number : <span class="dt_nb"></span></li>
										<li>Resident Address : <span class="rdt_addr"></span></li>
										<li>Cellphone Number : <span class="cell_num"></span></li>
										<li>E-mail Address : <span class="email_addr"></span></li>
									</ul>
								</div>
								<div class="infomation">
									<p class="caption">Bank information</p>
									<ul>
										<li>Account holder name : <span class="acc_hd_nm"></span></li>
										<li>Bank : <span class="bk"></span></li>
										<li>Bank Account : <span class="bk_acc"></span></li>
										<li>Bank Address : <span class="bk_addr"></span>&nbsp;&nbsp;&nbsp;<span class="area"></span></li>
										<li>Account Branch Bank : <span class="acc_bch_bk"></span></li>
										<li>Account Type : <span class="acc_ty"></span></li>
										<li>Account Currency : <span class="acc_currcy"></span></li>
									</ul>
								</div>
							</div>
							<input type="button" class="comfirm btn bg" value="Confirm" />
						</div>
						<div class="stepcnt">
							<div class="correct clearfix">
								<span class="corr_bg"></span>
								<p class="txt">Congratulations, your account has been created successfully.<br/>Please follow the steps below to activate your account.</p>
							</div>
							<p class="step_num"><span class="yellow">01</span> Please upload ID card positive and negative, bank card positive picture. </p>
							<div class="stepbox clearfix">
								<div class="item">
									<span class="cart_tit">ID Card Positive</span>
									<img src="{{ asset($cdnPath.'/img/identi_front.png') }}" alt="" class="cart_bg" id="showPic_0">
									<a href="javascript:;" class="btn sbtn bg">
										<input type="file" name="file" id="upload_img_0">Upload
									</a>
								</div>
								<div class="item">
									<span class="cart_tit">ID Card Negative</span>
									<img src="{{ asset($cdnPath.'/img/identi_back.png') }}" alt="" class="cart_bg" id="showPic_1">
									<a href="javascript:;" class="btn sbtn bg">
										<input type="file" name="file" id="upload_img_1">Upload
									</a>
								</div>
								<div class="item">
									<span class="cart_tit">Bank Card Positive</span>
									<img src="{{ asset($cdnPath.'/img/identi_back2.png') }}" alt="" class="cart_bg" id="showPic_2">
									<a href="javascript:;" class="btn sbtn bg">
										<input type="file" name="file" id="upload_img_2">Upload
									</a>
								</div>
								<div class="atte">
									<span class="atten red">Attention:</span>
									<p>Each picture should not be greater than 2m, if more than 2m please follow the instructions in step two upload pictures.<br/><br/>After the picture is uploaded, the account will be activated within 30 minutes</p>
								</div>
							</div>
							<input type="button" class="comfirm btn bg" value="Confirm" />
							<p class="step_num"><span class="yellow">02</span> You can submit ID card front and back, bank card positive picture in the following ways.</p>
							<div class="step2 clearfix">
								<div class="item">
									<div>
										<span class="lft_icon"></span>
										<p class="yellow" style="padding-top: 10px;">Online Service</p>
										<a class="c_btn">Contact</a>
									</div>
								</div>
								<div class="item">
									<div>
										<span class="lft_icon em"></span>
										<p class="yellow">E-mail Adress</p>
										<p>cs@24.hk</p>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<!--footer-->
@component('home.footer')
@endcomponent
<!--图片上传-->
<script src="{{ url('/js/uploadPreview.js') }}" type="text/javascript"></script>
<script>
$(function(){
	$('.code').text(createCode(4,0,false));
	$('.ref_code').on('click',function(){
		$('.code').text(createCode(4,0,false));
	});
})
var datetime = new DateTime();	//日期下拉对象
datetime.init();	//调用init方法初始化
</script>
@endsection