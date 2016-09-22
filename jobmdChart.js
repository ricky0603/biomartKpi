var week_Num = 365/7;

//更新数据
//简历投递量
var apply_update = [
	0,
	45333, //1
	42221, //2
	39161, //3
	29012, //4
	18421, //5
	13434, //6
	54995, //7
    61044, //8
    63551, //9
    58350, //10
    52261, //11
    54475, //12
    53801, //13
    47064, //14
    44465, //15
    39025, //16
    43059, //17
    35188, //18
    38896, //19
    42458, //20
    42720, //21
    44431, //22
    36910, //23




];
//UV
var uniqueVisitor_update = [
	0,
	222558, //1
	208991, //2
	209322, //3
	168338, //4
	105623, //5
	83464, //6
	214209, //7
    257726, //8
    312498, //9
    291661, //10
    279301, //11
    304747, //12
    268195, //13
    251788, //14
    252437, //15
    241248, //16
    246823, //17
    243936, //18
    257728, //19
    264667, //20
    244082, //21
    262527, //22
    204932, //23


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
	//base指标
		{
            fillColor : "rgba(232,232,232,0.8)",
            strokeColor : "rgba(232,232,232,0.8)",
            pointColor : "rgba(232,232,232,0.8)",
            pointStrokeColor : "#fff",
            data : base_Num,
            datasetFill : false
		},

	//dream指标
		{
            fillColor : "rgba(232,232,232,1)",
            strokeColor : "rgba(232,232,232,1)",
            pointColor : "rgba(232,232,232,1",
            pointStrokeColor : "#fff",
            data : dream_Num
            
        },
	// 去年数据
		{
		    fillColor : "rgba(244,164,96,0.5)",
            strokeColor : "rgba(244,164,96,1)",
            pointColor : "rgba(244,164,96,1)",
            pointStrokeColor : "#fff",
            data : last_year1
		},
	//每周数据更新
		{
			fillColor : "rgba(24,116,205,1)",
			strokeColor : "rgba(24,116,205,1)",
			pointColor : "rgba(224,116,205,1)",
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

//去年简历投递量
var last_year_apply = [
    0,
    30393,
    26497,
    24610,
    22602,
    18663,
    16552,
    7836,
    26454,
    41395,
    39911,
    35368,
    36107,
    32080,
    29644,
    26541,
    23647,
    19656,
    21401,
    19419,
    22286,
    22441,
    21762,
    21259,
    20228,
    19683,
    25025,
    24347,
    23915,
    23383,
    24388,
    22890,
    22040,
    19464,
    20162,
    18078,
    18193,
    20339,
    20359,
    14358,
    20026,
    25559,
    27533,
    32064,
    32250,
    34992,
    41097,
    43345,
    43981,
    39333,
    36814,
    39361,
    30824,
];

//去年UV
var last_year_uniqueVisitor = [
    0,
    337996,
    280515,
    471574,
    263195,
    243572,
    223929,
    154324,
    276581,
    367051,
    362258,
    374022,
    398157,
    339300,
    306796,
    271143,
    246864,
    257329,
    314393,
    331269,
    306880,
    307376,
    323861,
    290606,
    278861,
    275253,
    355002,
    342693,
    349918,
    356337,
    320076,
    325644,
    299411,
    289111,
    289127,
    274338,
    268120,
    313257,
    270662,
    199641,
    212524,
    220692,
    223723,
    232958,
    235616,
    234030,
    218972,
    262626,
    274541,
    215256,
    223172,
    267799,
    162453,
];

drawPic(1999200,2206014,"myChart",apply_update,last_year_apply);//画简历投递量图
drawPic(20154509,21647435,"myChartExp",uniqueVisitor_update,last_year_uniqueVisitor);//画UV