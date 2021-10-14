// creates the add-on menu and allows user to run the script
function onOpen(e){
  DocumentApp.getUi().createAddonMenu()
      .addItem('Start', 'showSidebar')
      .addToUi();
};

// preparation for the first time running the script
function onInstall(e) {
  onOpen(e);
};

// displays the sidebar
function showSidebar() {
  var ui = HtmlService
    .createTemplateFromFile("UI")
    .evaluate();
  ui.setTitle("Planner");
  DocumentApp.getUi().showSidebar(ui);
};

//creates popup to show graphs
function showAnalytics(){
  
  var htmlOutput = HtmlService.createTemplateFromFile("graphs").evaluate().setWidth(700).setHeight(700);
  DocumentApp.getUi().showModalDialog(htmlOutput, 'Assignment Analytics');
}



//outputs assignments to the google doc
function outputAssignment(assignment_str){

  var body = DocumentApp.getActiveDocument().getBody();
  body.appendParagraph(assignment_str);
  
}

// allows the .html file to include the .css file
function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
};
