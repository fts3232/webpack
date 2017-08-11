@extends('home.app')

@section('content-container')
@component('home.header')
@slot('index')
    3
@endslot
@slot('isLogin')
    {{ $isLogin }}
@endslot
@endcomponent
@component('home.account.banner')
@slot('cdnPath')
    {{ $cdnPath }}
@endslot
@endcomponent
<div class="accounts_body aboutus clearfix">
	<div class="container">
		<div class="location">
			<i class="icon"></i>Location： <a href="{{ url('/') }}" class="link">Home</a> > Online Trading > Trading Accounts
		</div>
		<div class="navbox">
			<!--左侧导航-->
			@component('home.account.sidebar')
			@slot('index')
			    1
			@endslot
			@endcomponent
			<div class="rgtcon">
				<div class="this_tit tr yellow"><i class="icon"></i>Trading Accounts</div>
				<div class="operate_step clearfix">
					<div class="curr">Accounts Information</div>
					<div>Bank card information</div>
					<div>Confirmed</div>
					<div>Create Success</div>
				</div>
				<div class="content">
					<form class="accounts_form trad_form">
					    {{ csrf_field() }}
						<div class="stepcnt" style="display: block;">
							<p class="listname">Trading Platform :</p>
							<div class="selectbox">
								<div class="thisVal"></div>
								<ul>
									<li>MT4</li>
									<li>FX Trader</li>
								</ul>
								<input type="hidden" name="platform" />
							</div>

							<div style="clear: both;"></div>
							<p class="listname">Account Type :</p>
							<div class="selectbox">
								<div class="thisVal"></div>
								<ul>
									<li>standard accounts</li>
									<li>demo accounts</li>
								</ul>
								<input type="hidden" name="account_type" />
							</div>

							<div style="clear: both;"></div>
							<p class="listname">Account Currency :</p>
							<div class="selectbox">
								<div class="thisVal"></div>
								<ul>
									<li>USD</li>
									<li>CHF</li>
								</ul>
								<input type="hidden" name="account_currency" />
							</div>

							<div style="clear: both;"></div>
							<p class="listname">Your Name :</p>
							<input type="text" name="name" class="input_p" />
							<span class="tip">To ensure the safety of your funds, please fill in the same name on the document</span>

							<div style="clear: both;"></div>
							<p class="listname">Type of Certificate :</p>
							<div class="selectbox">
								<div class="thisVal"></div>
								<ul>
									<li>ID Cart</li>
									<li>Number 1</li>
									<li>Number 2</li>
								</ul>
								<input type="hidden" name="certificate_type" />
							</div>

							<div style="clear: both;"></div>
							<p class="listname">Document Number :</p>
							<input type="text" name="document_number" class="input_p" />
							<span class="tip">Please fill in the correct document number</span>
							
							<!--日期-->
							<div style="clear: both;"></div>
							<p class="listname">Date Of Birth :</p>
							<div class="datebox">
							    <input type="hidden" name="birthday" />
								<input type="hidden" name="month" />
								<input type="hidden" name="day" />
								<input type="hidden" name="year" />
							</div>

				
							<div style="clear: both;"></div>
							<p class="listname">Resident Address :</p>
							<input type="text" name="resid_addr" class="input_p" style="width: 660px;" />
                            <span class="tip"></span>
							<div style="clear: both;"></div>
							<p class="listname">Cellphone Number :</p>
							<input type="text" name="mobile" class="input_p" />
							<span class="tip">Please fill in the correct phone number, Important information </span>

							<div style="clear: both;"></div>
							<p class="listname">E-mail Address :</p>
							<input type="text" name="email" class="input_p" />
							<span class="tip">Please fill in the correct E-mail address <i class="icon"></i></span>


							<div style="clear: both;"></div>
							<p class="listname">PIN :</p>
							<div class="codebox">
								<input type="text" name="verficode" class="input_p" />
								<i></i>
							</div>
							<img src="{{captcha_src()}}" class="code red ref_code"/>
							<span class="tip"><i class="icon refresh ref_code"></i></span>
							
							<div style="clear: both;"></div>
							<input type="button" class="submit nextStep btn disabled" value="Complete the information" disabled />

							<div style="clear: both;"></div>
							<div class="agree_check clearfix" onselectstart="return false;">
								<div>
									<input type="checkbox" id="checkbox" class="checkbox">
									<label for="checkbox" class="ckbox">
										<i class="icon"></i>
										<span>Agree</span>
									</label>
									<a href="#" class="agreelink yellow" target="_blank">《Customer Agreement》</a>
								</div>
								<div>
									<input type="checkbox" id="checkbox" class="checkbox">
									<label for="checkbox" class="ckbox">
										<i class="icon"></i>
										<span>Agree</span>
									</label>
									<a href="#" class="agreelink yellow" target="_blank">《Risk Disclosure Statement》</a> and <a href="#" class="agreelink yellow" target="_blank">《Disclaimer Agreement》</a>
								</div>
							</div>

							<div class="customer_notice">
								<h3 class="yellow">Customer notice</h3>
								<div class="cnt">
									<p class="content_box">This agreement is legally binding. Please review it carefully.<br/>
