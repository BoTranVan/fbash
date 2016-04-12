var map = {
	js: 'javascript',
	py: 'python',
	rb: 'ruby'
};

module.exports = function(fileName){
	if(fileName.indexOf('.') == -1)
		return '';
	var ext = fileName.substring(fileName.indexOf('.')+1);
	if(ext in map)
		return map[ext];
	return ext;
}