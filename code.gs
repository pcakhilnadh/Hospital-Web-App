var WORKSHEETSSID ="WORKSHEET_UNIQUE_ID";

var WORKBOOK = SpreadsheetApp.openById(WORKSHEETSSID);
var PATIENT_SHEET_NAME ="patient_profile";
var PATIENT_SHEET = WORKBOOK.getSheetByName(PATIENT_SHEET_NAME);

//-- functions --------------------------------------------------------

function doGet(e)
{
  var HTML_Service = HtmlService.createTemplateFromFile("index");
  var patient_sheet_data  = getDataFromSheet(PATIENT_SHEET,2,1,14);
  var patient_sheet_data_transposed = patient_sheet_data[0].map((_, colIndex) => patient_sheet_data.map(row => row[colIndex]));
  Logger.log(patient_sheet_data_transposed[0]);
  HTML_Service.patient_table_dataset = patient_sheet_data;
  HTML_Service.op_number_list = patient_sheet_data_transposed[0];
  return HTML_Service.evaluate();
}


function include(filename)
{
  return HtmlService.createHtmlOutputFromFile(filename).getContent()
}

//-- logics -------------------------------------------------------------

function getDataFromSheet(sheet,start_row,start_col,end_col)
{
  var end_row=sheet.getLastRow()-1;
  return sheet.getRange(start_row,start_col,end_row,end_col).getValues();
}

function PatientSubmitBtnClicked(patient_data)
{

  patient_data.push(new Date());
  Logger.log(patient_data)
  PATIENT_SHEET.appendRow(patient_data);

}



function check()
{
  var array = getDataFromSheet(PATIENT_SHEET,2,1,14);
  var tr =
  Logger.log(tr[0]);
}