This is a legal contract by CIDT GLobal Financial Limited (hereinafter referred to as the "CIDT Global"); founded under the law limited, its successors and assigns, jointly signed with this document contract (hereinafter referred to as the "customer").<br/>
About CIDT Global to open an account in the OTC market through the precious metal OTC engaged in speculation and or buy or sell goods, and precious metals (under the name "OTCGOLD"), the customer to confirm the understanding of the following factors concerning trading in leveraged OTCGOLD, and to provide customers with the risk disclosure statement.<br/>1. OTCGOLD transactions are only suitable for professional institutions or persons whose financial resources can afford to exceed the value of margin or deposit values.<br/>
2. OTCGOLD's business is not on an organized market, so there is no need to make an outcry. Although many computer based systems offer bids and actual prices, these two may differ because of market liquidity. Many electronic trading facilities are supported by computer based systems for trading, ordering, executing, and matching. Like all facilities and systems, they are vulnerable to temporary failures. The ability of the customer to recover certain losses may be limited by the limits of liability set by the system provider, the market bank and / or the financial institution. These limits may not be the same.<br/>
3. in the OTCGOLD market, the company is not only trading over-the-counter. CIDT Global, a company that deals with clients, may be an opponent of customer transactions. It is possible (in this case) to open a position, assess the value, determine the fair value, or assess the risk of exposure will be difficult or impossible. For these reasons, such transactions may involve greater risks. OTC trading may be less regulated or subject to a different regulatory regime. Before starting the transaction, the customer should understand the applicable regulations and the accompanying risks.<br/>
4.no one can guarantee the credibility of customers' counterparties. CIDT Global will do its best to deal only with reputable institutions and clearing houses. In addition, it is possible that a decrease in transaction liquidity results in the cessation of precious metal trading, thereby impeding the position of the Ping Qing position, which can result in considerable financial losses.<br/>
5. customers to confirm the purchase or sell precious metals including delivery, each spot transaction is credited to the customer's account.<br/>
6. the margin policy of the CIDT Global, and the policy of the agency / clearing house where the transaction is executed may require additional funding from the customer to maintain its margin account, and the customer is obligated to meet such margin requirements. Otherwise, it will result in liquidation of the position and corresponding losses. CIDT Global also reserves the right to refuse an order or to provide market hedging.<br/>
7. transactions in an electronic trading system may not only differ from the interbank market, but also differ from transactions in other electronic systems. If clients engage in transactions in an electronic marketplace, the customer will face risks associated with the system, including hardware and software failures. System failures may result in customer orders difficult to execute or cannot execute in accordance with customer instructions.<br/>
<br/>
<br/>Exemption clause:<br/>
(a) Internet failures: because CIDT Global does not control signal, signal receiving and through the Internet router, reliability of structure or connection of customer equipment, communication failure of CIDT Global is not the Internet transaction, distortion or delay in charge.<br/>
(b) market risk and online trading:<br/>
Precious metal deals involve considerable risks and are not suitable for everyone. Please refer to the customer's agreement for details of the risks. No matter how convenient or efficient online transactions are, it does not reduce the risk of precious metal transactions.<br/>
(c) password protection:<br/>The client must keep the passwords secret and ensure that the third cannot access the transaction facilities. The customer agrees to send via e-mail to all instructions and all via email, oral or written instructions issued to CIDT Global is responsible for, even if it is issued by the third party, and these instructions have been customer account number and password authentication, according to CIDT Global's judgment is believed to be the authorized customer surface. CIDT Global is not responsible for further enquiries on this surface authority nor is it responsible for the actions taken or the consequences of not taking action based on these instructions or surface rights.<br/>(d) error in quotation:<br/>
CIDT Global will not be responsible for the account balance error caused by this error when some quotation or transaction error occurs. These errors include but not limited to: traders, non price quotation errors of international market price, or any price error (for example: hardware, software, or network or wrong information provided by third). CIDT Global does not need to be responsible for account balances caused by errors. Pre order is required<br/>
Leave enough time to execute the required margin for the order and system calculation. If the order execution price or order setting is too close to the market, it may trigger other orders (either type of order) or issue margin tips. CIDT Global is not responsible for margin reminders, account balances or account positions generated by the system because it does not have sufficient time to execute orders or operations. The above shall be taken as the content, once the offer or execution error, CIDT Global reserved for any corrections or adjustments to the authority, any dispute about quoting errors only by CIDT Global independently decided to solve. In the event of any loss, damage or liability, the customer agrees to indemnify CIDT Global for damage.<br/>
(e) arbitrage:<br/>
Errors in the Internet, network delays and quotations can sometimes result in quotations on the CIDT Global trading platform that do not accurately reflect real-time market prices. "Arbitrage" and "come", or because of network connection delays using difference profit behavior, does not exist the OTC market to customers directly to the dealer to buy or sell. CIDT Global does not allow customers to make such Arbitrage Behavior in the company's trading platform. Rely on price latency arbitrage opportunities of the transaction may be revoked. CIDT Global reserves the right to make necessary modifications and adjustments to the accounts relating to the above transactions. CIDT Global may, at its discretion, require the dealer to intervene or approve all orders and / or terminate the account of the customer. CIDT Global can be completely independent solution due to arbitrage or price manipulation disputes. CIDT Global reserves the right to withhold withdrawals until the above problems can be resolved. Any action or resolution in this statement shall not prejudice or cause any waiver of power or compensation by CIDT Global to the customer or its personnel.<br/>
(f) price, order execution and platform manipulation:<br/>
CIDT Global is strictly prohibited in any form to control its price, execution and platform. If CIDT Global suspects that any account is engaged in the manipulation, CIDT Global reserves the right to investigate and review the account and deduct the proceeds from the relevant activities from the alleged account. CIDT Global reserves the right to make necessary corrections or adjustments to the relevant accounts. For accounts suspected of operating, CIDT Global may, at its discretion, require traders to intervene, to approve an order, or to terminate an account with a customer. For any dispute and arbitrage or manipulation produced by CIDT Global, completely independent decision. CIDT Global may, as appropriate, report the matter to any relevant regulatory authority or law enforcement agency. Any action or resolution stated herein does not exempt or impair the rights or compensation of CIDT Global to the customer and its personnel, all rights or compensation expressly reserved.<br/>(g) disclosure of bankruptcy:<br/>
The transactions customers do with CIDT Global are not conducted on exchanges. Once CIDT Global fails, the customer may recover the benefit of the money deposited or made in the transaction to the CIDT Global and may not receive priority.  Without priority, the customer is unsecured creditor and will compensate the other creditors after paying the priority claim.<br/>
8. if the customer trading authority or the account management to the third party (hereinafter referred to as "agent"), whether on a discretionary or non discretionary basis, CIDT Global will not make a choice for the customer or to make any recommendation.  CIDT Global is not the transaction broker makes no representations or warranties; responsible for the CIDT Global not because the transaction behavior of customer referral losses; CIDT Global does not make any reference transaction mode of operation of the hidden or direct support or approval. If the customer authorized customer references manage their account, the customer's own risk.<br/>
9. for customers has been or will be obtained from the introducer or any other non CIDT Global employees at the information or advice, CIDT Global does not control, does not support or guarantee the accuracy or completeness of the precious metals trading (see references disclosed). If introducer or any other third party to provide any information about the precious metals or advice to clients, CIDT Global will never customers due to the use of such information or advice from loss. The client understands that referring agent and the third party, including the sale of the trading system, course, research or recommendations may or may not be regulated by a government agency.<br/>
10. the client should fully comply with local legislation, including compliance with the area or any other jurisdiction shall comply with the procedures and obtain the consent of the government in the region or other aspects of the transaction, and because the use of this platform and the need to pay any local related taxes, tariffs and other amount. Transactions conducted by the customer on this platform will be deemed to be made by the customer to CIDT Global and be guaranteed to comply with local laws and regulations. If the customer has any doubt about the situation, please refer to the professional consultant.<br/>
11. all customers must realize that any return guarantee is illegal.  In addition, the CIDT Global is not responsible for any allegations or warranties made by any CIDT Global, its employees and / or associates, except for a written record.<br/>
<br/>
<br/>Referral disclosure<br/>
CIDT Global does not regulate the activities of human, any statement made no responsibility for the introducer. CIDT and Global are completely independent of the introducer. CIDT Global and introducer direct agreement does not establish a joint venture or partnership. Introducer is not an agent or employee of Global CIDT:<br/>1.the customer understands and agrees that if customers in the CIDT Global account is introduced by referring to references, customers can access the personal data and other related1.customer account transactions in CIDT Global data. The customer understands and agrees that if the customer in the CIDT Global account is recommended by the introducer to it will have the right to enter the introducer client's CIDT Global account, but shall not engage in transactions to customer referrals CIDT Global account, unless authorized by the authorized customer representative of the customer trading agreement introducer.<br/>
2. the customer understands and acknowledges that CIDT Global may pay for referrals referral customers, such compensation may be given in accordance with each transaction or other way. The compensation to the referring agent may require the customer to incur, namely a ratio of CIDT Global provides the normal price for high prices. In addition, the customer is entitled to receive the exact details of the payment.<br/>
3., because the risk factors for precious metals trading are high, only real "risk" funds can be used for such transactions.  Customers should not trade on the precious metals market if the customer has no surplus and the funds can be lost.<br/>
4. client understands that referring agent and many sale system, courses, programs, research or recommendations of the third are not regulated by a government agency.<br/>
5. if the previous customer informed or believe that the use of any third party trading system, course, program, or from the introducer or any other third party research or recommendations will bring trading profits, client hereby acknowledges, understands that all precious metals trading, including through the trading system, any of the third procedures, or by the introducer or any other third party research or recommendations for transactions involving a substantial risk of loss. In addition, the client hereby acknowledges, agrees and understands all precious metals transactions, including through any third party transactions, systems, courses, procedures,
Provide or from the introducer or any other third party research or recommendations of transactions does not necessarily bring about profit, avoid risk or risk limit.<br/>
6. if the introducer or any other third party to provide precious metals trading information or advice to clients, CIDT Global will not use the information or advice from the customer is responsible for the loss.<br/>
7. the Customer acknowledges that the CIDT, Global and any of its associated persons have not made any promises regarding the future profits and losses of the customer's account. Customers understand that precious metals trading is highly risky, and many investors lose money on trading in precious metals.<br/>
8. CIDT Global provides risk disclosure information to open an account in the new customer, the customer should read that information carefully, not on Lai any source of information contrary intention elsewhere. Customer transactions on this platform will be deemed to have read and understood the risk statements of CIDT Global.<br/>
9. for customers has been or will be from the introducer or any other non CIDT Global employees get information or advice, CIDT Global does not control, does not support or guarantee the accuracy or completeness of the precious metals trading.<br/>
10. CIDT Global is not responsible for the guarantee provided by the introducer or. The employee or agent is not CIDT Global references, so the customer's responsibility should be verified, a rigorous assessment of the introducer before share the service.<br/>

