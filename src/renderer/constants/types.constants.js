export const Actions = {
  REFRESH_APP: 'REFRESH_APP',
  FETCH_NODE_INFO: 'FETCH_NODE_INFO',
  INIT_WALLET: 'INIT_WALLET',
  INIT_APP: 'INIT_APP',
  ADD_NODE: 'ADD_NODE',
  GET_CURRENT_ACCOUNT_NAME: 'GET_CURRENT_ACCOUNT_NAME',
  VOTE: 'VOTE',
  REVOTE: 'REVOTE',
  UNFREEZE: 'UNFREEZE',
  CLAIM: 'CLAIM',
  VOTE4RAM: 'VOTE4RAM',
  UNFREEZE4RAM: 'UNFREEZE4RAM',
  DELEGATEBW: 'DELEGATEBW',
  GET_BPS_TABLE: 'GET_BPS_TABLE',
  GET_TRANSFER_RECORD: 'GET_TRANSFER_RECORD',
  NEW_WALLET: 'NEW_WALLET',
  LOAD_EOSFORCE: 'LOAD_EOSFORCE',
  FETCH_WALLET: 'FETCH_WALLET',
  NEW_ACCOUNT: 'NEW_ACCOUNT',
  TRANSFER_ACCOUNT: 'TRANSFER_ACCOUNT',
  DELETE_ACCOUNT: 'DELETE_ACCOUNT',
  TRANSFER: 'TRANSFER',
  GETFREEZE: 'GETFREEZE',
  FREEZE: 'FREEZE',
  UNFREEZECPUNET: 'UNFREEZECPUNET',
  FETCH_ACCOUNT_LIST: 'FETCH_ACCOUNT_LIST',
  FETCH_ACCOUNT: 'FETCH_ACCOUNT',
  GET_ACCOUNT_INFO: 'GET_ACCOUNT_INFO',
  FETCH_WALLET_LIST: 'FETCH_WALLET_LIST',
  GET_ACCOUNT_OVERVIEW: 'GET_ACCOUNT_OVERVIEW',
  FETCH_NODE_LIST: 'FETCH_NODE_LIST',
  SYNC_NODE_LIST: 'SYNC_NODE_LIST',
  ADD_NODE_RPC_HOST: 'ADD_NODE_RPC_HOST',
  SWITCH_CHAIN_NET: 'SWITCH_CHAIN_NET',
  GET_TOKEN_LIST: 'GET_TOKEN_LIST',
  REFRESH_WALLET: 'REFRESH_WALLET',
  DELETE_WALLET: 'DELETE_WALLET',
  GET_BP_NICK: 'GET_BP_NICK',
  GET_GLOABLE_INFO: 'GET_GLOABLE_INFO',
  CHECK_TRANSACTION: 'CHECK_TRANSACTION',
  FETCH_BLOCK: 'FETCH_BLOCK',
  CHECK_INVOLED: 'CHECK_INVOLED',
  GET_STORE_NODE_LIST: 'GET_STORE_NODE_LIST',
  UPDATE_NODE_LIST: 'UPDATE_NODE_LIST'
};

export const Getters = {
  CURRENT_NODE_INFO: 'CURRENT_NODE_INFO',
  CURRENT_BLOCK: 'CURRENT_BLOCK',
  PUBLIC_KEY_LIST: 'PUBLIC_KEY_LIST',
  ACCOUNT_LIST: 'ACCOUNT_LIST',
  CURRENT_ACCOUNT: 'CURRENT_ACCOUNT',
  CURRENT_ACCOUNT_NAME: 'CURRENT_ACCOUNT_NAME',
  GET_WIF: 'GET_WIF',
  CURRENT_NODE: 'CURRENT_NODE',
  GET_TRANSE_CONFIG: 'GET_TRANSE_CONFIG',
  ACCOUT_MAP: 'ACCOUT_MAP',
  GET_STORE_NODE_LIST: 'GET_STORE_NODE_LIST'
};

export const Mutations = {
  SET_BP_NICK: 'SET_BP_NICK',
  SET_CURRENT_NODE_INFO: 'SET_CURRENT_NODE_INFO',
  SET_CUREENT_NODE: 'SET_CUREENT_NODE',
  SET_WALLET_LIST: 'SET_WALLET_LIST',
  SET_NODE_LIST: 'SET_NODE_LIST',
  SET_WALLET_ID_LIST: 'SET_WALLET_ID_LIST',
  SET_BPS_TABLE: 'SET_BPS_TABLE',
  SET_TRANSFER_RECORDS: 'SET_TRANSFER_RECORDS',
  SET_WALLET: 'SET_WALLET',
  SET_EOSFORCE: 'SET_EOSFORCE',
  SET_ACCOUNT_LIST: 'SET_ACCOUNT_LIST',
  SET_ACCOUNT: 'SET_ACCOUNT',
  SET_ACCOUNT_NAME: 'SET_ACCOUNT_NAME',
  SET_ACCOUNT_INFO: 'SET_ACCOUNT_INFO',
  RESET_ACCOUNT_INFO: 'RESET_ACCOUNT_INFO',
  SET_LATEST_TRANSFER_NUM: 'SET_LATEST_TRANSFER_NUM',
  SET_CHAIN_NET: 'SET_CHAIN_NET',
  SET_TOKEN_LIST: 'SET_TOKEN_LIST',
  SET_WRITE_NODE_LIST: 'SET_WRITE_NODE_LIST',
  SET_UPDATE_INFO: 'SET_UPDATE_INFO',
  START_LOAD_ACCOUNT_INFO: 'START_LOAD_ACCOUNT_INFO',
  FINISH_LOAD_ACCOUNT_INFO: 'FINISH_LOAD_ACCOUNT_INFO',
  START_LOAD_ACCOUNT_LIST: 'START_LOAD_ACCOUNT_LIST',
  FINISH_LOAD_ACCOUNT_LIST: 'FINISH_LOAD_ACCOUNT_LIST',
  SET_VOTES_TABLE: 'SET_VOTES_TABLE',
  SET_VOTES4RAM_TABLE: 'SET_VOTES4RAM_TABLE',
  SET_SUPER_PSAMOUNT_TABLE: 'SET_SUPER_PSAMOUNT_TABLE',
  SET_BASE_BPS_TABLE: 'SET_BASE_BPS_TABLE',
  SET_VERSION: 'SET_VERSION',
  SET_BLOCK: 'SET_BLOCK',
  UPDATE_BLOCK_LIST_STATUS: 'UPDATE_BLOCK_LIST_STATUS',
};
