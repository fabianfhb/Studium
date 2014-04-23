/**
 * @author: Fabian Ullmann, Christian Herb
 * 
 */

var detailView;
var uebersichtView;
var backBtn;
var history = new Array();

function init(){
	console.log("onLoaded()");
	
	detailView = document.getElementById("detailView");
	uebersichtView = document.getElementById("uebersichtView");
	backBtn = document.getElementById("backBtn");
	
	
	backBtn.style.visibility = "hidden";
	backBtn.onclick = showLastView;
	
	addToHistory(uebersichtView);
	generateDetailViews();
}






function generateDetailViews(){
	var details = document.querySelectorAll(".weiterLesen");
	
	for(var i=0; i<details.length;i++){
		var tmp = details[i];
		
		
		tmp.addEventListener('click', function(event) {
			showMore(this.parentNode.querySelector('article').cloneNode(true));
		});
	}
	
}

function showMore(article){
	
	detailView.replaceChild(article, detailView.querySelector('article'));
	
	changeView(uebersichtView, detailView);	
	addToHistory(detailView);
	
}

function changeView(hideView, showView){


	hideView.style.visibility = 'hidden';
	showView.style.visibility = "visible";
}

function showLastView(){
	console.log("showLastView");
	
	var hide 	= history.pop(),
		le 		= history.length-1,
		show 	= history[le];
	
	if(le==0)backBtn.style.visibility='hidden';
	
	changeView(hide, show);
	
	
}

function addToHistory(view, terms){
	
	history.push(view);
	if(history.length>1) backBtn.style.visibility = "visible";
	
	
}