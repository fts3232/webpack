<div class="lft_nav">
	<span class="oltd">Customer Center</span>
	<a href="{{ url('/user/personalInfo') }}" class="nav_link user {{ $index=='1'?'yellow':null }}"><i class="icon"></i>Personal Data</a>
	<a href="{{ url('/user/onlineDeposit') }}" class="nav_link dep {{ $index=='2'?'yellow':null }}"><i class="icon"></i>Online Deposit</a>
	<a href="{{ url('/user/injection') }}" class="nav_link ij {{ $index=='3'?'yellow':null }}"><i class="icon"></i>Bank Injection</a>
	<a href="{{ url('/user/withdrawal') }}" class="nav_link wd {{ $index=='4'?'yellow':null }}"><i class="icon"></i>Account withdrawal</a>
	<a href="{{ url('/user/logout') }}" class="nav_link layout"><i class="icon"></i>Sign out</a>
</div>