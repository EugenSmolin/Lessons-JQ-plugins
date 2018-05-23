// ===== Система кодирования ===== //
window.onload = function() {
	
	var str = 'Hello Base 64';
	var b64 = btoa(str); // система кодирования Base64
	var unicode = atob(b64); // система раскодирования
	console.log('Кодировать: ' + b64);
	console.log('Раскодировать: ' + unicode);
	
}