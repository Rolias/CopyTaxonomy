// @ts-check


var ImportData = (function () {
  'use strict';
  const SRC_AUG_CATALOG_ID = "1U5Pv_Bljnl1hCn9yJetn8adnXmzi8JQe_RAPdoLcxOY";
  const SRC_CATALOG_SHEET_NAME = "CourseData";
  const DEST_CATALOG_SHEET_NAME = "SnapshotCourses";

  const SRC_PIPELINE_ID = "1O1dP-KrenEVw5VFy6zI5xUbLXkj9S_4byy1ZNjvkaNA";
  const SRC_PIPELINE_SHEET_NAME = "Sheet1";
  const DEST_PIPELINE_SHEET_NAME = "PipelineCourses";


  function getAugmentedCatalogSheet() {
    const ss = SpreadsheetApp.openById(SRC_AUG_CATALOG_ID);
    return ss.getSheetByName(SRC_CATALOG_SHEET_NAME);
  }

  function getData(sheet) {
    const fullDataRange = sheet.getDataRange();
    return fullDataRange.getValues();
  }
  function getAugmentedCatalogData() {
    const sheet = getAugmentedCatalogSheet();
    return getData(sheet);
  }

  function getPipelineSheet() {
    const ss = SpreadsheetApp.openById(SRC_PIPELINE_ID);
    return ss.getSheetByName(SRC_PIPELINE_SHEET_NAME);
  }

  function getPipelineData() {
    const sheet = getPipelineSheet();
    return getData(sheet);
  }

  function getSnapshotCoursesSheet() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(DEST_CATALOG_SHEET_NAME);
    return sheet;
  }

  function getPipelineCoursesSheet() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    return ss.getSheetByName(DEST_PIPELINE_SHEET_NAME);
  }

  function copyDataToSheet(data, sheet) {
    const rows = data.length;
    const cols = data[0].length;
    sheet.getRange(1, 1, rows, cols).setValues(data);
  }

  function importAugmentedData() {
    const fullData = getAugmentedCatalogData();
    const sheet = getSnapshotCoursesSheet();
    copyDataToSheet(fullData, sheet);
  }

  function importPipelineData() {
    const fullData = getPipelineData();
    const dest = getPipelineCoursesSheet();
    copyDataToSheet(fullData, dest);

  }

  return {
    importAugmentedData: importAugmentedData,
    importPipelineData: importPipelineData
  };

}());

/* exported importData */
function importData() {
  ImportData.importAugmentedData();
  ImportData.importPipelineData();
}

