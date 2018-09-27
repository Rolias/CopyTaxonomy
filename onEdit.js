/* exported onEdit */
function onEdit() {

  const ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var cell = ss.getCurrentCell();
  var col = cell.getColumn();
  var row = cell.getRow();

  const SUPER_DOMAIN_COL = 1;
  const PRIMARY_DOMAIN_COL = 2;
  const SETTINGS_ROW = 2;

  if ((col === SUPER_DOMAIN_COL) && (row === SETTINGS_ROW)) {
    ss.getRange("PrimarySubSettings").setValue("");
  } else if (col == PRIMARY_DOMAIN_COL && row == SETTINGS_ROW) {
    ss.getRange("SubdomainSetting").setValue("");
  }
}
