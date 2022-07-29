export function accountReducer(account = {}, action) {
    if (action.type == "CHECK_IN_ACCOUNT") {
        account = { ...account };
        account = { ...account, wallet: action.payload };
    }
    if (action.type == "CHECK_OUT_ACCOUNT") {
        account = { ...account };
        account = { ...account, wallet: action.payload };
    }
    return account;
}

export function accountCheckIn(account) {
    return { type: "CHECK_IN_ACCOUNT", payload: account };
}
export function accountCheckOut() {
    return { type: "CHECK_OUT_ACCOUNT", payload: null };
}
