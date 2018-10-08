import Utils from "./Utils";

var CopyTaxonomy = (function () {
  'use strict';

  const SRC_TAXONOMY_ID = "1qH54_e5c5HXUdOLYDn5jgMpyvpsgi6Pn2me9IVx9yIQ";
  const SRC_TAB_NAME = "v3 Domain Tags - View 2";

  const DEST_TAXONOMY_HELPER_ID = "1COFXG7xD_fuc7bS2CqGoe1G5pacWOwE5xynP1ERZ-gA";


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
  function getHelperSpreadsheet() {
    return SpreadsheetApp.openById(DEST_TAXONOMY_HELPER_ID);
  }

  function getHelperSheet() {
    const DEST_TAB_NAME = "Taxonomy Imported Data";
    const ss = getHelperSpreadsheet();
    const sheet = ss.getSheetByName(DEST_TAB_NAME);
    return sheet;
  }

  function copyDataToSheet(data: Object[][], sheet: Sheet) {
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
  /**
   * restoreFormulas - When the new taxonomy data is copied in the formulas behind the dropdowns
   * are getting wiped out with invalid References. I have no idea why so this is a kludge to just 
   * write the proper formulas back into the correct cells.
   */
  function restoreFormulas() {
    const GET_SUPER_DOMAINS = "=UNIQUE('Taxonomy Imported Data'!B:B)";
    const SUPER_DOMAINS_DEST = "F1";
    const GET_PRIMARY_DOMAINS = "=UNIQUE(FILTER('Taxonomy Imported Data'!C:C,TRIM('Taxonomy Imported Data'!B:B)=TRIM(E2)))";
    const PRIMARY_DOMAINS_DEST = "G2";
    const GET_SUB_DOMAINS = "=UNIQUE(FILTER('Taxonomy Imported Data'!D:D,TRIM('Taxonomy Imported Data'!C:C)=TRIM(E3)))";
    const SUB_DOMAINS_DEST = "H2";
    const GET_ATOMIC_TAGS = "=UNIQUE(FILTER('Taxonomy Imported Data'!E:E,TRIM('Taxonomy Imported Data'!D:D)=TRIM(E4)))";
    const ATOMIC_TAGS_DEST = "I2";


    const TOOLS_GET_ATOMIC_TAGS = "=UNIQUE(FILTER('Taxonomy Imported Data'!E:E,TRIM('Taxonomy Imported Data'!D:D)=TRIM(C2)))";
    const TOOLS_ATOMIC_TAGS_DEST = "D2";

    const QUERY_TAXONOMY_MATCHES = "=QUERY('Taxonomy Imported Data'!A:E,D1)";
    const QUERY_TAXONOMY_MATCHES_DEST = "A9";

    const ss = getHelperSpreadsheet();
    var sheet = ss.getSheetByName(Utils.REFERENCES_SHEET);

    sheet.getRange(SUPER_DOMAINS_DEST).setValue(GET_SUPER_DOMAINS);
    sheet.getRange(PRIMARY_DOMAINS_DEST).setValue(GET_PRIMARY_DOMAINS);
    sheet.getRange(SUB_DOMAINS_DEST).setValue(GET_SUB_DOMAINS);
    sheet.getRange(ATOMIC_TAGS_DEST).setValue(GET_ATOMIC_TAGS);
    // Need to replace the atomic tags on the  Tagging Tool Sheet
    sheet = ss.getSheetByName(Utils.TAGGING_TOOL_SHEET);
    sheet.getRange(TOOLS_ATOMIC_TAGS_DEST).setValue(TOOLS_GET_ATOMIC_TAGS);
    //Fix the query on that shows the matching taxonomy for the selected Tag
    sheet = ss.getSheetByName(Utils.TAXONOMY_FOR_TAG_SHEET);
    sheet.getRange(QUERY_TAXONOMY_MATCHES_DEST).setValue(QUERY_TAXONOMY_MATCHES);
  }

  function restoreAtomicTagValidation() {
    const ss = getHelperSpreadsheet();
    var sheet = ss.getSheetByName(Utils.TAXONOMY_FOR_TAG_SHEET);
    var cell = sheet.getRange('B1');
    var importedTaxonomySheet = ss.getSheetByName(Utils.TAXONOMY_IMPORT_SHEET);
    var range = importedTaxonomySheet.getRange('E: E');
    var rule = SpreadsheetApp.newDataValidation().requireValueInRange(range).build();
    cell.setDataValidation(rule);
  }

  return {
    copyCertifiedToHelper: copyCertifiedToHelper,
    restoreFormulas: restoreFormulas,
    restoreAtomicTagValidation: restoreAtomicTagValidation
  };

}());

/* exported copyTaxonomyData */
function copyTaxonomyData() {
  CopyTaxonomy.copyCertifiedToHelper();
  CopyTaxonomy.restoreFormulas();
  CopyTaxonomy.restoreAtomicTagValidation();
}

/* exported testRestoreValidation */
function testRestoreValidation() {
  CopyTaxonomy.restoreAtomicTagValidation();
}
