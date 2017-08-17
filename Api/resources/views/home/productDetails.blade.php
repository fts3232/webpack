@extends('home.app')

@section('content-container')
@component('home.header')
@slot('index')
    4
@endslot
@slot('isLogin')
    {{ $isLogin }}
@endslot
@endcomponent
<div class="home_mt4">
	<div class="container">
		<h3 class="home_title">about<span class="yellow"> forex</span></h3>
		<div class="clearfix">
			<div class="plat_l about_txt">
				<p class="txt"><strong class="yellow">Forex</strong> refers to the buying and selling of money, and it is one of the fastest growing markets in the world. <br/>Foreign exchange trading is very similar to stock trading; you buy low and sell high. <br/>You can easily buy and sell foreign currencies online on Friday, 24 hours a day. In addition, you can buy and sell at any time during the bull market and bear market. <br/>We offer smaller spreads for all major currencies and a variety of secondary currencies.<br/><br/><span class="red">Forex trading times :  24 hours per day, starting at 10:00 PM Sunday and closing at 10:00 PM Friday (UK time).</span></p>
			</div>
			<img src="{{ asset($cdnPath.'/img/forex.jpg') }}" alt="" class="forex_img">
		</div>
	</div>
</div>
<div class="pro_details">
	<div class="container">
		<div class="pro_txt">
			<h3 class="home_title">Forex Trading Products</h3>
			<p class="text-center">CIDT offers the hottest currency pairs for trading.<br/>The first currency in the currency pair is called the base currency, and the second is called the relative currency".<br/>When you buy or sell a currency, you take action with the underlying currency.</p>
			<div class="group_btn">
				<a href="{{ route('demoAccount') }}" class="btn"><i class="icon"></i>Open Demo Account</a>
				<a href="{{ route('liveAccount') }}" class="btn"><i class="icon"></i>Create Live Account</a>
			</div>
		</div>
		<div class="foreign_pro">
			<div class="div900">
				<div>
					<span class="lft">Foreign Exchange Products</span>
					<div class="searchbox">
						<input type="text" value="">
						<i class="clearText"></i>
					</div>
				</div>
				<div class="table">
					<table>
						<thead>
							<tr>
								<th rowspan="2" style="width: 240px">Forex Currency Pair</th>
								<th colspan="2" style="width: 120px">Swap Value in Points</th>
								<th rowspan="2" style="width: 160px">PIPS</th>
								<th rowspan="2" style="width: 160px">fx margin</th>
							</tr>
							<tr>
								<th rowspan="1" colspan="1" style="border-top: 1px solid #ccc">Long</th>
								<th rowspan="1" colspan="1" style="border-top: 1px solid #ccc">Short</th>
							</tr>
						</thead>
						<tbody>
							<tr key="USDCHF">
								<td>USDCHF</td>
								<td>2.52</td>
								<td>- 8.06</td>
								<td>1.6</td>
								<td>$ 3.25</td>
							</tr>
							<tr key="USDJPY*">
								<td>USDJPY*</td>
								<td>2.52</td>
								<td>- 8.06</td>
								<td>1.6</td>
								<td>$ 2.25</td>
							</tr>
							<tr key="GBPCHF">
								<td>GBPCHF</td>
								<td>2.52</td>
								<td>- 8.06</td>
								<td>1.6</td>
								<td>$ 1.25</td>
							</tr>
							<tr key="USDJPY*">
								<td>USDJPY*</td>
								<td>2.52</td>
								<td>- 8.06</td>
								<td>1.6</td>
								<td>$ 2.25</td>
							</tr>
							<tr key="USDCHF">
								<td>USDCHF</td>
								<td>2.52</td>
								<td>- 8.06</td>
								<td>1.6</td>
								<td>$ 3.05</td>
							</tr>
							<tr key="USDJPY*">
								<td>USDJPY*</td>
								<td>2.52</td>
								<td>- 8.06</td>
								<td>1.6</td>
								<td>$ 2.50</td>
							</tr>
							<tr key="GBPCHF">
								<td>GBPCHF</td>
								<td>0.17</td>
								<td>- 8.06</td>
								<td>1.6</td>
								<td>$ 3.50</td>
							</tr>
							<tr key="USDJPY*">
								<td>USDJPY*</td>
								<td>0.17</td>
								<td>- 8.06</td>
								<td>1.6</td>
								<td>$ 3.50</td>
							</tr>
							<tr key="ABCDSFD">
								<td>ABCDSFD</td>
								<td>3.16</td>
								<td>2.22</td>
								<td>4.8</td>
								<td>$ 0.26</td>
							</tr>
							<tr key="GDXSDDS">
								<td>GDXSDDS</td>
								<td>6.66</td>
								<td>6.21</td>
								<td>0.15</td>
								<td>$ 3.6</td>
							</tr>
						</tbody>
					</table>
					<div class="nothing" style="display: none">No search results</div>
					<a class="more">More</a>
				</div>
			</div>
		</div>
		<div class="div900">
				<h3 class="pro_tit yellow">Margin :</h3>
				<p class="pro_intro">The margin requirement is calculated in the settlement currency of each transaction account.</p>

				<h3 class="pro_tit yellow">PIPS :</h3>
				<p class="pro_intro">The transaction cost is the buying and selling price difference between the buying price and the selling price, which is displayed above your trading screen. For example, if the selling price of the euro against the dollar is 1.08883, and the buying price is 1.08895, the difference (1.2) is the buying and selling price difference.</p>

				<h3 class="pro_tit yellow">Leverage :</h3>
				<p class="pro_intro">Leverage has both advantages and disadvantages. It can greatly increase your profits and expand your losses considerably. Using any level of leverage for foreign exchange trading may not be appropriate for all investors.</p>

				<h3 class="pro_tit yellow">Risk warning :</h3>
				<p class="pro_intro">The company's services include products sold on margin. The risk of collateral loss is greater than that of your funds. It may not be suitable for all investors. Please ensure that you fully understand the risks involved.</p>
		</div>
	</div>
</div>
<!--footer-->
@component('home.footer')
@endcomponent
@endsection