$(".cover_two").click(function() {
	var name = $("#cover_one_one_name").val();
	var pho = $("#cover_one_two_pho").val();
	// 省市区
	var province = $("#delivery_prov").val();
	var city = $("#delivery_city").val();
	var district = $("#delivery_area").val();
	// 详细地址
	var text = $("#cover_one_four_text").val();
	
	var text_two = $("#cityResult").text();
	// console.log(province);
	// console.dir(name);

	var $div = $('<div class="two_one"><div class="two_one_up"><div class="two_one-up_name"><span>' + name +
		'</span></div><div class="two_one-up_phone"><span>' + pho +
		'</span></div></div><div class="two_one_middle"><div class="two_one_middle_one"><span>' +
		province +
		'</span></div><div class="two_one_middle_two"><span>' + city +
		'</span></div><div class="two_one_middle_three"><span>' + district +
		'</span></div><div class="two_one_middle_four"><span>' + text +
		'</span></div></div><div class="two_one_cover"></div><div class="two_one_down"><div class="two_one_down_one"><img src="img/1_03.png"></div><div class="two_one_down_two"><img src="img/1_06.png" class="two_delte"></div><div class="two_one_down_three">设为默认</div></div>'
	);

	var flag = $(this).hasClass("redact_two");
	if (flag) {
		if (!name) {
			alert("请输入姓名");
			return;
		}
		if (!pho) {
			alert("请输入手机号");
			return;
		}
		if (!text) {
			alert("请输入详细地址");
			return;
		}

		$(".redact").find(".two_one_up").find(".two_one-up_name").find("span").text(name);
		$(".redact").find(".two_one_up").find(".two_one-up_phone").find("span").text(pho);
		// 省市区
		$(".redact").find(".two_one_middle").find(".two_one_middle_one").find("span").text(text_two);
		
		$(".redact").find(".two_one_middle").find(".two_one_middle_two").remove();
		$(".redact").find(".two_one_middle").find(".two_one_middle_three").remove();

		// $(".redact").find(".two_one_middle").find(".two_one_middle_two").find("span").text(city);
		// $(".redact").find(".two_one_middle").find(".two_one_middle_three").find("span").text(district);
		// console.log(text_two);
		// 详细地址
		// console.log(text);
		$(".redact").find(".two_one_middle").find(".two_one_middle_four").find("span").text(text);
		//清空value
		$("#cover_one_one_name").val("");
		$("#cover_one_two_pho").val("");
		$("#delivery_prov").val("");
		$("#delivery_city").val("");
		$("#delivery_area").val("");
		$("#cover_one_four_text").val("");
		$("#cityResult").text("");
		
		$(this).removeClass("redact_two");
		$(".two_one_middle_four").removeClass("redact");
	} else {
		if (!name) {
			alert("请输入姓名");
			return;
		}
		if (!pho) {
			alert("请输入手机号");
			return;
		}
		if (!province) {
			alert("请选择地区");
			return;
		}
		if (!text) {
			alert("请输入详细地址");
			return;
		}
		//插入元素
		$(".two").append($div);
		//清空value
		$("#cover_one_one_name").val("");
		$("#cover_one_two_pho").val("");
		$("#delivery_prov").val("");
		$("#delivery_city").val("");
		$("#delivery_area").val("");
		$("#cover_one_four_text").val("");
		$("#cityResult").text("");

	}


	$(".site").css("display", "block");
	$(".cover").css("display", "none");
})

//删除评论-事件委托
$(".two").on("click", ".two_delte", function() {
	// console.log(this);
	$(this).parents(".two_one").remove();
});

// 编辑
$(".two").on("click", ".two_one_down_one", function() {

	$(this).parents(".two_one").addClass("redact");

	var name = $(this).parents(".two_one_down").siblings(".two_one_up").find(".two_one-up_name").find("span").text();
	var pho = $(this).parents(".two_one_down").siblings(".two_one_up").find(".two_one-up_phone").find("span").text();
	// 省市区
	var province = $(this).parents(".two_one_down").siblings(".two_one_middle").find(".two_one_middle_one").find("span")
		.text();
	var city = $(this).parents(".two_one_down").siblings(".two_one_middle").find(".two_one_middle_two").find("span").text();
	var district = $(this).parents(".two_one_down").siblings(".two_one_middle").find(".two_one_middle_three").find(
		"span").text();
	// 详细地址
	var text = $(this).parents(".two_one_down").siblings(".two_one_middle").find(".two_one_middle_four").find("span").text();
	// console.log(text);
	// console.dir($("#cover_one_one_name"));

	$("#cover_one_one_name").val(name);
	$("#cover_one_two_pho").val(pho);

	$("#cityResult").text(province + city + district);

	$("#cover_one_four_text").val(text);

	$(".cover_two").addClass("redact_two");

	$(".site").css("display", "none");
	$(".cover").css("display", "block");
})
