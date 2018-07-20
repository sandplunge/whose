// home controllers
exports.Index = function (request, response) {
  response.pageData = { title: 'Whose Shared Experiences?' };
  response.render('index', response.pageData); 
};

exports.About = function (request, response) {
  response.pageData = { title: 'About WHOSE' };
  response.render('about', response.pageData); 
};
