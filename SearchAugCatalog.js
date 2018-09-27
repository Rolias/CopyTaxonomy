var AugmentedData = (function () {
  'use strict';
  const AUG_CATALOG_ID = "1U5Pv_Bljnl1hCn9yJetn8adnXmzi8JQe_RAPdoLcxOY";
  const TAB_NAME = "CourseData";

  const IMPORT_TAB_NAME = "AugCatalogImport";

  function getAugmentaedCatalogSheet() {
    const ss = SpreadsheetApp.openById(AUG_CATALOG_ID);
    const sheet = ss.getSheetByName(TAB_NAME);
    return sheet;
  }

  function getAugmentedCatalogData() {

    const sheet = getAugmentaedCatalogSheet();
    const fullDataRange = sheet.getDataRange();
    const allData = fullDataRange.getValues();
    return allData;
  }

  function getImportCatalogSheet() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(IMPORT_TAB_NAME);
    return sheet;
  }

  function copyDataToSheet(data, sheet) {
    const rows = data.length;
    const cols = data[0].length;
    sheet.getRange(1, 1, rows, cols).setValues(data);
  }

  function importAugmentedData() {
    const fullData = getAugmentedCatalogData();
    const sheet = getImportCatalogSheet();
    copyDataToSheet(fullData, sheet);
  }

  return {
    importAugmentedData: importAugmentedData
  };

}());

/* exported importAugmentedData */
function importAugmentedData() {

  AugmentedData.importAugmentedData();
}
