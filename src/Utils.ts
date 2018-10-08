
let utils = (function () {
  'use strict';
  const AUG_CATALOG_IMPORT_SHEET = "AugCatalogImport";
  const COURSES_PER_TAGGING_SHEET = "Courses Per Tagging";
  const SELECT_COLUMNS_SHEET = "Select Columns";
  const TAGGING_TOOL_SHEET = "Tagging Tool";
  const REFERENCES_SHEET = "References";
  const TAXONOMY_FOR_TAG_SHEET = "Taxonomy for Atomic Tag";
  const TAXONOMY_IMPORT_SHEET = "Taxonomy Imported Data";
  const NON_EXISTENT_SHEET = "KEEP SCRIPT FROM OVERWRITING DATA"
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // Only needed one time to grab the column names of the augmented snapshot and write them
  // into the taxonomy helper SELECT COLUMNS SHEET
  // After this was run columns were rearranged so running this again could overwrite valuable data
  // So the dest_sheet was changed to a non-existent sheet. Just wanted to keep the code
  // as an example and in case we need to grab all the augmented columns again
  function fillInColInfo() {

    const source_sheet = ss.getSheetByName(AUG_CATALOG_IMPORT_SHEET);
    const dest_sheet = ss.getSheetByName(NON_EXISTENT_SHEET);

    const START_ROW = 5;
    const MAX_ROW = 14;
    let dest_col = 1;
    let dest_row = START_ROW;
    const COL_INCREMENT = 2;
    const titles = source_sheet.getRange("1:1").getValues();

    titles[0].forEach(function (element) {
      dest_sheet.getRange(dest_row, dest_col).setValue(element);
      dest_row += 1;
      if (dest_row > MAX_ROW) {
        dest_row = START_ROW;
        dest_col += COL_INCREMENT;
      }
    });
  }

  function enableSearch(value: Boolean) {
    const sheet = ss.getSheetByName(SELECT_COLUMNS_SHEET);

    const ENABLE_SEARCH_CELL = "C1";
    sheet.getRange(ENABLE_SEARCH_CELL).setValue(value);
    const toolSheet = ss.getSheetByName(TAGGING_TOOL_SHEET);
    if (value) {
      toolSheet.getRange("E1").setBackgroundRGB(16, 207, 43);
    }
    else {
      toolSheet.getRange("E1").setBackgroundRGB(207, 60, 19);
    }
  }
  function setCellCount() {
    var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
    var cells_count = 0;
    sheets.forEach(function (eachSheet) {
      cells_count += eachSheet.getMaxColumns() * eachSheet.getMaxRows();
    });

    const sheet = ss.getSheetByName(TAGGING_TOOL_SHEET);
    sheet.getRange("F2").setValue(cells_count);
  }

  return {
    setCellCount: setCellCount,
    fillInColInfo: fillInColInfo,
    enableSearch: enableSearch,
    AUG_CATALOG_IMPORT_SHEET: AUG_CATALOG_IMPORT_SHEET,
    COURSES_PER_TAGGING_SHEET: COURSES_PER_TAGGING_SHEET,
    SELECT_COLUMNS_SHEET: SELECT_COLUMNS_SHEET,
    TAGGING_TOOL_SHEET: TAGGING_TOOL_SHEET,
    REFERENCES_SHEET: REFERENCES_SHEET,
    TAXONOMY_FOR_TAG_SHEET: TAXONOMY_FOR_TAG_SHEET,
    TAXONOMY_IMPORT_SHEET: TAXONOMY_IMPORT_SHEET
  };
}());
export default utils;

//Make it convenient to run these from the Google Apps Script Editor

/* exported runFillInColInfo */
function runFillInColInfo() {
  utils.fillInColInfo();
}


/* exported enableSearch */
function enableSearch() {
  utils.enableSearch(true);
}

/* exported disableSearch */
function disableSearch() {
  utils.enableSearch(false);
}
/* exported testSetCellCount */
function testSetCellCount() {
  utils.setCellCount();
}