<br/>
<br/>Customer Agreement<br/>
CIDT Global agrees with the customer to open one or more accounts and may, through or through the customer's CIDT Global account, provide the customer about the sale of OTCGOLD (as defined in the above customer's account).<br/>
1. clauses and headings<br/>
The term "CIDT Global" includes CIDT Global Gold Limited, its branch, heir and assignor. "Customer" means the Party (or party) that makes the agreement. The term "agreement" includes any other agreements or authorization granted by all clients at any time to maintain their CIDT Global account. This agreement is for the convenience and the headings added. It does not restrict or influence the application and significance of paragraph provisions.<br/>
2. binding effect<br/>
This Agreement (including the risk disclosure statement, the customer notice, the customer account application and agreement) will continue to be valid, and covers all accounts of clients at any time to open or re open in CIDT Global, CIDT Global or any other heirs, the assignor or affiliates of the personnel changes. If the merger, merger or other changes, this Agreement (including any authorization) will adapt to CIDT Global or other heirs or transfer to the interests of the people, and to the customer and / or their heirs, principals, managers, legal representatives, successors and assigns a constraint force. The client hereby approves all transactions that have occurred with CIDT Global prior to the date of this Agreement and agrees that the rights or obligations of the customer in connection with this transaction shall be governed by the terms of this agreement.<br/>
3. acceptance of the agreement<br/>
This Agreement shall be deemed to have been accepted by CIDT Global or become a binding contract between the customer and the CIDT Global only when the CIDT Global is confirmed and approved.<br/>
4. trading authorization<br/>
CIDT Global can be carried out with the customer's part or all of the sales order and / or the market. CIDT Global is authorized to buy or sell OTCGOLD for client's account, such as bank, institution or senior participant, in accordance with customer's oral, written or computer instructions. Unless the customer makes a written objection, CIDT Global is authorized to execute all orders with the counterparties, such as the bank, financial institution or senior participant, considered by CIDT Global. CIDT Global has received from the client all right according to oral or written communication or instructions, including senior staff, partners, the statutory responsible customer (the authorized person), as long as the CIDT Global has not received notice of authorized person and not authorized. Customer authorization CIDT Global is based on and carries out any instructions, authority or information derived from the licensors. The resulting methods include sending or obtaining customer approved fax files electronically. Therefore, customer agrees:<br/>
(a) CIDT Global is authorized to execute instructions and does not need to consult the validity of the instructions concerned as a written instruction issued by the authorized person;<br/>
(b) in any case, the CIDT Global does not need to verify the validity of the instructions or the signature of any particular case;<br/>
(c) in the CIDT Global act in good faith and without negligence, the customer will be liable for all by any representative, employee, or agent of a risk unapproved indication, customers will be for any loss, damage, costs, fees, expenses, claims, litigation or claim responsibility, and ensure accountability or to ask for compensation CIDT Global, and CIDT Global will not cause the loss, including any relevant or practical action, since CIDT Global delayed action or refused to take action by the customer, any instruction or information provided to CIDT Global, issued by the customer including employees, agents or representatives of the improper, unauthorized or even if there is no indication indicating fraud, obtain customer authorization.<br/>
CIDT Global reserves the right to limit the total number of orders placed by the customer. CIDT Global reserves the right to limit the amount and / or total amount of positions acquired or held by a customer. CIDT Global will try to execute its order of acceptance in accordance with the instructions of the customer's computer or recording telephone. CIDT Global reserves the right to refuse any orders or to guarantee market hedging. However, the loss or damage of CIDT Global will not be responsible for any CIDT Global can not be directly or indirectly controlled by events, act or omission caused by this situation, including but not limited to any order due to transmission or communication facilities or fault information transmission delay or inaccurate loss or damage.<br/>
5.,the government of mobile phone and INTERBANKING system rules.<br/>
All transactions under this Agreement are subject to the jurisdiction of the execution of the transaction counterparty or other interbank market (and its liquidation organization, if applicable) of the Charter, rules, regulations, regulations, customs usage rules and interpretation, and implement all applicable laws. If any act by any rules by then, or any government agency, binding on the CIDT Global, or conflict to any provision of this agreement, the terms will be deemed to be affected by the relevant laws, regulations and other provisions of the modification or replacement, and after the change of the terms will continue to be fully effective. The Customer acknowledges that all transactions under this Agreement are subject to the foregoing regulatory requirements.<br/>
6. cross deal approval<br/>
The client hereby acknowledges and agrees that the following conditions may occur, which is associated with the CIDT Global of a sales staff, directors, affiliates, affiliates, employees, banks or bank employees, dealers and CIDT Global itself may be a customer account of counterparty broker or trustee. The client hereby agrees to the above transactions, the only limitation is related to the implementation of buy and sell orders, bank institutions, exchange or exchange commission any regulations or provisions, any restrictions and conditions or other regulatory agencies.<br/>
7. settlement of accounts and payment of arrears<br/>
In the event of the following circumstances:<br/>
(a) customer death or judicial inability to declare;<br/>
(b) the customer applies for bankruptcy, or chooses the trustee or the customer to undertake any bankruptcy or similar proceedings voluntarily or passively;<br/>
(c) seizure of any account held by the customer at CIDT Global;<br/>
(d) insufficient margin, or CIDT Global, determines that any collateral used to protect one or more accounts of the customer is not sufficient to guarantee the account, irrespective of the prevailing market price;<br/>
(e) the failure of the customer to provide any information requested under this agreement to CIDT Global; or<br/>(f) any situation or change in which any other CIDT Global shall take protective measures, and the CIDT Global has the full discretion to take one or more of the following actions;<br/>
(I) use CIDT Global to save or control money or property for the customer to compensate the customer for the debt directly or by providing security to the CIDT Global;<br/>
(II) buying and selling any precious metals positions held by the clients; and<br/>
(III) cancel any or all outstanding orders or any other commitments made in the name of the customer. Any of the above actions may not be conditional on the following:<br/>
The demand for margin or additional margin without prior notice of sale or purchase decided to inform the customer customer's personal representatives, heirs, the principal or the assignor, regardless of whether the ownership interest involves customers alone or jointly with others.<br/>
In the liquidation of customer's long or short positions in order to establish the CIDT Global judgment that is beneficial to protect or reduce existing positions spread or straddle. According to CIDT Global's judgment and discretion, trading behavior described here may be conducted by any bank or other regular business market, auction or private sale, CIDT Global can be purchased in whole or in part without any right of redemption. Upon request by the CIDT Global, the customer will be responsible for the account of the account at any time and shall be responsible for the remaining balance at any time when the account is liquidated by CIDT, Global or all or part of it. If the implementation according to the authorized positions does not have sufficient funds to pay the customer owed to CIDT Global's debt, the demand of customers will immediately pay the arrears, all outstanding debt, and the corresponding interest rate (calculated as follows: CIDT Global was mainly the bank lending rate plus 3% or the legal provisions of the highest rate selection the lower one), and all costs of collection, including attorney's fees, witness fees and travel expenses. If CIDT Global pays other fees in addition to the collection debt due to the customer's account, the customer agrees to pay for such fees. To avoid any doubt, CIDT Global can completely decide on the account of the merged customer and offset the debit balance between the accounts.<br/>
8. risk taking<br/>
The client undertakes to invest in leveraged or non leveraged transactions that are speculative and involve high risk and are only suitable for those who are able to bear the risk of loss of their margin deposits. Customers understand that due to the low margin required by the OTCGOLD transaction, the price change of OTCGOLD may cause considerable losses, which may exceed the customer's investment and margin deposits. The customer is willing and able to guarantee the risk in financial or other bear OTCGOLD transactions, because the client agrees not to follow the CIDT Global or its employees, agents or representatives make trading recommendations or suggestions, which hold the responsibility of the Global CIDT trading loss. Customers recognize that it is impossible to ensure the profitability or loss of OTCGOLD transactions. The Customer acknowledges that its not from CIDT Global, or any of its representatives, or outside the introducer, or other customers to deal with CIDT Global trading entity to get this type of guarantee, and not according to any of the above guarantee to conclude this agreement.<br/>
9. precious metals price fluctuation risk<br/>
If the customer instructs CIDT Global to sign an expensive metal transaction:<br/>
(a) any profit or loss arising from price changes will be entirely borne by the customer;<br/>(b) all initial or subsequent margin deposits will be denominated in Hong Kong dollars, subject to discretionary exercise by the CIDT Global;<br/>
(c) CIDT Global is authorized to use its discretionary price at the prevailing price of the precious metals market to change the funds of the customer's account into or replace the precious metal as an additional margin.<br/>
10., CIDT, Global's responsibility<br/>
CIDT Global will not be responsible for the delay in transmission of instructions due to transmission or communication facilities failures, power outages, or any other CIDT Global that cannot be controlled or anticipated. CIDT Global will be responsible solely for acts directly caused by CIDT Global's fault, intentional fault or fraud. Any references employed by the CIDT Global under this agreement or other people involved in the fault caused by the loss, CIDT Global will not be responsible for.<br/>
11. statements and confirmation<br/>
Order confirmation report and customer account statements will be deemed correct and conclusive and binding on the client, unless the customer received in the CIDT Global platform or other service report within a day objected to immediately and confirmed in writing. The margin call will be final and binding unless immediately written against. As a replacement for postal transaction confirmation, CIDT Global will provide customers with access to the Internet for access to their accounts at any time. Written objections from the customer should be sent to the CIDT Global website, where the latest address, address, or subject to change may be requested. Please ask for a return receipt. If no objection, all the actions of CIDT Global or the receipt of the report before the customer referrals taken will be deemed approved. The customer's failure to receive the confirmation of the transaction will not relieve him of his obligation to make such objections. Please refer to "agree to confirm and billing through electronic transmission transactions"".<br/>
12. communication contact<br/>
The reports, statements, notifications and other communications may be addressed to the customer's email address or to other addresses designated by the customer from time to time in writing to CIDT Global. So send all communications, whether by mail, telegraph or other means, once put into relevant postal agencies, or by the sending institution accepting that were identified by CIDT was Global, and were believed to have served my client, regardless of whether the customer actually received.<br/>
13. expenses<br/>
The customer will pay for the service provided by the CIDT Global produced by the introducer Commission and special service fees, or other expenses (including but not limited to the premium and discount, report fees, idle account fees, order cancellation fee, transfer fee and other charges), fees (including but not limited to charge by bank and banking institutions, the contract market or other regulatory or self regulatory organization expenses). CIDT Global may receive commissions, fees, and / or charges without notice. The client agrees to pay interest on the outstanding amount to CIDT Global (calculated as follows: select the lower one at the prevailing CIDT Global prime rate of interest plus 3% per cent or the highest interest rate prescribed by the law). All of these charges will be paid by the customer at the time of the event or at the discretion of the CIDT Global. The client withheld the above fees from his account at the authorized CIDT Global.  Customer agrees that under the direction of CIDT Global the account open positions, funds, and / or property to other institutions to pay transfer fees are determined by the CIDT Global. CIDT Global confirms that all prices quoted to the customer do not include premiums and discounts.<br/>
Depending on the transaction of the precious metals contract, the client will receive a premium or discount from the customer, including buying or selling, and the excess money or discount will be adjusted periodically. It is recommended that the client read the revision on the internet. The client agrees to personally be responsible for the taxes and expenses imposed by the government on all transactions or transactions arising from the transaction. The customer also agrees to deduct or deduct these taxes or expenses directly from the customer's account at maturity.<br/>
14. margin deposits and withdrawal arrangements<br/>
The customer shall provide and maintain to the CIDT Global the margin amount fixed by CIDT Global from time to time. The margin may be higher or lower than the handset configuration.  CIDT Global may change margin requirements at any time. Customer agrees that when CIDT Global made request immediately and quickly to transfer additional funds, CIDT Global required transfers way meet all margin requirements, and any remittance and money transfer process cost involved, including bank charges and exchange rate adjustment and all relevant costs incurred by the customer is responsible for. Customers in the full understanding of the CIDT Global need time to handle deposits related to customers, customers may not use real time just as the new position of margin deposit, more may not be as margin, the customer agrees to bear all the additional margin requirements to meet timely and faced the loss of forced liquidation, the initial loss can be the margin of more than the initial investment of customers. CIDT Global may at any time liquidate the customer's account in accordance with the provisions of this agreement, even if the CIDT Global fails to make the right, and does not mean that it has given up the right.  Any margin request from CIDT Global does not prevent CIDT Global from raising these margin requirements without notice.  Customers have the right to inform CIDT Global extraction of available cash balances specified, the customer agrees that any remittance and money transfer process cost involved, including bank charges and exchange rate adjustment and all relevant costs incurred by the customer is responsible for. The customer fully understands that CIDT Global takes time to process withdrawals from customers and that customers may not be able to receive the amount received in real time. The customer agrees not to pursue any liability arising from the failure of CIDT Global to meet its own withdrawal requirements in due course. Customer acknowledges that once the withdrawal request is issued, CIDT Global will deduct the amount from the customer account balance in real time. The customer must deposit to the Daejeon account or the company and account designated by the daejeon.<br/>
15. joint account<br/>
In the case of more than one natural person acting as customer, this natural person agrees to jointly and severally undertake the responsibility of this agreement. To open a joint account, each account holder must sign on the copy of the identity document, which will be used for verification. In addition, withdrawal, change of data or closing of the account must be completed by the form provided by CIDT Global and signed and returned by the account holder to the relevant form. The form can be downloaded from the CIDT Global web page http://www.202.hk. A joint account is held by more than one account holder (hereinafter referred to as the joint account holder):<br/>
(a) the responsibilities and obligations under this Agreement shall be considered as joint and individual full responsibility, and any name of the customer will be applied to each joint account holder;<br/>
(b) confirm the right to independently deal with this agreement, including, but not limited to, the execution of the transaction and the collection of all correspondence and documents relating to the account;<br/>
(c) the right to collect or withdraw money or deposit money on behalf of an account;<br/>
(d) implement the agreement relating to the account and make a full transaction with CIDT Global. CIDT Global has the right to ask the account parties to act jointly on matters relating to the account. CIDT Global has recourse and control over all of the outstanding debt of the account with respect to the interests of the joint account holder, individual or joint account. If the owner of one or more of the joint accounts dies, the CIDT Global shall be notified in writing and the death certificate shall be presented. All fees as of the date of notification will be deducted from the account. Each joint account owner assumes an equal share.<br/>
16. waiver or change<br/>
Nothing in this Agreement shall be waived or altered unless the waiver or change is made in writing and signed by the customer and the competent authority of the CIDT Global. The process of communication between any agreement or the failure of a CIDT, Global or other agent in any circumstances or in a series of circumstances to adhere to the rights under its agreement shall not be indirectly interpreted as waiver or change of rights. Any oral agreement or instruction shall not be admitted or executed.<br/>
17. termination<br/>
This Agreement shall begin with effect until termination, and the customer may terminate the agreement at any time as long as the customer does not hold it at that time
Has an open spot precious metal positions, not CIDT Global for any debt, and the CIDT Global office actually received written notice of termination, or at any time CIDT Global to deliver a written notice of termination, commencement notice that day from the closing conditions are so termination shall not affect any transactions previously and does not release any a party to this agreement under any obligation or cancel any arrears responsibility caused by customer.<br/>
18. compensation<br/>
The customer agrees that if the customer fails to fully and timely fulfill its commitments or its representation or warranty is not true or correct, and to CIDT Global brought any liability, loss, damages, costs or expenses, including attorneys' fees, customers will be expressed to the CIDT Global, the agency, employees, agents, successors transfer and compensation and make no damage. The client also agrees to pay to CIDT Global immediately the damages, costs and expenses arising from the execution of any of the provisions of this agreement, including attorney's fees. Moreover, if the loss comes from<br/>
(a) customer behavior: actions of clients or licensors or their omissions;<br/>
(b) forged signature: forged signature or unauthorized signature in all accounts or relevant documents of this agreement;<br/>
(c) failure: system failure, equipment failure, or system interruption or system delivery (whether customer or CIDT Global equipment)<br/>
(d) delay: delay, failure or error occurring in the execution of any instruction; and<br/>
(E) information: CIDT Global will not be liable for any damages or damages arising from the incorrect or incomplete instructions received from the customer.<br/>19.trading recommendations<br/>
<br/>
<br/>
Customer recognition:<br/>
(a) any market recommendation and information provided to the customer by CIDT, Global or any other internal personnel does not constitute an offer to buy or sell an OTCGOLD contract, or to solicit, buy or sell OTCGOLD positions;<br/>
(b) such recommendations and information, although based on the reliable sources of information considered by CIDT Global, may be based solely on the views of a broker, and such information may be incomplete or not recognized;<br/>
(c) CIDT Global does not provide any assurance of the accuracy and completeness of any information or transactions recommended to the customer, which is not responsible for it. The Customer acknowledges that CIDT Global and / or its affiliates, directors, supervisors, associates, shareholders or representatives may hold some precious metals or precious metals trading positions to some, this type of trading market will also be recommended, CIDT Global or its directors, supervisors, the affiliates, associates, shareholders or representatives of the market with the customer positions may be obtained from the CIDT Global recommendation is not consistent. The Customer acknowledges that the CIDT Global has not made any warranties about the tax impact or treatment of the contract.<br/>
20. customer statements and guarantees<br/>
Customer declaration and assurance:<br/>
(a) sound customer, legal age and legal capacity;<br/>
(b) only the customer and / or its joint account holder has the benefit of the customer's account;<br/>
(c) the client hereby warrants that, regardless of any subsequent adverse decision, the customer is competent to carry out the OTCGOLD transaction in addition to (a);<br/>
(d) members of the customer is not currently employed in any exchange, any exchange hold most of the capital of the company, and any exchange or any exchange registered company, any bank, trust institutions or insurance companies, once the customer to accept the employment, customer must immediately notify the CIDT Global business headquarters in written form;<br/>
(E) all the information provided books information to this date is true, correct and complete, the customer will promptly notify CIDT of any changes in the message Global.<br/>
(f) the customer should fully comply with local legislation, including compliance with the area or any other jurisdiction shall comply with the procedures and obtain the consent of the government in the region or other aspects of the transaction, and because the use of this platform and the need to pay any local tax and other taxes, pun off amount. Transactions conducted by the customer on this platform will be deemed to be made by the customer to CIDT Global and be guaranteed to comply with local laws and regulations. If the customer has any doubt about the situation, please refer to the professional consultant.<br/>
21. financial information<br/>
Disclose customer statements and ensure that the financial information disclosed to CIDT Global accurately expresses the current financial position of the customer. The client further declares and guarantees that the assets and liabilities have been carefully calculated in determining their net value and that the debt is deducted from the asset to determine the net value provided by the customer in the financial information. Customer represents and warrants that in determining the value of assets, customers include cash and / or cash equivalents and marketable securities, real estate owned (excluding primary residence), the cash value of life insurance and other valuable assets. Customer represents and warrants that in determining the value of liabilities, customers include notes payable to banks (secured or non guaranteed), notes payable to relatives, real estate mortgages payable (excluding primary residence) and other bonds. The client declares and guarantees that when determining its current assets, the customer includes only assets that can be realized quickly (within a day or less). The customer declares and guarantees that it has considered very carefully the part of the customer's assets that may be venture capital. The customer guarantees and declares that venture capital is such an amount of money, that the customer is willing to put it into risk, and that even if the loss does not cause any change to the customer's way of life. If the customer's financial condition changes to reduce the customer's net worth, current assets and / or venture capital, the customer agrees to inform CIDT Global immediately.<br/>
22. do not guarantee profits or limit losses<br/>
Ensure customer and declare that the customer has not introducer or any CIDT Global employee or agent of the CIDT Global trading account to sign any separate agreement, including any guarantee account earnings or limit losses in the customer agreement, agreed to its responsibility in writing immediately inform CIDT Global any such agreement. In addition, the customer agrees that if any statement of the transaction account made by any person is different from the statement received by the customer from the CIDT Global, the customer agrees to draw the attention of the CIDT Global in writing. Understand the customer must be granted before the execution of each transaction, unless the client by signing CIDT Global transaction authorization (LPOA) will be granted permission by another person; and any disputed transactions must be notified according to the agreement the claim to the attention of Global CIDT. If the customer fails to notify the CIDT Global in time of any damages or liabilities caused by the dispute, the customer agrees to indemnify the CIDT Global for the purpose of not being harmed. Notice under this clause shall be sent to the office of CIDT Global.<br/>
23. credit report<br/>
Customer authorizes CIDT or agents on behalf of CIDT Global, Global, to investigate customer's credit standing and in CIDT Global and confirm customer contact information on the right (all) banks, financial institutions and credit institutions. The customer further authorizes CIDT Global to investigate the current and past investment activity, and in connection CIDT Global believes the right exchange futures broker, broker / dealers, banks, and legal information center. If the customer makes a request in writing to CIDT Global, the customer may be allowed to duplicate the above record, which is entirely for the account of the customer.<br/>
24. recording<br/>
The customer agrees and acknowledges that, irrespective of the use of an automatic warning alert, all customer contact with customer accounts of CIDT, Global or their staff may be recorded electronically. The customer further agrees in dispute or litigation involving any client or CIDT Global, any party can use such a recording or transcript of evidence. The customer understands and agrees that CIDT Global periodically removes such recordings in accordance with established business procedures.<br/>25. jurisdiction and jurisdiction<br/>
In connection with this contract or the relevant disputes, disputes or claims, breach of contract or termination of the contract shall be settled by arbitration. The arbitration shall begin on the date of arbitration in accordance with the rules of arbitration of the United Nations Commission on international trade law which is currently in force.<br/>
26. protocol modification<br/>
The customer understands, acknowledges and agrees that CIDT Global may amend the terms and conditions of this agreement from time to time. CIDT Global will notify the customer of these changes or changes on the company's website http://www.202.hk. The customer shall regularly review the modification of the terms and agree to be bound by it.<br/>

