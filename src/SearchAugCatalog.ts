import { ISheetCopier } from "./SheetCopierTypes";
import utils from "./Utils";

declare var SheetCopier: ISheetCopier;

const AUG_CATALOG_ID = "1U5Pv_Bljnl1hCn9yJetn8adnXmzi8JQe_RAPdoLcxOY";
const TAB_NAME = "CourseData";

export function importAugmentedData() {
  const fullData = getAugmentedCatalogData();
  const sheet = SheetCopier.getActiveSheetByName(utils.AUG_CATALOG_IMPORT_SHEET);
  SheetCopier.copyDataToSheet(fullData, sheet);
}
function getAugmentedCatalogData() {
  const sheet = SheetCopier.getNamedSheetFromId(AUG_CATALOG_ID, TAB_NAME);
  return SheetCopier.getDataFromSheet(sheet);
}
