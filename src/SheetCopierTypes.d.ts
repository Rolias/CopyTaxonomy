export interface ISheetCopier {
  getDataFromSheet(sheet: Sheet): object[][];
  getNamedSheetFromId(id: string, name: string): Sheet;
  getActiveSheetByName(sheetName: string): Sheet;
  copyDataToSheet(data: object[][], sheet: Sheet): void;
  copyDataFromSourceFolderToDestSheet(srcFolderId: string, destSheetId: string): void;
  // Google Lib private functions
  getFirstSheetFromFile_(file: DriveFile): Sheet;
  getFirstSheetFromId_(id: string): Sheet;
  getMostRecentFileInFolder_(folderId: string): DriveFile;
}
