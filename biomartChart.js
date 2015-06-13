var week_Num = 365/7;

//更新数据
//询价量
var askPrice_update = [
	0,
	128,  //1w
	908, //2w
	1344, //3w
	916, //4w
	913, //5w
	708, //6w
	460, //7w
	156, //8w
	424, //9w
	998, //10w
	964, //11w
	1076, //12w
	1212, //13w
	1318, //14w
	1193, //15w
	1163, //16w
	1472, //17w
	1039, //18w
	1521, //19w
	1060, //20w
	947,  //21w
	1019, //22w
	986, //23w
	883, //24w

];
//实验PV
var pageView_Exp = [
	0,
	12965,  //1w
	87132, //2w
	83681, //3w
	84828, //4w
	83051, //5w
	76092, //6w
	52444, //7w
	21599, //8w
	40744, //9w
	72464, //10w
	79602, //11w
	96454, //12w
	101004, //13w
	116480, //14w
	90815,   //15w
	97187, //16w
	101002, //17w
	84396, //18w
	114618, //19w
	106998, //20w
	106753, //21w
	101794, //22w
	99494, //23w
	87169, //24w
	



];
//产品PV
var pageView_Prod = [
	0,
	17111, //1w
	163929, //2w
	172275, //3w
	161860, //4w
	157524, //5w
	142979, //6w
	98526, //7w
	35967, //8w
	85256, //9w
	166490, //10w
	176458, //11w
	175623, //12w
	171365, //13w
	152648, //14w
	135093, //15w
	148388, //16w
	159298, //17w
	124679, //18w
	174661, //19w
	174457, //20w
	200650, //21w
	176405, //22w
	161404, //23w
	162915, //24w


];
//资讯PV
var pageView_News = [
	0,
	9454, //1w
	53235, //2w
	42233, //3w
	41996, //4w
	49158, //5w
	34614, //6w
	28123, //7w
	12709, //8w
	27619, //9w
	40531, //10w
	35580, //11w
	36680, //12w
	39160, //13w
	41714, //14w
	34729, //15w
	43585, //16w
	34771, //17w
	25905, //18w
	33386, //19w
	32622, //20w
	36508, //21w
	32216, //22w
	28314, //23w
	29141, //24w


];



function drawPic(base,dream,id,updatedat,last_year){
	//从canvas里拿内容
	var ctx = document.getElementById(id).getContext("2d");
	//设置横坐标base指标 Dream指标
	var labels_of_x = new Array();
	var base_Num = new Array();
	var dream_Num = new Array();
	var updatedata = new Array();
	var last_year1 = new Array();

   
    updatedata = updatedat;
    for (var i=0;i<updatedata.length;i++){
    	if(i !== 0){
    		updatedata[i] += updatedata[i-1];
    	}else{
    		updatedata[i] = 0;
    	}
    }
	
    last_year1 = last_year;
    for (var i=0;i<last_year1.length;i++){
    	if(i !== 0){
    		last_year1[i] += last_year1[i-1];
    	}else{
    		last_year1[i] = 0;
    	}
    }

	for (var i=0;i<week_Num;i++){
		labels_of_x[i] = i;
		labels_of_x.toString();
		base_Num[i] = (base/week_Num)*(i);
		dream_Num[i] = (dream/week_Num)*(i);
	}


	var data={

		labels : labels_of_x,
		datasets : [
	//Base指标
		{
			fillColor : "rgba(135,206,255,0.5)",
			strokeColor : "rgba(232,232,232,0.8)",
			pointColor : "rgba(139,206,255,1)",
			pointStrokeColor : "#fff",
			data : base_Num,
			datasetFill : false
		},
	//Dream指标
		{
			fillColor : "rgba(255,165,0,0.5)",
			strokeColor : "rgba(232,232,232 ,1)",
			pointColor : "rgba(255,165,0,1)",
			pointStrokeColor : "#fff",
			data : dream_Num
		},

	// 去年数据
		{
			fillColor : "rgba(255,130,171,0)",
			strokeColor : "rgba(255,130,171 ,0)",
			pointColor : "rgba(255,130,171,0)",
			pointStrokeColor : "#fff",
			data : last_year1
		},
	//每周数据更新
		{
			fillColor : "rgba(132,112,255,0.5)",
			strokeColor : "rgba(255,165,0,1)",
			pointColor : "rgba(132,112,255,1)",
			pointStrokeColor : "#fff",
			data : updatedata,
		},
		]

		
	};

	options = {

		datasetFill : false,
		scaleShowLabels: false,
		pointDot : false,
		scaleShowHorizontalLines: false,
		scaleShowVerticalLines: false,

		
	};


	var myNewChart = new Chart(ctx).Line(data,options);
} 

//上一年询价
var last_year_Xunjia = [
	372,
	761,
	716,
	421,
	121,
	246,
	1050,
	1050,
	1050,
	1050,
	1050,
];

//上一年实验PV
var last_year_exppv = [
	83051,
	83051,
	83051,
	83051,
	83051,
];
//上一年产品PV
var last_year_prodpv = [
	163929,
	163929,
	163929,
	163929,
	163929,

];
//上一年资讯PV
var last_year_newspv = [
	163929,
	163929,
	163929,

];
drawPic(60000,67000,"myChart",askPrice_update,last_year_Xunjia);  //画询价图
drawPic(5893933,7367416,"myChartExp",pageView_Exp,last_year_exppv); //画实验PV
drawPic(9703592,11644310,"myChartProd",pageView_Prod,last_year_prodpv);//画产品PV
drawPic(3766023,5021364,"myChartNews",pageView_News,last_year_newspv); //画资讯PV