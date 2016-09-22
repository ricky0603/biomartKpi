var week_Num = (365/7);

//更新数据
//询价量
var askPrice_update = [
	0, //0w
	150, //1w
	1092, //2w
	1031, //3w	
	1002, //4w
	820, //5w
	334, //6w
	168, //7w
	852, //8w
	1129, //9w	
	1668, //10w
	1586, //11w
	1803, //12w
	1507, //13w
	1253, //14w
	1167, //15w
	1780, //16w
	3897, //17w
	1335, //18w
	1000, //19w
	1208, //20w
	1302, //21w
	1096, //22w


];
//实验PV，临时改成整站 PV
var pageView_Exp = [
	0,
	288208, //1w
	776331, //2w
	838490, //3w
	771156, //4w
	567547, //5w
	278760, //6w
	141800, //7w
	497191, //8w	
	716591, //9w
	865971, //10w
	774273, //11w
	802883, //12w
	808615, //13w
	687814, //14w
	667902, //15w
	787220, //16w
	771084, //17w
	699257, //18w
	616074, //19w
	733405, //20w
	763861, //21w`
	767074, //22w
];
//产品PV
var pageView_Prod = [
	
];


//资讯PV
var pageView_News = [
	0,
	
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
			fillColor : "rgba(232,232,232,0.8)",
			strokeColor : "rgba(232,232,232,0.8)",
			pointColor : "rgba(232,232,232,0.8)",
			pointStrokeColor : "#fff",
			data : base_Num,
			datasetFill : false
		},
	//Dream指标
		{
			fillColor : "rgba(255,165,0,0.5)",
			strokeColor : "rgba(207,207,207,0.5)",
			pointColor : "rgba(207,207,207,1)",
			pointStrokeColor : "#fff",
			data : dream_Num
		},

	// 去年数据
		{
			fillColor : "rgba(255,130,171,1)",
			strokeColor : "rgba(191,239,255,0.8)",
			pointColor : "rgba(191,239,255,1)",
			pointStrokeColor : "#fff",
			data : last_year1
		},
	//每周数据更新
		{
			fillColor : "rgba(132,112,255,0.5)",
			strokeColor : "rgba(255,165,0,1)",
			pointColor : "rgba(255,165,0,1)",
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
		scaleOverlay : true,

		
	};


	var myNewChart = new Chart(ctx).Line(data,options);
} 

var last_year_Xunjia = [
	248,
	1200,
	1732,
	1208,
	1207,
	956,
	653,
	282,
	609,
	1310,
	1268,
	1405,
	1571,
	2310,
	1547,
	1511,
	1888,
	1360,
	1948,
	1385,
	1247,
	1335,
	1295,
	1268,
	1048,
	1053,
	1031,
	1515,
	1413,
	1325,
	1170,
	1042,
	1450,
	1210,
	1178,
	952,
	1288,
	1339,
	1300,
	817,
	1120,
	1597,
	1424,
	1551,
	1529,
	1457,
	1471,
	1533,
	1449,
	1693,
	1685,
	1391,
	1892,
 ];

 //上一年实验PV 
var last_year_exppv = [
	129788,
	743753,
	731440,
	703892,
	700746,
	616186,
	469532,
	195118,
	408635,
	715099,
	809889,
	865658,
	883880,
	836478,
	751705,
	847216,
	895189,
	779120,
	996304,
	979125,
	1005053,
	948405,
	923045,
	925816,
	823901,
	743924,
	835394,
	943058,
	962954,
	974415,
	894026,
	817673,
	709545,
	727297,
	839797,
	695022,
	908711,
	963178,
	865990,
	584101,
	695402,
	926254,
	1035602,
	1035602,
	1035602,
	1035602,
	1035602,
	1027604,
	994539,
	1035602,
	1035602,
	1035602,
	1035602,
];
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
drawPic(69540,75909,"myChart",askPrice_update,last_year_Xunjia);  //画询价图
drawPic(44114243,47265261,"myChartExp",pageView_Exp,last_year_exppv); //画实验PV
drawPic(9703592,11644310,"myChartProd",pageView_Prod,last_year_prodpv);//画产品PV
drawPic(3766023,5021364,"myChartNews",pageView_News,last_year_newspv); //画资讯PV
