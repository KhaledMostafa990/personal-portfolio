import { configureCustomStore } from '../../utils/lib/state/store';
import { globalDataReducer } from "./globalData";

export default configureCustomStore({}, { globalData: globalDataReducer });
 