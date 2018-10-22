
/* exported onEdit */
function onEdit() {

  const ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const cell = ss.getCurrentCell();
  const col = cell.getColumn();
  const row = cell.getRow();

  const SUPER_DOMAIN_COL = 1;
  const PRIMARY_DOMAIN_COL = 2;
  const SETTINGS_ROW = 2;

  if ((col === SUPER_DOMAIN_COL) && (row === SETTINGS_ROW)) {
    ss.getRange("PrimarySubSettings").setValue("");
  } else if (col === PRIMARY_DOMAIN_COL && row === SETTINGS_ROW) {
    ss.getRange("SubdomainSetting").setValue("");
  }
}

/* exported resetColumnSelection */
function resetColumnSelection() {
  const COLUMN_SELECTOR_AREA = "ColumnSelectors";
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const selectColArea = ss.getRangeByName(COLUMN_SELECTOR_AREA);
  const grid = selectColArea.getValues();

  let col;
  let row;
  const COL_SKIP = 2;
  const MAX_COL = 6;
  const MAX_ROW = 12;

  for (col = 1; col < MAX_COL; col += COL_SKIP) {
    for (row = 0; row < MAX_ROW; ++row) {
      if (col < 2 && row < 3) {
        grid[row][col] = true;
      } else {
        grid[row][col] = false;
      }
    }
  }
  selectColArea.setValues(grid);

}
