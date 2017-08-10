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
@component('home.banner')
@slot('cdnPath')
    {{ $cdnPath }}
@endslot
@endcomponent
<!--pro_data-->
<div class="cntbox">
	<div class="container">
		<div class="pro_t">
			<span class="lft"><i class="icon"></i>Multiple Products</span>
			<!--下拉选项-->
			<div id="selectbox" class="selectbox">
				<div class="thisVal"></div>
				<ul>
					<li>e.g.EURUSD</li>
					<li>en</li>
				</ul>
			</div>
		</div>
		<div class="pro_list clearfix">
			<div class="item">
				<div>
					<p><span class="pro_name">EURUSD</span><span class="pro_per red">-0.08%</span></p>
					<p>
						<span class="bid">Bid</span><span class="biddata green">1.11595</span>
						<span class="ask">Ask</span><span class="biddata green">1.11612</span>
					</p>
				</div>
			</div>
			<div class="item">
				<div>
					<p><span class="pro_name">GBPUSD</span><span class="pro_per red">-0.11%</span></p>
					<p>
						<span class="bid">Bid</span><span class="biddata green">1.11595</span>
						<span class="ask">Ask</span><span class="biddata green">1.11612</span>
					</p>
				</div>
			</div>
			<div class="item">
				<div>
					<p><span class="pro_name">#UK100</span><span class="pro_per red">-0.11%</span></p>
					<p>
						<span class="bid">Bid</span><span class="biddata green">1.11595</span>
						<span class="ask">Ask</span><span class="biddata green">1.11612</span>
					</p>
				</div>
			</div>
			<div class="item">
				<div>
					<p><span class="pro_name">WTI.sopt</span><span class="pro_per red">-0.11%</span></p>
					<p>
						<span class="bid">Bid</span><span class="biddata green">1.11595</span>
						<span class="ask">Ask</span><span class="biddata green">1.11612</span>
					</p>
				</div>
			</div>
			<div class="item">
				<div>
					<p><span class="pro_name">#Apple</span><span class="pro_per red">-0.11%</span></p>
					<p>
						<span class="bid">Bid</span><span class="biddata green">1.11595</span>
						<span class="ask">Ask</span><span class="biddata green">1.11612</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="advanges" style="position: relative;">
	<div class="container">
		<h3 class="home_title wow fadeInDown"><span class="yellow">cidt global</span> trading advantages</h3>
		<div class="advg_list clearfix">
			<div class="item wow pulse">
				<span class="hw_bg"></span>
				<div class="advg_img">
					<img src="{{ asset($cdnPath.'/img/a.jpg') }}" alt="">
				</div>
				<p class="txt">5 Days and 24 Hours<br/>can be Trading</p>
			</div>
			<div class="item wow pulse">
				<span class="hw_bg"></span>
				<div class="advg_img">
					<img src="{{ asset($cdnPath.'/img/a1.jpg') }}" alt="">
				</div>
				<p class="txt">Buying and Selling<br/>All can<br/>Make a Profit</p>
			</div>
			<div class="item wow pulse">
				<span class="hw_bg"></span>
				<div class="advg_img">
					<img src="{{ asset($cdnPath.'/img/a2.jpg') }}" alt="" >
				</div>
				<p class="txt">There are Dozen<font color="#fff">s of</font><br/>Varieties of Fo<font color="#fff">reign</font><br/>Exchange Tran<font color="#fff">sactions</font></p>
			</div>
			<div class="item wow pulse">
				<span class="hw_bg"></span>
				<div class="advg_img">
					<img src="{{ asset($cdnPath.'/img/a3.jpg') }}" alt="" >
				</div>
				<p class="txt">99.9% of orders<br/>executed within 50ms</p>
			</div>
			<div class="item wow pulse">
				<span class="hw_bg"></span>
				<div class="advg_img">
					<img src="{{ asset($cdnPath.'/img/a4.jpg') }}" alt="" >
				</div>
				<p class="txt">Low spreads and<br/>competitive pricing</p>
			</div>
			<div class="item wow pulse">
				<span class="hw_bg"></span>
				<div class="advg_img">
					<img src="{{ asset($cdnPath.'/img/a5.jpg') }}" alt="" >
				</div>
				<p class="txt">Steady and Reliable <br/>Company Team</p>
			</div>
			<div class="item wow pulse">
				<span class="hw_bg"></span>
				<div class="advg_img">
					<img src="{{ asset($cdnPath.'/img/a6.jpg') }}" alt="" >
				</div>
				<p class="txt">Freedom of funds <br/>payment security<br/>is guaranteed</p>
			</div>
		</div>
	</div>
</div>
<div class="cid_intro">
	<img src="{{ asset($cdnPath.'/img/cid_logo.png') }}" alt="" class="cid_logo wow fadeInDown">
	<p class="wow fadeInDown" data-wow-delay="0.5s" data-wow-duration="1.2s">CIDT Global Investment Group since its establishment<br/>we have focused on providing professional, stable, standardized and multi transaction electronic trading platform for global investors<br/>Now operated by a senior financial team<br/>the company continues to provide customers with the tools and services they need to meet the needs of customers in the global marketplace</p>
	<a href="{{ url('/account/trading') }}" target="_blank" class="btn btn_r wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="1s">Start Trading Now</a>
