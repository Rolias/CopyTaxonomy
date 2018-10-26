import { SheetCopier } from "./SheetCopierTypes";
import utils from "./Utils";

const AUG_CATALOG_ID = "1U5Pv_Bljnl1hCn9yJetn8adnXmzi8JQe_RAPdoLcxOY";
const TAB_NAME = "CourseData";

function importAugmentedData(): void {
  const fullData = getAugmentedCatalogData();
  const sheet = SheetCopier.getActiveSheetByName(utils.AUG_CATALOG_IMPORT_SHEET);
  SheetCopier.copyDataToSheet(fullData, sheet);
}
function getAugmentedCatalogData(): SheetCopier.DataValues {
  Logger.log("Just a place to set a breakpoint");
  const sheet = SheetCopier.getNamedSheetFromId(AUG_CATALOG_ID, TAB_NAME);
  return SheetCopier.getDataFromSheet(sheet);
}
