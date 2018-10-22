
export module SheetCopier {
  type Sheet = GoogleAppsScript.Spreadsheet.Sheet;
  type DataValues = object[][];
  type DriveFile = GoogleAppsScript.Drive.File;
  function getDataFromSheet(sheet: Sheet): object[][];
  function getNamedSheetFromId(id: string, name: string): Sheet;
  function getActiveSheetByName(sheetName: string): Sheet;
  function copyDataToSheet(data: object[][], sheet: Sheet): void;
  function copyDataFromSourceFolderToDestSheet(srcFolderId: string, destSheetId: string): void;
  // Google Lib private functions
  function getFirstSheetFromFile_(file: DriveFile): Sheet;
  function getFirstSheetFromId_(id: string): Sheet;
  function getMostRecentFileInFolder_(folderId: string): DriveFile;
}
