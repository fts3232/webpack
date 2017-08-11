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
						<div class="stepcnt" style="display: block;">
							<div class="risk">
								<h3 class="yellow">Free Trial & No Risk</h3>
								<p>Simulated accounts allow you to be familiar with our trading rules and system <br/>operations. If you encounter any problems in the process of simulation, please<br/>contact us for 24 hours online to answer your questions</p>
							</div>

							<p class="listname">Account Type :</p>
							<div class="selectbox">
								<div class="thisVal"></div>
								<ul>
									<li>standard accounts</li>
									<li>demo accounts</li>
								</ul>
								<input type="hidden" name="account_type" />
							</div>
							<span class="tip">Please select the type of account you need.</span>

							<div style="clear: both;"></div>
							<p class="listname">Your Name :</p>
							<input type="text" name="name" class="input_p">
							<span class="tip">Please fill in your real name</span>

							<div style="clear: both;"></div>
							<p class="listname">E-mail Address :</p>
							<input type="text" name="email" class="input_p">
							<span class="tip"><i class="icon"></i>Please fill in the correct E-mail address</span>

							<div style="clear: both;"></div>
							<p class="listname">Cellphone Number :</p>
							<input type="text" name="mobile" class="input_p">
							<span class="tip">Please fill in the correct phone number, Important information will be sent to this number</span>

							<!--  <div style="clear: both;"></div>
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
							<span class="tip">Please select your region</span> -->

							<div style="clear: both;"></div>
							<p class="listname">PIN :</p>
							<div class="codebox">
								<input type="text" name="verficode" class="input_p" style="width: 130px;">
								<i></i>
							</div>
							     <img src="{{captcha_src()}}" class="code red ref_code"/>
							<span class="tip"><i class="icon refresh ref_code"></i></span>

							<div class="btn_group">
							     {{ csrf_field() }}
								<input type="submit" class="btn sbtn nextStep disabled" value="Submit" disabled/>
								<input type="reset" class="btn sbtn" value="Reset" />
							</div>
						</div>
						<div class="stepcnt">
							<div class="correctbox">
								<span class="corr_bg"></span>
								<p>Congratulations<br/>the demo account activation was successful</p>
								<a href="{{ url('/account/cidtMT4') }}" class="btn next_btn">CITD MT4</a>
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
		<a href="{{ url('/') }}" class="btn sbtn bg">Determine</a>
		<a href="{{ url('/account/cidtMT4') }}" class="btn sbtn yellow">CITD MT4</a>
	</div>
</div>
<!--footer-->
@component('home.footer')
@endcomponent
<script>
$(function(){
	$('.ref_code').on('click',function(){
		$('img.ref_code').attr('src',$('img.ref_code').attr('src')+Math.random())
	});
	$('input[name="name"],input[name="email"],input[name="mobile"],input[name="verficode"]').on('change',function(){
		var val = $(this).val();
		var name = $(this).attr('name');
		var postData =  new Object(); 
		postData[name] = val;
		postData['_token'] = $('input[name="_token"]').val();
		$.ajax({
			'url':"{{ url('/account/demo/validator') }}"+'/'+name,
			'type':'post',
			'data':postData,
			'dataType':'json',
			'timeout':5000,
			'success':function(data){
				if(data.status){
					if(name=='verficode'){
						$('input[name="'+name+'"]').next('i').removeClass('error');
					}else{
						$('input[name="'+name+'"]').removeClass('log_error');
						$('input[name="'+name+'"]').next('.tip').removeClass('log_error').html('');
					}
				}else{
					if(name=='verficode'){
						$('input[name="'+name+'"]').next('i').addClass('error');
						$('input[name="'+name+'"]').html('')
					}else{
						$('input[name="'+name+'"]').addClass('log_error');
						$('input[name="'+name+'"]').next('.tip').addClass('log_error').html(data.validator[name][0]);
					}
				}
			}
		})
	})
	//提交表单
	$('.accounts_form input[type="submit"]').on('click',function(){
		$.ajax({
			'url':"{{ url('/account/demo/register') }}",
			'type':'post',
			'data':$('form').serialize(),
			'dataType':'json',
			'timeout':5000,
			'beforeSend':function(){
				isClick(0);
			},
			'success':function(data){
				var inputMap = {
						'account_type':{input:$('input[name="account_type"]').parent('.selectbox')},
						'name':{input:$("input[name='name']"),tip:$("input[name='name']").next('.tip')},
						'email':{input:$("input[name='email']"),tip:$("input[name='email']").next('.tip')},
						'mobile':{input:$("input[name='mobile']"),tip:$("input[name='mobile']").next('.tip')},
						'verficode':{input:$("input[name='verficode']")}
    			};
    			for(k in inputMap){
    				var v = inputMap[k];
   				 	if(typeof data.validator !='undefined'  && typeof data.validator[k]!='undefined'){
   	   				 	if(k=='verficode'){
   							v.input.next('i').addClass('error');
   							v.input.val('')
   	   				 	}else if(k=='account_type'){
   							v.input.addClass('log_error');
   						}else{
   							v.input.addClass('log_error');
   							v.tip.addClass('log_error').html(data.validator[k][0]);
   						}
     	   			}else{
         	   			if(k=='verficode'){
        					v.input.next('i').removeClass('error');
             	   		}else if(k=='account_type'){
                 	   		v.input.removeClass('log_error');
        				}else{
        					v.input.removeClass('log_error');
        					v.tip.removeClass('log_error').html('');
        				}
             	   	}
    			}
				if(data.status){
					$('#shadow').fadeIn();
					$('html,body').css('overflow','hidden');
				}else{
					alert(data.msg);
					$("input[name='verficode']").val('')
					$('.ref_code').attr('src',$('.ref_code').attr('src')+Math.random())
				}
			},
			'error':function(){
				alert("{{ __('errors.ajaxSendFail') }}")
				$('.ref_code').attr('src',$('.ref_code').attr('src')+Math.random())
				$('.ref_code').attr('src',$('.ref_code').attr('src')+Math.random())
			},
			'complete':function(){
				isClick(1);
			}
		})
		return false;
	});
});
</script>
@endsection