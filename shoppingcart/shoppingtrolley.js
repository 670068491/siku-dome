// 添加数量
//点击增加
$(".shop-one-right-down-num .plus").click(function() {
	var $num = $(this).siblings(".nums")
	var num = parseInt($num.text());
	num++;
	$num.text(num);
	var price = parseInt($(this).parent().siblings(".shop-one-right-down-money").find("span").text().replace(/[^0-9]/ig,
		""));
	$(this).parent().siblings(".shop-one-right-down-small").find("span").text(num * price);
	// 复选框
	var checked = $(this).parents(".shop-one-right").siblings(".shop-one-left").find("input").prop(
		"checked");
	if (checked == true) {
		var ns = parseInt($(".shop-cover-payment-num").text());
		var m = parseFloat($(this).parents(".shop-one-right-down-num").siblings(".shop-one-right-down-money").find("span").text()
			.replace(/[^0-9]/ig, ""));
		var ms = parseInt($(".shop-cover-money span").text());
		$(".shop-cover-payment-num").text(ns + 1);
		$(".shop-cover-money span").text(ms + m);
	}
})
//点击减少
$(".shop-one-right-down-num .subtract").click(function() {
	var $num = $(this).siblings(".nums")
	var num = parseInt($num.text());
	// console.log(this);
	num--;
	if (num < 1) {

	} else {
		$num.text(num);
		//小计
		var price = parseInt($(this).parent().siblings(".shop-one-right-down-money").find("span").text().replace(/[^0-9]/ig,
			""));

		$(this).parent().siblings(".shop-one-right-down-small").find("span").text(num * price);
		// 复选框
		var checked = $(this).parents(".shop-one-right").siblings(".shop-one-left").find("input").prop(
			"checked");
		if (checked == true) {
			var ns = parseInt($(".shop-cover-payment-num").text());
			var m = parseFloat($(this).parents(".shop-one-right-down-num").siblings(".shop-one-right-down-money").find("span")
				.text()
				.replace(/[^0-9]/ig, ""));
			var ms = parseInt($(".shop-cover-money span").text());
			// console.log(ns);
			$(".shop-cover-payment-num").text(ns - 1);
			$(".shop-cover-money span").text(ms - m);
		}
	}
});
//计算总数量
function cal_Num() {
	var sum = 0;
	$(".shop-one-right-down-num .nums").each(function(index) {
		var n = parseInt($(this).text());
		sum += n;
	})
	$(".shop-cover-payment-num").text(sum);
}
//计算总价格
function cal_Cost() {
	var aum = 0;
	$(".shop-one-right-down-small span").each(function(index) {
		var m = parseFloat($(this).text());
		// console.log(m);
		aum += m;
	})
	$(".shop-cover-money span").text(aum);
}
//一键全选
$("#checkAll").click(function() {
	var checked = $(this).prop("checked");
	$(".shop-one-left input:checkbox").prop("checked", checked);
	if (checked == true) {
		cal_Num();
		cal_Cost();
		$(".icon-weixuanze").css("display", "none");
		$(".icon-xuanzhong").css("display", "block");
		// $(".shop-one-left input").removeClass("off");
		$(".shop-one-left input").addClass("on");
	} else {
		$(".icon-weixuanze").css("display", "block");
		$(".icon-xuanzhong").css("display", "none");
		$(".shop-cover-money span").text("0");
		$(".shop-cover-payment-num").text("0");
		$(".shop-one-left input").removeClass("on");
	}
});
// 判断全选
//总价
$(".shop-one-left input:checkbox").click(function() {
	// 总共多少个
	var total = $(".shop-one-left input:checkbox").length;
	//选中的checkbox
	var chked = $(".shop-one-left input:checked").length;
	if (chked == total) {
		$("#checkAll").prop("checked", true);
		$(".shop-cover-all .icon-weixuanze").css("display", "none");
		$(".shop-cover-all .icon-xuanzhong").css("display", "block");
	} else {
		$("#checkAll").prop("checked", false);
		$(".shop-cover-all .icon-weixuanze").css("display", "block");
		$(".shop-cover-all .icon-xuanzhong").css("display", "none");
	}
	// 计算价格
	var checked = $(this).prop("checked");
	var n = parseInt($(this).parents(".shop-one-left").siblings(".shop-one-right").find(".nums").text());
	var ns = parseFloat($(".shop-cover-payment-num").text());
	var m = parseFloat($(this).parents(".shop-one-left").siblings(".shop-one-right").find(".shop-one-right-down-small").find(
		"span").text());
	var ms = parseFloat($(".shop-cover-money span").text());
	if (checked == true) {
		$(this).siblings(".icon-xuanzhong").css("display", "block");
		$(this).siblings(".icon-weixuanze").css("display", "none");
		$(".shop-cover-payment-num").text(ns + n);
		// console.log(ns);
		// console.log(n);
		$(".shop-cover-money span").text(ms + m);
	} else {
		$(this).siblings(".icon-xuanzhong").css("display", "none");
		$(this).siblings(".icon-weixuanze").css("display", "block");
		$(".shop-cover-payment-num").text(ns - n);
		$(".shop-cover-money span").text(ms - m);
	}
	var flag = $(this).hasClass("on");
	if (flag) {
		$(this).removeClass("on");
	} else {
		$(this).addClass("on");
	}
})
// 点击编辑
$(".top-right").text("编辑")
$(".top-right").click(function() {
	var x = $(this).text();
	if (x == "编辑") {
		$(this).text("完成");
		$(".shop-cover-payment-cover").css("display", "block");
		$(".shop-cover-money-cover").css("display", "block");
	} else {
		$(this).text("编辑");
		$(".shop-cover-payment-cover").css("display", "none");
		$(".shop-cover-money-cover").css("display", "none");

	}
})

// 点击删除
$(".shop-cover-payment-cover").click(function() {
	// 	console.log(ns);
	var flag = $(".shop-one-left input").hasClass("on");
	if (flag) {
		// 数量
		var n = parseInt($(".on").parent().siblings(".shop-one-right").find(".nums").text());
		var ns = parseInt($(".shop-cover-payment-num").text());
		$(".shop-cover-payment-num").text("0");
		// 价格
		var m = parseFloat($(".on").parent().siblings(".shop-one-right").find(".shop-one-right-down-small span").text());
		var ms = parseInt($(".shop-cover-money span").text());
		$(".shop-cover-money span").text("0");
		$(".on").parents(".shop-one").remove();
	} else {
		// $(this).addClass("on");
	}
})
