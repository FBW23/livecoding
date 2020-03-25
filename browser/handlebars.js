const persons = {
  people: [
    "Yehuda Katz",
    "Alan Johnson",
    "Charles Jolley"
  ]
};



// COMPILING the template
const template = Handlebars.compile("<p>{{firstname}} {{lastname}}</p>");

// execute the compiled template and print the output to the console
const data = (template({
  firstname: "Yehuda",
  lastname: "Katz"
}));

console.log(data);
console.log(document.querySelector('h1'));
document.querySelector('h1').append(data);

console.log(Handlebars);

document.addEventListener("DOMContentLoaded", function () {

  // Define our data object
  const context = {
    "firstName": "Martina",
    "lastName": "Freundorfer",
    "city": "London",
    "street": "Baker Street",
    "number": "221B"
  };
  
  const anyName = {
    people: [
      "Yehuda Katz",
      "Alan Johnson",
      "Charles Jolley",
      "Yehuda Katz",
      "Alan Johnson",
      "Charles Jolley"
    ]
  };


  // Grab the template script
  const theTemplateScript = document.querySelector("#address-template").innerHTML;
  const thePersonalScript = document.querySelector("#personal-template").innerHTML;
  const theUlScript = document.querySelector("#ul-template").innerHTML;

  // Compile the template
  const theTemplate = Handlebars.compile(theTemplateScript);
  const thePersonal = Handlebars.compile(thePersonalScript);
  const theUl = Handlebars.compile(theUlScript);

  // Pass our data to the template
  const theCompiledHtml = theTemplate(context);
  const theCompiledPersonal = thePersonal(context);
  const theCompiledUl = theUl(anyName);


  // Add the compiled html to the page
  document.querySelector('.content-placeholder').innerHTML = theCompiledHtml;
  document.querySelector('.personal-placeholder').innerHTML = theCompiledPersonal;
  document.querySelector('.ul-placeholder').innerHTML = theCompiledUl;

});