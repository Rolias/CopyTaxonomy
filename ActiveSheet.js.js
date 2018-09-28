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

/* exported resetColumnSelection */
function resetColumnSelection() {
  const COLUMN_SELECTOR_AREA = "ColumnSelectors";
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const selectColArea = ss.getRangeByName(COLUMN_SELECTOR_AREA);
  const grid = selectColArea.getValues();

  var col;
  var row;
  for (col = 1; col < 6; col += 2) {
    for (row = 0; row < 12; ++row) {
      if (col < 2 && row < 8) {
        grid[row][col] = true;
      } else {
        grid[row][col] = false;
      }
    }
  }
  selectColArea.setValues(grid);

}