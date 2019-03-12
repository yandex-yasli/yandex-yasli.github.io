var MassElem = ['token','token1','token2','token3','token4','token5','token6', 'token7','token8','token9','token10',
'token11','token12','token13','token14','token15', 'token16', 'token17', 'token18', 'token19', 'token20', 
'token21', 'token22', 'token23', 'token24','token25', 'token26', 'token27'];
MassElem.forEach(function(item){
	var menuElem = document.getElementById(item);
	var titleElem = menuElem.querySelector('.title');
	titleElem.onclick = function() {
    menuElem.classList.toggle('open');
    };
});
