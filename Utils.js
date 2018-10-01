var Utils = (function () {
  'use strict';
  const SRC_SHEET_NAME = "AugCatalogImport";
  const DEST_SHEET_NAME = "Courses Per Tagging";
  const SELECT_COLUMNS_SHEET = "Select Columns";
  const TAGGING_TOOL_SHEET = "Tagging Tool";
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  function fillInColInfo() {

    const source_sheet = ss.getSheetByName(SRC_SHEET_NAME);
    const dest_sheet = ss.getSheetByName(DEST_SHEET_NAME);

    const START_ROW = 5;
    const MAX_ROW = 14;
    var dest_col = 1;
    var dest_row = START_ROW;
    const COL_INCREMENT = 2;
    const titles = source_sheet.getRange("1:1").getValues();

    titles[0].forEach(function (element) {
      dest_sheet.getRange(dest_row, dest_col).setValue(element);
      Logger.log(element + " row " + " col");
      dest_row += 1;
      if (dest_row > MAX_ROW) {
        dest_row = START_ROW;
        dest_col += COL_INCREMENT;
      }

    });
  }

  function enableSearch(value) {
    const sheet = ss.getSheetByName(SELECT_COLUMNS_SHEET);
    
    const ENABLE_SEARCH_CELL = "C1";
    sheet.getRange(ENABLE_SEARCH_CELL).setValue(value);
    const toolSheet = ss.getSheetByName(TAGGING_TOOL_SHEET);
    if (value){
     toolSheet.getRange("E1").setBackgroundRGB(16,207,43);
    }
    else{
      toolSheet.getRange("E1").setBackgroundRGB(207,60,19);
    }
    }

  return {
    fillInColInfo: fillInColInfo,
    enableSearch: enableSearch
  };
}());

/* exported runFillInColInfo */
function runFillInColInfo() {
  Utils.fillInColInfo();
}


/* exported enableSearch */
function enableSearch() {
  Utils.enableSearch(true);
}

/* exported disableSearch */
function disableSearch() {
  Utils.enableSearch(false);
}