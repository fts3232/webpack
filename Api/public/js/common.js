//滑动导航
function sliderMenu(){
	var def = $('.menu > li.curr').index();
	var liW = $('.menu > li').width();
	$('.underline').css('left',def * liW);
	$('.menu > li').mouseenter(function(){
		var index = $(this).index();
		$('.underline').stop(true,false).animate({
			left: index * liW
		},200,function(){
			$('.menu > li').eq(index).css({
				'border-bottom': '2px solid #cc9c3d',
				'z-index': '11'
			})
		});
		$(this).addClass('curr').siblings().removeClass('curr');
		$(this).find('.subMenu').fadeIn(300);
	});
	$('.menu > li').mouseleave(function(){
		$(this).removeAttr('style');
		$('.underline').stop(true,false).animate({
			left: def * liW
		},200);
		$('.menu > li').eq(def).addClass('curr').siblings().removeClass('curr');
		$(this).find('.subMenu').fadeOut(220);
	});
}
//banner轮播
function banner(){
	var thumb_li = $('.banner_thumb span');
	var idx = 0;
	var len = $('.banner ul li').length;
	var time = 7000;
	$('.banner_thumb span').on('click',function(){
		$(this).addClass('curr').siblings('span').removeClass('curr');
		var index = $(this).index();
		idx = index;
		$('.banner ul li').eq(index).fadeIn().siblings().fadeOut();
	});
	var timer = setInterval(autoPlay,time);
	$('.banner').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(autoPlay,time);
	});
	function autoPlay(){
		idx++;
			idx = idx > len - 1 ? 0 : idx;
			$('.banner_thumb span').eq(idx).addClass('curr').siblings('span').removeClass('curr');
			$('.banner ul li').eq(idx).fadeIn().siblings().fadeOut();
	}
}
/**产品详情（关键字搜索）**/
function keyWordSearch(){
	var searchInput = $('.searchbox input');	
	var _thisval;
	//input响应数据
	searchInput.bind('input propertychange',function(){
		_thisval = searchInput.val();		//得到当前输入的值
		if(_thisval == ''){
			$(this).removeClass('active').siblings('.clearText').hide();
		}else{
			$(this).addClass('active').siblings('.clearText').show();
		}
		searchKey(_thisval);
	});
	$('.searchbox .clearText').on('click',function(){
		searchInput.val('');
		searchKey('');
		$(this).hide().siblings().removeClass('active');
		$('.foreign_pro .table .more').text('More');
		showMore();
	});
	//关键字查找
	function searchKey(str){
		var _thisval = str;
		if(_thisval.toUpperCase() == ''){
			$('.table table tbody tr').each(function(){
				var key = $(this).attr('key');
				$(this).find('td').first().html(key);
			})
			$('.table tr').show();
			$('.nothing').hide();
			$('.more').show();
		}else{
			var flag = false;
			$('.table table tbody tr').each(function(){
				var key = $(this).attr('key');
				var reg = new RegExp(_thisval.toUpperCase());
				if(key.indexOf(_thisval.toUpperCase()) != -1){
					var span = '<span style="background: #ffff00">'+_thisval.toUpperCase()+'</span>';
					tdval = key.replace(reg,span);
					$(this).find('td').first().html(tdval);
					$(this).show();
					$('.nothing').hide();
					flag = true;
				}else{
					$(this).find('td').first().html(key);
					$(this).hide();
				}
			})
			if(!flag){
				//没找到
				$('.nothing').show();
				$('.more').hide();
			}else{
				//找到
				var num = 0;
				var n = 1;
				$('.table table tbody tr').each(function(){
					if($(this).attr('data-value')){
						num++;
						$(this).attr('data-value',num);
					}
				});
				if(num <= 12){
					$('.more').hide();
				}else{
				}
			}
		}
	}
	//显示更多
	function showMore(){
		var tr = $('.foreign_pro table tbody tr');
		var show_len = 10;		//默认显示12条
		var len = tr.length;	//tr总长度
		var n = 1;
		if(len > show_len){
			$('.foreign_pro table tbody tr:gt('+ (show_len - 1) +')').hide();
			$('.foreign_pro .table .more').css('display','block');
		}
		//点击按钮查看更多
		$('.foreign_pro .table .more').on('click',function(){
			n++;
			var thisShow = $('.foreign_pro table tbody tr:lt('+ (show_len * n) +')').filter(':gt('+ (show_len - 1) +')').show();	//每次显示的条数
			var lens = thisShow.length;
			if(lens % show_len !== 0){
				$('.foreign_pro .table .more').text('no more');
				return false;
			}
		});
	}
	showMore();
}
//下拉选项
function selectBox(){
	$('.selectbox').each(function(){
		//遍历设置每个的第一个子节点
		$(this).find('.thisVal').text($(this).find('ul li').first().text());
		$(this).find('input[type="hidden"]').val($(this).find('ul li').first().text());
		var li = $(this).find('ul li');
		li.on('click',function(){
			var _thisVal = $(this).text();
			$(this).parent().siblings('.thisVal').text(_thisVal);
			$(this).parent().siblings('input').val(_thisVal);
		});
		$(this).on('click',function(event){
			event.stopPropagation();	//阻止事件冒泡
			if($(this).hasClass('toggle')){
				$(this).removeClass('toggle');
			}else{
				$(this).addClass('toggle');
			}
		});
	});
	$(document).click(function(){
		$('.selectbox').removeClass('toggle');
	});
}
//真实账户（下一步
function nextStep(){
	var stepcnt_0 = $('.trad_form .stepcnt').eq(0);
	var stepcnt_1 = $('.trad_form .stepcnt').eq(1);
	var stepcnt_2 = $('.trad_form .stepcnt').eq(2);
	var stepcnt_3 = $('.trad_form .stepcnt').eq(3);
	var divBox = $('.operate_step>div');

	stepcnt_0.find('input[type="text"]').on('keyup',function(){
		var flag = true;
		stepcnt_0.find('input[type="text"]').each(function(i,obj){
			if(obj.value == ''){
				flag = false;
			}
		});
		if(flag){
			$('.checkbox').click(function(){
				if($('.agree_check>div').eq(0).find('.checkbox').attr('checked') && $('.agree_check>div').eq(1).find('.checkbox').attr('checked')){
					isDisabled(stepcnt_0,true,'Agree to the Agreement and Submit');
				}else{
					isDisabled(stepcnt_0,false,'Complete the information');
				}
			});
			if($('.agree_check>div').eq(0).find('.checkbox').attr('checked') && $('.agree_check>div').eq(1).find('.checkbox').attr('checked')){
				isDisabled(stepcnt_0,true,'Agree to the Agreement and Submit');
			}else{
				isDisabled(stepcnt_0,false,'Complete the information');
			}
		}else{
			isDisabled(stepcnt_0,false,'Complete the information');
		}
	});
}
function isDisabled(obj,isTrue,btnText){
	if(btnText != undefined){
		obj.find('.nextStep').val(btnText)
	}
	if(isTrue){
		obj.find('.nextStep').attr('disabled',false).removeClass('disabled').addClass('bg');
	}else{
		obj.find('.nextStep').attr('disabled',true).addClass('disabled').removeClass('bg');
	}
}
//模拟账户
function demo_account(){
	$('form input[type="text"]').on('keyup',function(){
		var flag = true;
		$('form input[type="text"]').each(function(i,obj){
			if(obj.value == ''){
				flag = false;
			}
		});
		if(flag){
			/*if(!(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test($('input[name="email"]').val()))){
				$('input[name="email"]').next().find('.icon').addClass('error').removeClass('success');
				isClick(0);
			}else{
				$('input[name="email"]').next().find('.icon').addClass('success').removeClass('error');
				//判断验证码是否正确
				var code_val = $('input[name="code"]').val().toLowerCase();
				var code = $('.code').text().toLowerCase();
				if(code_val !== code){
					$('.codebox i').addClass('error').removeClass('success');
					$('input[name="code"]').change(function(){
						var thisVal = $(this).val().toUpperCase();
						var nowCode = $('.code').text().toUpperCase();
						if(thisVal !== nowCode){
							isClick(0);
							$('.codebox i').addClass('error').removeClass('success');
						}else{
							$('.codebox i').addClass('success').removeClass('error');
						}
					});
				}else{
					$('.codebox i').addClass('success').removeClass('error');
					isClick(1);
				}
			}*/
			isClick(1);
		}else{
			isClick(0);
		}
	});
	
	reset();
}
//真实账户（同意协议）
function agreement(){
	$('.ckbox').on('click',function(){
		if($(this).find('.icon').hasClass('checked')){
			$(this).siblings('.checkbox').attr('checked',false);
			$(this).find('.icon').removeClass('checked');
		}else{
			$(this).siblings('.checkbox').attr('checked',true);
			$(this).find('.icon').addClass('checked');
		}
	});
}
//在线支付
function online_deposit(){
	var dep_amt = $('form input[name="dep_amount"]');
	var rk = $('form .rk');
	$('form .rk,form input[name="dep_amount"]').keyup(function(){
		var val = $.trim(dep_amt.val());
		var rk_val = $.trim(rk.val());
		if(val !== ''){
			$('form input[type="submit"]').removeClass('disabled').addClass('bg').attr('disabled',false)
		}else{
			isClick(0);
		}
	});
	disableScroll();
	reset();
}
//银行注资
function injection(){
	//文件上传
	upload_file();
	$('.inject input[name="bk_acct_num"],.inject .rk').on('keyup',function(){
		var bk_acct_num = $.trim($('form input[name="bk_acct_num"]').val());
		var rk = $.trim($('.inject .rk').val());
		if(bk_acct_num !== '' && rk !== ''){
			if($('.filebox .upload-url').text() !== ''){
				isClick(1);
			}else{
				upload_file();
			}
		}else{
			isClick(0);
		}
	});
	disableScroll();
	reset();
}
//账户取款
function withdrawal(){
	var atm = $('input[name="withd_amot"]');
	atm.on('keyup',function(){
		var thisVal = $(this).val();
		if(thisVal !== '' && $('.ckbox').siblings('.checkbox').attr('checked')){
			isClick(1);
		}else{
			isClick(0);
		}
	});
	$('.ckbox').on('click',function(){
		if($(this).siblings('.checkbox').attr('checked') && atm.val() !== ''){
			isClick(1);
		}else{
			isClick(0);
		}
	})
	$('input[type="submit"]').on('click',function(){
		isClick(0);
		return false;
	});
	reset();
}
//按钮重置
function reset(){
	$('form input[type="reset"]').on('click',function(){
		isClick(0);
		$('.accounts_form .tip i,.codebox i').removeClass('success error');
		$('.filebox .upload-url').text('');
	});
}
//submit按钮是否可点击,1为可点击，0为不可点击
function isClick(isTrue){
	isTrue ? $('form input[type="submit"]').removeClass('disabled').addClass('bg').attr('disabled',false) : $('form input[type="submit"]').removeClass('bg').addClass('disabled').attr('disabled',true);
}
function disableScroll(){
	/*$('form input[type="submit"]').on('click',function(){
		$('#shadow').fadeIn();
		$('html,body').css('overflow','hidden');
		return false;
	});*/
	$('#shadow .btn').on('click',function(){
		$(this).parents('#shadow').fadeOut(function(){
			$('form').hide().siblings('.congratulate').show();
		});
		$('html,body').css({'overflow-x':'hidden','overflow-y': 'auto'});
	});
	$('.congratulate .carry').on('click',function(){
		$(this).parents('.congratulate').fadeOut().siblings('form').fadeIn().find('input[type="text"],textarea').val('');
		$('form .filebox .upload-url').text('');
	});
	
}
//银行注资上传文件
function upload_file(){
	$(".filebox .upload_file").change(function () {        
	    if ($(this).parent().html().indexOf("class=\"upload-url\"") != -1) {
	        var fileUrl = $(this).val();
	        $(this).parent().children(".upload-url").val(fileUrl);
	    }else{
	        var fileUrl = $(this).val();
	        var urlArr = fileUrl.split("\\");
	        var getName = urlArr[urlArr.length - 1];	//截取路径并获取文件的名字
	        $(this).parent().children(".tip").text(getName).fadeIn("slow");
	        if($('.filebox .upload-url').text() !== '' && $.trim($('form input[name="bk_acct_num"]').val()) !== '' && $.trim($('form .rk').val()) !== ''){
	        	$('form input[type="submit"]').removeClass('disabled').addClass('bg').attr('disabled',false);
	        }
	    }
	});
}
//得到当前月份有多少天
function getDays(year,month) {
    var date = new Date();
 	var day = new Date(year, month, 0);
 	return day.getDate();
}
var birth;
//下拉日期对象
function DateTime(){
	var date = new Date();
	var thisYear = date.getFullYear();		//当前年份
	var thisMonth = date.getMonth() + 1;	//当前月份
	var thisDay = date.getDate();			//当前天数
	this.init = function(){
		var _this = this;
		var year = $('<div class="year"><div class="thisVal"></div><ul></ul></div><span class="dt">Y</span>');		
		var month = $('<div class="month"><div class="thisVal"></div><ul></ul></div><span class="dt">M</span>');
		var day = $('<div class="day"><div class="thisVal"></div><ul></ul></div><span class="dt">D</span>');
		month.appendTo($('.datebox'));
		day.appendTo($('.datebox'));
		year.appendTo($('.datebox'));

		//创建年份下拉
		for(var i = thisYear;i >= (thisYear - 100);i--){
			var Li = $('<li>'+i+'</li>');
			Li.appendTo($('.year ul'));
		}
		//创建月份下拉
		for(var i = 1;i <= 12;i++){
			var Li = $('<li>'+i+'</li>');
			Li.appendTo($('.month ul'));
		}
		//创建天数下拉
		for(var i = 1;i <= getDays(thisYear,thisMonth);i++){
			var Li = $('<li>'+i+'</li>');
			Li.appendTo($('.day ul'));
		}

		//默认选中当前时间
		$('.year').each(function(){
			$(this).find('.thisVal').text(thisYear);
			$(this).siblings('input[name="year"]').val(thisYear);
		});
		$('.month').each(function(){
			$(this).find('.thisVal').text(thisMonth);
			$(this).siblings('input[name="month"]').val(thisMonth);
		});
		$('.day').each(function(){
			//遍历设置每个的第一个子节点
			$(this).find('.thisVal').text(thisDay);
			$(this).siblings('input[name="day"]').val(thisDay);
		});

		//点击展开
		$('.year').click(function(event){
			event.stopPropagation();	//阻止事件冒泡
			datetime.toggle($(this));
		});
		$('.month').click(function(event){
			event.stopPropagation();	//阻止事件冒泡
			datetime.toggle($(this));
		});
		$('.day').click(function(event){
			event.stopPropagation();	//阻止事件冒泡
			datetime.toggle($(this));
		});

		//选中当前年，月，日
		$('.year ul>li').on('click',function(){
			_thisVal = $(this).text();
			thisYear = _thisVal;
			$('.day ul li').remove();
			for(var i = 1;i <= getDays(thisYear,thisMonth);i++){
				var Li = $('<li>'+i+'</li>');
				Li.appendTo($('.day ul'));
			}
			$(this).parent().siblings('.thisVal').text(thisYear);
			$(this).parents('.year').siblings('input[name="year"]').val(thisYear);
			$(this).parents('.year').siblings('input[name="birthday"]').val(_this.result());
		});
		$('.month ul>li').on('click',function(){
			_thisVal = $(this).text();
			thisMonth = _thisVal;
			$('.day ul li').remove();
			for(var i = 1;i <= getDays(thisYear,thisMonth);i++){
				var Li = $('<li>'+i+'</li>');
				Li.appendTo($('.day ul'));
			}
			$(this).parent().siblings('.thisVal').text(thisMonth);
			$(this).parents('.month').siblings('input[name="month"]').val(thisMonth);
			$(this).parents('.month').siblings('input[name="birthday"]').val(_this.result());
			datetime.dayLi($('.day ul>li'));
		});
		$('input[name="birthday"]').val(this.result());
		datetime.dayLi($('.day ul>li'));
	};
	this.result = function(){
		thisMonth = parseInt(thisMonth)<10?'0'+parseInt(thisMonth):thisMonth;
		thisDay = parseInt(thisDay)<10?'0'+parseInt(thisDay):thisDay;
		return thisYear + '-' + thisMonth + '-' + thisDay;
		//console.log(thisYear + '/' + thisMonth + '/' + thisDay);
	};
	this.toggle = function(obj){	//是否展开下拉菜单
		if(obj.hasClass('toggle')){
			obj.removeClass('toggle');
		}else{
			obj.addClass('toggle').siblings().removeClass('toggle');;
		}
	};
	this.dayLi = function(obj){
		var _this = this;
		obj.on('click',function(){
			_thisVal = $(this).text();
			thisDay = _thisVal;
			$(this).parent().siblings('.thisVal').text(thisDay);
			$(this).parent().parent().siblings('input[name="day"]').val(thisDay);
			$(this).parent().parent().siblings('input[name="birthday"]').val(_this.result());
		})
	};
	$(document).click(function(){
		$('.year,.month,.day').removeClass('toggle');
	});
}

