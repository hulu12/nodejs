var express=require('express')
  , mongoose=require('mongoose');

var 	mongoose = require("mongoose")
	,	Schema=mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/xing");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (err) {
    if(err) return console.log('err');
    
    // 定义Schema
    var Comments = new Schema({
    	  title : String
    	, body  : String 
    	, date  : Date

    });

    var Blogpost = new Schema({
    	 author	: {type:Schema.Types.ObjectId }
       , title  : {type:String, index  : true}
       , uid  	: {type:Number, unique : true}
       //, body   : String 
       , buf    : Buffer
       //, comments: [Comments]
       //, date   : Date
       , meta   :{
       		  votes : Number
       		, favs  : Number
       }	

    });

    //组合索引  Blogpost.index({ key : -1, otherKey: 1});

    var Post = mongoose.model( 'Blogposttest', Blogpost);

    new Post({
    	author :Schema.ObjectID
    	,title:'test003'
    	,uid : 1004
    	,meta :{
    		 votes  :132
    		,favs   :20
    	}
    }).save(function(err) {
    	if(err) return console.log(err);
    	console.log('it is easy');
    }); 

    //查询 

    Post.find()
       .select('author title uid meta.votes')
       .exec(function(err, posts) {
       		if(err) return console.log(err);
       		console.log(posts);
       });













	// console.log('yes you are working mongodb');
	// var kittySchema = mongoose.Schema({
	// 	name: String
	// });

	// kittySchema.methods.speak = function () {
	//   var greeting = this.name
	//     ? "Meow name is " + this.name
	//     : "I don't have a name";
	//   console.log(greeting);
	// }
	// var Kitten = mongoose.model('Kitten', kittySchema);
	// var fluffy = new Kitten({ name: 'pang' });
	// //fluffy.speak(); // "Meow name is fluffy"
	// //console.log(fluffy.name);
	
	// /**
	//  * 保存到mongodb
	//  */
	//  fluffy.save(function(err, fluffy) {
	//  	if(err) return console.log(err);
	//  	//fluffy.speak();
	//  });

	//  /**
	//   * 查询mongodb
	//  //  */
	//  // Kitten.find(function(err, kittens) {
	//  // 	if(err) return console.log(err);
	//  // 	console.log('all'+kittens);
	//  // });


});



