export default function accountReducer(account = [], action) {
    if (action.type == "CHECK_IN_ACCOUNT") {
        let account = [...account, action.payload];
    }
    return account;
}

export function accountCheckIn(account) {
    return { type: "CHECK_IN_ACCOUNT", payload: account };
}