27. liquidation day and extension<br/>
All precious metals positions will be displayed on the customer's account on the date of the transaction and will be cleared within 48 hours (depending on the settlement currency of the transaction account). Open positions will be automatically removed after an additional 48 hours, unless<br/>
(a) the customer gives satisfactory instructions on delivery, which shall be in accordance with the CIDT Global practices, the usual charges and the re delivery costs;<br/>
(b) CIDT Global accepts orders from customers and is authorized to hedge precious metals positions as appropriate. The customer shall indicate whether to deliver or hedge the goods prior to the noon of the previous working day of the precious metal clearing day. In the absence of timely instructions from the customer, CIDT Global is authorized to discretionary discretion to extend the precious metal positions of all or any customer's CIDT Global account at the risk of the customer. The customer's account will be charged at the time the precious metal position is extended.<br/>
28. mortgage agreement<br/>
All the money, money and other assets of customers, as it is CIDT Global or its affiliates at any time for customers (individuals, and others have, or as any other guarantor) hold, or at any time by CIDT Global for any purpose (including safekeeping) in charge or control, such property will be CIDT Global as collateral, and for customers to CIDT Global Obligations Subject to ordinary lien and hedge right, no matter how many customers to open an account number in CIDT Global. CIDT Global may not notify the customer and shall, at any time and from time to time, make any investment, money or other property of the customer into or into any account of the customer. The client hereby also grants to CIDT Global customers as margin collateral or any securities or other property, or to separate property together with other customers in the form of mortgage, mortgage, investment or loan to CIDT Global or other parties. At any time, CIDT Global does not need to return to the customer the property equivalent to the CIDT Global to other clients. This License applies to all open accounts held by CIDT Global clients and remains fully valid until the customer has paid in full all its accounts (arrears) or when CIDT Global has issued an cancellation notice from the office.<br/>29.transfer of rights<br/>CIDT Global may confer upon any person the rights or obligations of all or part of this Agreement without the prior consent or approval of the customer.<br/>
30. high risk investment<br/>In addition to the agreement contained in the disclosure, the customer should pay attention to the OTCGOLD of precious metals trading margined is one of the most risk investment in the financial market, and only suitable for experienced investors and institutions. An account opened at CIDT Global allows clients to trade precious metals at a high leverage ratio. In view of the possibility of loss of all investment, the speculative capital in the precious metal trading market must be venture capital, and the loss will not have a great impact on the financial status of the customers, individuals or institutions. If clients used to invest only in low-risk investment vehicles, customers might need to learn about precious metals before formal trading. Customers need to realize that, if the market is not as good as the customer expects when trading precious metals, the customer may lose all funds deposited in the CIDT Global as initial margin. If the customer wishes to continue the investment of the customer, the customer must confirm that the customer's funds are pure venture capital, and the loss of these funds does not harm
Go to customer's lifestyle or harm customers' future retirement plans. In addition, the customer fully understands the nature and risk of precious metals investment, and the loss incurred by the customer during the investment will not affect the third party.<br/>
31. email confirmation<br/>
If any changes are made to the customer's email address, it is the customer's responsibility to notify the CIDT Global of the changes.<br/>
32. address confirmation<br/>
If any change is made to the customer's mailing address, it is the customer's responsibility to notify the CIDT Global of the changes.<br/>
33. transfer of funds authorization<br/>
The client hereby agrees that CIDT Global may at any time, according to the CIDT Global and its related human judgment and will open another account in the CIDT Global or other approved financial institutions or their affiliates at the customer individually or hold jointly with others sent into and out of the account of the customer. The customer must deposit to the Daejeon account or the company and account designated by the daejeon.<br/>
34. agrees to confirm and billing through electronic transmission transactions<br/>
The Customer hereby agrees to, as a substitute for mail and email, account information and transaction confirmation can provide customers - customers through CIDT Global platform login account to access the account information via the CIDT Global platform. CIDT Global will publish all of the account activities of the customer, and the customer will receive daily, monthly and annual account activity reports (including each executed transaction report). Account information can be updated within 24 hours after each transaction has been completed by the customer. Publication of the account information on the customer's online account will be considered as a transaction confirmation and statement. At any time, account information will include trade confirmations with ticket numbers, the sale price, the deposit amount available for margin trading, profit and loss report, and all positions and did not complete the order, the customer can at any time by written notice to terminate this agreement CIDT Global.<br/>
35. privacy policy<br/>
The privacy policy of CIDT Global Limited ("CIDT Global") is to protect customer rights and interests in accordance with the personal data (Privacy) Ordinance, facilitate the creation and maintenance of precious metals accounts, and provide financing and financial advisory services.
CIDT Global faithfully provides personal information for its clients and makes a confidential monitoring. In addition to being granted by law, CIDT Global will not give any private information to any other person. When customers open or maintain a trading account at CIDT Global, the personal data provided will be used solely for internal business purposes, for example in the financial evaluation of customer needs, customer transactions and other requirements, to provide related products and services, to provide general trading service and supervision procedures according to need to confirm the identity of customers. CIDT Global requires customers to provide information on the operation, including:<br/>
(a) application forms relating to CIDT Global and personal data provided on other forms such as name, address, date of birth, identity card number, occupation, assets and income information<br/>
(b) transaction information about the customer and CIDT Global and its Affiliated Companies;<br/>
(c) information about the customer survey company;<br/>
(d) information relating to the identification of a client's identity, such as government documents, passports or driving licences. CIDT Global will only allow customers to provide information, limited access to customer contact, employee access, in order to provide relevant customer service and product presentation. CIDT Global also only authorizes new account applications and reputation prosecutors to access relevant information through the electronic system. These procedural requirements are designed to protect the privacy of customers and to disclose data to protect customers' privacy. CIDT Global also does not take client's name and personal data, sale or lease with anyone.<br/>
<br/>
<br/>
About Cookies:<br/>
Cookies is a tracking device on the customer's hard disk that tracks and stores information about the use of online services by customers. CIDT Global may set up and access CIDT Global cookies on the client's computer to assist CIDT Global in understanding which ads and sales attract customers to browse CIDT Global web sites. CIDT Global and its branches may in CIDT Global's products and services using cookies to track the customer browsing on the CIDT Global website, we collect and share data is anonymous and not by individual identification.<br/>
Security technology:<br/>
CIDT Global is committed to ensuring that the site is safe and conforms to industry standards, and the use of other information security tools, such as firewall, authentication system (personal password and identity card number) and control mechanism to control unauthorized entry and access to information. Some financial products and services provided by Global CIDT, the personal data need to be shared and third party service providers and some do not belong to CIDT Global promotion company, these include providing services in the form of contract on behalf of CIDT Global company, for example, a monthly mail company, maintenance and development of data processing software company etc.. Companies that represent CIDT Global must keep personal data confidential. In addition, CIDT Global is allowed to disclose personal data to regulatory authorities in accordance with legal requirements. For example, if necessary to comply with the court order or other official requirements, or for the protection of the rights and property of CIDT Global, CIDT Global and cooperative regulatory agencies or law enforcement agencies may disclose personal information. The CIDT Global web page will publish the content of the privacy policy. Inform the client of privacy policy before disclosing non - disclosure personal data to the third party not affiliated with CIDT Global. The client will be given sufficient time to withdraw from the information disclosure. Prior to the publication of new categories of personal data, new categories of non personal data, prior to disclosing new data to the new third party (not affiliated with CIDT Global), provide revised privacy policies and new exit notice to the customer. All CIDT Global employees will be reasonably supervised when they implement policies to ensure compliance.<br/>

