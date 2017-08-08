@extends('home.app')

@section('content-container')
@component('home.header')
@slot('path')
    /account
@endslot
@endcomponent
<div class="home_mt4 cdt">
	<div class="container">
		<h3 class="home_title wow fadeInDown"><span class="yellow">CIDT GLOBAL</span> MT4<br/>
			<span class="s_tit">international brands the world's trust</span>
		</h3>
		<img src="{{ asset($cdnPath.'/img/mt4_log.png') }}" alt="" class="mt4_log wow fadeInLeft">
		<ul class="mt4_list wow fadeInRight">
			<li>MT4 is one of the most popular international</li>
			<li>investment Wagner trading platform, market charts, </li>
			<li>technical analysis and trading operations three functions, </li>
			<li>can carry out orders, limit orders, stop, open, </li>
			<li>only to win and view the report and analysis data of different operation.</li>
		</ul>
		<a href="#" class="btn bg wow fadeInUp" data-wow-delay="0.2s">Download MT4</a>
	</div>
</div>
<div class="home_mt4 meta_trader">
	<div class="container">
		<h3 class="home_title wow fadeInDown">meTA TRADER <span class="yellow">4</span><br/>
			<span class="s_tit">The most popular investment platform for investors</span>
		</h3>
		<div class="clearfix">
			<div class="plat_l">
				<p class="txt wow fadeInLeft"><span class="yellow">MetaQuotes</span> is a professional trading platform developer with more than 10 years' experience<br>and its clients are all over the world using their trading platform. <br>Our company launched a trading platform with MetaQuotes.</p>
				<ul class="mt4_list wow fadeInLeft">
					<li>Offer instant Quotes</li>
					<li>Support a full range of transaction orders and Market Execution Models</li>
					<li>Convenient control and management of open positions and client orders</li>
					<li>A clear and intuitive price chart</li>
					<li>Complete drawing tools and technical analysis indicators</li>
					<li>Transaction warning function</li>
					<li>MT4 perfect backstage management function</li>
					<li>Provide detailed reports</li>
				</ul>
				<a href="#" class="btn btn_r wow fadeInUp" data-wow-delay="0.2s">Start Trading Now</a>
			</div>
			<div class="pc wow fadeInRight">
				<img src="{{ asset($cdnPath.'/img/pc-phone.png') }}" alt="" class="pc_phone">
			</div>
		</div>
	</div>
</div>
<div class="home_mt4 download_platform">
	<div class="container">
		<h3 class="home_title wow fadeInDown"><i class="icon mt4logo_24"></i>MT4 Download</h3>
		<div class="common_list clearfix">
			<div class="item">
				<div class="wow fadeInUp">
					<img src="{{ asset($cdnPath.'/img/wins_88.png') }}" alt="">
					<span class="name">Windows</span>
				</div>
				<a href="#" class="btn dlbtn wow fadeInUpBig">Download</a>
			</div>
			<div class="item">
				<div class="wow fadeInUp" data-wow-delay="0.2s">
					<img src="{{ asset($cdnPath.'/img/os_88.png') }}" alt="">
					<span class="name">Mac OS</span>
				</div>
				<a href="#" class="btn dlbtn wow fadeInUpBig" data-wow-delay="0.2s">Download</a>
			</div>
			<div class="item">
				<div class="wow fadeInUp" data-wow-delay="0.4s">
					<img src="{{ asset($cdnPath.'/img/andr_88.png') }}" alt="">
					<span class="name">Android</span>
				</div>
				<a href="#" class="btn dlbtn wow fadeInUpBig" data-wow-delay="0.4s">Download</a>
			</div>
			<div class="item">
				<div class="wow fadeInUp" data-wow-delay="0.6s">
					<img src="{{ asset($cdnPath.'/img/app_88.png') }}" alt="">
					<span class="name">Apple</span>
				</div>
				<a href="#" class="btn dlbtn wow fadeInUpBig" data-wow-delay="0.6s">Download</a>
			</div>
		</div>
	</div>
</div>
<!--footer-->
@component('home.footer')
@endcomponent
<script src="{{ asset($cdnPath.'/js/wow.min.js') }}"></script>
@endsection