/**
	验证码
	minLen最小长度
	maxLen最大长度
	isTrue是否产生4 ~（多位）
**/
function createCode(minLen,maxLen,isTrue){
	var arr = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K' , 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];
	var str = '',ran = minLen;
	if(isTrue){
		ran = Math.ceil(Math.random() * (maxLen - minLen)) + minLen;
	}
	for(var i = 0;i < ran;i++){
		num = Math.round(Math.random() * (arr.length - 1));
		str += arr[num];
	}
	return str;
}

/**
	滚动条
**/
function scrollBar(obj){
	var oDiv = $('<div id="scrollbar"><span></span></div>');	//创建元素
	oDiv.appendTo(obj);		//添加到obj后面
	var scrollbar = $('#scrollbar');		//滚动条
	var bar = $('#scrollbar span');			//滚动条槽块
	var content_box = $('.content_box');	//内容区高度
	var oparent = content_box.parent();		//内容区父类高度
	var size = 2;	//滑轮每次滑动的高度
	bar.bind('mousedown',function(e){
		var ev = e || window.event;
		e.preventDefault = e.preventDefault ? e.preventDefault() : e.returnValue = false;		//阻止默认事件
		var disY = ev.clientY - $(this).position().top;
		$(document).bind('mousemove',function(e){
			var ev = e || window.event;
			var t = ev.clientY - disY;
			common(t);
		});
		$(document).bind('mouseup',function(){
			$(document).unbind('mousemove');
			$(document).unbind('mouseup');
		})
	});

	//鼠标滑轮滑动
	obj.bind('mousewheel DOMMouseScroll',function(e){
		var ev = e || window.event;
		if(ev.originalEvent.wheelDelta || e.originalEvent.detail){
			if(ev.originalEvent.wheelDelta){
				//chrome浏览器下
				if(ev.originalEvent.wheelDelta > 0){
					//向上
					var t = bar.position().top - size;
					common(t);
				}else{
					//向下
					var t = bar.position().top + size;
					common(t);
				}
			}else{
				//firefox
				if(e.originalEvent.detail < 0){
					//向上
					var t = bar.position().top - size;
					common(t);
				}else{
					//向下
					var t = bar.position().top + size;
					common(t);
				}
			}
		}
	});
	//鼠标移入到该区域禁止页面滚动
	$(window).bind('mousewheel DOMMouseScroll',function(e){
		var ev = e || window.event;
		var thisEle = e.srcElement || e.target;		//获取鼠标当前在哪个元素内，如果在该区域内，则禁止window滚动，否则取消禁止。
		if($(thisEle).is('.customer_notice .content_box') || $(thisEle).is('.customer_notice') || $(thisEle).is('.customer_notice .yellow')){
			return false;
		}else{
			return true;
		}
	});
	var common = function(t){
		if(t <= 0){
			t = 0;
		}else if(t >= (scrollbar.outerHeight() - bar.outerHeight())){
			t = scrollbar.outerHeight() - bar.outerHeight();
		}
		//得到滚动条和内容区的比例
		var scale = t / (scrollbar.outerHeight() - bar.outerHeight());
		var content_top = scale * (content_box.outerHeight() - oparent.outerHeight());
		content_box.css('marginTop',-content_top + 'px');
		bar.css('top',t);
	}
}
selectBox();
sliderMenu();
banner();
keyWordSearch();
demo_account();
nextStep();
agreement();
scrollBar($('.customer_notice'));
online_deposit();
injection();
withdrawal();