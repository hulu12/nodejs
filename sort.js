'use strict';

/**
 *  快速排序算法 数组
 */

exports.quicksort= function(arr,dir){
	//console.log('quicksort');
	var dir= dir||'ASC';

	if(arr.length==0) return [];
	var pivot=arr[0];
	var left=new Array();
	var right=new Array();

	if(dir==='ASC'){
		for(var i=1;i < arr.length;i++){
			arr[i]<pivot?left.push(arr[i]):right.push(arr[i]);
		}
	}else if(dir==='DESC'){
		for(var i=1;i < arr.length;i++){
			arr[i]>pivot?left.push(arr[i]):right.push(arr[i]);
		}
	}

	return this.quicksort(left,dir).concat(pivot,this.quicksort(right,dir));


};


/**
 * 快速排序 属性
 */
exports.quicksortObj= function (arr,key,dir){

	if(arr.length == 0) return [];
	var dir=dir||'ASC';
	var pivot=arr[0];
	var left= new Array();
	var right =new Array();
	var key =key ||'id';
	if(dir=='ASC'){
		for (var i=1;i<arr.length;i++){
			arr[i][key]<pivot[key]?left.push(arr[i]):right.push(arr[i]);
		}
	}else if(dir=='DESC'){
		for (var i=1;i<arr.length;i++){
			arr[i][key]>pivot[key]?left.push(arr[i]):right.push(arr[i]);
		}
	}

	return this.quicksortObj(left,key,dir).concat(pivot,this.quicksortObj(right,key,dir));

};


/**
 * 桶排序 未完待续
 */

exports.bucketsort = function(arr,count){

	if(arr.length==0) return [];

	count=count>0?count:10;

	var  min = arr[0];
	var  max = arr[0];
    
    for(i=1;i<arr.length;i++){
    	min = min<arr[i]?min:arr[i];
    	max = max>arr[i]?max:arr[i];
    }
    var delta=(max-min+1)/count;
    var buckets=[];
    
    for (var i=1;i<arr.length;i++){
    	var idx = Math.floor((arr[i]-min)/delta)
    	console.log(idx);
    }


};


