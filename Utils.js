var Utils = (function () {
  'use strict';
  const AUG_CATALOG_IMPORT_SHEET = "AugCatalogImport";
  const COURSES_PER_TAGGING_SHEET = "Courses Per Tagging";
  const SELECT_COLUMNS_SHEET = "Select Columns";
  const TAGGING_TOOL_SHEET = "Tagging Tool";
  const REFERENCES_SHEET = "References";
  const TAXONOMY_FOR_TAG_SHEET = "Taxonomy for Atomic Tag";
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log("The Utils has run");

  function fillInColInfo() {

    const source_sheet = ss.getSheetByName(AUG_CATALOG_IMPORT_SHEET);
    const dest_sheet = ss.getSheetByName(COURSES_PER_TAGGING_SHEET);

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
    if (value) {
      toolSheet.getRange("E1").setBackgroundRGB(16, 207, 43);
    }
    else {
      toolSheet.getRange("E1").setBackgroundRGB(207, 60, 19);
    }
  }

  return {
    fillInColInfo: fillInColInfo,
    enableSearch: enableSearch,
    AUG_CATALOG_IMPORT_SHEET: AUG_CATALOG_IMPORT_SHEET,
    COURSES_PER_TAGGING_SHEET: COURSES_PER_TAGGING_SHEET,
    SELECT_COLUMNS_SHEET: SELECT_COLUMNS_SHEET,
    TAGGING_TOOL_SHEET: TAGGING_TOOL_SHEET,
    REFERENCES_SHEET: REFERENCES_SHEET,
    TAXONOMY_FOR_TAG_SHEET: TAXONOMY_FOR_TAG_SHEET
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