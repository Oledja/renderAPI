const INSERT =
    "INSERT INTO currencies (symbol, name, price, market, created_at) VALUES ($1, $2, $3, $4, $5)";
const SELECT_BY_NAME_AND_TIME =
    "SELECT symbol, name, price, market, created_at FROM currencies WHERE symbol = $1 AND created_at > $2";
const SELECT_BY_NAME_AND_TIME_AND_MARKET =
    "SELECT symbol, name, price, market, created_at FROM currencies WHERE symbol = $1 AND created_at > $2 AND market = $3";
export { INSERT, SELECT_BY_NAME_AND_TIME, SELECT_BY_NAME_AND_TIME_AND_MARKET };
