<div class="lft_nav">
	<span class="oltd">Customer Center</span>
	<a href="{{ url('/personalInfo') }}" class="nav_link user {{ $index=='1'?'yellow':null }}"><i class="icon"></i>Personal Data</a>
	<a href="{{ url('/onlineDeposit') }}" class="nav_link dep {{ $index=='2'?'yellow':null }}"><i class="icon"></i>Online Deposit</a>
	<a href="{{ url('/injection') }}" class="nav_link ij {{ $index=='3'?'yellow':null }}"><i class="icon"></i>Bank Injection</a>
	<a href="{{ url('/withdrawal') }}" class="nav_link wd {{ $index=='4'?'yellow':null }}"><i class="icon"></i>Account withdrawal</a>
</div>