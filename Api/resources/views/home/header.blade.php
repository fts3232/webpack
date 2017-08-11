<div class="head_t">
    	<div class="container">
    		<div class="head_nav">
    			<a class="t_nav"><i class="icon"></i>24-hour hotline: <span class="yellow">8888-8888</span></a>
    			<a class="t_nav" target="_blank" href="{{ url('/aboutUs') }}"><i class="icon"></i>Contacts</a>
    			<a class="t_nav"><i class="icon"></i>English</a>
    		</div>
    	</div>
</div>
<div class="head">
	<div class="container">
		<div class="head_menu clearfix">
			<div class="head_l">
				<a href="{{ url('/') }}" class="logo"></a>
				<span class="siteName">Foreign Exchange <br/> Investment Expert</span>
			</div>
			<div class="head_r">
			    @if($isLogin=='1')
			    <a href="{{ url('/user/personalInfo') }}" class="btn" target="_blank">Customer Center</a>
				<a href="{{ url('/user/onlineDeposit') }}" class="btn btn_r" target="_blank">Fund</a>
				@else
				<a href="{{ url('/login') }}" class="btn" target="_blank">Login</a>
				<a href="{{ url('/account/standard') }}" class="btn btn_r" target="_blank">Registered</a>
				@endif
			</div>
		</div>
		<div class="nav">
			<ul class="menu">
				<li {{ $index=='1'?'class=curr':null }}><a href="{{ url('/') }}">CIDT GLOBAL</a></li>
				<li {{ $index=='2'?'class=curr':null }}>
					<a href="javascript:;">Customer Center</a>
					<ul class="subMenu">
						<li><a href="{{ url('/user/personalInfo') }}">Personal Data</a></li>
						<li><a href="{{ url('/user/onlineDeposit') }}">Online Deposit</a></li>
						<li><a href="{{ url('/user/injection') }}">Bank Injection</a></li>
						<li><a href="{{ url('/user/withdrawal') }}">Account Withdrawals</a></li>
					</ul>
				</li>
				<li {{ $index=='3'?'class=curr':null }}>
					<a href="javascript:;">Online Trading</a>
					<ul class="subMenu">
						<li><a href="{{ url('/account/standard') }}">Standard Accounts</a></li>
						<li><a href="{{ url('/account/demo') }}">Demo Accounts</a></li>
						<li><a href="{{ url('/account/cidtMT4') }}">CIDT MT4</a></li>
					</ul>
				</li>
				<li {{ $index=='4'?'class=curr':null }}><a href="{{ url('/productDetails') }}">Product Details</a></li>
				<li {{ $index=='5'?'class=curr':null }}><a href="{{ url('/aboutUs') }}">About Us</a></li>
				<!-- <li><a href="#">Help Center</a></li> -->
			</ul>
			<span class="underline"></span>
		</div>
	</div>
</div>
