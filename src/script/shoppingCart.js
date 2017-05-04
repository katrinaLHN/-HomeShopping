//全选操作
$(".allTop").click(function(){
	$(":checkbox").attr('checked',this.checked);
	// $("#checkSon").attr('checked',this.checked);
	// console.log($("#allFoot"));
});

$(".checkSon").click(function(){
	var flag=true;
	$(".checkSon").each(function(){
		if(!this.checked){
			flag=false;
		}
	})
	$(".allTop").attr('checked',flag);
})

//数量加减操作
$(".reduce").click(function(){
	var countNumder=$(".countNumder").val();
	console.log($(".countNumder").val())
	console.log($(".reduce"))
	// $(".countNumder").val("countNumder+");
})