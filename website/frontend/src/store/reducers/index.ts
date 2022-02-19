import { combineReducers } from 'redux';
import ApiReducer from './ApiReduces';
import AccountReducer from './AccountReducer';
import BlockReducer from './BlocksReducer';
import ProgramReducer from './ProgramReducer';
import AlertsReducer from './AlertsReducer';
import CompilerReducer from './CompilerReducer';
import MessageReducer from './MessageReducer';

const rootReducer = combineReducers({
  programs: ProgramReducer,
  blocks: BlockReducer,
  alerts: AlertsReducer,
  api: ApiReducer,
  account: AccountReducer,
  compiler: CompilerReducer,
  messages: MessageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
