// home controllers
exports.Index = function (request, response) {
  response.pageData = { title: 'Whose Shared Experiences?' };
  response.render('index', response.pageData); 
};
