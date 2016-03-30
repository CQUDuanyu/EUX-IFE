/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
window.onload = function(){
var aqiData = {};
var result = '<thead><tr><td>城市</td><td>空气质量</td><td>操作</td></tr></thead>';
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city  = document.getElementById("aqi-city-input").value.trim();
	var score = document.getElementById("aqi-value-input").value.trim();
	score = parseInt(score); //将字符串转化为数字
	var isEnglish = /[A-Za-z]/;
	var isChinese = /[\u4E00-\u9FA5]/;

	
	//判断中英文
	if(!(isEnglish.test(city)||isChinese.test(city))){
		alert("仅支持中英文字符");
	}

	//判断是否为整数
	if(!(Number.isInteger(score))){
		alert("仅支持整数");
	}

	aqiData[city] = score;
    
	return aqiData;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var table = document.getElementById("aqi-table");
	var tableChild = table.childNodes;
	for ( var i = tableChild.length-1;i >= 0 ;i--){
		if(tableChild){
			table.removeChild(tableChild[i]);
		}else{
			break;
		}
	}
	table.innerHTML += result;
	for (var city in aqiData){
			
		table.innerHTML += '<td>' + city + '</td><td>' + aqiData[city] +'</td><td><button data-city='+city+'>删除</button></td>';
	}
	
	
}  


/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
  // do sth.
  delete aqiData[city];
  renderAqiList();
}

//
function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  document.getElementById("add-btn").onclick = function(){
        addBtnHandle();
  }
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  var table = document.getElementById("aqi-table");
  table.addEventListener("click",function(event){
  	if(event.target.nodeName.toLowerCase()==='button')
  	delBtnHandle.call(null,event.target.dataset.city);
  },false);
}

init();
}