export function loadingReducer(loading = { busy: false }, action) {
    if (action.type == "BUSY") {
        loading = { ...loading };
        loading = { busy: true };
    }
    if (action.type == "LOADED") {
        loading = { ...loading };
        loading = { busy: false };
    }
    return loading;
}

export function loading() {
    return { type: "BUSY", payload: "" };
}
export function loaded() {
    return { type: "LOADED", payload: "" };
}
