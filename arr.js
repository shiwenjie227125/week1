var arr=[1,2,3,2,5,4,5];
function array(arr){
	var brr=[];
	for(var i=0;i<arr.length;i++){
		var brr.sort();
		var str=[brr[0]];
		for(var i=1;i<arr.length;i++){
			if(brr[i]!=str[str.length-1]){
				str.push(brr[i])
			}
		}
	}
	console.log(str)
}
array(str)
