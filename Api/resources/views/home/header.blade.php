<div class="head_t">
    	<div class="container">
    		<div class="head_nav">
    			<a class="t_nav"><i class="icon"></i>24-hour hotline: <span class="yellow"> +64 9 309 9925</span></a>
    			<a class="t_nav" target="_blank" href="{{ route('about') }}"><i class="icon"></i>Contacts</a>
    			<a class="t_nav"><i class="icon"></i>English</a>
    		</div>
    	</div>
</div>
<div class="head">
	<div class="container">
		<div class="head_menu clearfix">
			<div class="head_l">
				<a href="{{ route('home') }}" class="logo"></a>
				<span class="siteName">Foreign Exchange <br/> Investment Expert</span>
			</div>
			<div class="head_r">
			    @if($isLogin=='1')
			    <a href="{{ route('person') }}" class="btn" target="_blank">Customer Center</a>
				<a href="{{ route('onlineDeposit') }}" class="btn btn_r" target="_blank">Online Deposit</a>
				@else
				<a href="{{ route('login') }}" class="btn" target="_blank">Login</a>
				<a href="{{ route('liveAccount') }}" class="btn btn_r" target="_blank">Registered</a>
				@endif
			</div>
		</div>
		<div class="nav">
			<ul class="menu">
				<li {{ $index=='1'?'class=curr':null }}><a href="{{ route('home') }}">CIDT GLOBAL</a></li>
				<li {{ $index=='2'?'class=curr':null }}>
					<a href="javascript:;">Customer Center</a>
					<ul class="subMenu">
						<li><a href="{{ route('person') }}">Personal Data</a></li>
						<li><a href="{{ route('onlineDeposit') }}">Online Deposit</a></li>
						<li><a href="{{ route('injection') }}">Bank Injection</a></li>
						<li><a href="{{ route('withdraw') }}">Account Withdrawals</a></li>
					</ul>
				</li>
				<li {{ $index=='3'?'class=curr':null }}>
					<a href="javascript:;">Online Trading</a>
					<ul class="subMenu">
						<li><a href="{{ route('liveAccount') }}">Live Accounts</a></li>
						<li><a href="{{ route('demoAccount') }}">Demo Accounts</a></li>
						<li><a href="{{ route('MT4') }}">CIDT MT4</a></li>
					</ul>
				</li>
				<li {{ $index=='4'?'class=curr':null }}><a href="{{ route('product') }}">Product Details</a></li>
				<li {{ $index=='5'?'class=curr':null }}><a href="{{ route('about') }}">About Us</a></li>
				<!-- <li><a href="#">Help Center</a></li> -->
			</ul>
			<span class="underline"></span>
		</div>
	</div>
</div>
