$(document).ready(function () {

    ["Помідори", "Печиво", "Сир"].forEach(function (a) {
        addItem(a);
    });

    $(".add-button").click(function () {
        addItem();
    });


    function addItem(arg) {
        var input = $(".new-item");
        var item = $($(".temp").html());
        var rightItem = $($(".tempRight").html());

        if (!arg) {
            arg = input.val();
        }
        if (arg.replace(/\s/g,"").length) {
            item.find(".item-name").text(arg);
            rightItem.find(".tovarText").text(arg);
            $(".zalItems").append(rightItem);
            $(".itemlist").append(item);
            input.val("");
            item.find(".X").click(function(){
                item.remove();
                rightItem.remove();
            });
            var bought = false;
            item.find(".cuplenoB").click(function(){
                if(!bought){
                    rightItem.find(".tovarText").css("text-decoration", "line-through");
                    rightItem.find(".odinCircle").css("text-decoration", "line-through");
                    [".green-button",".red-button",".X"].forEach(function (a){
                        item.find(a).css("visibility", "hidden");

                    });
                    item.find(".item-name").css("text-decoration", "line-through");
                    item.find(".cuplenoB").attr("data-tooltip","Відмітити товар як НЕ куплений");
                    item.find(".cuplenoB").text("Не куплено");

                    $(".kupleno").append(rightItem);
                    bought=true;



                }else{
                    rightItem.find(".tovarText").css("text-decoration", "none");
                    rightItem.find(".odinCircle").css("text-decoration", "none");
                    [".green-button",".red-button",".X"].forEach(function (a){
                        item.find(a).css("visibility", "visible");

                    });
                    item.find(".item-name").css("text-decoration", "none");
                    item.find(".cuplenoB").attr("data-tooltip","Відмітити товар як куплений");
                    item.find(".cuplenoB").text("Куплено");

                    $(".zalItems").append(rightItem);
                    bought=false;


                }

            });
            var oldName;
            item.find(".item-name").click(function(){
                if(!bought){
                    oldName = item.find(".item-name").text();
                    item.find(".change-name").css("display","inline-block");
                    item.find(".item-name").css("display","none");
                    item.find(".change-name").val(oldName);
                    item.find(".change-name").focus();

                }
            });
            item.find(".change-name").focusout(function(){
                var newName = item.find(".change-name").val();
                if(newName.replace(/\s/g,"").length){
                    item.find(".item-name").text(newName);
                    rightItem.find(".tovarText").text(newName);

                }else{
                    item.find(".item-name").text(oldName);
                    item.find(".change-name").val(oldName);

                }
                item.find(".item-name").css("display","inline-block");
                item.find(".change-name").css("display","none");
            });
            item.find(".green-button").click(function(){
                var nCount = item.find(".count").text();
                item.find(".count").text(+nCount+1);
                rightItem.find(".odinCircle").text(+nCount+1);
                item.find(".red-button").prop("disabled", false);

            });
            item.find(".red-button").click(function(){
                var nCount = parseInt(item.find(".count").text());
                if(nCount>1) {
                    item.find(".count").text(nCount - 1);
                    rightItem.find(".odinCircle").text(nCount - 1);
                    if(nCount-1===1){
                        item.find(".red-button").prop("disabled", true);
                    }
                }


            });
        }
        input.focus();

    }
    $(".new-item").keypress(function (e) {
        var keycode = (e.keyCode ? e.keyCode : e.which);
        if (keycode === 13) {
            addItem();
        }
    });

});