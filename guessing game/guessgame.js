

function guess(){
	var g1 = document.getElementById("g1").value;
	var ng = document.getElementById("ng").value;
	document.getElementById('ng').setAttribute('readonly', 'readonly');
		if(ng === g1){
			document.getElementById("guess").innerHTML = '';
			document.getElementById('result').innerHTML = "<span style='color:green'>Your guess " + g1 + " is correct! </span>";
		}
		else{
			document.getElementById('result').innerHTML += g1+ "<span style='color:red'> is incorrect! Try again.<br>";
			document.getElementById("g1").value = '';
		}
	
}

function restart(){
	location.reload();
}