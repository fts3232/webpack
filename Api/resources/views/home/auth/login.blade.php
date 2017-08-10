@extends('home.app')

@section('content-container')
@component('home.header')
@slot('index')
    1
@endslot
@slot('isLogin')
    {{ $isLogin }}
@endslot
@endcomponent
<div class="login_body">
	<div class="container">
		<img src="{{ asset($cdnPath.'/img/log_bg.png') }}" alt="" class="log_bg">
		<div class="login_box">
			<h3 class="log_tit yellow">cidt global</h3>
			<form class="login_form clearfix">
				<p class="log_tip">Use MT4 account and password landing</p>
				<div class="inputbox uname">
					<input type="text" class="lft" name="username">
				</div>
				<div class="log_state_tip log_error username"></div>
				<div class="inputbox pwd">
					<input type="password" class="lft" name="password">
				</div>
				<div class="log_state_tip log_error password"></div>
				<div class="inputbox checkcode">
					<input type="password" class="lft" name="verficode">
					<i></i>
				</div>
				<img src="{{captcha_src()}}" class="code red ref_code"/>
				<input type="button" value="Login" class="btn bg login_btn" />
				 {{ csrf_field() }}
				<div class="link_group">
					<a href="#">Forget Password</a>
					<a href="{{ url('/account/trading') }}" class="red">Registered</a>
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
	$('.ref_code').on('click',function(){
		$(this).attr('src',$(this).attr('src')+Math.random())
	});
	$('.login_btn').on('click',function(){
		$.ajax({
			'url':"{{ url('/login') }}",
			'type':'post',
			'data':$('form').serialize(),
			'dataType':'json',
			'timeout':5000,
			'beforeSend':function(){
				$('.login_btn').addClass('disabled').removeClass('bg').attr('disabled',true)
			},
			'success':function(data){
				var inputMap = {
    						'username':$('.log_error.username'),
    						'password':$('.log_error.password'),
    						'verficode':$('.inputbox.checkcode i')
    			};
				for(k in inputMap){
    				var v = inputMap[k];
   				 	if(typeof data.validator !='undefined'  && typeof data.validator[k]!='undefined'){
   	   				 	if(k=='verficode'){
   							v.val('');
   							$('.inputbox.checkcode i').addClass('error')
   						}else{
   							v.html(data.validator[k][0]);
   						}
     	   			}else{
         	   			if(k=='verficode'){
             	   			$('.inputbox.checkcode i').removeClass('error');
        				}else{
        					v.html('')
        				}
             	   	}
    			}
				if(data.status){
					location.href="{{ url('/member/personalInfo') }}"
				}else if(data.status==false && typeof data.validator =='undefined'){
					$('.log_error.username').html(data.msg);
					$('.inputbox.checkcode i').removeClass('error')
				}
				$('.ref_code').attr('src',$('.ref_code').attr('src')+Math.random())
			},
			'error':function(){
				$('.log_error.username').html("{{ __('errors.ajaxSendFail') }}")
				$('.ref_code').attr('src',$('.ref_code').attr('src')+Math.random())
			},
			'complete':function(){
				$('.login_btn').removeClass('disabled').addClass('bg').attr('disabled',false)
			}
		})
		return false;
	})
})
</script>
@endsection