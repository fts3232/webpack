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
			<i class="icon"></i>Location： <a href="{{ route('home') }}" class="link">Home</a> > Online Trading > Live Accounts
		</div>
		<div class="navbox">
			<!--左侧导航-->
			@component('home.account.sidebar')
			@slot('index')
			    1
			@endslot
			@endcomponent
			<div class="rgtcon">
				<div class="this_tit tr yellow"><i class="icon"></i>Live Accounts</div>
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
							<div class="trbox">
								<span class="listname">Trading Platform :</span>
								<div class="switch">
									<span data-index="1">MT4</span>
									<span data-index="2">FX Trader</span>
								</div>
								<input type="hidden" name="platform" />
								<span class="tip">Please select the Trading Platform.</span>
							</div>

							<div class="trbox">
								<span class="listname">Account Type :</span>
								<div class="switch big">
									<span data-index="1">standard accounts</span>
									<span data-index="2">mini accounts</span>
								</div>
								<input type="hidden" name="account_type" />
								<span class="tip">Please select the Account Type you want.</span>
							</div>

							<div class="trbox">
								<span class="listname">Account Currency :</span>
								<div class="switch">
									<span data-index="1">USD</span>
									<span data-index="2">CHF</span>
								</div>
								<input type="hidden" name="account_currency" />
								<span class="tip">Please select the Account currency type.</span>
							</div>
							@if($isLogin !='1')
							<div class="trbox">
								<span class="listname">Your Name :</span>
								<input type="text" name="name" class="input_p" />
								<span class="tip">Please fill in your name.</span>
							</div>

							<div class="trbox">
								<span class="listname">Type of Certificate :</span>
								<div class="selectbox" style="width: 120px;float: left;margin-right: -1px;">
									<div class="thisVal"></div>
									<ul>
										<li>ID Card</li>
										<li>CD Card</li>
									</ul>
									<input type="hidden" name="certificate_type" />
								</div>
								<input type="text" name="document_number" class="input_p" />
								<span class="tip">Please select your Type of Certificate and fill in the number.</span>
							</div>

							<div class="trbox">
								<span class="listname">Cellphone Number :</span>
								<input type="text" name="mobile" class="input_p" />
								<span class="tip">Please fill in the Cellphone Number,You can Use this to login.</span>
							</div>

							<div class="trbox">
								<span class="listname">E-mail Address :</span>
								<input type="text" name="email" class="input_p" />
								<span class="tip">Please fill in the correct E-mail address</span>
							</div>

							<div class="trbox">
								<span class="listname">Create password :</span>
								<input type="password" name="password" class="input_p" />
								<span class="tip">You can Use the password login Customer Center.</span>
							</div>
							@endif
							<div class="trbox">
								<span class="listname">PIN :</span>
								<div class="codebox">
									<input type="text" name="verficode" class="input_p" />
									<i></i>
								</div>
								<img src="{{captcha_src()}}" class="code red ref_code"/>
							</div>

							<div class="agree_check clearfix" onselectstart="return false;">
								<div>
									<input type="checkbox" id="checkbox" class="checkbox" checked="checked">
									<label for="checkbox" class="ckbox">
										<i class="icon checked"></i>
										<span>Agree</span>
									</label>
									<a href="javascript:;" class="agreelink yellow" data-index="0" target="_blank">《Customer Agreement》</a> and 
									<a href="javascript:;" class="agreelink yellow" data-index="1" target="_blank">《Risk Disclosure Statement》</a> and 
									<a href="javascript:;" class="agreelink yellow" data-index="2" target="_blank">《Disclaimer Agreement》</a>

								</div>
								
							</div>
		
							
							<div style="clear: both;"></div>
							<input type="button" class="submit nextStep btn disabled" value="Complete the information" disabled />

							<div class="customer_notice">
								@component('home.agreelist.txt')
								@endcomponent
							</div>
						</div>
						<div class="stepcnt" >

							<div class="trbox">
								<span class="listname">Account holder name :</span>
								<input type="text" name="account_name" class="input_p" />
								<span class="tip">The account holder's name must be the same as the name in the profile</span>
							</div>

							<div class="trbox">
								<span class="listname">Bank :</span>
								<div class="selectbox" style="width: 103px;float: left;margin-right: -1px;">
									<div class="thisVal"></div>
									<ul>
										<li>ICBC</li>
										<li>SPA</li>
										<li>IIS</li>
									</ul>
									<input type="hidden" name="bank_name" />
								</div>
								<span class="tip">Please select the bank you are using for withdrawals</span>
							</div>

							<div class="trbox">
								<span class="listname">Bank Account :</span>
								<input type="text" name="bank_account" class="input_p" />
								<span class="tip">Please fill in the correct bank account number</span>
							</div>

							<div class="trbox">
								<span class="listname">Bank Address :</span>
								<div class="selectbox" style="width: 150px;float: left;margin-right: 10px;">
									<div class="thisVal"></div>
									<ul>
									    <li>New Zealand</li>
										<li>CHINA</li>
										<li>USA</li>
										<li>US</li>
									</ul>
									<input type="hidden" name="bank_area" />
								</div>
								<input type="text" name="bank_address" class="selectbox" style="margin-left: 10px;width: 400px;" />
								<span class="tip">Please enter the address of the bank where the bank card is.</span>
							</div>

							<div class="trbox">
								<span class="listname">Account Branch Bank :</span>
								<input type="text" name="acct_bran_bank" class="input_p" />
								<span class="tip">Please enter the sub branch of the bank card.</span>
							</div>


							<div class="trbox">
								<span class="listname">Account Type :</span>
								<div class="selectbox">
								<div class="thisVal"></div>
									<ul>
										<li>Debit Card</li>
										<li>Credit Card</li>
									</ul>
									<input type="hidden" name="cart_type" />
								</div>
							</div>

							<div class="trbox">
								<span class="listname">Account Currency :</span>
								<div class="selectbox">
									<div class="thisVal"></div>
									<ul>
										<li>USD</li>
										<li>IIS</li>
										<li>CHF</li>
									</ul>
									<input type="hidden" name="cart_currency" />
								</div>
							</div>

							<div class="opbox">
								<input type="button" class="btn pre yellow" data-index="0" value="Previous" />
								<input type="button" class="btn nextStep next disabled" disabled value="Next Step" />
							</div>
						</div>
						<div class="stepcnt" >
							<div class="comfirm_info clearfix">
								<div class="infomation">
									<p class="caption">Personal Information</p>
									<ul>
										<li>Trading Platform : <span class="td_pf"></span></li>
										<li>Account Type : <span class="acc_ty"></span></li>
										<li>Account Currency : <span class="acc_curr"></span></li>
										<li>Your Name : <span class="yr_nm"></span></li>
										@if($isLogin !='1')
										<li>Type of Certificate : <span class="ty_of_cf"></span></li>
										<li>Document Number : <span class="dt_nb"></span></li>
										@endif
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
										<li>Account Type : <span class="acc_ty2"></span></li>
										<li>Account Currency : <span class="acc_currcy"></span></li>
									</ul>
								</div>
							</div>
							<div class="opbox">
								<input type="button" class="btn pre yellow" data-index="1" value="Previous" />
								<input type="button" class="comfirm next btn bg" value="Confirm" />
							</div>
							
						</div>
						<div class="stepcnt">
							<div class="correctbox">
								<span class="corr_bg"></span>
								<p>Congratulations<br/>your information is submitted successfully<br/>the account will be activated within 30 minutes<br/>and the activation message will be sent to your mailbox<br/>please be patient</p>
								<a href="{{ route('MT4') }}" class="btn bg sbtn">CITD MT4</a>
							</div>
						</div>
						</form>
						<iframe name="uploadFrame" style="display:none"></iframe>
						<form target="uploadFrame" action="{{ route('liveAccountStep4') }}" method="post" class="form2" enctype="multipart/form-data" >
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
	$('input[name="name"],input[name="document_number"],input[name="email"],input[name="mobile"],input[name="password"],input[name="verficode"],input[name="account_name"],input[name="bank_account"],input[name="bank_address"],input[name="acct_bran_bank"]').on('change',function(){
		var val = $(this).val();
		var name = $(this).attr('name');
		var postData =  new Object(); 
		postData[name] = val;
		if(name=='document_number'){
			postData['certificate_type'] = $('input[name="certificate_type"]').val();
		}
		postData['_token'] = $('input[name="_token"]').val();
		$.ajax({
			'url':"{{ route('liveAccountValidator',['key'=>'']) }}"+'/'+name,
			'type':'post',
			'data':postData,
			'dataType':'json',
			'timeout':5000,
			'success':function(data){
				if(data.status){
					if(name=='verficode'){
						$('input[name="'+name+'"]').next('i').removeClass('error').addClass('success');
					}else{
						$('input[name="'+name+'"]').removeClass('log_error');
						$('input[name="'+name+'"]').next('.tip').removeClass('log_error').html('');
					}
				}else{
					if(name=='verficode'){
						$('input[name="'+name+'"]').next('i').addClass('error').removeClass('success');
						$('input[name="'+name+'"]').html('')
					}else{
						$('input[name="'+name+'"]').addClass('log_error');
						$('input[name="'+name+'"]').next('.tip').addClass('log_error').html(data.validator[name][0]);
					}
				}
			}
		})
	})
	var stepcnt_0 = $('.trad_form .stepcnt').eq(0);
	var stepcnt_1 = $('.trad_form .stepcnt').eq(1);
	var stepcnt_2 = $('.trad_form .stepcnt').eq(2);
	var stepcnt_3 = $('.form2 .stepcnt');
	var divBox = $('.operate_step>div');
	stepcnt_0.find('.btn').on('click',function(){
		$.ajax({
			'url':"{{ route('liveAccountStep1') }}",
			'type':'post',
			'data':$('form').serialize(),
			'dataType':'json',
			'timeout':5000,
			'beforeSend':function(){
				isDisabled(stepcnt_0,false);
			},
			'success':function(data){
				var inputMap = {
							'platform':{input:$('input[name="platform"]'),tip:$("input[name='platform']").next('.tip')},
							'account_type':{input:$('input[name="account_type"]'),tip:$("input[name='account_type']").next('.tip')},
							'account_currency':{input:$('input[name="account_currency"]'),tip:$("input[name='account_currency']").next('.tip')},
							'certificate_type':{input:$('input[name="certificate_type"]'),tip:$("input[name='certificate_type']").next('.tip')},
    						'name':{input:$("input[name='name']"),tip:$("input[name='name']").next('.tip')},
							'document_number':{input:$("input[name='document_number']"),tip:$("input[name='document_number']").next('.tip')},
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
   							if(typeof v.tip!='undefined'){
   								v.tip.addClass('log_error').html(data.validator[k][0]);
   	   						}
   						}
     	   			}else{
         	   			if(k=='verficode'){
        					v.input.next('i').removeClass('error');
        				}else{
        					v.input.removeClass('log_error');
        					if(typeof v.tip!='undefined'){
        						v.tip.removeClass('log_error').html('');
            				}
        				}
             	   	}
    			}
				if(data.status){
					stepcnt_1.show().siblings().hide();
					divBox.eq(1).addClass('curr').siblings().removeClass('curr');
					stepcnt_1.find('input[type="text"]').on('keyup',function(){
						var fg = true;
						stepcnt_1.find('input[type="text"]').each(function(i,obj){
							if(obj.value == ''){
								fg = false;
							}
						});
						if(fg){
							isDisabled(stepcnt_1,true,'Next Step');
						}else{
							isDisabled(stepcnt_1,false,'Next Step');
						}
					});
				}else{
					//alert(data.msg)
					$("input[name='verficode']").html('')
					$('img.ref_code').attr('src',$('img.ref_code').attr('src')+Math.random())
				}
			},
			'error':function(){
				alert("{{ __('errors.ajaxSendFail') }}")
				$("input[name='verficode']").html('')
				$('img.ref_code').attr('src',$('img.ref_code').attr('src')+Math.random())
			},
			'complete':function(){
				isDisabled(stepcnt_0,true);
			}
		})
		return false;
	});
	stepcnt_1.find('.next').on('click',function(){
		$.ajax({
			'url':"{{ route('liveAccountStep2') }}",
			'type':'post',
			'data':$('form').serialize(),
			'dataType':'json',
			'timeout':5000,
			'beforeSend':function(){
				isDisabled(stepcnt_1,false);
			},
			'success':function(data){
				var inputMap = {
							'bank_name':{input:$('input[name="bank_name"]')},
							'bank_area':{input:$('input[name="bank_area"]')},
							'cart_type':{input:$('input[name="cart_type"]')},
							'cart_currency':{input:$('input[name="cart_currency"]')},
    						'account_name':{input:$("input[name='account_name']"),tip:$("input[name='account_name']").next('.tip')},
    						'bank_account':{input:$("input[name='bank_account']"),tip:$("input[name='bank_account']").next('.tip')},
    						'bank_address':{input:$("input[name='bank_address']"),tip:$("input[name='bank_address']").next('.tip')},
    						'acct_bran_bank':{input:$("input[name='acct_bran_bank']"),tip:$("input[name='acct_bran_bank']").next('.tip')},
    						// 'mobile':{input:$("input[name='mobile']"),tip:$("input[name='mobile']").next('.tip')},
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
   							if(typeof v.tip!='undefined'){
   								v.tip.addClass('log_error').html(data.validator[k][0]);
   							}
   						}
     	   			}else{
         	   			if(k=='verficode'){
        					v.input.next('i').removeClass('error');
        				}else{
        					v.input.removeClass('log_error');
        					if(typeof v.tip!='undefined'){
        						v.tip.removeClass('log_error').html('');
        					}
        				}
             	   	}
    			}
				if(data.status){
					stepcnt_2.show().siblings().hide();
					divBox.eq(2).addClass('curr').siblings().removeClass('curr');
					$('.infomation .td_pf').text($('input[name="platform"]').attr('data-text'));
					$('.infomation .acc_ty').text($('input[name="account_type"]').attr('data-text'));
					$('.infomation .acc_curr').text($('input[name="account_currency"]').attr('data-text'));
					$('.infomation .yr_nm').text($('input[name="name"]').val());
					$('.infomation .ty_of_cf').text($('input[name="certificate_type"]').siblings('.thisVal').text());
					$('.infomation .dt_nb').text($('input[name="document_number"]').val());
					$('.infomation .cell_num').text($('input[name="mobile"]').val());
					$('.infomation .email_addr').text($('input[name="email"]').val());

					$('.infomation .acc_hd_nm').text($('input[name="account_name"]').val());
					$('.infomation .bk').text($('input[name="bank_name"]').siblings('.thisVal').text());
					$('.infomation .bk_acc').text($('input[name="bank_account"]').val());
					$('.infomation .bk_addr').text($('input[name="bank_address"]').val());
					$('.infomation .bk_area').text($('input[name="bank_area"]').siblings('.thisVal').text());
					$('.infomation .acc_bch_bk').text($('input[name="bank_address"]').val());
					$('.infomation .acc_bch_bk').text($('input[name="acct_bran_bank"]').val());
					$('.infomation .acc_ty2').text($('input[name="cart_type"]').siblings('.thisVal').text());
					$('.infomation .acc_currcy').text($('input[name="cart_currency"]').siblings('.thisVal').text());
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
	stepcnt_2.find('.next').on('click',function(){
		$.ajax({
			'url':"{{ route('liveAccountStep3') }}",
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
					stepcnt_3.show();
					stepcnt_2.hide();
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
			$('.form2').submit();
		}
		
	});

	//返回上一步
	$('.opbox .pre').on('click',function(){
		var index = $(this).attr('data-index');
		console.log(index);
		$(this).parents('.stepcnt').prev().show().siblings('.stepcnt').hide();
		$('.operate_step>div').eq(index).addClass('curr').siblings('div').removeClass('curr')
	});
	//条款切换
	$('.agreelink').on('click',function(){
		var index = $(this).attr('data-index');
		$('.customer_notice .agree-list').eq(index).show().siblings('.agree-list').hide();
		$('.content_box').css('marginTop',0);
		$('#scrollbar span').css('top',0);
		scrollBar($('.customer_notice'),index);
	})
});
function registerSuccess(){
	var stepcnt_3 = $('.form2 .stepcnt');
	var stepcnt_4 = $('.trad_form .stepcnt').eq(3);
	stepcnt_4.show();
	stepcnt_3.hide();
}
var datetime = new DateTime();	//日期下拉对象
datetime.init();	//调用init方法初始化
</script>
<!--图片上传-->
<script src="{{ asset('/js/uploadPreview.js') }}" type="text/javascript"></script>
@endsection