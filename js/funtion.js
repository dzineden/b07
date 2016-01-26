
var visibleDiv = document.getElementById('monday');
visibleDiv.style.display = "block";


function workout () {
	dow = document.getElementById('dayofweek').value;
	changetheDiv(dow);
};

function changetheDiv (dayofweek) {
// body...
	visibleDiv.style.display = 'none';
	console.log(dayofweek);
	visibleDiv = document.getElementById(dayofweek);
	visibleDiv.style.display = "block";
};