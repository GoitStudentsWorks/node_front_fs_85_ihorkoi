export const selectIsLoggedIn = store => store.auth.isLoggedIn;

export const selectIsRefreshing = store => store.auth.isRefreshing;

export const selectUser = store => store.auth.user;

export const selectTodayWater = store => store.water.waterTodayRecords;