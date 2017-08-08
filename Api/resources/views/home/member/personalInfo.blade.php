@extends('home.app')

@section('content-container')
@component('home.header')
@slot('index')
    2
@endslot
@endcomponent
<div class="cntbox per_info">
	<div class="container">
		<div class="clearfix">
			<div class="tbox">
				<h3 class="ptit yellow">customer center<br/>
					<a href="personal_info.php" target="_blank" class="link">Personal Data</a>
					<a href="online_deposit.php" target="_blank" class="link">Online Deposit</a>
					<a href="injection.php" target="_blank" class="link">Bank Injection</a>
					<a href="withdrawal.php" target="_blank" class="link">Account withdrawal</a>
				</h3>
			</div>
			<img src="{{ asset($cdnPath.'/img/per_info.jpg') }}" alt="" class="tr_img">
		</div>
	</div>
</div>
<div class="accounts_body aboutus clearfix">
	<div class="container">
		<div class="location">
			<i class="icon"></i>Location： <a href="index.php" class="link">Home</a> > Customer Center > Personal Information
		</div>
		<div class="navbox">
			<!--左侧导航-->
			@component('home.member.sidebar')
			@slot('index')
			    1
			@endslot
			@endcomponent
			<div class="rgtcon">
				<!-- 基本信息 -->
				<div class="this_tit book yellow"><i class="icon"></i>Basic Information</div>
				<div class="personal_info">
					<div class="comfirm_info clearfix">
						<div class="infomation">
							<ul>
								<li>
									<div class="tr">Name : XiaoMing Zhang</div>
								</li>
								<li>
									<div class="td">Mobile : +86 138 888 8888</div>
									<div class="td">E-mail : XiaoMing Zhang@gmail.com</div>
								</li>
								<li>
									<div class="td">Type of Certificate : ID card</div>
									<div class="td">Document number : 888 8888 8888 8888 888</div>
								</li>
							</ul>
						</div>
					</div>
					<table>
						<thead>
							<th>Account Number</th>
							<th>Account Type</th>
							<th>Account Status</th>
							<th>Account Balance</th>
							<th>Operate</th>
						</thead>
						<tbody>
							<tr>
								<td>8888888</td>
								<td>Mini Account</td>
								<td>
									<!--不可用状态时添加disabled类-->
									<span class="status">Enabled</span>
								</td>
								<td>
									<strong class="sum yellow">$ 8888.88</strong>
									<a href="online_deposit.php" class="btn bg">Deposit</a>
									<a href="#" class="btn">Withdrawals</a>
								</td>
								<td><a href="trading_accounts.php" class="btn bg" target="_blank">New Account</a></td>
							</tr>
						</tbody>
					</table>
					<!-- 银行信息 -->
					<div class="this_tit bank yellow"><i class="icon"></i>Bank Information</div>
					<div class="comfirm_info clearfix">
						<div class="infomation">
							<ul>
								<li>
									<div class="td">Account holder name : XiaoMing Zhang</div>
									<div class="td">Bank name : ICBC</div>
								</li>
								<li>
									<div class="td">Bank Account : 6212****330</div>
									<div class="td">Account Type : Debit Card</div>
								</li>
								<li>
									<div class="td">Currency : RMB</div>
									<div class="td">Swift Code : ICBKCNBJAHI</div>
								</li>
								<li>
									<div class="td">Bank country : China</div>
									<div class="td">Bank Address : China 's Guangdong Province, Tianhe District, Guangzhou City Tianhe Road 102</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="contactbox">
						<p>To change the bank information, please contact customer service</p>
						<a class="btn bg">Contact Us</a>
					</div>
					<!-- 上传数据 -->
					<div class="this_tit upload yellow"><i class="icon"></i>Data Upload</div>
					<form class="upload_form">
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
									<input type="file" name="file" id="upload_img_1">Upload
								</a>
							</div>
							<div class="item">
								<span class="cart_tit">Bank Card Positive</span>
								<img src="{{ asset($cdnPath.'/img/identi_back2.png') }}" alt="" class="cart_bg" id="showPic_2">
								<a href="javascript:;" class="btn sbtn bg">
									<input type="file" name="file" id="upload_img_2">Upload
								</a>
							</div>
						</div>
						<p>Please upload your ID card positive and negative photos,each picture should be no more than 2m your information will be sent to the company compliance department to establish a database</p>	
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<!--footer-->
@component('home.footer')
@endcomponent
<script src="{{ asset($cdnPath.'/js/uploadPreview.js') }}" type="text/javascript"></script>
@endsection
<!--图片上传-->
