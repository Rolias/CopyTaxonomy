import utils from './Utils'
import { SheetCopier } from "./SheetCopierTypes";
declare var SheetCopier: SheetCopier;

let AUG_CATALOG_ID = "1U5Pv_Bljnl1hCn9yJetn8adnXmzi8JQe_RAPdoLcxOY";
let TAB_NAME = "CourseData";

function importAugmentedData() {
  let fullData = getAugmentedCatalogData();
  let sheet = SheetCopier.getActiveSheetByName(utils.AUG_CATALOG_IMPORT_SHEET);
  SheetCopier.copyDataToSheet(fullData, sheet);
}
function getAugmentedCatalogData() {
  let sheet = SheetCopier.getNamedSheetFromId(AUG_CATALOG_ID, TAB_NAME);
  return SheetCopier.getDataFromSheet(sheet);
}



