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
			<i class="icon"></i>Location： <a href="index.php" class="link">Home</a> > Customer Center > Bank Injection
		</div>
		<div class="navbox">
			<!--左侧导航-->
			@component('home.member.sidebar')
			@slot('index')
			    3
			@endslot
			@endcomponent
			<div class="rgtcon">
				<div class="this_tit ij yellow"><i class="icon"></i>Bank Injection</div>
				<div class="attention">
					<h3 class="red">Tips:</h3>
					<p>Remittance notice is as a customer through the remittance method after the deposit, the corresponding deposit receipt issued to the Division I, and notify me of the Secretary for processing.</p>
				</div>
				<form class="personal_info">
					<div class="comfirm_info">
						<div class="infomation">
							<ul>
								<li>
									<div class="td">Account Number : 91000244</div>
									<div class="td"><span>Account Status:</span> <span class="green">Enabled</span></div>
								</li>
								<li>
									<div class="td">Account currency : USD</div>
								</li>
								<li>
									<div class="td">
										<span>Beneficiary Bank : </span>
										<div class="selectbox">
											<div class="thisVal"></div>
											<ul>
												<li>Bank Of China</li>
												<li>Bank Of USA</li>
												<li>Bank Of Frames</li>
											</ul>
										</div>
									</div>
								</li>
								<li>
									<div class="tr">
										<span>Receiving Bank Account Number :</span>
										<input type="text" name="bk_acct_num" class="input_p" style="width: 400px;" />
									</div>
								</li>
								<li>
									<div class="tr">
										<span>Remittance Currency :</span>
										<div class="selectbox">
											<div class="thisVal"></div>
											<ul>
												<li>USD</li>
												<li>CHF</li>
												<li>JPY</li>
											</ul>
										</div>
									</div>
								</li>
								<li>
									<div class="tr">
										<span>Remittance Amount :</span>
										<div class="datebox"></div>
									</div>
								</li>
								<li>
									<div class="tr">
										<span>Bank Slip :</span>
										<span class="filebox">
											<span class="tip upload-url"></span>
											<input type="button" class="btn sbtn bg" value="Upload" />
											<input type="file" class="upload_file" />
										</span>
									</div>
								</li>
								<li>
									<div class="tr">
										<span>Deposit bank :</span>
										<div class="selectbox">
											<div class="thisVal"></div>
											<ul>
												<li>Bank Of China</li>
												<li>Bank Of USA</li>
												<li>Bank Of Frames</li>
											</ul>
										</div>
									</div>
								</li>
								<li>
									<div class="tr">
										<span>Remarks :</span><br/>
										<textarea name="remarks" class="rk"></textarea>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="btn_group">
						<input type="submit" class="btn sbtn disabled" value="Submit" disabled>
						<input type="reset" class="btn sbtn" value="Reset">
					</div>
				</form>
				<div class="congratulate">
					<img src="{{ asset($cdnPath.'/img/correct.png') }}" alt="">
					<p>Congratulations<br/>your operation is successful</p>
					<a href="index.php" class="btn sbtn bg">Home</a>
					<a href="javascript:;" class="btn sbtn bg carry">Carry On</a>
				</div>
				<div class="this_tit book yellow"><i class="icon"></i>Deposit Method</div>
				<div class="stepbox">
					<div class="step_tit"><i class="icon"></i><span class="yellow">01</span></div>
					<p class="step_des">The customer sends the bank account to ICDT through the bank in the area</p>
					<div class="area">
						<div class="icbc">
							<a><img src="{{ asset($cdnPath.'/img/icbc.png') }}" alt=""></a>
						</div>
						<div class="bank_msg">
							<p></p>
							<p>Payee Name : XiaoMing Zhang</p>
							<p>Account number : 888 8888 8888 888</p>
							<p>Beneficiary Bank : Bank of China</p>
							<p>SWIFT Number : BKCH CN BJ 660</p>
							<p>Branch address : China 's Guangdong Province, Yuexiu District, Guangzhou City, Guangdong Province, 488, Datong Commercial Building, South Block, 1st Floor</p>
						</div>
					</div>
					<div class="step_tit"><i class="icon"></i><span class="yellow">02</span></div>
					<p class="step_des">Please clear the customer name and account password in the document, and "online customer service", "e-mail" to send the remittance documents to the Company.</p>
					<div class="step2 clearfix">
						<div class="item">
							<div>
								<span class="lft_icon"></span>
								<p class="yellow" style="padding-top: 10px;">Online Service</p>
								<a class="c_btn">Contact</a>
							</div>
						</div>
						<div class="item">
							<div>
								<span class="lft_icon em"></span>
								<p class="yellow">E-mail Adress</p>
								<p>cs@24.hk</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div id="shadow" class="online_deposit inject">
	<div class="correctbox">
		<span class="corr_bg"></span>
		<p>Remittance information submitted to success<br>if in doubt please contact online customer service</p>
		<a href="javascript:;" class="btn sbtn bg">Determine</a>
	</div>
</div>
<!--footer-->
@component('home.footer')
@endcomponent
<script>
var datetime = new DateTime();	//日期下拉对象
datetime.init();	//调用init方法初始化
</script>
@endsection