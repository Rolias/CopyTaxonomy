var Utils = (function () {
  'use strict';
  const SRC_SHEET_NAME = "AugCatalogImport";
  const DEST_SHEET_NAME = "CoursePerTagging";
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  function fillInColInfo() {

    const source_sheet = ss.getSheetByName(SRC_SHEET_NAME);
    const dest_sheet = ss.getSheetByName(DEST_SHEET_NAME);

    const START_ROW = 4;
    const MAX_ROW = 8;
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

  return {
    fillInColInfo: fillInColInfo
  };
}());

/* exported runFillInColInfo */
function runFillInColInfo() {
  Utils.fillInColInfo();
}
