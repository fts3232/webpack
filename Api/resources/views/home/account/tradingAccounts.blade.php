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
@endcomponent
<div class="accounts_body aboutus clearfix">
	<div class="container">
		<div class="location">
			<i class="icon"></i>Location： <a href="{{ url('/') }}" class="link">Home</a> > Online Trading > Trading Accounts
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
					    {{ csrf_field() }}
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
							<input type="text" name="name" class="input_p" />
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
							    <input type="hidden" name="birthday" />
								<input type="hidden" name="month" />
								<input type="hidden" name="day" />
								<input type="hidden" name="year" />
							</div>

				
							<div style="clear: both;"></div>
							<p class="listname">Resident Address :</p>
							<input type="text" name="resid_addr" class="input_p" style="width: 660px;" />
                            <span class="tip"></span>
							<div style="clear: both;"></div>
							<p class="listname">Cellphone Number :</p>
							<input type="text" name="mobile" class="input_p" />
							<span class="tip">Please fill in the correct phone number, Important information </span>

							<div style="clear: both;"></div>
							<p class="listname">E-mail Address :</p>
							<input type="text" name="email" class="input_p" />
							<span class="tip">Please fill in the correct E-mail address <i class="icon"></i></span>


							<div style="clear: both;"></div>
							<p class="listname">PIN :</p>
							<div class="codebox">
								<input type="text" name="verficode" class="input_p" />
								<i></i>
							</div>
							<img src="{{captcha_src()}}" class="code red ref_code"/>
							<span class="tip"><i class="icon refresh ref_code"></i></span>
							
							<div style="clear: both;"></div>
							<input type="button" class="submit nextStep btn disabled" value="Complete the information" disabled />

							<div style="clear: both;"></div>
							<div class="agree_check clearfix" onselectstart="return false;">
								<div>
									<input type="checkbox" id="checkbox" class="checkbox">
									<label for="checkbox" class="ckbox">
										<i class="icon"></i>
										<span>Agree</span>
									</label>
									<a href="#" class="agreelink yellow" target="_blank">《Customer Agreement》</a>
								</div>
								<div>
									<input type="checkbox" id="checkbox" class="checkbox">
									<label for="checkbox" class="ckbox">
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
									<li>CHINA</li>
									<li>USA</li>
								</ul>
								<input type="hidden" name="bank_area" />
							</div>
							<input type="text" name="bank_address" class="selectbox" style="margin-left: 10px;width: 400px;" />
                            <span class="tip"></span>
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
										<li>Bank Address : <span class="bk_area"></span>&nbsp;&nbsp;&nbsp;<span class="bk_addr"></span></li>
										<li>Account Branch Bank : <span class="acc_bch_bk"></span></li>
										<li>Account Type : <span class="acc_ty"></span></li>
										<li>Account Currency : <span class="acc_currcy"></span></li>
									</ul>
								</div>
							</div>
							<input type="button" class="comfirm btn bg" value="Confirm" />
						</div>
						</form>
						<iframe name="uploadFrame" style="display:none"></iframe>
						<form target="uploadFrame" action="{{ url('/account/tradingStep4') }}" method="post" class="upload_form" enctype="multipart/form-data" >
						 {{ csrf_field() }}
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
										<input type="file" name="file2" id="upload_img_1">Upload
									</a>
								</div>
								<div class="item">
									<span class="cart_tit">Bank Card Positive</span>
									<img src="{{ asset($cdnPath.'/img/identi_back2.png') }}" alt="" class="cart_bg" id="showPic_2">
									<a href="javascript:;" class="btn sbtn bg">
										<input type="file" name="file3" id="upload_img_2">Upload
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
<script>
var uploadErrMsg = "{{ __('upload.error.IllegaFile') }}"
$(function(){
	$('.ref_code').on('click',function(){
		$('img.ref_code').attr('src',$('img.ref_code').attr('src')+Math.random())
	});
	var stepcnt_0 = $('.trad_form .stepcnt').eq(0);
	var stepcnt_1 = $('.trad_form .stepcnt').eq(1);
	var stepcnt_2 = $('.trad_form .stepcnt').eq(2);
	var stepcnt_3 = $('.upload_form .stepcnt');
	var divBox = $('.operate_step>div');
	stepcnt_0.find('.btn').on('click',function(){
		$.ajax({
			'url':"{{ url('/account/tradingStep1') }}",
			'type':'post',
			'data':$('form').serialize(),
			'dataType':'json',
			'timeout':5000,
			'beforeSend':function(){
				isDisabled(stepcnt_0,false);
			},
			'success':function(data){
				var inputMap = {
    						'name':{input:$("input[name='name']"),tip:$("input[name='name']").next('.tip')},
							'document_number':{input:$("input[name='document_number']"),tip:$("input[name='document_number']").next('.tip')},
							'resid_addr':{input:$("input[name='resid_addr']"),tip:$("input[name='resid_addr']").next('.tip')},
    						'email':{input:$("input[name='email']"),tip:$("input[name='email']").next('.tip')},
    						'mobile':{input:$("input[name='mobile']"),tip:$("input[name='mobile']").next('.tip')},
    						'verficode':{input:$("input[name='verficode']")}
    			};
				for(k in inputMap){
    				var v = inputMap[k];
   				 	if(typeof data.validator !='undefined'  && typeof data.validator[k]!='undefined'){
   	   				 	if(k=='verficode'){
   							v.input.next('i').addClass('error');
   							v.input.html('')
   						}else{
   							v.input.addClass('log_error');
   							v.tip.addClass('log_error').html(data.validator[k][0]);
   						}
     	   			}else{
         	   			if(k=='verficode'){
        					v.input.next('i').removeClass('error');
        				}else{
        					v.input.removeClass('log_error');
        					v.tip.removeClass('log_error').html('');
        				}
             	   	}
    			}
				if(data.status){
					stepcnt_1.show().siblings().hide();
					divBox.eq(1).addClass('curr').siblings().removeClass('curr');
					stepcnt_1.find('input[type="text"]').on('keyup',function(){
						var aaa = true;
						stepcnt_1.find('input[type="text"]').each(function(i,obj){
							if(obj.value == ''){
								aaa = false;
							}
						});
						if(aaa){
							isDisabled(stepcnt_1,true,'Next Step');
						}else{
							isDisabled(stepcnt_1,false,'Next Step');
						}
					});
				}else{
					$('img.ref_code').attr('src',$('img.ref_code').attr('src')+Math.random())
				}
			},
			'error':function(){
				alert("{{ __('errors.ajaxSendFail') }}")
				$('img.ref_code').attr('src',$('img.ref_code').attr('src')+Math.random())
			},
			'complete':function(){
				isDisabled(stepcnt_0,true);
			}
		})
		return false;
	});
	stepcnt_1.find('.btn').on('click',function(){
		$.ajax({
			'url':"{{ url('/account/tradingStep2') }}",
			'type':'post',
			'data':$('form').serialize(),
			'dataType':'json',
			'timeout':5000,
			'beforeSend':function(){
				isDisabled(stepcnt_1,false);
			},
			'success':function(data){
				var inputMap = {
    						'account_name':{input:$("input[name='account_name']"),tip:$("input[name='account_name']").next('.tip')},
    						'bank_account':{input:$("input[name='bank_account']"),tip:$("input[name='bank_account']").next('.tip')},
    						'bank_address':{input:$("input[name='bank_address']"),tip:$("input[name='bank_address']").next('.tip')},
    						'acct_bran_bank':{input:$("input[name='acct_bran_bank']"),tip:$("input[name='acct_bran_bank']").next('.tip')},
    						'mobile':{input:$("input[name='mobile']"),tip:$("input[name='mobile']").next('.tip')},
    						'verficode':{input:$("input[name='verficode']")}
    			};
				for(k in inputMap){
    				var v = inputMap[k];
   				 	if(typeof data.validator !='undefined'  && typeof data.validator[k]!='undefined'){
   	   				 	if(k=='verficode'){
   							v.input.next('i').addClass('error');
   							v.input.html('')
   						}else{
   							v.input.addClass('log_error');
   							v.tip.addClass('log_error').html(data.validator[k][0]);
   						}
     	   			}else{
         	   			if(k=='verficode'){
        					v.input.next('i').removeClass('error');
        				}else{
        					v.input.removeClass('log_error');
        					v.tip.removeClass('log_error').html('');
        				}
             	   	}
    			}
				if(data.status){
					stepcnt_2.show().siblings().hide();
					divBox.eq(2).addClass('curr').siblings().removeClass('curr');
					$('.infomation .td_pf').text($('input[name="platform"]').val());
					$('.infomation .acc_ty').text($('input[name="account_type"]').val());
					$('.infomation .acc_curr').text($('input[name="account_currency"]').val());
					$('.infomation .yr_nm').text($('input[name="name"]').val());
					$('.infomation .ty_of_cf').text($('input[name="certificate_type"]').val());
					$('.infomation .dt_nb').text($('input[name="document_number"]').val());
					$('.infomation .rdt_addr').text($('input[name="resid_addr"]').val());
					$('.infomation .cell_num').text($('input[name="mobile"]').val());
					$('.infomation .email_addr').text($('input[name="email"]').val());
					$('.infomation .acc_hd_nm').text($('input[name="account_name"]').val());
					$('.infomation .bk').text($('input[name="bank_name"]').val());
					$('.infomation .bk_acc').text($('input[name="bank_account"]').val());
					$('.infomation .bk_addr').text($('input[name="bank_address"]').val());
					$('.infomation .bk_area').text($('input[name="bank_area"]').val());
					$('.infomation .acc_bch_bk').text($('input[name="acct_bran_bank"]').val());
					$('.infomation .acc_ty').text($('input[name="cart_type"]').val());
					$('.infomation .acc_currcy').text($('input[name="cart_currency"]').val());
				}
			},
			'error':function(){
				alert("{{ __('errors.ajaxSendFail') }}")
			},
			'complete':function(){
				isDisabled(stepcnt_1,true);
			}
		})
	});
	stepcnt_2.find('.btn').on('click',function(){
		$.ajax({
			'url':"{{ url('/account/tradingStep3') }}",
			'type':'post',
			'data':$('form').serialize(),
			'dataType':'json',
			'timeout':5000,
			'beforeSend':function(){
				isDisabled(stepcnt_2,false);
			},
			'success':function(data){
				if(data.status){
					divBox.eq(3).addClass('curr').siblings().removeClass('curr');
					stepcnt_3.show().siblings().hide();
				}else{
					alert(data.msg)
				}
			},
			'error':function(){
				alert("{{ __('errors.ajaxSendFail') }}")
			},
			'complete':function(){
				isDisabled(stepcnt_2,true);
			}
		})
	})
	stepcnt_3.find('.comfirm.btn').on('click',function(){
		if($('#upload_img_0').val() == '' || $('#upload_img_1').val()=='' || $('#upload_img_2').val()== ''){
			alert("{{ __('form.missingData') }}")
		}else{
			$('.upload_form').submit();
		}
		
	})
})
var datetime = new DateTime();	//日期下拉对象
datetime.init();	//调用init方法初始化
</script>
<!--图片上传-->
<script src="{{ url('/js/uploadPreview.js') }}" type="text/javascript"></script>
@endsection