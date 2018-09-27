var CopyTaxonomy = (function () {
  'use strict';
  const SRC_TAXONOMY_ID = "1qH54_e5c5HXUdOLYDn5jgMpyvpsgi6Pn2me9IVx9yIQ";
  const SRC_TAB_NAME = "v3 Domain Tags - View 2";
  
  const DEST_TAXONOMY_HELPER_ID = "1COFXG7xD_fuc7bS2CqGoe1G5pacWOwE5xynP1ERZ-gA";
  const DEST_TAB_NAME = "Taxonomy Imported Data";
  
  function getCertifiedCurriculumSheet() {
    const ss = SpreadsheetApp.openById(SRC_TAXONOMY_ID);
    const sheet = ss.getSheetByName(SRC_TAB_NAME);
    return sheet;
  }
  
  function getTaxonomyData() {
    
    const sheet = getCertifiedCurriculumSheet();
    const fullDataRange = sheet.getDataRange();
    const allData = fullDataRange.getValues();
    return allData;
  }
  
  function getHelperSheet() {
    const ss = SpreadsheetApp.openById(DEST_TAXONOMY_HELPER_ID);
    const sheet = ss.getSheetByName(DEST_TAB_NAME);
    return sheet;
  }
  function copyDataToSheet(data, sheet) {
    const rows = data.length;
    const cols = data[0].length;
    sheet.getRange(1, 1, rows, cols).setValues(data);
  }
  
  function copyCertifiedToHelper() {
    const fullData = getTaxonomyData();
    const sheet = getHelperSheet();
    copyDataToSheet(fullData, sheet);
    sheet.deleteRows(1, 4);
    sheet.deleteColumns(2, 12);
    sheet.setFrozenRows(1);
  }
  
  return {
    copyCertifiedToHelper: copyCertifiedToHelper
  };
  
}());

/* exported copyData */
function copyData() {
  CopyTaxonomy.copyCertifiedToHelper();
  
}
