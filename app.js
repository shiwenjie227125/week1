var arr=[1,2,2,5,4,5,3];
function array(arr){
	var brr=[];
	for(var i=0;i<arr.length;i++){
		if(brr.indexOf(arr[i])==-1){
			brr.push(arr[i])
		}
	}
	console.log(brr)
}
array(arr)
