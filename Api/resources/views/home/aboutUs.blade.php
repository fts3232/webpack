@extends('home.app')

@section('content-container')
@component('home.header')
@slot('index')
    5
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
<div class="aboutus">
	<div class="container">
		<h3 class="home_title wow fadeInDown">about us</h3>
		<p class="text-indent wow fadeInDown"><strong class="yellow">CIDT GLOBAL</strong> is committed to providing customers with a wide range of financial services. Since its establishment, the company has focused on providing professional, standard and diversified electronic trading platform for global inve</p>
		<br/>
		<br/>
		<p class="text-indent wow fadeInDown">The company is operated by experienced financial team, and actively explore the international market. By virtue of good faith and professional innovation, we have won the trust and support of our clients.</p>
		<br/>
		<br/>
		<p class="text-indent wow fadeInDown">CIDT GLOBAL professional, dedicated and attentive, and strive to create a more honest, high-quality and more efficient trading platform for our customers.</p>
	</div>
</div>
<div class="home_mt4 trading">
	<div class="container">
		<h3 class="home_title wow fadeInDown">trading <span class="yellow">advantage</span></h3>
		<div class="common_list clearfix">
			<div class="item wow zoomIn">
				<img src="{{ asset($cdnPath.'/img/trading1.png') }}" alt="">
				<span class="name">Authority Certification</span>
			</div>
			<div class="item wow zoomIn">
				<img src="{{ asset($cdnPath.'/img/trading2.png') }}" alt="">
				<span class="name">Very Low Cost</span>
			</div>
			<div class="item wow zoomIn">
				<img src="{{ asset($cdnPath.'/img/trading3.png') }}" alt="">
				<span class="name">Capital Security</span>
			</div>
			<div class="item wow zoomIn">
				<img src="{{ asset($cdnPath.'/img/trading4.png') }}" alt="">
				<span class="name">High-Speed Access</span>
			</div>
			<div class="item wow zoomIn">
				<img src="{{ asset($cdnPath.'/img/trading4.png') }}" alt="">
				<span class="name">Expert Team</span>
			</div>
			<div class="item wow zoomIn">
				<img src="{{ asset($cdnPath.'/img/trading6.png') }}" alt="">
				<span class="name">Product diversification</span>
			</div>
		</div>
	</div>
</div>
<!--contactus-->
<div class="contactus">
	<div class="container">
		<h3 class="home_title wow fadeInDown">contact us</h3>
		<div class="common_list clearfix">
			<div class="item wow bounceInLeft">
				<img src="{{ asset($cdnPath.'img/service24.png') }}" alt="">
				<dl>
					<dt>24 Hours<br/>Customer Service Hotline</dt>
					<dd>852-8205-6188</dd>
				</dl>
			</div>
			<div class="item wow fadeInDown">
				<img src="{{ asset($cdnPath.'img/fax.png') }}" alt="">
				<dl>
					<dt>Fax</dt>
					<dd>852-8343-2180</dd>
				</dl>
			</div>
			<div class="item wow fadeInDown">
				<img src="{{ asset($cdnPath.'img/email.png') }}" alt="">
				<dl>
					<dt>Mailbox</dt>
					<dd>cs@202.hk</dd>
				</dl>
			</div>
			<div class="item wow bounceInRight">
				<img src="{{ asset($cdnPath.'img/location.png') }}" alt="">
				<dl>
					<dt>Address</dt>
					<dd>1 / F, Fu Wei Financial Center,<br/>308 Des Voeux Road Central,<br/>Hong Kong</dd>
				</dl>
			</div>
		</div>
	</div>
</div>
@component('home.footer')
@endcomponent
<script src="{{ asset($cdnPath.'/js/wow.min.js') }}"></script>
<!--footer-->
@endsection