</div>
<div class="advanges step">
	<div class="container">
		<h3 class="home_title wow fadeInDown" data-wow-delay="0.5s" data-wow-duration="1.2s">start trading with cidt in <span class="yellow">4 steps</span></h3>
		<div class="step_list clearfix">
			<div class="item wow fadeInDown" data-wow-delay="0.7s">
				<img src="{{ asset($cdnPath.'/img/step_img1.png') }}" alt="">
				<span class="yellow">1. Register</span>
				<p>Open Your Live Trading Account<br/>Via CIDT Direct</p>
			</div>
			<div class="item wow fadeInDown" data-wow-delay="0.9s">
				<img src="{{ asset($cdnPath.'/img/step_img2.png') }}" alt="">
				<span class="yellow">2. Verify</span>
				<p>Upload Your Documents to<br/>Verify Your Account</p>
			</div>
			<div class="item wow fadeInDown" data-wow-delay="1.1s">
				<img src="{{ asset($cdnPath.'/img/step_img3.png') }}" alt="">
				<span class="yellow">3. Fund</span>
				<p>Login to CIDT Direct and Deposit Funds<br/>into Your Account</p>
			</div>
			<div class="item wow fadeInDown" data-wow-delay="1.3s">
				<img src="{{ asset($cdnPath.'/img/step_img4.png') }}" alt="">
				<span class="yellow">4. Trade</span>
				<p>Start Trading, and Choose<br/>From 50+ Instruments</p>
			</div>
		</div>
		<a href="{{ url('/account/trading') }}" target="_blank" class="btn red wow fadeInUp" data-wow-delay="1.2s">Get Started</a>
	</div>
</div>
<div class="home_mt4">
	<div class="container">
		<h3 class="home_title wow fadeInDown">cidt trading platforms — <span class="yellow">mt4</span></h3>
		<div class="clearfix">
			<div class="plat_l">
				<p class="txt wow fadeInLeft" data-wow-delay="0.15s"><span class="yellow">MetaQuotes</span> is a professional trading platform developer with more than 10 years' experience<br/>and its clients are all over the world using their trading platform. <br/>Our company launched a trading platform with MetaQuotes.</p>
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
				<a href="{{ url('/account/trading') }}" target="_blank" class="btn btn_r wow slideInLeft">Start Trading Now</a>
				<h3 class="h_h3 wow slideInLeft"><i class="icon"></i>MT4 Download</h3>
				<div class="download clearfix">
					<a href="javascript:;" class="wow fadeInUpBig" data-wow-delay="0.25s"><i class="wins"></i>Windows</a>
					<a href="javascript:;" class="wow fadeInUpBig" data-wow-delay="0.5s"><i class="os"></i>Mac OS</a>
					<a href="javascript:;" class="wow fadeInUpBig" data-wow-delay="0.75s"><i class="andr"></i>Android</a>
					<a href="javascript:;" class="wow fadeInUpBig" data-wow-delay="1s"><i class="app"></i>Apple</a>
				</div>
			</div>
			<div class="pc">
				<img src="{{ asset($cdnPath.'/img/pc-phone.png') }}" alt="" class="pc_phone wow fadeInRight" data-wow-duration="1.5s" data-wow-offsetRight="500">
			</div>
		</div>
	</div>
</div>
<div class="f_help">
	<div class="container">
		<h3 class="home_title wow fadeInDown">cidt global<br/><span class="s_tit">wholeheartedly provide you with the best service</span></h3>
		<div class="f_list clearfix">
			<div class="item wow fadeInDown" data-wow-delay="0.2s">
				<i class="about"></i>
				<dl>
					<dt>About Us</dt>
					<dd>Adhere to<br/>"Honesty, Credibility First"<br/>Principle</dd>
				</dl>
				<a href="#" class="btn readmore">Read More</a>
			</div>
			<div class="item wow fadeInDown" data-wow-delay="0.4s">
				<i class="service24"></i>
				<dl>
					<dt>24/5 Customer Support</dt>
					<dd>Our Dedicated Team of<br/>Customer Support Agents<br/> is on Hand to Provide You with Support.</dd>
				</dl>
				<a href="#" class="btn readmore">Read More</a>
			</div>
			<div class="item wow fadeInDown" data-wow-delay="0.6s">
				<i class="coor"></i>
				<dl>
					<dt>Help Center</dt>
					<dd>For account registration, capital injection, <br/>withdrawals and other questions,<br/> you can view the help center</dd>
				</dl>
				<a href="#" class="btn readmore">Read More</a>
			</div>
		</div>
	</div>
</div>
<!--footer-->
@component('home.footer')
@endcomponent
<script src="{{ asset($cdnPath.'/js/wow.min.js') }}"></script>
@endsection