36. arbitration agreement<br/>
Any dispute between the customer and the CIDT Global will be settled in accordance with the arbitration agreement of the customer agreement twenty-fifth. Any award made by the arbitration shall be final and binding and any court having jurisdiction may execute it in accordance with the law. By agreeing with this arbitration agreement, the customer<br/>
(a) giving up the right to sue in court;<br/>
(b) agree to be bound by arbitration in any allegation and counter accusation submitted by the customer or CIDT Global under this agreement. The customer does not choose to be bound by the terms of the arbitration agreement and does not prevent the customer from opening an account at CIDT Global.<br/>
37. jurisdiction, law and jurisdiction<br/>
The rights and obligations of this Agreement and the parties hereto are governed by the laws of the district in which the principal offices of the CIDT Global are located and are hereby interpreted and implemented accordingly. Accordingly, the application of the provisions is not intervened or prevented by conflict with the law.<br/>
This agreement, together with the account opening request and the relevant attachments, constitutes the whole and all the contents of this agreement, and is only restricted to the trading of precious metals in leveraged commodities. This Agreement shall replace all previous signatures or commitments made by both parties<br/>
A written or verbal agreement relating to the trading of precious metals in leveraged locations.</p></div>
							</div>
						</div>
						<div class="stepcnt">
							<p class="listname">Account holder name :</p>
							<input type="text" name="account_name" class="selectbox">
							<span class="tip">The account holder's name must be the same as the name in the profile</span>

							<div style="clear: both;"></div>
							<p class="listname">Bank :</p>
							<div class="selectbox">
								<div class="thisVal"></div>
								<ul>
									<li>ICBC</li>
									<li>SPA</li>
									<li>IIS</li>
								</ul>
								<input type="hidden" name="bank_name" />
							</div>
							<span class="tip">Please select the bank you are using for withdrawals</span>

							<div style="clear: both;"></div>
							<p class="listname">Bank Account :</p>
							<input type="text" name="bank_account" class="selectbox">
							<span class="tip">Please fill in the correct bank account number</span>

							<div style="clear: both;"></div>
							<p class="listname">Bank Address :</p>
							<div class="selectbox">
								<div class="thisVal"></div>
								<ul>
									<li>CHINA</li>
									<li>USA</li>
								</ul>
								<input type="hidden" name="bank_area" />
							</div>
							<input type="text" name="bank_address" class="selectbox" style="margin-left: 10px;width: 400px;" />
                            <span class="tip"></span>
							<div style="clear: both;"></div>
							<p class="listname">Account Branch Bank :</p>
							<input type="text" name="acct_bran_bank" class="selectbox">
							<span class="tip">Please fill in the correct account Branch bank</span>

							<div style="clear: both;"></div>
							<p class="listname">Account Type :</p>
							<div class="selectbox">
								<div class="thisVal"></div>
								<ul>
									<li>Debit Card</li>
									<li>ICBC Card</li>
									<li>BBK Card</li>
								</ul>
								<input type="hidden" name="cart_type" />
							</div>

							<div style="clear: both;"></div>
							<p class="listname">Account Currency :</p>
							<div class="selectbox">
								<div class="thisVal"></div>
								<ul>
									<li>USD</li>
									<li>IIS</li>
									<li>CHF</li>
								</ul>
								<input type="hidden" name="cart_currency" />
							</div>
							<div style="clear: both;"></div><br/><br/>
							<div class="opbox">
								<input type="button" class="btn nextStep pre yellow" value="Previous" />
								<input type="button" class="btn nextStep next disabled" disabled value="Next Step" />
							</div>
						</div>
						<div class="stepcnt" >
							<div class="comfirm_info clearfix">
								<div class="infomation">
									<p class="caption">Personal Information</p>
									<ul>
										<li>Trading Platform : <span class="td_pf"></span></li>
										<li>Account Type : <span class="acc_ty"></span></li>
										<li>Account Currency : <span class="acc_curr"></span></li>
										<li>Your Name : <span class="yr_nm"></span></li>
										<li>Type of Certificate : <span class="ty_of_cf"></span></li>
										<li>Document Number : <span class="dt_nb"></span></li>
										<li>Resident Address : <span class="rdt_addr"></span></li>
										<li>Cellphone Number : <span class="cell_num"></span></li>
										<li>E-mail Address : <span class="email_addr"></span></li>
									</ul>
								</div>
								<div class="infomation">
									<p class="caption">Bank information</p>
									<ul>
										<li>Account holder name : <span class="acc_hd_nm"></span></li>
										<li>Bank : <span class="bk"></span></li>
										<li>Bank Account : <span class="bk_acc"></span></li>
										<li>Bank Address : <span class="bk_area"></span>&nbsp;&nbsp;&nbsp;<span class="bk_addr"></span></li>
										<li>Account Branch Bank : <span class="acc_bch_bk"></span></li>
										<li>Account Type : <span class="acc_ty"></span></li>
										<li>Account Currency : <span class="acc_currcy"></span></li>
									</ul>
								</div>
							</div>
							<div class="opbox">
								<input type="button" class="btn nextStep pre yellow" value="Previous" />
								<input type="button" class="comfirm next btn bg" value="Confirm" />
							</div>
							
						</div>
						<div class="stepcnt">
							<div class="correctbox">
								<span class="corr_bg"></span>
								<p>Congratulations<br/>your information is submitted successfully<br/>the account will be activated within 30 minutes<br/>and the activation message will be sent to your mailbox<br/>please be patient</p>
								<a href="{{ url('/account/cidtMT4') }}" class="btn bg sbtn">CITD MT4</a>
							</div>
						</div>
						</form>
						<iframe name="uploadFrame" style="display:none"></iframe>
						<form target="uploadFrame" action="{{ url('/account/standard/step4') }}" method="post" class="form2" enctype="multipart/form-data" >
						 {{ csrf_field() }}
						<div class="stepcnt">
							<div class="correct clearfix">
								<span class="corr_bg"></span>
								<p class="txt">Congratulations, your account has been created successfully.<br/>Please follow the steps below to activate your account.</p>
							</div>
							<p class="step_num"><span class="yellow">01</span> Please upload ID card positive and negative, bank card positive picture. </p>
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
										<input type="file" name="file2" id="upload_img_1">Upload
									</a>
								</div>
								<div class="item">
									<span class="cart_tit">Bank Card Positive</span>
									<img src="{{ asset($cdnPath.'/img/identi_back2.png') }}" alt="" class="cart_bg" id="showPic_2">
									<a href="javascript:;" class="btn sbtn bg">
										<input type="file" name="file3" id="upload_img_2">Upload
									</a>
								</div>
								<div class="atte">
									<span class="atten red">Attention:</span>
									<p>Each picture should not be greater than 2m, if more than 2m please follow the instructions in step two upload pictures.<br/><br/>After the picture is uploaded, the account will be activated within 30 minutes</p>
								</div>
							</div>
							<input type="button" class="comfirm btn bg" value="Confirm" />
							<p class="step_num"><span class="yellow">02</span> You can submit ID card front and back, bank card positive picture in the following ways.</p>
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
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<!--footer-->
@component('home.footer')
@endcomponent
<script>
var uploadErrMsg = "{{ __('upload.error.IllegaFile') }}"
$(function(){
	$('.ref_code').on('click',function(){
		$('img.ref_code').attr('src',$('img.ref_code').attr('src')+Math.random())
	});
	$('input[name="name"],input[name="document_number"],input[name="resid_addr"],input[name="email"],input[name="mobile"],input[name="verficode"],input[name="account_name"],input[name="bank_account"],input[name="bank_address"],input[name="acct_bran_bank"]').on('change',function(){
		var val = $(this).val();
		var name = $(this).attr('name');
		var postData =  new Object(); 
		postData[name] = val;
		postData['_token'] = $('input[name="_token"]').val();
		$.ajax({
			'url':"{{ url('/account/standard/validator') }}"+'/'+name,
			'type':'post',
			'data':postData,
			'dataType':'json',
			'timeout':5000,
			'success':function(data){
				if(data.status){
					if(name=='verficode'){
						$('input[name="'+name+'"]').next('i').removeClass('error');
					}else{
						$('input[name="'+name+'"]').removeClass('log_error');
						$('input[name="'+name+'"]').next('.tip').removeClass('log_error').html('');
					}
				}else{
					if(name=='verficode'){
						$('input[name="'+name+'"]').next('i').addClass('error');
						$('input[name="'+name+'"]').html('')
					}else{
						$('input[name="'+name+'"]').addClass('log_error');
						$('input[name="'+name+'"]').next('.tip').addClass('log_error').html(data.validator[name][0]);
					}
				}
			}
		})
	})
	var stepcnt_0 = $('.trad_form .stepcnt').eq(0);
	var stepcnt_1 = $('.trad_form .stepcnt').eq(1);
	var stepcnt_2 = $('.trad_form .stepcnt').eq(2);
	var stepcnt_3 = $('.form2 .stepcnt');
	var divBox = $('.operate_step>div');
	stepcnt_0.find('.btn').on('click',function(){
		$.ajax({
			'url':"{{ url('/account/standard/step1') }}",
			'type':'post',
			'data':$('form').serialize(),
			'dataType':'json',
			'timeout':5000,
			'beforeSend':function(){
				isDisabled(stepcnt_0,false);
			},
			'success':function(data){
				var inputMap = {
							'platform':{input:$('input[name="platform"]').parent('.selectbox')},
							'account_type':{input:$('input[name="account_type"]').parent('.selectbox')},
							'account_currency':{input:$('input[name="account_currency"]').parent('.selectbox')},
							'certificate_type':{input:$('input[name="certificate_type"]').parent('.selectbox')},
							'birthday':{input:$('.month,.day,.year')},
    						'name':{input:$("input[name='name']"),tip:$("input[name='name']").next('.tip')},
							'document_number':{input:$("input[name='document_number']"),tip:$("input[name='document_number']").next('.tip')},
							'resid_addr':{input:$("input[name='resid_addr']"),tip:$("input[name='resid_addr']").next('.tip')},
    						'email':{input:$("input[name='email']"),tip:$("input[name='email']").next('.tip')},
    						'mobile':{input:$("input[name='mobile']"),tip:$("input[name='mobile']").next('.tip')},
    						'verficode':{input:$("input[name='verficode']")}
    			};
				for(k in inputMap){
    				var v = inputMap[k];
   				 	if(typeof data.validator !='undefined'  && typeof data.validator[k]!='undefined'){
   	   				 	if(k=='verficode'){
   							v.input.next('i').addClass('error');
   							v.input.html('')
   						}else{
   							v.input.addClass('log_error');
   							if(typeof v.tip!='undefined'){
   								v.tip.addClass('log_error').html(data.validator[k][0]);
   	   						}
   						}
     	   			}else{
         	   			if(k=='verficode'){
        					v.input.next('i').removeClass('error');
        				}else{
        					v.input.removeClass('log_error');
        					if(typeof v.tip!='undefined'){
        						v.tip.removeClass('log_error').html('');
            				}
        				}
             	   	}
    			}
				if(data.status){
					stepcnt_1.show().siblings().hide();
					divBox.eq(1).addClass('curr').siblings().removeClass('curr');
					stepcnt_1.find('input[type="text"]').on('keyup',function(){
						var aaa = true;
						stepcnt_1.find('input[type="text"]').each(function(i,obj){
							if(obj.value == ''){
								aaa = false;
							}
						});
						if(aaa){
							isDisabled(stepcnt_1,true,'Next Step');
						}else{
							isDisabled(stepcnt_1,false,'Next Step');
						}
					});
				}else{
					//alert(data.msg)
					$("input[name='verficode']").html('')
					$('img.ref_code').attr('src',$('img.ref_code').attr('src')+Math.random())
				}
			},
			'error':function(){
				alert("{{ __('errors.ajaxSendFail') }}")
				$("input[name='verficode']").html('')
				$('img.ref_code').attr('src',$('img.ref_code').attr('src')+Math.random())
			},
			'complete':function(){
				isDisabled(stepcnt_0,true);
			}
		})
		return false;
	});
	stepcnt_1.find('.next').on('click',function(){
		$.ajax({
			'url':"{{ url('/account/standard/step2') }}",
			'type':'post',
			'data':$('form').serialize(),
			'dataType':'json',
			'timeout':5000,
			'beforeSend':function(){
				isDisabled(stepcnt_1,false);
			},
			'success':function(data){
				var inputMap = {
							'bank_name':{input:$('input[name="bank_name"]').parent('.selectbox')},
							'bank_area':{input:$('input[name="bank_area"]').parent('.selectbox')},
							'cart_type':{input:$('input[name="cart_type"]').parent('.selectbox')},
							'cart_currency':{input:$('input[name="cart_currency"]').parent('.selectbox')},
    						'account_name':{input:$("input[name='account_name']"),tip:$("input[name='account_name']").next('.tip')},
    						'bank_account':{input:$("input[name='bank_account']"),tip:$("input[name='bank_account']").next('.tip')},
    						'bank_address':{input:$("input[name='bank_address']"),tip:$("input[name='bank_address']").next('.tip')},
    						'acct_bran_bank':{input:$("input[name='acct_bran_bank']"),tip:$("input[name='acct_bran_bank']").next('.tip')},
    						'mobile':{input:$("input[name='mobile']"),tip:$("input[name='mobile']").next('.tip')},
    						'verficode':{input:$("input[name='verficode']")}
    			};
				for(k in inputMap){
    				var v = inputMap[k];
   				 	if(typeof data.validator !='undefined'  && typeof data.validator[k]!='undefined'){
   	   				 	if(k=='verficode'){
   							v.input.next('i').addClass('error');
   							v.input.html('')
   						}else{
   							v.input.addClass('log_error');
   							if(typeof v.tip!='undefined'){
   								v.tip.addClass('log_error').html(data.validator[k][0]);
   							}
   						}
     	   			}else{
         	   			if(k=='verficode'){
        					v.input.next('i').removeClass('error');
        				}else{
        					v.input.removeClass('log_error');
        					if(typeof v.tip!='undefined'){
        						v.tip.removeClass('log_error').html('');
        					}
        				}
             	   	}
    			}
				if(data.status){
					stepcnt_2.show().siblings().hide();
					divBox.eq(2).addClass('curr').siblings().removeClass('curr');
					$('.infomation .td_pf').text($('input[name="platform"]').val());
					$('.infomation .acc_ty').text($('input[name="account_type"]').val());
					$('.infomation .acc_curr').text($('input[name="account_currency"]').val());
					$('.infomation .yr_nm').text($('input[name="name"]').val());
					$('.infomation .ty_of_cf').text($('input[name="certificate_type"]').val());
					$('.infomation .dt_nb').text($('input[name="document_number"]').val());
					$('.infomation .rdt_addr').text($('input[name="resid_addr"]').val());
					$('.infomation .cell_num').text($('input[name="mobile"]').val());
					$('.infomation .email_addr').text($('input[name="email"]').val());
					$('.infomation .acc_hd_nm').text($('input[name="account_name"]').val());
					$('.infomation .bk').text($('input[name="bank_name"]').val());
					$('.infomation .bk_acc').text($('input[name="bank_account"]').val());
					$('.infomation .bk_addr').text($('input[name="bank_address"]').val());
					$('.infomation .bk_area').text($('input[name="bank_area"]').val());
					$('.infomation .acc_bch_bk').text($('input[name="acct_bran_bank"]').val());
					$('.infomation .acc_ty').text($('input[name="cart_type"]').val());
					$('.infomation .acc_currcy').text($('input[name="cart_currency"]').val());
				}
			},
			'error':function(){
				alert("{{ __('errors.ajaxSendFail') }}")
			},
			'complete':function(){
				isDisabled(stepcnt_1,true);
			}
		})
	});
	stepcnt_2.find('.next').on('click',function(){
		$.ajax({
			'url':"{{ url('/account/standard/step3') }}",
			'type':'post',
			'data':$('form').serialize(),
			'dataType':'json',
			'timeout':5000,
			'beforeSend':function(){
				isDisabled(stepcnt_2,false);
			},
			'success':function(data){
				if(data.status){
					divBox.eq(3).addClass('curr').siblings().removeClass('curr');
					stepcnt_3.show();
					stepcnt_2.hide();
				}else{
					alert(data.msg)
				}
			},
			'error':function(){
				alert("{{ __('errors.ajaxSendFail') }}")
			},
			'complete':function(){
				isDisabled(stepcnt_2,true);
			}
		})
	})
	stepcnt_3.find('.comfirm.btn').on('click',function(){
		if($('#upload_img_0').val() == '' || $('#upload_img_1').val()=='' || $('#upload_img_2').val()== ''){
			alert("{{ __('form.missingData') }}")
		}else{
			$('.form2').submit();
		}
		
	})
	
})
function registerSuccess(){
	var stepcnt_3 = $('.form2 .stepcnt');
	var stepcnt_4 = $('.trad_form .stepcnt').eq(3);
	stepcnt_4.show();
	stepcnt_3.hide();
}
var datetime = new DateTime();	//日期下拉对象
datetime.init();	//调用init方法初始化
</script>
<!--图片上传-->
<script src="{{ url('/js/uploadPreview.js') }}" type="text/javascript"></script>
@endsection