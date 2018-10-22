
const utils = (() => {
  const AUG_CATALOG_IMPORT_SHEET = "AugCatalogImport";
  const COURSES_PER_TAGGING_SHEET = "Courses Per Tagging";
  const SELECT_COLUMNS_SHEET = "Select Columns";
  const TAGGING_TOOL_SHEET = "Tagging Tool";
  const REFERENCES_SHEET = "References";
  const TAXONOMY_FOR_TAG_SHEET = "Taxonomy for Atomic Tag";
  const TAXONOMY_IMPORT_SHEET = "Taxonomy Imported Data";
  const NON_EXISTENT_SHEET = "KEEP SCRIPT FROM OVERWRITING DATA";
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // Only needed one time to grab the column names of the augmented snapshot and write them
  // into the taxonomy helper SELECT COLUMNS SHEET
  // After this was run columns were rearranged so running this again could overwrite valuable data
  // So the dest_sheet was changed to a non-existent sheet. Just wanted to keep the code
  // as an example and in case we need to grab all the augmented columns again
  function fillInColInfo() {

    const sourceSheet = ss.getSheetByName(AUG_CATALOG_IMPORT_SHEET);
    const destSheet = ss.getSheetByName(NON_EXISTENT_SHEET);

    const START_ROW = 5;
    const MAX_ROW = 14;
    let destCol = 1;
    let destRow = START_ROW;
    const COL_INCREMENT = 2;
    const titles = sourceSheet.getRange("1:1").getValues();

    titles[0].forEach((element) => {
      destSheet.getRange(destRow, destCol).setValue(element);
      destRow += 1;
      if (destRow > MAX_ROW) {
        destRow = START_ROW;
        destCol += COL_INCREMENT;
      }
    });
  }

  function myEnableSearch(value: boolean) {
    const sheet = ss.getSheetByName(SELECT_COLUMNS_SHEET);

    const ENABLE_SEARCH_CELL = "C1";
    sheet.getRange(ENABLE_SEARCH_CELL).setValue(value);
    const toolSheet = ss.getSheetByName(TAGGING_TOOL_SHEET);
    if (value) {
      toolSheet.getRange("E1").setBackgroundRGB(16, 207, 43);
    } else {
      toolSheet.getRange("E1").setBackgroundRGB(207, 60, 19);
    }
  }
  function setCellCount() {
    const sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
    let cellsCount = 0;
    sheets.forEach((eachSheet) => {
      cellsCount += eachSheet.getMaxColumns() * eachSheet.getMaxRows();
    });

    const sheet = ss.getSheetByName(TAGGING_TOOL_SHEET);
    sheet.getRange("F2").setValue(cellsCount);
  }

  return {
    AUG_CATALOG_IMPORT_SHEET,
    COURSES_PER_TAGGING_SHEET,
    REFERENCES_SHEET,
    SELECT_COLUMNS_SHEET,
    TAGGING_TOOL_SHEET,
    TAXONOMY_FOR_TAG_SHEET,
    TAXONOMY_IMPORT_SHEET,
    fillInColInfo,
    myEnableSearch,
    setCellCount,
  };
})();
export default utils;

// Make it convenient to run these from the Google Apps Script Editor

export function runFillInColInfo() {
  utils.fillInColInfo();
}

export function enableSearch() {
  utils.myEnableSearch(true);
}

export function disableSearch() {
  utils.myEnableSearch(false);
}

export function testSetCellCount() {
  utils.setCellCount();
}
