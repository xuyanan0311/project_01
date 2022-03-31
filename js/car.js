$(function () {
    getSum();
    // console.log(1);
    // 1、全选
    $(".checkall").change(function () {
        $(".list-checkbox").prop("checked", $(this).prop("checked"));
    })

    // 2、复选

    $(".list-checkbox").change(function () {
        // console.log($(".list-checkbox:checked").length);
        // if ($(".list-checkbox:checked").length == 3) {
        //     $(".checkall").prop("checked", true);
        // }
        // else {
        //     $(".checkall").prop("checked", false);

        // }
        $(".checkall").prop("checked", $(".list-checkbox:checked").length == $(".cart-item").length);
    })


    // 3、加减

    $(".decrement").click(function () {
        var target = $(this).siblings(".itxt");
        var num = target.val();
        num--;
        if (num === 0) {
            return;
        }
        target.val(num);
        // 商品价格小计
        var price = $(this).parents(".p-num").siblings(".p-price").html();//获取单价
        price = price.substr(1);
        var money = price * num;
        console.log(money);
        $(this).parents(".p-num").siblings(".p-sum").html('￥' + money)
        getSum();
    })
    $(".increment").click(function () {
        var target = $(this).siblings(".itxt");
        var num = target.val();
        num++;
        target.val(num)
        var price = $(this).parents(".p-num").siblings(".p-price").html();//获取单价
        price = price.substr(1);
        var money = price * num;
        console.log(money);
        $(this).parents(".p-num").siblings(".p-sum").html('￥' + money)
        getSum();
    })


    // 用户修改文本框里的值

    $(".itxt").change(function () {
        var num = $(this).val();
        var price = $(this).parents(".p-num").siblings(".p-price").html();//获取单价
        price = price.substr(1);
        var money = price * num;
        $(this).parents(".p-num").siblings(".p-sum").html('￥' + money);
        getSum();
    })


    // 商品数量和总价
    function getSum() {
        var cout = 0;
        var money = 0;
        $(".itxt").each(function (i, ele) {
            cout += parseInt($(ele).val());
        })
        $(".amount-sum em").text(cout);
        $(".p-sum").each(function (i, ele) {
            var target = $(ele).text().substr(1);
            money += parseFloat(target);
        })
        $(".price-sum em").text('￥' + money.toFixed(2));

    }

    // 删除操作

    $(".p-action a").click(function () {
        $(this).parents(".cart-item").remove();
        getSum();
    })
    $(".remove-batch").click(function () {
        $(".list-checkbox:checked").parents(".cart-item").remove();
        getSum();
    })
    $(".clear-all").click(function () {
        $(".cart-item").remove();
        getSum();
    })


})