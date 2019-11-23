declare module "react-admin" {
  export const Admin: React.ComponentType<any>;
  // function (_a) {
  //     var appLayout = _a.appLayout, authProvider = _a.authProvider, catchAll = _a.catchAll, children = _a.children, customReducers = _a.customReducers, _b = _a.customRoutes, customRoutes = _b === void 0 ? [] : _b, customSagas = _a.customSagas, dashboard = _a.dashboard, dataProvider = _a.dataProvider, history = _a.history, i18nProvider = _a.i18nProvider, initialState = _a.initialState, layout = _a.layout, loading = _a.loading, locale = _a.locale, loginPage = _a.loginPage, logoutButton = _a.logoutButton, menu = _a.menu, // deprecated, use a custom layout instead
  //     theme = _a.theme, _c = _a.title, title = _c === void 0 ? 'React Admin' : _c;
  //     if (appLayout) {
  //         console.warn('You are using deprecated prop "appLayout", it was replaced by "layout", see https://github.com/marmelab/react-admin/issues/2918');
  //     }
  //     if (loginPage === true && process.env.NODE_ENV !== 'production') {
  //         console.warn('You passed true to the loginPage prop. You must either pass false to disable it or a component class to customize it');
  //     }
  //     if (locale) {
  //         console.warn('You are using deprecated prop "locale". You must now pass the initial locale to your i18nProvider');
  //     }
  //     return (react_1.default.createElement(AdminContext_1.default, { authProvider: authProvider, dataProvider: dataProvider, i18nProvider: i18nProvider, history: history, customReducers: customReducers, customSagas: customSagas, initialState: initialState },
  //         react_1.default.createElement(AdminUI_1.default, { layout: appLayout || layout, customRoutes: customRoutes, dashboard: dashboard, menu: menu, catchAll: catchAll, theme: theme, title: title, loading: loading, loginPage: loginPage, logout: authProvider ? logoutButton : undefined }, children)));
  // }
  export const AdminUI: React.ComponentType<any>;
  // function (_a) {
  //     var _b = _a.catchAll, catchAll = _b === void 0 ? Noop : _b, children = _a.children, _c = _a.customRoutes, customRoutes = _c === void 0 ? [] : _c, dashboard = _a.dashboard, _d = _a.layout, layout = _d === void 0 ? DefaultLayout : _d, _e = _a.loading, loading = _e === void 0 ? Noop : _e, _f = _a.loginPage, loginPage = _f === void 0 ? false : _f, logout = _a.logout, menu = _a.menu, // deprecated, use a custom layout instead
  //     theme = _a.theme, _g = _a.title, title = _g === void 0 ? 'React Admin' : _g;
  //     return (react_1.default.createElement(react_router_dom_1.Switch, null,
  //         loginPage !== false && loginPage !== true ? (react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/login", render: function (props) {
  //                 return react_1.createElement(loginPage, __assign({}, props, { title: title,
  //                     theme: theme }));
  //             } })) : null,
  //         react_1.default.createElement(react_router_dom_1.Route, { path: "/", render: function (props) { return (react_1.default.createElement(CoreAdminRouter_1.default, __assign({ catchAll: catchAll, customRoutes: customRoutes, dashboard: dashboard, layout: layout, loading: loading, logout: logout && react_1.createElement(logout), menu: menu, theme: theme, title: title }, props), children)); } })));
  // }
  export const AdminContext: React.ComponentType<any>;
  // function (_a) {
  //     var authProvider = _a.authProvider, dataProvider = _a.dataProvider, i18nProvider = _a.i18nProvider, children = _a.children, history = _a.history, customReducers = _a.customReducers, customSagas = _a.customSagas, initialState = _a.initialState;
  //     var reduxIsAlreadyInitialized = !!react_1.useContext(react_redux_1.ReactReduxContext);
  //     if (!dataProvider) {
  //         throw new Error("Missing dataProvider prop.\nReact-admin requires a valid dataProvider function to work.");
  //     }
  //     var finalAuthProvider = authProvider instanceof Function
  //         ? auth_1.convertLegacyAuthProvider(authProvider)
  //         : authProvider;
  //     var finalDataProvider = dataProvider instanceof Function
  //         ? dataProvider_1.convertLegacyDataProvider(dataProvider)
  //         : dataProvider;
  //     var finalHistory = history || history_1.createHashHistory();
  //     var renderCore = function () {
  //         return (react_1.default.createElement(auth_1.AuthContext.Provider, { value: finalAuthProvider },
  //             react_1.default.createElement(dataProvider_1.DataProviderContext.Provider, { value: finalDataProvider },
  //                 react_1.default.createElement(TranslationProvider_1.default, { i18nProvider: i18nProvider },
  //                     react_1.default.createElement(connected_react_router_1.ConnectedRouter, { history: finalHistory }, children)))));
  //     };
  //     if (reduxIsAlreadyInitialized) {
  //         if (!history) {
  //             throw new Error("Missing history prop.\nWhen integrating react-admin inside an existing redux Provider, you must provide the same 'history' prop to the <Admin> as the one used to bootstrap your routerMiddleware.\nReact-admin uses this history for its own ConnectedRouter.");
  //         }
  //         return renderCore();
  //     }
  //     else {
  //         return (react_1.default.createElement(react_redux_1.Provider, { store: createAdminStore_1.default({
  //                 authProvider: finalAuthProvider,
  //                 customReducers: customReducers,
  //                 customSagas: customSagas,
  //                 dataProvider: finalDataProvider,
  //                 initialState: initialState,
  //                 history: finalHistory,
  //             }) }, renderCore()));
  //     }
  // }
  export const AdminRouter: React.ComponentType<any>;
  // function (props) {
  //     var getPermissions = auth_1.useGetPermissions();
  //     var doLogout = auth_1.useLogout();
  //     var authenticated = auth_1.useAuthState().authenticated;
  //     var oneSecondHasPassed = util_1.useTimeout(1000);
  //     var _a = util_1.useSafeSetState([]), computedChildren = _a[0], setComputedChildren = _a[1];
  //     react_1.useEffect(function () {
  //         if (typeof props.children === 'function') {
  //             initializeResources();
  //         }
  //     }, [authenticated]); // eslint-disable-line react-hooks/exhaustive-deps
  //     var initializeResources = function () { return __awaiter(_this, void 0, void 0, function () {
  //         var permissions, resolveChildren, childrenFuncResult, error_1;
  //         return __generator(this, function (_a) {
  //             switch (_a.label) {
  //                 case 0:
  //                     _a.trys.push([0, 2, , 3]);
  //                     return [4 /*yield*/, getPermissions()];
  //                 case 1:
  //                     permissions = _a.sent();
  //                     resolveChildren = props.children;
  //                     childrenFuncResult = resolveChildren(permissions);
  //                     if (childrenFuncResult.then) {
  //                         childrenFuncResult.then(function (resolvedChildren) {
  //                             return setComputedChildren(resolvedChildren
  //                                 .filter(function (child) { return child; })
  //                                 .map(function (child) { return (__assign({}, child, { props: __assign({}, child.props, { key: child.props.name }) })); }));
  //                         });
  //                     }
  //                     else {
  //                         setComputedChildren(childrenFuncResult.filter(function (child) { return child; }));
  //                     }
  //                     return [3 /*break*/, 3];
  //                 case 2:
  //                     error_1 = _a.sent();
  //                     console.error(error_1);
  //                     doLogout();
  //                     return [3 /*break*/, 3];
  //                 case 3: return [2 /*return*/];
  //             }
  //         });
  //     }); };
  //     var renderCustomRoutesWithoutLayout = function (route, routeProps) {
  //         if (route.props.render) {
  //             return route.props.render(__assign({}, routeProps, { title: props.title }));
  //         }
  //         if (route.props.component) {
  //             return react_1.createElement(route.props.component, __assign({}, routeProps, { title: props.title }));
  //         }
  //     };
  //     var layout = props.layout, catchAll = props.catchAll, children = props.children, customRoutes = props.customRoutes, dashboard = props.dashboard, loading = props.loading, logout = props.logout, menu = props.menu, theme = props.theme, title = props.title;
  //     if (process.env.NODE_ENV !== 'production' &&
  //         typeof children !== 'function' &&
  //         !children) {
  //         return react_1.default.createElement(util_1.Ready, null);
  //     }
  //     if (typeof children === 'function' &&
  //         (!computedChildren || computedChildren.length === 0)) {
  //         if (oneSecondHasPassed) {
  //             return react_1.default.createElement(react_router_dom_1.Route, { path: "/", key: "loading", component: loading });
  //         }
  //         else {
  //             return null;
  //         }
  //     }
  //     var childrenToRender = (typeof children === 'function'
  //         ? computedChildren
  //         : children);
  //     return (react_1.default.createElement("div", null,
  //         // as we need all of them and not just the one rendered
  //         react_1.Children.map(childrenToRender, function (child) {
  //             return react_1.cloneElement(child, {
  //                 key: child.props.name,
  //                 // The context prop instructs the Resource component to not render anything
  //                 // but simply to register itself as a known resource
  //                 intent: 'registration',
  //             });
  //         }),
  //         react_1.default.createElement(react_router_dom_1.Switch, null,
  //             customRoutes
  //                 .filter(function (route) { return route.props.noLayout; })
  //                 .map(function (route, key) {
  //                 return react_1.cloneElement(route, {
  //                     key: key,
  //                     render: function (routeProps) {
  //                         return renderCustomRoutesWithoutLayout(route, routeProps);
  //                     },
  //                 });
  //             }),
  //             react_1.default.createElement(react_router_dom_1.Route, { path: "/", render: function () {
  //                     return react_1.createElement(layout, {
  //                         dashboard: dashboard,
  //                         logout: logout,
  //                         menu: menu,
  //                         theme: theme,
  //                         title: title,
  //                     }, react_1.default.createElement(RoutesWithLayout_1.default, { catchAll: catchAll, customRoutes: customRoutes.filter(function (route) { return !route.props.noLayout; }), dashboard: dashboard, title: title }, react_1.Children.map(childrenToRender, function (child) {
  //                         return react_1.cloneElement(child, {
  //                             key: child.props.name,
  //                             intent: 'route',
  //                         });
  //                     })));
  //                 } }))));
  // }
  export const defaultI18nProvider: {};
  // translate: "function (key, options) {\n            if (options === void 0) { options = {}; }\n            return translate(key, options);\n        }"
  // changeLocale: "function (newLocale) {\n            return new Promise(function (resolve) {\n                // so we systematically return a Promise for the messages\n                // i18nProvider may return a Promise for language changes,\n                return resolve(getMessages(newLocale));\n            }).then(function (messages) {\n                locale = newLocale;\n                var newPolyglot = new node_polyglot_1.default(__assign({ locale: newLocale, phrases: __assign({ '': '' }, messages) }, polyglotOptions));\n                translate = newPolyglot.t.bind(newPolyglot);\n            });\n        }"
  // getLocale: "function () { return locale; }"
  export function createAppReducer(customReducers?: any, history?: any): any;
  // function (customReducers, history) {
  //     return redux_1.combineReducers(__assign({ admin: admin_1.default, router: connected_react_router_1.connectRouter(history) }, customReducers));
  // }
  export function adminReducer(state?: any, action?: any): any;
  // function combination(state, action) {
  //     if (state === void 0) {
  //       state = {};
  //     }
  //
  //     if (shapeAssertionError) {
  //       throw shapeAssertionError;
  //     }
  //
  //     if (process.env.NODE_ENV !== 'production') {
  //       var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
  //
  //       if (warningMessage) {
  //         warning(warningMessage);
  //       }
  //     }
  //
  //     var hasChanged = false;
  //     var nextState = {};
  //
  //     for (var _i = 0; _i < finalReducerKeys.length; _i++) {
  //       var _key = finalReducerKeys[_i];
  //       var reducer = finalReducers[_key];
  //       var previousStateForKey = state[_key];
  //       var nextStateForKey = reducer(previousStateForKey, action);
  //
  //       if (typeof nextStateForKey === 'undefined') {
  //         var errorMessage = getUndefinedStateErrorMessage(_key, action);
  //         throw new Error(errorMessage);
  //       }
  //
  //       nextState[_key] = nextStateForKey;
  //       hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
  //     }
  //
  //     return hasChanged ? nextState : state;
  //   }
  export function queryReducer(previousState?: any, _a?: any): any;
  // function (previousState, _a) {
  //     var type = _a.type, payload = _a.payload;
  //     switch (type) {
  //         case exports.SET_SORT:
  //             if (payload.sort === previousState.sort) {
  //                 return __assign({}, previousState, { order: oppositeOrder(previousState.order), page: 1 });
  //             }
  //             return __assign({}, previousState, { sort: payload.sort, order: payload.order || exports.SORT_ASC, page: 1 });
  //         case exports.SET_PAGE:
  //             return __assign({}, previousState, { page: payload });
  //         case exports.SET_PER_PAGE:
  //             return __assign({}, previousState, { page: 1, perPage: payload });
  //         case exports.SET_FILTER: {
  //             return __assign({}, previousState, { page: 1, filter: payload });
  //         }
  //         default:
  //             return previousState;
  //     }
  // }
  export const GET_LIST: string;
  export const GET_ONE: string;
  export const GET_MANY: string;
  export const GET_MANY_REFERENCE: string;
  export const CREATE: string;
  export const UPDATE: string;
  export const UPDATE_MANY: string;
  export const DELETE: string;
  export const DELETE_MANY: string;
  export const fetchActionsWithRecordResponse: [string, string, string];
  export const fetchActionsWithArrayOfIdentifiedRecordsResponse: [
    string,
    string,
    string
  ];
  export const fetchActionsWithArrayOfRecordsResponse: [
    string,
    string,
    string,
    string,
    string
  ];
  export const fetchActionsWithTotalResponse: [string, string];
  export function sanitizeFetchType(fetchType?: any): any;
  // function (fetchType) {
  //     switch (fetchType) {
  //         case exports.GET_LIST:
  //             return 'getList';
  //         case exports.GET_ONE:
  //             return 'getOne';
  //         case exports.GET_MANY:
  //             return 'getMany';
  //         case exports.GET_MANY_REFERENCE:
  //             return 'getManyReference';
  //         case exports.CREATE:
  //             return 'create';
  //         case exports.UPDATE:
  //             return 'update';
  //         case exports.UPDATE_MANY:
  //             return 'updateMany';
  //         case exports.DELETE:
  //             return 'delete';
  //         case exports.DELETE_MANY:
  //             return 'deleteMany';
  //         default:
  //             return fetchType;
  //     }
  // }
  export const CoreAdmin: React.ComponentType<any>;
  // function (_a) {
  //     var appLayout = _a.appLayout, authProvider = _a.authProvider, catchAll = _a.catchAll, children = _a.children, customReducers = _a.customReducers, _b = _a.customRoutes, customRoutes = _b === void 0 ? [] : _b, customSagas = _a.customSagas, dashboard = _a.dashboard, dataProvider = _a.dataProvider, history = _a.history, i18nProvider = _a.i18nProvider, initialState = _a.initialState, layout = _a.layout, loading = _a.loading, loginPage = _a.loginPage, logoutButton = _a.logoutButton, menu = _a.menu, // deprecated, use a custom layout instead
  //     theme = _a.theme, _c = _a.title, title = _c === void 0 ? 'React Admin' : _c;
  //     return (react_1.default.createElement(CoreAdminContext_1.default, { authProvider: authProvider, dataProvider: dataProvider, i18nProvider: i18nProvider, history: history, customReducers: customReducers, customSagas: customSagas, initialState: initialState },
  //         react_1.default.createElement(CoreAdminUI_1.default, { layout: appLayout || layout, customRoutes: customRoutes, dashboard: dashboard, menu: menu, catchAll: catchAll, theme: theme, title: title, loading: loading, loginPage: loginPage, logout: authProvider ? logoutButton : undefined }, children)));
  // }
  export const CoreAdminContext: React.ComponentType<any>;
  // function (_a) {
  //     var authProvider = _a.authProvider, dataProvider = _a.dataProvider, i18nProvider = _a.i18nProvider, children = _a.children, history = _a.history, customReducers = _a.customReducers, customSagas = _a.customSagas, initialState = _a.initialState;
  //     var reduxIsAlreadyInitialized = !!react_1.useContext(react_redux_1.ReactReduxContext);
  //     if (!dataProvider) {
  //         throw new Error("Missing dataProvider prop.\nReact-admin requires a valid dataProvider function to work.");
  //     }
  //     var finalAuthProvider = authProvider instanceof Function
  //         ? auth_1.convertLegacyAuthProvider(authProvider)
  //         : authProvider;
  //     var finalDataProvider = dataProvider instanceof Function
  //         ? dataProvider_1.convertLegacyDataProvider(dataProvider)
  //         : dataProvider;
  //     var finalHistory = history || history_1.createHashHistory();
  //     var renderCore = function () {
  //         return (react_1.default.createElement(auth_1.AuthContext.Provider, { value: finalAuthProvider },
  //             react_1.default.createElement(dataProvider_1.DataProviderContext.Provider, { value: finalDataProvider },
  //                 react_1.default.createElement(TranslationProvider_1.default, { i18nProvider: i18nProvider },
  //                     react_1.default.createElement(connected_react_router_1.ConnectedRouter, { history: finalHistory }, children)))));
  //     };
  //     if (reduxIsAlreadyInitialized) {
  //         if (!history) {
  //             throw new Error("Missing history prop.\nWhen integrating react-admin inside an existing redux Provider, you must provide the same 'history' prop to the <Admin> as the one used to bootstrap your routerMiddleware.\nReact-admin uses this history for its own ConnectedRouter.");
  //         }
  //         return renderCore();
  //     }
  //     else {
  //         return (react_1.default.createElement(react_redux_1.Provider, { store: createAdminStore_1.default({
  //                 authProvider: finalAuthProvider,
  //                 customReducers: customReducers,
  //                 customSagas: customSagas,
  //                 dataProvider: finalDataProvider,
  //                 initialState: initialState,
  //                 history: finalHistory,
  //             }) }, renderCore()));
  //     }
  // }
  export const CoreAdminRouter: React.ComponentType<any>;
  // function (props) {
  //     var getPermissions = auth_1.useGetPermissions();
  //     var doLogout = auth_1.useLogout();
  //     var authenticated = auth_1.useAuthState().authenticated;
  //     var oneSecondHasPassed = util_1.useTimeout(1000);
  //     var _a = util_1.useSafeSetState([]), computedChildren = _a[0], setComputedChildren = _a[1];
  //     react_1.useEffect(function () {
  //         if (typeof props.children === 'function') {
  //             initializeResources();
  //         }
  //     }, [authenticated]); // eslint-disable-line react-hooks/exhaustive-deps
  //     var initializeResources = function () { return __awaiter(_this, void 0, void 0, function () {
  //         var permissions, resolveChildren, childrenFuncResult, error_1;
  //         return __generator(this, function (_a) {
  //             switch (_a.label) {
  //                 case 0:
  //                     _a.trys.push([0, 2, , 3]);
  //                     return [4 /*yield*/, getPermissions()];
  //                 case 1:
  //                     permissions = _a.sent();
  //                     resolveChildren = props.children;
  //                     childrenFuncResult = resolveChildren(permissions);
  //                     if (childrenFuncResult.then) {
  //                         childrenFuncResult.then(function (resolvedChildren) {
  //                             return setComputedChildren(resolvedChildren
  //                                 .filter(function (child) { return child; })
  //                                 .map(function (child) { return (__assign({}, child, { props: __assign({}, child.props, { key: child.props.name }) })); }));
  //                         });
  //                     }
  //                     else {
  //                         setComputedChildren(childrenFuncResult.filter(function (child) { return child; }));
  //                     }
  //                     return [3 /*break*/, 3];
  //                 case 2:
  //                     error_1 = _a.sent();
  //                     console.error(error_1);
  //                     doLogout();
  //                     return [3 /*break*/, 3];
  //                 case 3: return [2 /*return*/];
  //             }
  //         });
  //     }); };
  //     var renderCustomRoutesWithoutLayout = function (route, routeProps) {
  //         if (route.props.render) {
  //             return route.props.render(__assign({}, routeProps, { title: props.title }));
  //         }
  //         if (route.props.component) {
  //             return react_1.createElement(route.props.component, __assign({}, routeProps, { title: props.title }));
  //         }
  //     };
  //     var layout = props.layout, catchAll = props.catchAll, children = props.children, customRoutes = props.customRoutes, dashboard = props.dashboard, loading = props.loading, logout = props.logout, menu = props.menu, theme = props.theme, title = props.title;
  //     if (process.env.NODE_ENV !== 'production' &&
  //         typeof children !== 'function' &&
  //         !children) {
  //         return react_1.default.createElement(util_1.Ready, null);
  //     }
  //     if (typeof children === 'function' &&
  //         (!computedChildren || computedChildren.length === 0)) {
  //         if (oneSecondHasPassed) {
  //             return react_1.default.createElement(react_router_dom_1.Route, { path: "/", key: "loading", component: loading });
  //         }
  //         else {
  //             return null;
  //         }
  //     }
  //     var childrenToRender = (typeof children === 'function'
  //         ? computedChildren
  //         : children);
  //     return (react_1.default.createElement("div", null,
  //         // as we need all of them and not just the one rendered
  //         react_1.Children.map(childrenToRender, function (child) {
  //             return react_1.cloneElement(child, {
  //                 key: child.props.name,
  //                 // The context prop instructs the Resource component to not render anything
  //                 // but simply to register itself as a known resource
  //                 intent: 'registration',
  //             });
  //         }),
  //         react_1.default.createElement(react_router_dom_1.Switch, null,
  //             customRoutes
  //                 .filter(function (route) { return route.props.noLayout; })
  //                 .map(function (route, key) {
  //                 return react_1.cloneElement(route, {
  //                     key: key,
  //                     render: function (routeProps) {
  //                         return renderCustomRoutesWithoutLayout(route, routeProps);
  //                     },
  //                 });
  //             }),
  //             react_1.default.createElement(react_router_dom_1.Route, { path: "/", render: function () {
  //                     return react_1.createElement(layout, {
  //                         dashboard: dashboard,
  //                         logout: logout,
  //                         menu: menu,
  //                         theme: theme,
  //                         title: title,
  //                     }, react_1.default.createElement(RoutesWithLayout_1.default, { catchAll: catchAll, customRoutes: customRoutes.filter(function (route) { return !route.props.noLayout; }), dashboard: dashboard, title: title }, react_1.Children.map(childrenToRender, function (child) {
  //                         return react_1.cloneElement(child, {
  //                             key: child.props.name,
  //                             intent: 'route',
  //                         });
  //                     })));
  //                 } }))));
  // }
  export const CoreAdminUI: React.ComponentType<any>;
  // function (_a) {
  //     var _b = _a.catchAll, catchAll = _b === void 0 ? Noop : _b, children = _a.children, _c = _a.customRoutes, customRoutes = _c === void 0 ? [] : _c, dashboard = _a.dashboard, _d = _a.layout, layout = _d === void 0 ? DefaultLayout : _d, _e = _a.loading, loading = _e === void 0 ? Noop : _e, _f = _a.loginPage, loginPage = _f === void 0 ? false : _f, logout = _a.logout, menu = _a.menu, // deprecated, use a custom layout instead
  //     theme = _a.theme, _g = _a.title, title = _g === void 0 ? 'React Admin' : _g;
  //     return (react_1.default.createElement(react_router_dom_1.Switch, null,
  //         loginPage !== false && loginPage !== true ? (react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/login", render: function (props) {
  //                 return react_1.createElement(loginPage, __assign({}, props, { title: title,
  //                     theme: theme }));
  //             } })) : null,
  //         react_1.default.createElement(react_router_dom_1.Route, { path: "/", render: function (props) { return (react_1.default.createElement(CoreAdminRouter_1.default, __assign({ catchAll: catchAll, customRoutes: customRoutes, dashboard: dashboard, layout: layout, loading: loading, logout: logout && react_1.createElement(logout), menu: menu, theme: theme, title: title }, props), children)); } })));
  // }
  export function createAdminStore(_a?: any): any;
  // function (_a) {
  //     var dataProvider = _a.dataProvider, history = _a.history, _b = _a.customReducers, customReducers = _b === void 0 ? {} : _b, _c = _a.authProvider, authProvider = _c === void 0 ? null : _c, _d = _a.customSagas, customSagas = _d === void 0 ? [] : _d, initialState = _a.initialState;
  //     var appReducer = reducer_1.default(customReducers, history);
  //     var resettableAppReducer = function (state, action) {
  //         return appReducer(action.type !== clearActions_1.CLEAR_STATE
  //             ? state
  //             : // Erase data from the store but keep location, notifications, ui prefs, etc.
  //              __assign({}, state, { admin: __assign({}, state.admin, { resources: {}, customQueries: {}, references: { oneToMany: {}, possibleValues: {} } }) }), action);
  //     };
  //     var saga = function rootSaga() {
  //         return __generator(this, function (_a) {
  //             switch (_a.label) {
  //                 case 0: return [4 /*yield*/, effects_1.all([sideEffect_1.adminSaga(dataProvider, authProvider)].concat(customSagas).map(effects_1.fork))];
  //                 case 1:
  //                     _a.sent();
  //                     return [2 /*return*/];
  //             }
  //         });
  //     };
  //     var sagaMiddleware = redux_saga_1.default();
  //     var typedWindow = window;
  //     var composeEnhancers = (process.env.NODE_ENV === 'development' &&
  //         typeof typedWindow !== 'undefined' &&
  //         typedWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  //         typedWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  //             trace: true,
  //             traceLimit: 25,
  //         })) ||
  //         redux_1.compose;
  //     var store = redux_1.createStore(resettableAppReducer, typeof initialState === 'function' ? initialState() : initialState, composeEnhancers(redux_1.applyMiddleware(sagaMiddleware, connected_react_router_1.routerMiddleware(history))));
  //     sagaMiddleware.run(saga);
  //     return store;
  // }
  export const RoutesWithLayout: React.ComponentType<any>;
  // function (_a) {
  //     var catchAll = _a.catchAll, children = _a.children, customRoutes = _a.customRoutes, dashboard = _a.dashboard, title = _a.title;
  //     var childrenAsArray = react_1.default.Children.toArray(children);
  //     var firstChild = childrenAsArray.length > 0
  //         ? childrenAsArray[0]
  //         : null;
  //     return (react_1.default.createElement(react_router_dom_1.Switch, null,
  //         customRoutes &&
  //             customRoutes.map(function (route, key) { return react_1.cloneElement(route, { key: key }); }),
  //         react_1.Children.map(children, function (child) { return (react_1.default.createElement(react_router_dom_1.Route, { key: child.props.name, path: "/" + child.props.name, render: function (props) {
  //                 return react_1.cloneElement(child, __assign({
  //                     // The context prop instruct the Resource component to
  //                     // render itself as a standard component
  //                     intent: 'route' }, props));
  //             } })); }),
  //         dashboard ? (react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", render: function (routeProps) { return (react_1.default.createElement(WithPermissions_1.default, __assign({ authParams: {
  //                     route: 'dashboard',
  //                 }, component: dashboard }, routeProps))); } })) : firstChild ? (react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", render: function () { return react_1.default.createElement(react_router_dom_1.Redirect, { to: "/" + firstChild.props.name }); } })) : null,
  //         react_1.default.createElement(react_router_dom_1.Route, { render: function (routeProps) {
  //                 return react_1.createElement(catchAll, __assign({}, routeProps, { title: title }));
  //             } })));
  // }
  export const Resource: React.ComponentType<any>;
  // function (_a) {
  //     var _b = _a.intent, intent = _b === void 0 ? 'route' : _b, props = __rest(_a, ["intent"]);
  //     return intent === 'registration' ? (react_1.default.createElement(ResourceRegister, __assign({}, props))) : (react_1.default.createElement(ResourceRoutes, __assign({}, props)));
  // }
  export const CRUD_GET_MANY_ACCUMULATE: string;
  export function crudGetManyAccumulate(resource?: any, ids?: any): any;
  // function (resource, ids) { return ({
  //     type: exports.CRUD_GET_MANY_ACCUMULATE,
  //     payload: { resource: resource, ids: ids },
  //     meta: { accumulate: dataActions_1.crudGetMany },
  // }); }
  export const CRUD_GET_MATCHING_ACCUMULATE: string;
  export function crudGetMatchingAccumulate(
    reference?: any,
    relatedTo?: any,
    pagination?: any,
    sort?: any,
    filter?: any
  ): any;
  // function (reference, relatedTo, pagination, sort, filter) {
  //     var action = dataActions_1.crudGetMatching(reference, relatedTo, pagination, sort, filter);
  //     return {
  //         type: exports.CRUD_GET_MATCHING_ACCUMULATE,
  //         meta: {
  //             accumulate: function () { return action; },
  //             accumulateValues: function () { return true; },
  //             accumulateKey: JSON.stringify(__assign({ resource: reference, relatedTo: relatedTo }, action.payload)),
  //         },
  //     };
  // }
  export const USER_LOGIN: string;
  export const USER_LOGIN_LOADING: string;
  export const USER_LOGIN_FAILURE: string;
  export const USER_LOGIN_SUCCESS: string;
  export function userLogin(payload?: any, pathName?: any): any;
  // function (payload, pathName) { return ({
  //     type: exports.USER_LOGIN,
  //     payload: payload,
  //     meta: { auth: true, pathName: pathName },
  // }); }
  export const USER_CHECK: string;
  export const USER_CHECK_SUCCESS: string;
  export function userCheck(
    payload?: any,
    pathName?: any,
    routeParams?: any
  ): any;
  // function (payload, pathName, routeParams) {
  //     if (routeParams === void 0) { routeParams = {}; }
  //     return ({
  //         type: exports.USER_CHECK,
  //         payload: __assign({}, payload, { routeParams: routeParams }),
  //         meta: { auth: true, pathName: pathName },
  //     });
  // }
  export const USER_LOGOUT: string;
  export function userLogout(redirectTo?: any): any;
  // function (redirectTo) { return ({
  //     type: exports.USER_LOGOUT,
  //     payload: { redirectTo: redirectTo },
  //     meta: { auth: true },
  // }); }
  export const CLEAR_STATE: string;
  export function clearState(): any;
  // function () { return ({
  //     type: exports.CLEAR_STATE,
  // }); }
  export function crudCreate(
    resource?: any,
    data?: any,
    basePath?: any,
    redirectTo?: any
  ): any;
  // function (resource, data, basePath, redirectTo) {
  //     if (redirectTo === void 0) { redirectTo = 'edit'; }
  //     return ({
  //         type: exports.CRUD_CREATE,
  //         payload: { data: data },
  //         meta: {
  //             resource: resource,
  //             fetch: core_1.CREATE,
  //             onSuccess: {
  //                 notification: {
  //                     body: 'ra.notification.created',
  //                     level: 'info',
  //                     messageArgs: {
  //                         smart_count: 1,
  //                     },
  //                 },
  //                 redirectTo: redirectTo,
  //                 basePath: basePath,
  //             },
  //             onFailure: {
  //                 notification: {
  //                     body: 'ra.notification.http_error',
  //                     level: 'warning',
  //                 },
  //             },
  //         },
  //     });
  // }
  export const CRUD_CREATE: string;
  export const CRUD_CREATE_LOADING: string;
  export const CRUD_CREATE_FAILURE: string;
  export const CRUD_CREATE_SUCCESS: string;
  export function crudDelete(
    resource?: any,
    id?: any,
    previousData?: any,
    basePath?: any,
    redirectTo?: any,
    refresh?: any
  ): any;
  // function (resource, id, previousData, basePath, redirectTo, refresh) {
  //     if (redirectTo === void 0) { redirectTo = 'list'; }
  //     if (refresh === void 0) { refresh = true; }
  //     return ({
  //         type: exports.CRUD_DELETE,
  //         payload: { id: id, previousData: previousData },
  //         meta: {
  //             resource: resource,
  //             fetch: core_1.DELETE,
  //             onSuccess: {
  //                 notification: {
  //                     body: 'ra.notification.deleted',
  //                     level: 'info',
  //                     messageArgs: {
  //                         smart_count: 1,
  //                     },
  //                 },
  //                 refresh: refresh,
  //                 redirectTo: redirectTo,
  //                 basePath: basePath,
  //             },
  //             onFailure: {
  //                 notification: {
  //                     body: 'ra.notification.http_error',
  //                     level: 'warning',
  //                 },
  //             },
  //         },
  //     });
  // }
  export const CRUD_DELETE: string;
  export const CRUD_DELETE_LOADING: string;
  export const CRUD_DELETE_FAILURE: string;
  export const CRUD_DELETE_SUCCESS: string;
  export function crudDeleteMany(
    resource?: any,
    ids?: any,
    basePath?: any,
    refresh?: any
  ): any;
  // function (resource, ids, basePath, refresh) {
  //     if (refresh === void 0) { refresh = true; }
  //     return ({
  //         type: exports.CRUD_DELETE_MANY,
  //         payload: { ids: ids },
  //         meta: {
  //             resource: resource,
  //             fetch: core_1.DELETE_MANY,
  //             onSuccess: {
  //                 notification: {
  //                     body: 'ra.notification.deleted',
  //                     level: 'info',
  //                     messageArgs: {
  //                         smart_count: ids.length,
  //                     },
  //                 },
  //                 basePath: basePath,
  //                 refresh: refresh,
  //                 unselectAll: true,
  //             },
  //             onFailure: {
  //                 notification: {
  //                     body: 'ra.notification.http_error',
  //                     level: 'warning',
  //                 },
  //             },
  //         },
  //     });
  // }
  export const CRUD_DELETE_MANY: string;
  export const CRUD_DELETE_MANY_LOADING: string;
  export const CRUD_DELETE_MANY_FAILURE: string;
  export const CRUD_DELETE_MANY_SUCCESS: string;
  export function crudGetAll(
    resource?: any,
    sort?: any,
    filter?: any,
    maxResults?: any,
    callback?: any
  ): any;
  // function (resource, sort, filter, maxResults, callback) { return ({
  //     type: exports.CRUD_GET_ALL,
  //     payload: { sort: sort, filter: filter, pagination: { page: 1, perPage: maxResults } },
  //     meta: {
  //         resource: resource,
  //         fetch: core_1.GET_LIST,
  //         onSuccess: {
  //             callback: callback,
  //         },
  //         onFailure: {
  //             notification: {
  //                 body: 'ra.notification.http_error',
  //                 level: 'warning',
  //             },
  //         },
  //     },
  // }); }
  export const CRUD_GET_ALL: string;
  export const CRUD_GET_ALL_LOADING: string;
  export const CRUD_GET_ALL_FAILURE: string;
  export const CRUD_GET_ALL_SUCCESS: string;
  export function crudGetList(
    resource?: any,
    pagination?: any,
    sort?: any,
    filter?: any
  ): any;
  // function (resource, pagination, sort, filter) { return ({
  //     type: exports.CRUD_GET_LIST,
  //     payload: { pagination: pagination, sort: sort, filter: filter },
  //     meta: {
  //         resource: resource,
  //         fetch: core_1.GET_LIST,
  //         onFailure: {
  //             notification: {
  //                 body: 'ra.notification.http_error',
  //                 level: 'warning',
  //             },
  //         },
  //     },
  // }); }
  export const CRUD_GET_LIST: string;
  export const CRUD_GET_LIST_LOADING: string;
  export const CRUD_GET_LIST_FAILURE: string;
  export const CRUD_GET_LIST_SUCCESS: string;
  export function crudGetMany(resource?: any, ids?: any): any;
  // function (resource, ids) { return ({
  //     type: exports.CRUD_GET_MANY,
  //     payload: { ids: ids },
  //     meta: {
  //         resource: resource,
  //         fetch: core_1.GET_MANY,
  //         onFailure: {
  //             notification: {
  //                 body: 'ra.notification.http_error',
  //                 level: 'warning',
  //             },
  //         },
  //     },
  // }); }
  export const CRUD_GET_MANY: string;
  export const CRUD_GET_MANY_LOADING: string;
  export const CRUD_GET_MANY_FAILURE: string;
  export const CRUD_GET_MANY_SUCCESS: string;
  export function crudGetManyReference(
    reference?: any,
    target?: any,
    id?: any,
    relatedTo?: any,
    pagination?: any,
    sort?: any,
    filter?: any,
    source?: any
  ): any;
  // function (reference, target, id, relatedTo, pagination, sort, filter, source) { return ({
  //     type: exports.CRUD_GET_MANY_REFERENCE,
  //     payload: { target: target, id: id, pagination: pagination, sort: sort, filter: filter, source: source },
  //     meta: {
  //         resource: reference,
  //         relatedTo: relatedTo,
  //         fetch: core_1.GET_MANY_REFERENCE,
  //         onFailure: {
  //             notification: {
  //                 body: 'ra.notification.http_error',
  //                 level: 'warning',
  //             },
  //         },
  //     },
  // }); }
  export const CRUD_GET_MANY_REFERENCE: string;
  export const CRUD_GET_MANY_REFERENCE_LOADING: string;
  export const CRUD_GET_MANY_REFERENCE_FAILURE: string;
  export const CRUD_GET_MANY_REFERENCE_SUCCESS: string;
  export function crudGetMatching(
    reference?: any,
    relatedTo?: any,
    pagination?: any,
    sort?: any,
    filter?: any
  ): any;
  // function (reference, relatedTo, pagination, sort, filter) { return ({
  //     type: exports.CRUD_GET_MATCHING,
  //     payload: { pagination: pagination, sort: sort, filter: filter },
  //     meta: {
  //         resource: reference,
  //         relatedTo: relatedTo,
  //         fetch: core_1.GET_LIST,
  //         onFailure: {
  //             notification: {
  //                 body: 'ra.notification.http_error',
  //                 level: 'warning',
  //             },
  //         },
  //     },
  // }); }
  export const CRUD_GET_MATCHING: string;
  export const CRUD_GET_MATCHING_LOADING: string;
  export const CRUD_GET_MATCHING_FAILURE: string;
  export const CRUD_GET_MATCHING_SUCCESS: string;
  export function crudGetOne(
    resource?: any,
    id?: any,
    basePath?: any,
    refresh?: any
  ): any;
  // function (resource, id, basePath, refresh) {
  //     if (refresh === void 0) { refresh = true; }
  //     return ({
  //         type: exports.CRUD_GET_ONE,
  //         payload: { id: id },
  //         meta: {
  //             resource: resource,
  //             fetch: core_1.GET_ONE,
  //             basePath: basePath,
  //             onFailure: {
  //                 notification: {
  //                     body: 'ra.notification.item_doesnt_exist',
  //                     level: 'warning',
  //                 },
  //                 redirectTo: 'list',
  //                 refresh: refresh,
  //             },
  //         },
  //     });
  // }
  export const CRUD_GET_ONE: string;
  export const CRUD_GET_ONE_LOADING: string;
  export const CRUD_GET_ONE_FAILURE: string;
  export const CRUD_GET_ONE_SUCCESS: string;
  export function crudUpdate(
    resource?: any,
    id?: any,
    data?: any,
    previousData?: any,
    basePath?: any,
    redirectTo?: any,
    refresh?: any
  ): any;
  // function (resource, id, data, previousData, basePath, redirectTo, refresh) {
  //     if (redirectTo === void 0) { redirectTo = 'show'; }
  //     if (refresh === void 0) { refresh = true; }
  //     return ({
  //         type: exports.CRUD_UPDATE,
  //         payload: { id: id, data: data, previousData: previousData },
  //         meta: {
  //             resource: resource,
  //             fetch: core_1.UPDATE,
  //             onSuccess: {
  //                 notification: {
  //                     body: 'ra.notification.updated',
  //                     level: 'info',
  //                     messageArgs: {
  //                         smart_count: 1,
  //                     },
  //                 },
  //                 refresh: refresh,
  //                 redirectTo: redirectTo,
  //                 basePath: basePath,
  //             },
  //             onFailure: {
  //                 notification: {
  //                     body: 'ra.notification.http_error',
  //                     level: 'warning',
  //                 },
  //             },
  //         },
  //     });
  // }
  export const CRUD_UPDATE: string;
  export const CRUD_UPDATE_LOADING: string;
  export const CRUD_UPDATE_FAILURE: string;
  export const CRUD_UPDATE_SUCCESS: string;
  export function crudUpdateMany(
    resource?: any,
    ids?: any,
    data?: any,
    basePath?: any,
    refresh?: any
  ): any;
  // function (resource, ids, data, basePath, refresh) {
  //     if (refresh === void 0) { refresh = true; }
  //     return ({
  //         type: exports.CRUD_UPDATE_MANY,
  //         payload: { ids: ids, data: data },
  //         meta: {
  //             resource: resource,
  //             fetch: core_1.UPDATE_MANY,
  //             onSuccess: {
  //                 notification: {
  //                     body: 'ra.notification.updated',
  //                     level: 'info',
  //                     messageArgs: {
  //                         smart_count: ids.length,
  //                     },
  //                 },
  //                 basePath: basePath,
  //                 refresh: refresh,
  //                 unselectAll: true,
  //             },
  //             onFailure: {
  //                 notification: {
  //                     body: 'ra.notification.http_error',
  //                     level: 'warning',
  //                 },
  //             },
  //         },
  //     });
  // }
  export const CRUD_UPDATE_MANY: string;
  export const CRUD_UPDATE_MANY_LOADING: string;
  export const CRUD_UPDATE_MANY_FAILURE: string;
  export const CRUD_UPDATE_MANY_SUCCESS: string;
  export const FETCH_START: string;
  export function fetchStart(): any;
  // function () { return ({ type: exports.FETCH_START }); }
  export const FETCH_END: string;
  export function fetchEnd(): any;
  // function () { return ({ type: exports.FETCH_END }); }
  export const FETCH_ERROR: string;
  export function fetchError(): any;
  // function () { return ({ type: exports.FETCH_ERROR }); }
  export const FETCH_CANCEL: string;
  export function fetchCancel(): any;
  // function () { return ({ type: exports.FETCH_CANCEL }); }
  export const CRUD_SHOW_FILTER: string;
  export function showFilter(resource?: any, field?: any): any;
  // function (resource, field) { return ({
  //     type: exports.CRUD_SHOW_FILTER,
  //     payload: { field: field },
  //     meta: { resource: resource },
  // }); }
  export const CRUD_HIDE_FILTER: string;
  export function hideFilter(resource?: any, field?: any): any;
  // function (resource, field) { return ({
  //     type: exports.CRUD_HIDE_FILTER,
  //     payload: { field: field },
  //     meta: { resource: resource },
  // }); }
  export const CRUD_SET_FILTER: string;
  export function setFilter(resource?: any, field?: any, value?: any): any;
  // function (resource, field, value) { return ({
  //     type: exports.CRUD_SET_FILTER,
  //     payload: { field: field, value: value },
  //     meta: { resource: resource },
  // }); }
  export const CRUD_CHANGE_LIST_PARAMS: string;
  export function changeListParams(resource?: any, params?: any): any;
  // function (resource, params) { return ({
  //     type: exports.CRUD_CHANGE_LIST_PARAMS,
  //     payload: params,
  //     meta: { resource: resource },
  // }); }
  export const SET_LIST_SELECTED_IDS: string;
  export function setListSelectedIds(resource?: any, ids?: any): any;
  // function (resource, ids) { return ({
  //     type: exports.SET_LIST_SELECTED_IDS,
  //     payload: ids,
  //     meta: { resource: resource },
  // }); }
  export const TOGGLE_LIST_ITEM: string;
  export function toggleListItem(resource?: any, id?: any): any;
  // function (resource, id) { return ({
  //     type: exports.TOGGLE_LIST_ITEM,
  //     payload: id,
  //     meta: { resource: resource },
  // }); }
  export const CHANGE_LOCALE: string;
  export function changeLocale(locale?: any): any;
  // function (locale) { return ({
  //     type: exports.CHANGE_LOCALE,
  //     payload: locale,
  // }); }
  export const CHANGE_LOCALE_SUCCESS: string;
  export function changeLocaleSuccess(locale?: any, messages?: any): any;
  // function (locale, messages) { return ({
  //     type: exports.CHANGE_LOCALE_SUCCESS,
  //     payload: {
  //         locale: locale,
  //         messages: messages,
  //     },
  // }); }
  export const CHANGE_LOCALE_FAILURE: string;
  export function changeLocaleFailure(locale?: any, error?: any): any;
  // function (locale, error) { return ({
  //     type: exports.CHANGE_LOCALE_FAILURE,
  //     error: error,
  //     payload: {
  //         locale: locale,
  //     },
  // }); }
  export const SHOW_NOTIFICATION: string;
  export function showNotification(): any;
  // function (
  // // A translatable label or text to display on notification
  // message,
  // // The type of the notification
  // type,
  // // Specify additional parameters of notification
  // notificationOptions) {
  //     if (type === void 0) { type = 'info'; }
  //     return ({
  //         type: exports.SHOW_NOTIFICATION,
  //         payload: __assign({}, notificationOptions, { type: type,
  //             message: message }),
  //     });
  // }
  export const HIDE_NOTIFICATION: string;
  export function hideNotification(): any;
  // function () { return ({
  //     type: exports.HIDE_NOTIFICATION,
  // }); }
  export const REGISTER_RESOURCE: string;
  export function registerResource(resource?: any): any;
  // function (resource) { return ({
  //     type: exports.REGISTER_RESOURCE,
  //     payload: resource,
  // }); }
  export const UNREGISTER_RESOURCE: string;
  export function unregisterResource(resourceName?: any): any;
  // function (resourceName) { return ({
  //     type: exports.UNREGISTER_RESOURCE,
  //     payload: resourceName,
  // }); }
  export const TOGGLE_SIDEBAR: string;
  export function toggleSidebar(): any;
  // function () { return ({
  //     type: exports.TOGGLE_SIDEBAR,
  // }); }
  export const SET_SIDEBAR_VISIBILITY: string;
  export function setSidebarVisibility(isOpen?: any): any;
  // function (isOpen) { return ({
  //     type: exports.SET_SIDEBAR_VISIBILITY,
  //     payload: isOpen,
  // }); }
  export const REFRESH_VIEW: string;
  export function refreshView(): any;
  // function () { return ({
  //     type: exports.REFRESH_VIEW,
  // }); }
  export const UNDOABLE: string;
  export function startUndoable(action?: any): any;
  // function (action) { return ({
  //     type: exports.UNDOABLE,
  //     payload: { action: action },
  // }); }
  export const UNDO: string;
  export function undo(): any;
  // function () { return ({
  //     type: exports.UNDO,
  // }); }
  export const COMPLETE: string;
  export function complete(): any;
  // function () { return ({
  //     type: exports.COMPLETE,
  // }); }
  export const START_OPTIMISTIC_MODE: string;
  export function startOptimisticMode(): any;
  // function () { return ({
  //     type: exports.START_OPTIMISTIC_MODE,
  // }); }
  export const STOP_OPTIMISTIC_MODE: string;
  export function stopOptimisticMode(): any;
  // function () { return ({
  //     type: exports.STOP_OPTIMISTIC_MODE,
  // }); }
  export const Authenticated: React.ComponentType<any>;
  // function (_a) {
  //     var authParams = _a.authParams, children = _a.children, location = _a.location, // kept for backwards compatibility, unused
  //     rest = __rest(_a, ["authParams", "children", "location"]);
  //     useAuthenticated_1.default(authParams);
  //     // render the child even though the useAuthenticated() call isn't finished (optimistic rendering)
  //     // the above hook will log out if the authProvider doesn't validate that the user is authenticated
  //     return react_1.cloneElement(children, rest);
  // }
  export const AuthContext: {};
  // $$typeof: "symbol"
  // _calculateChangedBits: null
  // _currentValue: {"login":"function () { return Promise.resolve(); }","logout":"function () { return Promise.resolve(); }","checkAuth":"function () { return Promise.resolve(); }","checkError":"function () { return Promise.resolve(); }","getPermissions":"function () { return Promise.resolve(); }"}
  // _currentValue2: {"login":"function () { return Promise.resolve(); }","logout":"function () { return Promise.resolve(); }","checkAuth":"function () { return Promise.resolve(); }","checkError":"function () { return Promise.resolve(); }","getPermissions":"function () { return Promise.resolve(); }"}
  // _threadCount: "number"
  // Provider: {"$$typeof":"symbol","_context":"string"}
  // Consumer: {"$$typeof":"symbol","_context":"string","_calculateChangedBits":null}
  // _currentRenderer: null
  // _currentRenderer2: null
  // displayName: "string"
  export function useAuthProvider(): any;
  // function () { return react_1.useContext(AuthContext_1.default); }
  export function useAuthState(params?: any): any;
  // function (params) {
  //     if (params === void 0) { params = emptyParams; }
  //     var _a = hooks_1.useSafeSetState({
  //         loading: true,
  //         loaded: false,
  //         authenticated: true,
  //     }), state = _a[0], setState = _a[1];
  //     var checkAuth = useCheckAuth_1.default();
  //     react_1.useEffect(function () {
  //         checkAuth(params, false)
  //             .then(function () {
  //             return setState({ loading: false, loaded: true, authenticated: true });
  //         })
  //             .catch(function () {
  //             return setState({ loading: false, loaded: true, authenticated: false });
  //         });
  //     }, [checkAuth, params, setState]);
  //     return state;
  // }
  export function usePermissions(params?: any): any;
  // function (params) {
  //     if (params === void 0) { params = emptyParams; }
  //     var _a = hooks_1.useSafeSetState({
  //         loading: true,
  //         loaded: false,
  //     }), state = _a[0], setState = _a[1];
  //     var getPermissions = useGetPermissions_1.default();
  //     react_1.useEffect(function () {
  //         getPermissions(params)
  //             .then(function (permissions) {
  //             setState({ loading: false, loaded: true, permissions: permissions });
  //         })
  //             .catch(function (error) {
  //             setState({
  //                 loading: false,
  //                 loaded: true,
  //                 error: error,
  //             });
  //         });
  //     }, [getPermissions, params, setState]);
  //     return state;
  // }
  export function useAuthenticated(params?: any): any;
  // function (params) {
  //     if (params === void 0) { params = emptyParams; }
  //     var checkAuth = useCheckAuth_1.default();
  //     react_1.useEffect(function () {
  //         checkAuth(params).catch(function () { });
  //     }, [checkAuth, params]);
  // }
  export const WithPermissions: React.ComponentType<any>;
  // function (_a) {
  //     var authParams = _a.authParams, children = _a.children, render = _a.render, component = _a.component, staticContext = _a.staticContext, props = __rest(_a, ["authParams", "children", "render", "component", "staticContext"]);
  //     warning_1.default((render && children && !isEmptyChildren(children)) ||
  //         (render && component) ||
  //         (component && children && !isEmptyChildren(children)), 'You should only use one of the `component`, `render` and `children` props in <WithPermissions>');
  //     useAuthenticated_1.default(authParams);
  //     var permissions = usePermissions_1.default(authParams).permissions;
  //     // render even though the usePermissions() call isn't finished (optimistic rendering)
  //     if (component) {
  //         return react_1.createElement(component, __assign({ permissions: permissions }, props));
  //     }
  //     // @deprecated
  //     if (render) {
  //         return render(__assign({ permissions: permissions }, props));
  //     }
  //     // @deprecated
  //     if (children) {
  //         return children(__assign({ permissions: permissions }, props));
  //     }
  // }
  export function useLogin(): any;
  // function () {
  //     var authProvider = useAuthProvider_1.default();
  //     var location = react_router_dom_1.useLocation();
  //     var history = react_router_dom_1.useHistory();
  //     var nextPathName = location.state && location.state.nextPathname;
  //     var login = react_1.useCallback(function (params, pathName) {
  //         if (params === void 0) { params = {}; }
  //         if (pathName === void 0) { pathName = useAuthProvider_1.defaultAuthParams.afterLoginUrl; }
  //         return authProvider.login(params).then(function (ret) {
  //             history.push(nextPathName || pathName);
  //             return ret;
  //         });
  //     }, [authProvider, history, nextPathName]);
  //     var loginWithoutProvider = react_1.useCallback(function (_, __) {
  //         history.push(useAuthProvider_1.defaultAuthParams.afterLoginUrl);
  //         return Promise.resolve();
  //     }, [history]);
  //     return authProvider ? login : loginWithoutProvider;
  // }
  export function useLogout(): any;
  // function () {
  //     var authProvider = useAuthProvider_1.default();
  //     var dispatch = react_redux_1.useDispatch();
  //     /**
  //      * We need the current location to pass in the router state
  //      * so that the login hook knows where to redirect to as next route after login.
  //      *
  //      * But if we used useLocation to get it, the logout function
  //      * would be rebuilt each time the user changes location. Consequently, that
  //      * would force a rerender of all components using this hook upon navigation
  //      * (CoreAdminRouter for example).
  //      *
  //      * To avoid that, we read the location directly from history which is mutable.
  //      * See: https://reacttraining.com/react-router/web/api/history/history-is-mutable
  //      */
  //     var history = react_router_dom_1.useHistory();
  //     var logout = react_1.useCallback(function (params, redirectTo) {
  //         if (params === void 0) { params = {}; }
  //         if (redirectTo === void 0) { redirectTo = useAuthProvider_1.defaultAuthParams.loginUrl; }
  //         return authProvider.logout(params).then(function (redirectToFromProvider) {
  //             dispatch(clearActions_1.clearState());
  //             history.push({
  //                 pathname: redirectToFromProvider || redirectTo,
  //                 state: {
  //                     nextPathname: history.location && history.location.pathname,
  //                 },
  //             });
  //             return redirectToFromProvider;
  //         });
  //     }, [authProvider, history, dispatch]);
  //     var logoutWithoutProvider = react_1.useCallback(function (_) {
  //         history.push({
  //             pathname: useAuthProvider_1.defaultAuthParams.loginUrl,
  //             state: {
  //                 nextPathname: history.location && history.location.pathname,
  //             },
  //         });
  //         dispatch(clearActions_1.clearState());
  //         return Promise.resolve();
  //     }, [dispatch, history]);
  //     return authProvider ? logout : logoutWithoutProvider;
  // }
  export function useCheckAuth(): any;
  // function () {
  //     var authProvider = useAuthProvider_1.default();
  //     var notify = useNotify_1.default();
  //     var logout = useLogout_1.default();
  //     var checkAuth = react_1.useCallback(function (params, logoutOnFailure, redirectTo) {
  //         if (params === void 0) { params = {}; }
  //         if (logoutOnFailure === void 0) { logoutOnFailure = true; }
  //         if (redirectTo === void 0) { redirectTo = useAuthProvider_1.defaultAuthParams.loginUrl; }
  //         return authProvider.checkAuth(params).catch(function (error) {
  //             if (logoutOnFailure) {
  //                 logout({}, error && error.redirectTo
  //                     ? error.redirectTo
  //                     : redirectTo);
  //                 notify(getErrorMessage(error, 'ra.auth.auth_check_error'), 'warning');
  //             }
  //             throw error;
  //         });
  //     }, [authProvider, logout, notify]);
  //     return authProvider ? checkAuth : checkAuthWithoutAuthProvider;
  // }
  export function useGetPermissions(): any;
  // function () {
  //     var authProvider = useAuthProvider_1.default();
  //     var getPermissions = react_1.useCallback(function (params) {
  //         if (params === void 0) { params = {}; }
  //         return authProvider.getPermissions(params);
  //     }, [authProvider]);
  //     return authProvider ? getPermissions : getPermissionsWithoutProvider;
  // }
  export function useLogoutIfAccessDenied(): any;
  // function () {
  //     var authProvider = useAuthProvider_1.default();
  //     var logout = useLogout_1.default();
  //     var notify = sideEffect_1.useNotify();
  //     var logoutIfAccessDenied = react_1.useCallback(function (error) {
  //         return authProvider
  //             .checkError(error)
  //             .then(function () { return false; })
  //             .catch(function (e) {
  //             var redirectTo = e && e.redirectTo
  //                 ? e.redirectTo
  //                 : error && error.redirectTo
  //                     ? error.redirectto
  //                     : undefined;
  //             logout({}, redirectTo);
  //             notify('ra.notification.logged_out', 'warning');
  //             return true;
  //         });
  //     }, [authProvider, logout, notify]);
  //     return authProvider
  //         ? logoutIfAccessDenied
  //         : logoutIfAccessDeniedWithoutProvider;
  // }
  export function convertLegacyAuthProvider(legacyAuthProvider?: any): any;
  // function (legacyAuthProvider) {
  //     var authProvider = function () {
  //         var args = [];
  //         for (var _i = 0; _i < arguments.length; _i++) {
  //             args[_i] = arguments[_i];
  //         }
  //         return legacyAuthProvider.apply(null, args);
  //     };
  //     authProvider.login = function (params) { return legacyAuthProvider(types_1.AUTH_LOGIN, params); };
  //     authProvider.logout = function (params) { return legacyAuthProvider(types_1.AUTH_LOGOUT, params); };
  //     authProvider.checkAuth = function (params) { return legacyAuthProvider(types_1.AUTH_CHECK, params); };
  //     authProvider.checkError = function (error) { return legacyAuthProvider(types_1.AUTH_ERROR, error); };
  //     authProvider.getPermissions = function (params) {
  //         return legacyAuthProvider(types_1.AUTH_GET_PERMISSIONS, params);
  //     };
  //     return authProvider;
  // }
  export const AUTH_LOGIN: string;
  export const AUTH_CHECK: string;
  export const AUTH_ERROR: string;
  export const AUTH_LOGOUT: string;
  export const AUTH_GET_PERMISSIONS: string;
  export function convertLegacyDataProvider(legacyDataProvider?: any): any;
  // function (legacyDataProvider) {
  //     var proxy = new Proxy(defaultDataProvider, {
  //         get: function (_, name) {
  //             return function (resource, params) {
  //                 if (Object.keys(fetchMap).includes(name.toString())) {
  //                     var fetchType = fetchMap[name.toString()];
  //                     return legacyDataProvider(fetchType, resource, params);
  //                 }
  //                 return legacyDataProvider(name.toString(), resource, params);
  //             };
  //         },
  //         apply: function (_, __, args) {
  //             return legacyDataProvider.apply(legacyDataProvider, args);
  //         },
  //     });
  //     return proxy;
  // }
  export const DataProviderContext: {};
  // $$typeof: "symbol"
  // _calculateChangedBits: null
  // _currentValue: null
  // _currentValue2: null
  // _threadCount: "number"
  // Provider: {"$$typeof":"symbol","_context":"string"}
  // Consumer: {"$$typeof":"symbol","_context":"string","_calculateChangedBits":null}
  // _currentRenderer: null
  // _currentRenderer2: null
  // displayName: "string"
  export const HttpError: React.ComponentType<any>;
  // function HttpError(message, status, body) {
  //         if (body === void 0) { body = null; }
  //         var _this = _super.call(this, message) || this;
  //         _this.message = message;
  //         _this.status = status;
  //         _this.body = body;
  //         _this.name = _this.constructor.name;
  //         if (typeof Error.captureStackTrace === 'function') {
  //             Error.captureStackTrace(_this, _this.constructor);
  //         }
  //         else {
  //             _this.stack = new Error(message).stack;
  //         }
  //         _this.stack = new Error().stack;
  //         return _this;
  //     }
  export const fetchUtils: {};
  // createHeadersFromOptions: "function (options) {\n    var requestHeaders = (options.headers ||\n        new Headers({\n            Accept: 'application/json',\n        }));\n    if (!requestHeaders.has('Content-Type') &&\n        !(options && (!options.method || options.method === 'GET')) &&\n        !(options && options.body && options.body instanceof FormData)) {\n        requestHeaders.set('Content-Type', 'application/json');\n    }\n    if (options.user && options.user.authenticated && options.user.token) {\n        requestHeaders.set('Authorization', options.user.token);\n    }\n    return requestHeaders;\n}"
  // fetchJson: "function (url, options) {\n    if (options === void 0) { options = {}; }\n    var requestHeaders = exports.createHeadersFromOptions(options);\n    return fetch(url, __assign({}, options, { headers: requestHeaders }))\n        .then(function (response) {\n        return response.text().then(function (text) { return ({\n            status: response.status,\n            statusText: response.statusText,\n            headers: response.headers,\n            body: text,\n        }); });\n    })\n        .then(function (_a) {\n        var status = _a.status, statusText = _a.statusText, headers = _a.headers, body = _a.body;\n        var json;\n        try {\n            json = JSON.parse(body);\n        }\n        catch (e) {\n            // not json, no big deal\n        }\n        if (status < 200 || status >= 300) {\n            return Promise.reject(new HttpError_1.default((json && json.message) || statusText, status, json));\n        }\n        return Promise.resolve({ status: status, headers: headers, body: body, json: json });\n    });\n}"
  // queryParameters: "function (obj, opts) {\n\tvar defaults = {\n\t\tencode: true,\n\t\tstrict: true,\n\t\tarrayFormat: 'none'\n\t};\n\n\topts = objectAssign(defaults, opts);\n\n\tif (opts.sort === false) {\n\t\topts.sort = function () {};\n\t}\n\n\tvar formatter = encoderForArrayFormat(opts);\n\n\treturn obj ? Object.keys(obj).sort(opts.sort).map(function (key) {\n\t\tvar val = obj[key];\n\n\t\tif (val === undefined) {\n\t\t\treturn '';\n\t\t}\n\n\t\tif (val === null) {\n\t\t\treturn encode(key, opts);\n\t\t}\n\n\t\tif (Array.isArray(val)) {\n\t\t\tvar result = [];\n\n\t\t\tval.slice().forEach(function (val2) {\n\t\t\t\tif (val2 === undefined) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tresult.push(formatter(key, val2, result.length));\n\t\t\t});\n\n\t\t\treturn result.join('&');\n\t\t}\n\n\t\treturn encode(key, opts) + '=' + encode(val, opts);\n\t}).filter(function (x) {\n\t\treturn x.length > 0;\n\t}).join('&') : '';\n}"
  // flattenObject: "function (value, path) {\n    var _a;\n    if (path === void 0) { path = []; }\n    if (isValidObject(value)) {\n        return Object.assign.apply(Object, [{}].concat(Object.keys(value).map(function (key) {\n            return exports.flattenObject(value[key], path.concat([key]));\n        })));\n    }\n    else {\n        return path.length ? (_a = {}, _a[path.join('.')] = value, _a) : value;\n    }\n}"
  export const Mutation: React.ComponentType<any>;
  // function (_a) {
  //     var children = _a.children, type = _a.type, resource = _a.resource, payload = _a.payload, options = _a.options;
  //     return children.apply(void 0, useMutation_1.default({ type: type, resource: resource, payload: payload }, __assign({}, options, { withDeclarativeSideEffectsSupport: true })));
  // }
  export const Query: React.ComponentType<any>;
  // function (_a) {
  //     var children = _a.children, type = _a.type, resource = _a.resource, payload = _a.payload, options = _a.options;
  //     return children(useQuery_1.default({ type: type, resource: resource, payload: payload }, __assign({}, options, { withDeclarativeSideEffectsSupport: true })));
  // }
  export const undoableEventEmitter: {};
  // _events: {}
  // _eventsCount: "number"
  export function useDataProvider(): any;
  // function () {
  //     var dispatch = react_redux_1.useDispatch();
  //     var dataProvider = react_1.useContext(DataProviderContext_1.default) || defaultDataProvider_1.default;
  //     var isOptimistic = react_redux_1.useSelector(function (state) { return state.admin.ui.optimistic; });
  //     var logoutIfAccessDenied = useLogoutIfAccessDenied_1.default();
  //     var dataProviderProxy = react_1.useMemo(function () {
  //         return new Proxy(dataProvider, {
  //             get: function (target, name) {
  //                 return function (resource, payload, options) {
  //                     var type = name.toString();
  //                     var _a = options || {}, _b = _a.action, action = _b === void 0 ? 'CUSTOM_FETCH' : _b, _c = _a.undoable, undoable = _c === void 0 ? false : _c, _d = _a.onSuccess, onSuccess = _d === void 0 ? undefined : _d, _e = _a.onFailure, onFailure = _e === void 0 ? undefined : _e, rest = __rest(_a, ["action", "undoable", "onSuccess", "onFailure"]);
  //                     if (typeof dataProvider[type] !== 'function') {
  //                         throw new Error("Unknown dataProvider function: " + type);
  //                     }
  //                     if (onSuccess && typeof onSuccess !== 'function') {
  //                         throw new Error('The onSuccess option must be a function');
  //                     }
  //                     if (onFailure && typeof onFailure !== 'function') {
  //                         throw new Error('The onFailure option must be a function');
  //                     }
  //                     if (undoable && !onSuccess) {
  //                         throw new Error('You must pass an onSuccess callback calling notify() to use the undoable mode');
  //                     }
  //                     if (isOptimistic) {
  //                         // in optimistic mode, all fetch actions are canceled,
  //                         // so the admin uses the store without synchronization
  //                         return Promise.resolve();
  //                     }
  //                     var params = {
  //                         type: type,
  //                         payload: payload,
  //                         resource: resource,
  //                         action: action,
  //                         rest: rest,
  //                         onSuccess: onSuccess,
  //                         onFailure: onFailure,
  //                         dataProvider: dataProvider,
  //                         dispatch: dispatch,
  //                         logoutIfAccessDenied: logoutIfAccessDenied,
  //                     };
  //                     return undoable
  //                         ? performUndoableQuery(params)
  //                         : performQuery(params);
  //                 };
  //             },
  //         });
  //     }, [dataProvider, dispatch, isOptimistic, logoutIfAccessDenied]);
  //     return dataProviderProxy;
  // }
  export function useMutation(query?: any, options?: any): any;
  // function (query, options) {
  //     var _a = hooks_1.useSafeSetState({
  //         data: null,
  //         error: null,
  //         total: null,
  //         loading: false,
  //         loaded: false,
  //     }), state = _a[0], setState = _a[1];
  //     var dataProvider = useDataProvider_1.default();
  //     var dataProviderWithDeclarativeSideEffects = useDataProviderWithDeclarativeSideEffects_1.default();
  //     /* eslint-disable react-hooks/exhaustive-deps */
  //     var mutate = react_1.useCallback(function (callTimeQuery, callTimeOptions) {
  //         var finalDataProvider = hasDeclarativeSideEffectsSupport(options, callTimeOptions)
  //             ? dataProviderWithDeclarativeSideEffects
  //             : dataProvider;
  //         var params = mergeDefinitionAndCallTimeParameters(query, callTimeQuery, options, callTimeOptions);
  //         setState(function (prevState) { return (__assign({}, prevState, { loading: true })); });
  //         finalDataProvider[params.type](params.resource, params.payload, params.options)
  //             .then(function (_a) {
  //             var data = _a.data, total = _a.total;
  //             setState({
  //                 data: data,
  //                 total: total,
  //                 loading: false,
  //                 loaded: true,
  //             });
  //         })
  //             .catch(function (errorFromResponse) {
  //             setState({
  //                 error: errorFromResponse,
  //                 loading: false,
  //                 loaded: false,
  //             });
  //         });
  //     }, [
  //         // deep equality, see https://github.com/facebook/react/issues/14476#issuecomment-471199055
  //         JSON.stringify({ query: query, options: options }),
  //         dataProvider,
  //         dataProviderWithDeclarativeSideEffects,
  //         setState,
  //     ]
  //     /* eslint-enable react-hooks/exhaustive-deps */
  //     );
  //     return [mutate, state];
  // }
  export function useQuery(query?: any, options?: any): any;
  // function (query, options) {
  //     if (options === void 0) { options = {}; }
  //     var type = query.type, resource = query.resource, payload = query.payload;
  //     var withDeclarativeSideEffectsSupport = options.withDeclarativeSideEffectsSupport, rest = __rest(options, ["withDeclarativeSideEffectsSupport"]);
  //     var _a = hooks_1.useSafeSetState({
  //         data: undefined,
  //         error: null,
  //         total: null,
  //         loading: true,
  //         loaded: false,
  //     }), state = _a[0], setState = _a[1];
  //     var dataProvider = useDataProvider_1.default();
  //     var dataProviderWithDeclarativeSideEffects = useDataProviderWithDeclarativeSideEffects_1.default();
  //     /* eslint-disable react-hooks/exhaustive-deps */
  //     react_1.useEffect(function () {
  //         /**
  //          * Support legacy side effects, e.g. { onSuccess: { refresh: true, unSelectAll: true }}
  //          *
  //          * @deprecated to be removed in 4.0
  //          */
  //         var dataProviderWithSideEffects = withDeclarativeSideEffectsSupport
  //             ? dataProviderWithDeclarativeSideEffects
  //             : dataProvider;
  //         setState(function (prevState) { return (__assign({}, prevState, { loading: true })); });
  //         dataProviderWithSideEffects[type](resource, payload, rest)
  //             .then(function (_a) {
  //             var data = _a.data, total = _a.total;
  //             setState({
  //                 data: data,
  //                 total: total,
  //                 loading: false,
  //                 loaded: true,
  //             });
  //         })
  //             .catch(function (error) {
  //             setState({
  //                 error: error,
  //                 loading: false,
  //                 loaded: false,
  //             });
  //         });
  //     }, [
  //         // deep equality, see https://github.com/facebook/react/issues/14476#issuecomment-471199055
  //         JSON.stringify({ query: query, options: rest }),
  //         dataProvider,
  //         dataProviderWithDeclarativeSideEffects,
  //         setState,
  //     ]);
  //     /* eslint-enable react-hooks/exhaustive-deps */
  //     return state;
  // }
  export function useQueryWithStore(
    query?: any,
    options?: any,
    dataSelector?: any,
    totalSelector?: any
  ): any;
  // function (query, options, dataSelector, totalSelector) {
  //     if (options === void 0) { options = { action: 'CUSTOM_QUERY' }; }
  //     if (dataSelector === void 0) { dataSelector = defaultDataSelector(query); }
  //     if (totalSelector === void 0) { totalSelector = defaultTotalSelector; }
  //     var type = query.type, resource = query.resource, payload = query.payload;
  //     var data = react_redux_1.useSelector(dataSelector);
  //     var total = react_redux_1.useSelector(totalSelector);
  //     var _a = hooks_1.useSafeSetState({
  //         data: data,
  //         total: total,
  //         error: null,
  //         loading: true,
  //         loaded: data !== undefined && !isEmptyList(data),
  //     }), state = _a[0], setState = _a[1];
  //     if (!isEqual_1.default(state.data, data) || state.total !== total) {
  //         setState(__assign({}, state, { data: data,
  //             total: total, loaded: true }));
  //     }
  //     var dataProvider = useDataProvider_1.default();
  //     react_1.useEffect(function () {
  //         setState(function (prevState) { return (__assign({}, prevState, { loading: true })); });
  //         dataProvider[type](resource, payload, options)
  //             .then(function () {
  //             // We don't care about the dataProvider response here, because
  //             // it was already passed to SUCCESS reducers by the dataProvider
  //             // hook, and the result is available from the Redux store
  //             // through the data and total selectors.
  //             // In addition, if the query is optimistic, the response
  //             // will be empty, so it should not be used at all.
  //             setState(function (prevState) { return (__assign({}, prevState, { error: null, loading: false, loaded: true })); });
  //         })
  //             .catch(function (error) {
  //             setState({
  //                 error: error,
  //                 loading: false,
  //                 loaded: false,
  //             });
  //         });
  //         // deep equality, see https://github.com/facebook/react/issues/14476#issuecomment-471199055
  //     }, [JSON.stringify({ query: query, options: options })]); // eslint-disable-line
  //     return state;
  // }
  export function withDataProvider(Component?: any): any;
  // function (Component) { return function (props) { return (react_1.default.createElement(Component, __assign({}, props, { dataProvider: useDataProviderWithDeclarativeSideEffects_1.default() }))); }; }
  export function useGetOne(resource?: any, id?: any, options?: any): any;
  // function (resource, id, options) {
  //     return useQueryWithStore_1.default({ type: 'getOne', resource: resource, payload: { id: id } }, options, function (state) {
  //         return state.admin.resources[resource]
  //             ? state.admin.resources[resource].data[id]
  //             : null;
  //     });
  // }
  export function useGetList(
    resource?: any,
    pagination?: any,
    sort?: any,
    filter?: any,
    options?: any
  ): any;
  // function (resource, pagination, sort, filter, options) {
  //     if (options && options.action) {
  //         throw new Error('useGetList() does not support custom action names. Use useQueryWithStore() and your own Redux selectors if you need a custom action name for a getList query');
  //     }
  //     var key = JSON.stringify({
  //         type: 'GET_LIST',
  //         resource: resource,
  //         payload: { pagination: pagination, sort: sort, filter: filter },
  //     });
  //     var _a = useQueryWithStore_1.default({ type: 'getList', resource: resource, payload: { pagination: pagination, sort: sort, filter: filter } }, options, function (state) {
  //         return state.admin.customQueries[key]
  //             ? state.admin.customQueries[key].data
  //             : null;
  //     }, function (state) {
  //         return state.admin.customQueries[key]
  //             ? state.admin.customQueries[key].total
  //             : null;
  //     }), data = _a.data, total = _a.total, error = _a.error, loading = _a.loading, loaded = _a.loaded;
  //     var ids = data ? data.map(function (record) { return record.id; }) : [];
  //     var dataObject = data
  //         ? data.reduce(function (acc, next) {
  //             acc[next.id] = next;
  //             return acc;
  //         }, {})
  //         : {};
  //     return { data: dataObject, ids: ids, total: total, error: error, loading: loading, loaded: loaded };
  // }
  export function useGetMany(resource?: any, ids?: any, options?: any): any;
  // function (resource, ids, options) {
  //     if (options === void 0) { options = {}; }
  //     // we can't use useQueryWithStore here because we're aggregating queries first
  //     // therefore part of the useQueryWithStore logic will have to be repeated below
  //     var selectMany = react_1.useMemo(makeGetManySelector, []);
  //     var data = react_redux_1.useSelector(function (state) {
  //         return selectMany(state, resource, ids);
  //     });
  //     var _a = hooks_1.useSafeSetState({
  //         data: data,
  //         error: null,
  //         loading: ids.length !== 0,
  //         loaded: ids.length === 0 ||
  //             (data.length !== 0 && !data.includes(undefined)),
  //     }), state = _a[0], setState = _a[1];
  //     if (!isEqual_1.default(state.data, data)) {
  //         setState(__assign({}, state, { data: data, loaded: true }));
  //     }
  //     dataProvider = useDataProvider_1.default(); // not the best way to pass the dataProvider to a function outside the hook, but I couldn't find a better one
  //     react_2.useEffect(function () {
  //         if (!queriesToCall[resource]) {
  //             queriesToCall[resource] = [];
  //         }
  //         /**
  //          * queriesToCall stores the queries to call under the following shape:
  //          *
  //          * {
  //          *   'posts': [
  //          *     { ids: [1, 2], setState }
  //          *     { ids: [2, 3], setState, onSuccess }
  //          *     { ids: [4, 5], setState }
  //          *   ],
  //          *   'comments': [
  //          *     { ids: [345], setState, onFailure }
  //          *   ]
  //          * }
  //          */
  //         queriesToCall[resource] = queriesToCall[resource].concat({
  //             ids: ids,
  //             setState: setState,
  //             onSuccess: options && options.onSuccess,
  //             onFailure: options && options.onFailure,
  //         });
  //         callQueries(); // debounced by lodash
  //     }, [JSON.stringify({ resource: resource, ids: ids, options: options }), dataProvider]); // eslint-disable-line react-hooks/exhaustive-deps
  //     return state;
  // }
  export function useGetManyReference(
    resource?: any,
    target?: any,
    id?: any,
    pagination?: any,
    sort?: any,
    filter?: any,
    referencingResource?: any,
    options?: any
  ): any;
  // function (resource, target, id, pagination, sort, filter, referencingResource, options) {
  //     var relatedTo = react_1.useMemo(function () { return oneToMany_1.nameRelatedTo(resource, id, referencingResource, target, filter); }, [filter, resource, id, referencingResource, target]);
  //     var _a = useQueryWithStore_1.default({
  //         type: 'getManyReference',
  //         resource: resource,
  //         payload: { target: target, id: id, pagination: pagination, sort: sort, filter: filter },
  //     }, __assign({}, options, { relatedTo: relatedTo, action: crudGetManyReference_1.CRUD_GET_MANY_REFERENCE }), selectIds(relatedTo), selectTotal(relatedTo)), ids = _a.data, total = _a.total, error = _a.error, loading = _a.loading, loaded = _a.loaded;
  //     var data = react_redux_1.useSelector(selectData(resource, relatedTo), react_redux_1.shallowEqual);
  //     return { data: data, ids: ids, total: total, error: error, loading: loading, loaded: loaded };
  // }
  export function useGetMatching(
    resource?: any,
    pagination?: any,
    sort?: any,
    filter?: any,
    source?: any,
    referencingResource?: any,
    options?: any
  ): any;
  // function (resource, pagination, sort, filter, source, referencingResource, options) {
  //     var relatedTo = referenceSource(referencingResource, source);
  //     var _a = useQueryWithStore_1.default({
  //         type: 'getList',
  //         resource: resource,
  //         payload: { pagination: pagination, sort: sort, filter: filter },
  //     }, __assign({}, options, { relatedTo: relatedTo, action: crudGetMatching_1.CRUD_GET_MATCHING }), function (state) {
  //         return reducer_1.getPossibleReferenceValues(state, {
  //             referenceSource: referenceSource,
  //             resource: referencingResource,
  //             source: source,
  //         });
  //     }, function (state) {
  //         return state.admin.resources[resource]
  //             ? state.admin.resources[resource].list.total
  //             : null;
  //     }), possibleValues = _a.data, total = _a.total, error = _a.error, loading = _a.loading, loaded = _a.loaded;
  //     var referenceState = react_redux_1.useSelector(function (state) {
  //         return reducer_1.getReferenceResource(state, {
  //             reference: resource,
  //         });
  //     });
  //     var possibleReferences = reducer_1.getPossibleReferences(referenceState, possibleValues, []);
  //     return {
  //         data: possibleReferences,
  //         ids: possibleValues,
  //         total: total,
  //         error: error,
  //         loading: loading,
  //         loaded: loaded,
  //     };
  // }
  export function useUpdate(
    resource?: any,
    id?: any,
    data?: any,
    previousData?: any,
    options?: any
  ): any;
  // function (resource, id, data, previousData, options) {
  //     return useMutation_1.default({ type: 'update', resource: resource, payload: { id: id, data: data, previousData: previousData } }, options);
  // }
  export function useUpdateMany(
    resource?: any,
    ids?: any,
    data?: any,
    options?: any
  ): any;
  // function (resource, ids, data, options) {
  //     return useMutation_1.default({ type: 'updateMany', resource: resource, payload: { ids: ids, data: data } }, options);
  // }
  export function useCreate(resource?: any, data?: any, options?: any): any;
  // function (resource, data, options) {
  //     if (data === void 0) { data = {}; }
  //     return useMutation_1.default({ type: 'create', resource: resource, payload: { data: data } }, options);
  // }
  export function useDelete(
    resource?: any,
    id?: any,
    previousData?: any,
    options?: any
  ): any;
  // function (resource, id, previousData, options) {
  //     if (previousData === void 0) { previousData = {}; }
  //     return useMutation_1.default({ type: 'delete', resource: resource, payload: { id: id, previousData: previousData } }, options);
  // }
  export function useDeleteMany(resource?: any, ids?: any, options?: any): any;
  // function (resource, ids, options) {
  //     return useMutation_1.default({ type: 'deleteMany', resource: resource, payload: { ids: ids } }, options);
  // }
  export function translate(BaseComponent?: any): any;
  // function (BaseComponent) {
  //     warning_1.default(typeof BaseComponent === 'string', "The translate function is a Higher Order Component, and should not be called directly with a translation key. Use the translate function passed as prop to your component props instead:\n\nconst MyHelloButton = ({ translate }) => (\n    <button>{translate('myroot.hello.world')}</button>\n);");
  //     var TranslatedComponent = function (props) {
  //         var translate = useTranslate_1.default();
  //         var locale = useLocale_1.default();
  //         return (react_1.default.createElement(BaseComponent, __assign({ translate: translate, locale: locale }, props)));
  //     };
  //     TranslatedComponent.defaultProps = BaseComponent.defaultProps;
  //     return TranslatedComponent;
  // }
  export const TranslationContext: {};
  // $$typeof: "symbol"
  // _calculateChangedBits: null
  // _currentValue: {"locale":"string","setLocale":"function () { return Promise.resolve(); }","i18nProvider":{"translate":"function (x) { return x; }","changeLocale":"function () { return Promise.resolve(); }","getLocale":"function () { return 'en'; }"}}
  // _currentValue2: {"locale":"string","setLocale":"function () { return Promise.resolve(); }","i18nProvider":{"translate":"function (x) { return x; }","changeLocale":"function () { return Promise.resolve(); }","getLocale":"function () { return 'en'; }"}}
  // _threadCount: "number"
  // Provider: {"$$typeof":"symbol","_context":"string"}
  // Consumer: {"$$typeof":"symbol","_context":"string","_calculateChangedBits":null}
  // _currentRenderer: null
  // _currentRenderer2: null
  // displayName: "string"
  export const TranslationProvider: React.ComponentType<any>;
  // function (props) {
  //     var i18nProvider = props.i18nProvider, children = props.children;
  //     var _a = hooks_1.useSafeSetState({
  //         locale: i18nProvider ? i18nProvider.getLocale() : 'en',
  //         i18nProvider: i18nProvider,
  //     }), state = _a[0], setState = _a[1];
  //     var setLocale = react_1.useCallback(function (newLocale) {
  //         return setState({
  //             locale: newLocale,
  //             i18nProvider: i18nProvider,
  //         });
  //     }, [i18nProvider, setState]);
  //     // Allow locale modification by including setLocale in the context
  //     // This can't be done in the initial state because setState doesn't exist yet
  //     var value = react_1.useMemo(function () { return (__assign({}, state, { setLocale: setLocale })); }, [setLocale, state]);
  //     return (react_1.default.createElement(TranslationContext_1.TranslationContext.Provider, { value: value }, react_1.Children.only(children)));
  // }
  export const TestTranslationProvider: React.ComponentType<any>;
  // function (_a) {
  //     var translate = _a.translate, messages = _a.messages, children = _a.children;
  //     return (react_1.default.createElement(TranslationContext_1.TranslationContext.Provider, { value: {
  //             locale: 'en',
  //             setLocale: function () { return Promise.resolve(); },
  //             i18nProvider: {
  //                 translate: messages
  //                     ? function (key, options) {
  //                         return get_1.default(messages, key)
  //                             ? get_1.default(messages, key)
  //                             : options._;
  //                     }
  //                     : translate,
  //                 changeLocale: function () { return Promise.resolve(); },
  //                 getLocale: function () { return 'en'; },
  //             },
  //         } }, children));
  // }
  export function useLocale(): any;
  // function () {
  //     var locale = react_1.useContext(TranslationContext_1.TranslationContext).locale;
  //     return locale;
  // }
  export function useSetLocale(): any;
  // function () {
  //     var _a = react_1.useContext(TranslationContext_1.TranslationContext), setLocale = _a.setLocale, i18nProvider = _a.i18nProvider;
  //     var _b = loading_1.useUpdateLoading(), startLoading = _b.startLoading, stopLoading = _b.stopLoading;
  //     var notify = sideEffect_1.useNotify();
  //     return react_1.useCallback(function (newLocale) {
  //         return new Promise(function (resolve) {
  //             startLoading();
  //             // so we systematically return a Promise for the messages
  //             // i18nProvider may return a Promise for language changes,
  //             resolve(i18nProvider.changeLocale(newLocale));
  //         })
  //             .then(function () {
  //             stopLoading();
  //             setLocale(newLocale);
  //         })
  //             .catch(function (error) {
  //             stopLoading();
  //             notify('ra.notification.i18n_error', 'warning');
  //             console.error(error);
  //         });
  //     }, [i18nProvider, notify, setLocale, startLoading, stopLoading]);
  // }
  export function useTranslate(): any;
  // function () {
  //     var _a = react_1.useContext(TranslationContext_1.TranslationContext), i18nProvider = _a.i18nProvider, locale = _a.locale;
  //     var translate = react_1.useCallback(function (key, options) {
  //         return i18nProvider.translate(key, options);
  //     },
  //     // update the hook each time the locale changes
  //     [i18nProvider, locale] // eslint-disable-line react-hooks/exhaustive-deps
  //     );
  //     return i18nProvider ? translate : identity;
  // }
  export function withTranslate(BaseComponent?: any): any;
  // function (BaseComponent) {
  //     warning_1.default(typeof BaseComponent === 'string', "The translate function is a Higher Order Component, and should not be called directly with a translation key. Use the translate function passed as prop to your component props instead:\n\nconst MyHelloButton = ({ translate }) => (\n    <button>{translate('myroot.hello.world')}</button>\n);");
  //     var TranslatedComponent = function (props) {
  //         var translate = useTranslate_1.default();
  //         var locale = useLocale_1.default();
  //         return (react_1.default.createElement(BaseComponent, __assign({ translate: translate, locale: locale }, props)));
  //     };
  //     TranslatedComponent.defaultProps = BaseComponent.defaultProps;
  //     return TranslatedComponent;
  // }
  export const DEFAULT_LOCALE: string;
  export function resolveBrowserLocale(defaultLocale?: any): any;
  // function (defaultLocale) {
  //     if (defaultLocale === void 0) { defaultLocale = index_1.DEFAULT_LOCALE; }
  //     // from http://blog.ksol.fr/user-locale-detection-browser-javascript/
  //     // Rely on the window.navigator object to determine user locale
  //     var _a = window.navigator, language = _a.language, browserLanguage = _a.browserLanguage, userLanguage = _a.userLanguage;
  //     return (language || browserLanguage || userLanguage || defaultLocale).split('-')[0];
  // }
  export function mergeTranslations(): any;
  // function () {
  //     var translationsModules = [];
  //     for (var _i = 0; _i < arguments.length; _i++) {
  //         translationsModules[_i] = arguments[_i];
  //     }
  //     return merge_1.default.apply(void 0, [{}].concat(translationsModules));
  // }
  export function getElementsFromRecords(records?: any, types?: any): any;
  // function (records, types) {
  //     var fieldValues = getValuesFromRecords_1.default(records);
  //     return Object.keys(fieldValues)
  //         .reduce(function (fields, fieldName) {
  //         return fields.concat(inferElementFromValues_1.default(fieldName, fieldValues[fieldName], types));
  //     }, [])
  //         .filter(function (inferredElement) { return inferredElement.isDefined(); });
  // }
  export const InferredElement: React.ComponentType<any>;
  // function InferredElement(type, props, children) {
  //         this.type = type;
  //         this.props = props;
  //         this.children = children;
  //     }
  export function useLoading(): any;
  // function () {
  //     return react_redux_1.useSelector(function (state) { return state.admin.loading > 0; });
  // }
  export function useUpdateLoading(): any;
  // function () {
  //     var dispatch = react_redux_1.useDispatch();
  //     var startLoading = react_1.useCallback(function () {
  //         dispatch(fetchActions_1.fetchStart());
  //     }, [dispatch]);
  //     var stopLoading = react_1.useCallback(function () {
  //         dispatch(fetchActions_1.fetchEnd());
  //     }, [dispatch]);
  //     return { startLoading: startLoading, stopLoading: stopLoading };
  // }
  export function downloadCSV(csv?: any, filename?: any): any;
  // function (csv, filename) {
  //     var fakeLink = document.createElement('a');
  //     fakeLink.style.display = 'none';
  //     document.body.appendChild(fakeLink);
  //     var blob = new Blob([csv], { type: 'text/csv' });
  //     if (window.navigator && window.navigator.msSaveOrOpenBlob) {
  //         // Manage IE11+ & Edge
  //         window.navigator.msSaveOrOpenBlob(blob, filename + ".csv");
  //     }
  //     else {
  //         fakeLink.setAttribute('href', URL.createObjectURL(blob));
  //         fakeLink.setAttribute('download', filename + ".csv");
  //         fakeLink.click();
  //     }
  // }
  export const FieldTitle: React.ComponentType<any>;
  // function ShouldUpdate() {
  //         _classCallCheck(this, ShouldUpdate);
  //
  //         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  //       }
  export function getFetchedAt(
    newRecordIds?: any,
    oldRecordFetchedAt?: any,
    now?: any,
    cacheDuration?: any
  ): any;
  // function (newRecordIds, oldRecordFetchedAt, now, cacheDuration) {
  //     if (newRecordIds === void 0) { newRecordIds = []; }
  //     if (oldRecordFetchedAt === void 0) { oldRecordFetchedAt = {}; }
  //     if (now === void 0) { now = new Date(); }
  //     if (cacheDuration === void 0) { cacheDuration = defaultCacheDuration; }
  //     // prepare new records and timestamp them
  //     var newFetchedAt = {};
  //     newRecordIds.forEach(function (recordId) { return (newFetchedAt[recordId] = now); });
  //     // remove outdated entry
  //     var latestValidDate = new Date();
  //     latestValidDate.setTime(latestValidDate.getTime() - cacheDuration);
  //     var stillValidFetchedAt = pickBy_1.default(oldRecordFetchedAt, function (date) { return date > latestValidDate; });
  //     return __assign({}, stillValidFetchedAt, newFetchedAt);
  // }
  export function getFieldLabelTranslationArgs(options?: any): any;
  // function (options) {
  //     if (!options) {
  //         return [''];
  //     }
  //     var label = options.label, resource = options.resource, source = options.source;
  //     return typeof label !== 'undefined'
  //         ? [label, { _: label }]
  //         : typeof source !== 'undefined'
  //             ? [
  //                 "resources." + resource + ".fields." + source,
  //                 {
  //                     _: inflection_1.default.transform(source, ['underscore', 'humanize']),
  //                 },
  //             ]
  //             : [''];
  // }
  export const ComponentPropType: React.ComponentType<any>;
  // function (props, propName, componentName) {
  //     if (props[propName] && !react_is_1.isValidElementType(props[propName])) {
  //         return new Error("Invalid prop '" + propName + "' supplied to '" + componentName + "': the prop is not a valid React component");
  //     }
  // }
  export function linkToRecord(basePath?: any, id?: any, linkType?: any): any;
  // function (basePath, id, linkType) {
  //     if (linkType === void 0) { linkType = 'edit'; }
  //     var link = basePath + "/" + encodeURIComponent(id);
  //     if (linkType === 'show') {
  //         return link + "/show";
  //     }
  //     return link;
  // }
  export function removeEmpty(object?: any): any;
  // function (object) {
  //     return Object.keys(object).reduce(function (acc, key) {
  //         var _a;
  //         var child = object[key];
  //         if (isObject(object[key])) {
  //             child = removeEmpty(object[key]);
  //         }
  //         return isEmpty(child) ? acc : __assign({}, acc, (_a = {}, _a[key] = child, _a));
  //     }, {});
  // }
  export function removeKey(target?: any, path?: any): any;
  // function (target, path) {
  //     var _a;
  //     var paths = path.split('.');
  //     if (paths.length === 1) {
  //         return removeKey(target, path);
  //     }
  //     var deepKey = paths[0];
  //     var deep = deepRemoveKey(target[deepKey], paths.slice(1).join('.'));
  //     if (Object.keys(deep).length === 0) {
  //         return removeKey(target, deepKey);
  //     }
  //     return Object.assign({}, target, (_a = {}, _a[deepKey] = deep, _a));
  // }
  export const Ready: React.ComponentType<any>;
  // function () { return (react_1.default.createElement("div", { style: styles.root },
  //     react_1.default.createElement("div", { style: styles.main },
  //         react_1.default.createElement("img", { style: { height: 100 }, src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhbHF1ZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMTMxIDEzMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMxIDEzMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyMjI0NTg7fQoJLnN0MXtmaWxsOiM1MTUzN0Q7fQoJLnN0MntmaWxsOiNBM0E0Qjk7fQoJLnN0M3tmaWxsOiMwMDAyM0I7fQoJLnN0NHtmaWxsOiNGRkZGRkY7fQoJLnN0NXtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KPC9zdHlsZT4KPHRpdGxlPkxvZ29fc29tYnJlX2FpPC90aXRsZT4KPGcgaWQ9IlJlY3RhbmdsZV81NiI+Cgk8Zz4KCQk8cmVjdCB4PSIxOS4xIiB5PSIxOSIgdHJhbnNmb3JtPSJtYXRyaXgoMC41IC0wLjg2NiAwLjg2NiAwLjUgLTIzLjkyMjYgODkuNTQ2KSIgY2xhc3M9InN0MCIgd2lkdGg9IjkyLjkiIGhlaWdodD0iOTIuOSIvPgoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik04MywxMzAuM0wwLjgsODIuOUw0OC4yLDAuN2w4Mi4yLDQ3LjVMODMsMTMwLjN6IE0zLjUsODIuMWw3OC43LDQ1LjVsNDUuNS03OC43TDQ5LDMuNEwzLjUsODIuMXoiLz4KCTwvZz4KPC9nPgo8ZyBpZD0iUmVjdGFuZ2xlXzU2LTIiPgoJPGc+CgkJPHJlY3QgeD0iMTkiIHk9IjE5LjEiIHRyYW5zZm9ybT0ibWF0cml4KDAuODY2IC0wLjUgMC41IDAuODY2IC0yMy45Nzc3IDQxLjUyNykiIGNsYXNzPSJzdDAiIHdpZHRoPSI5Mi45IiBoZWlnaHQ9IjkyLjkiLz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNDcuOSwxMzFMMCw0OEw4My4xLDBsNDgsODMuMUw0Ny45LDEzMXogTTQuMSw0OS4xbDQ1LDc3LjlsNzcuOS00NUw4Miw0LjFMNC4xLDQ5LjF6Ii8+Cgk8L2c+CjwvZz4KPGcgaWQ9IlJlY3RhbmdsZV81Ni0zIj4KCTxnPgoJCTxyZWN0IHg9IjE5LjEiIHk9IjE5IiBjbGFzcz0ic3QzIiB3aWR0aD0iOTIuOSIgaGVpZ2h0PSI5Mi45Ii8+CgkJPHBhdGggY2xhc3M9InN0NCIgZD0iTTExNC41LDExNC41SDE2LjZWMTYuNWg5Ny45VjExNC41eiBNMjEuNiwxMDkuNWg4Ny45VjIxLjVIMjEuNlYxMDkuNXoiLz4KCTwvZz4KPC9nPgo8ZyBpZD0iUmEiPgoJPGcgY2xhc3M9InN0NSI+CgkJPHBhdGggY2xhc3M9InN0NCIgZD0iTTU5LDg2LjdsLTYuNy0xOS4yaC0xLjJIMzguOXYxOS4yaC01LjZWMzguNWgxOC41YzMuNiwwLDYuMywwLjYsOC4xLDEuOGMxLjgsMS4yLDMsMi44LDMuNSw0LjgKCQkJYzAuNSwyLDAuOCw0LjYsMC44LDcuOGMwLDMuNS0wLjQsNi40LTEuMyw4LjdjLTAuOCwyLjMtMi42LDMuOS01LjMsNC44TDY1LDg2LjdINTl6IE01NS43LDYxLjZjMS4yLTAuNywyLTEuNywyLjQtMwoJCQljMC40LTEuMywwLjYtMy4yLDAuNi01LjZjMC0yLjUtMC4yLTQuMy0wLjUtNS42Yy0wLjMtMS4zLTEuMS0yLjItMi4zLTIuOWMtMS4yLTAuNy0zLTEtNS41LTFIMzguOXYxOS4xSDUwCgkJCUM1Mi41LDYyLjYsNTQuNCw2Mi4zLDU1LjcsNjEuNnoiLz4KCQk8cGF0aCBjbGFzcz0ic3Q0IiBkPSJNNzQuMyw4NWMtMS42LTEuNS0yLjUtNC4yLTIuNS04LjJjMC0yLjcsMC4zLTQuOCwwLjktNi4zYzAuNi0xLjUsMS42LTIuNiwzLTMuM2MxLjQtMC43LDMuNC0xLDYtMQoJCQljMS4zLDAsNS4xLDAuMSwxMS40LDAuM3YtMi40YzAtMi45LTAuMi01LTAuNy02LjJjLTAuNS0xLjItMS4zLTItMi42LTIuNGMtMS4yLTAuMy0zLjMtMC41LTYuMy0wLjVjLTEuMywwLTMsMC4xLTQuOSwwLjIKCQkJYy0yLDAuMS0zLjYsMC4zLTQuOCwwLjV2LTQuM2MzLjMtMC43LDcuMS0xLDExLjQtMWMzLjcsMCw2LjUsMC40LDguNCwxLjJjMS44LDAuOCwzLjEsMi4yLDMuOCw0LjFjMC43LDEuOSwxLDQuNywxLDguNHYyMi41aC00LjgKCQkJbC0wLjMtNWgtMC4zYy0wLjgsMi4yLTIuMiwzLjctNC4xLDQuNGMtMS45LDAuNy00LjEsMS4xLTYuNiwxLjFDNzguNiw4Ny4yLDc2LDg2LjUsNzQuMyw4NXogTTg5LjEsODJjMS4yLTAuNCwyLjItMS4yLDIuOC0yLjQKCQkJYzAuOS0xLjgsMS4zLTQuMywxLjMtNy4zdi0yaC0xMGMtMS43LDAtMywwLjItMy44LDAuNWMtMC44LDAuMy0xLjQsMC45LTEuNywxLjhjLTAuMywwLjktMC41LDIuMi0wLjUsNGMwLDEuOCwwLjIsMy4xLDAuNiwzLjkKCQkJYzAuNCwwLjgsMS4xLDEuNCwyLDEuOGMxLDAuMywyLjUsMC41LDQuNSwwLjVDODYuMiw4Mi42LDg3LjgsODIuNCw4OS4xLDgyeiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=", alt: "react-admin logo" }),
  //         react_1.default.createElement("h1", null, "Welcome to React-admin"),
  //         react_1.default.createElement("div", null,
  //             "Your application is properly configured.",
  //             react_1.default.createElement("br", null),
  //             "Now you can add a <Resource> as child of <Admin>.")),
  //     react_1.default.createElement("div", { style: styles.secondary },
  //         react_1.default.createElement(Button, { href: "https://marmelab.com/react-admin/Readme.html", img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IgoJIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnIGlkPSJCb3VuZGluZ19Cb3giPgoJPHJlY3QgZmlsbD0ibm9uZSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+CjwvZz4KPGcgaWQ9IkZsYXQiPgoJPGcgaWQ9InVpX3g1Rl9zcGVjX3g1Rl9oZWFkZXJfY29weV8yIj4KCTwvZz4KCTxnPgoJCTxwYXRoIGQ9Ik0yMSw1Yy0xLjExLTAuMzUtMi4zMy0wLjUtMy41LTAuNWMtMS45NSwwLTQuMDUsMC40LTUuNSwxLjVjLTEuNDUtMS4xLTMuNTUtMS41LTUuNS0xLjVTMi40NSw0LjksMSw2djE0LjY1CgkJCWMwLDAuMjUsMC4yNSwwLjUsMC41LDAuNWMwLjEsMCwwLjE1LTAuMDUsMC4yNS0wLjA1QzMuMSwyMC40NSw1LjA1LDIwLDYuNSwyMGMxLjk1LDAsNC4wNSwwLjQsNS41LDEuNWMxLjM1LTAuODUsMy44LTEuNSw1LjUtMS41CgkJCWMxLjY1LDAsMy4zNSwwLjMsNC43NSwxLjA1YzAuMSwwLjA1LDAuMTUsMC4wNSwwLjI1LDAuMDVjMC4yNSwwLDAuNS0wLjI1LDAuNS0wLjVWNkMyMi40LDUuNTUsMjEuNzUsNS4yNSwyMSw1eiBNMywxOC41VjcKCQkJYzEuMS0wLjM1LDIuMy0wLjUsMy41LTAuNWMxLjM0LDAsMy4xMywwLjQxLDQuNSwwLjk5djExLjVDOS42MywxOC40MSw3Ljg0LDE4LDYuNSwxOEM1LjMsMTgsNC4xLDE4LjE1LDMsMTguNXogTTIxLDE4LjUKCQkJYy0xLjEtMC4zNS0yLjMtMC41LTMuNS0wLjVjLTEuMzQsMC0zLjEzLDAuNDEtNC41LDAuOTlWNy40OWMxLjM3LTAuNTksMy4xNi0wLjk5LDQuNS0wLjk5YzEuMiwwLDIuNCwwLjE1LDMuNSwwLjVWMTguNXoiLz4KCQk8cGF0aCBvcGFjaXR5PSIwLjMiIGQ9Ik0xMSw3LjQ5QzkuNjMsNi45MSw3Ljg0LDYuNSw2LjUsNi41QzUuMyw2LjUsNC4xLDYuNjUsMyw3djExLjVDNC4xLDE4LjE1LDUuMywxOCw2LjUsMTgKCQkJYzEuMzQsMCwzLjEzLDAuNDEsNC41LDAuOTlWNy40OXoiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGQ9Ik0xNy41LDEwLjVjMC44OCwwLDEuNzMsMC4wOSwyLjUsMC4yNlY5LjI0QzE5LjIxLDkuMDksMTguMzYsOSwxNy41LDljLTEuMjgsMC0yLjQ2LDAuMTYtMy41LDAuNDd2MS41NwoJCQlDMTQuOTksMTAuNjksMTYuMTgsMTAuNSwxNy41LDEwLjV6Ii8+CgkJPHBhdGggZD0iTTE3LjUsMTMuMTZjMC44OCwwLDEuNzMsMC4wOSwyLjUsMC4yNlYxMS45Yy0wLjc5LTAuMTUtMS42NC0wLjI0LTIuNS0wLjI0Yy0xLjI4LDAtMi40NiwwLjE2LTMuNSwwLjQ3djEuNTcKCQkJQzE0Ljk5LDEzLjM2LDE2LjE4LDEzLjE2LDE3LjUsMTMuMTZ6Ii8+CgkJPHBhdGggZD0iTTE3LjUsMTUuODNjMC44OCwwLDEuNzMsMC4wOSwyLjUsMC4yNnYtMS41MmMtMC43OS0wLjE1LTEuNjQtMC4yNC0yLjUtMC4yNGMtMS4yOCwwLTIuNDYsMC4xNi0zLjUsMC40N3YxLjU3CgkJCUMxNC45OSwxNi4wMiwxNi4xOCwxNS44MywxNy41LDE1LjgzeiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=", label: "Documentation" }),
  //         react_1.default.createElement(Button, { href: "https://github.com/marmelab/react-admin/tree/master/examples", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNOS40IDE2LjZMNC44IDEybDQuNi00LjZMOCA2bC02IDYgNiA2IDEuNC0xLjR6bTUuMiAwbDQuNi00LjYtNC42LTQuNkwxNiA2bDYgNi02IDYtMS40LTEuNHoiLz48L3N2Zz4=", label: "Examples" }),
  //         react_1.default.createElement(Button, { href: "https://stackoverflow.com/questions/tagged/react-admin", img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IgoJIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnIGlkPSJCb3VuZGluZ19Cb3giPgoJPHJlY3QgZmlsbD0ibm9uZSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+CjwvZz4KPGcgaWQ9IkZsYXQiPgoJPGcgaWQ9InVpX3g1Rl9zcGVjX3g1Rl9oZWFkZXJfY29weV8yIj4KCTwvZz4KCTxnPgoJCTxjaXJjbGUgb3BhY2l0eT0iMC4zIiBjeD0iOSIgY3k9IjgiIHI9IjIiLz4KCQk8cGF0aCBvcGFjaXR5PSIwLjMiIGQ9Ik05LDE1Yy0yLjcsMC01LjgsMS4yOS02LDIuMDFMMywxOGgxMnYtMUMxNC44LDE2LjI5LDExLjcsMTUsOSwxNXoiLz4KCQk8cGF0aCBkPSJNMTYuNjcsMTMuMTNDMTguMDQsMTQuMDYsMTksMTUuMzIsMTksMTd2M2g0di0zQzIzLDE0LjgyLDE5LjQzLDEzLjUzLDE2LjY3LDEzLjEzeiIvPgoJCTxwYXRoIGQ9Ik0xNSwxMmMyLjIxLDAsNC0xLjc5LDQtNGMwLTIuMjEtMS43OS00LTQtNGMtMC40NywwLTAuOTEsMC4xLTEuMzMsMC4yNEMxNC41LDUuMjcsMTUsNi41OCwxNSw4cy0wLjUsMi43My0xLjMzLDMuNzYKCQkJQzE0LjA5LDExLjksMTQuNTMsMTIsMTUsMTJ6Ii8+CgkJPHBhdGggZD0iTTksMTJjMi4yMSwwLDQtMS43OSw0LTRjMC0yLjIxLTEuNzktNC00LTRTNSw1Ljc5LDUsOEM1LDEwLjIxLDYuNzksMTIsOSwxMnogTTksNmMxLjEsMCwyLDAuOSwyLDJjMCwxLjEtMC45LDItMiwyCgkJCVM3LDkuMSw3LDhDNyw2LjksNy45LDYsOSw2eiIvPgoJCTxwYXRoIGQ9Ik05LDEzYy0yLjY3LDAtOCwxLjM0LTgsNHYzaDE2di0zQzE3LDE0LjM0LDExLjY3LDEzLDksMTN6IE0xNSwxOEgzbDAtMC45OUMzLjIsMTYuMjksNi4zLDE1LDksMTVzNS44LDEuMjksNiwyVjE4eiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=", label: "Community" })))); }
  export function resolveRedirectTo(
    redirectTo?: any,
    basePath?: any,
    id?: any,
    data?: any
  ): any;
  // function (redirectTo, basePath, id, data) {
  //     if (typeof redirectTo === 'function') {
  //         return redirectTo(basePath, id, data);
  //     }
  //     switch (redirectTo) {
  //         case 'list':
  //             return basePath;
  //         case 'create':
  //             return basePath + "/create";
  //         case 'edit':
  //             return linkToRecord_1.default(basePath, id);
  //         case 'show':
  //             return linkToRecord_1.default(basePath, id) + "/show";
  //         default:
  //             return redirectTo;
  //     }
  // }
  export const TestContext: React.ComponentType<any>;
  // function TestContext(props) {
  //         var _this = _super.call(this, props) || this;
  //         _this.storeWithDefault = null;
  //         _this.history = null;
  //         _this.renderChildren = function () {
  //             var children = _this.props.children;
  //             return typeof children === 'function'
  //                 ? children({
  //                     store: _this.storeWithDefault,
  //                     history: _this.history,
  //                 })
  //                 : children;
  //         };
  //         _this.history = props.history || history_1.createMemoryHistory();
  //         var _a = props.initialState, initialState = _a === void 0 ? {} : _a, _b = props.enableReducers, enableReducers = _b === void 0 ? false : _b;
  //         _this.storeWithDefault = enableReducers
  //             ? createAdminStore_1.default({
  //                 initialState: merge_1.default({}, exports.defaultStore, initialState),
  //                 dataProvider: dataProvider_1.convertLegacyDataProvider(function () {
  //                     return Promise.resolve(dataProviderDefaultResponse);
  //                 }),
  //                 history: history_1.createMemoryHistory(),
  //             })
  //             : redux_1.createStore(function () { return merge_1.default({}, exports.defaultStore, initialState); });
  //         return _this;
  //     }
  export function renderWithRedux(
    component?: any,
    initialState?: any,
    options?: any
  ): any;
  // function (component, initialState, options) {
  //     if (initialState === void 0) { initialState = {}; }
  //     if (options === void 0) { options = {}; }
  //     var dispatch;
  //     var reduxStore;
  //     var renderResult = react_2.render(react_1.default.createElement(TestContext_1.default, { initialState: initialState, enableReducers: true }, function (_a) {
  //         var store = _a.store;
  //         dispatch = jest.spyOn(store, 'dispatch');
  //         reduxStore = store;
  //         return component;
  //     }), options);
  //     return __assign({}, renderResult, { rerender: function (newComponent) {
  //             return renderResult.rerender(react_1.default.createElement(TestContext_1.default, { initialState: initialState, enableReducers: true }, function (_a) {
  //                 var store = _a.store;
  //                 dispatch = jest.spyOn(store, 'dispatch');
  //                 reduxStore = store;
  //                 return newComponent;
  //             }));
  //         }, dispatch: dispatch,
  //         reduxStore: reduxStore });
  // }
  export function warning(condition?: any, message?: any): any;
  // function (condition, message) {
  //     if (condition && process.env.NODE_ENV !== 'production') {
  //         console.warn(message); // eslint-disable-line
  //     }
  // }
  export function useWhyDidYouUpdate(name?: any, props?: any): any;
  // function useWhyDidYouUpdate(name, props) {
  //     // Get a mutable ref object where we can store props ...
  //     // ... for comparison next time this hook runs.
  //     var previousProps = react_1.useRef();
  //     react_1.useEffect(function () {
  //         if (previousProps.current) {
  //             // Get all keys from previous and current props
  //             var allKeys = Object.keys(__assign({}, previousProps.current, props));
  //             // Use this object to keep track of changed props
  //             var changesObj_1 = {};
  //             // Iterate through keys
  //             allKeys.forEach(function (key) {
  //                 // If previous is different from current
  //                 if (previousProps.current[key] !== props[key]) {
  //                     // Add to changesObj
  //                     changesObj_1[key] = {
  //                         from: previousProps.current[key],
  //                         to: props[key],
  //                     };
  //                 }
  //             });
  //             // If changesObj not empty then output to console
  //             if (Object.keys(changesObj_1).length) {
  //                 console.log('[why-did-you-update]', name, changesObj_1);
  //             }
  //         }
  //         // Finally update previousProps with current props for next hook call
  //         previousProps.current = props;
  //     });
  // }
  export function useSafeSetState(initialState?: any): any;
  // function useSafeSetState(initialState) {
  //     var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
  //     var mountedRef = react_1.useRef(false);
  //     react_1.useEffect(function () {
  //         mountedRef.current = true;
  //         return function () { return (mountedRef.current = false); };
  //     }, []);
  //     var safeSetState = react_1.useCallback(function (args) { return mountedRef.current && setState(args); }, [mountedRef, setState]);
  //     return [state, safeSetState];
  // }
  export function useTimeout(ms?: any): any;
  // function useTimeout(ms) {
  //     if (ms === void 0) { ms = 0; }
  //     var _a = react_1.useState(false), ready = _a[0], setReady = _a[1];
  //     react_1.useEffect(function () {
  //         var timer = setTimeout(function () {
  //             setReady(true);
  //         }, ms);
  //         return function () {
  //             clearTimeout(timer);
  //         };
  //     }, [ms]);
  //     return ready;
  // }
  export const CreateController: React.ComponentType<any>;
  // function (_a) {
  //     var children = _a.children, props = __rest(_a, ["children"]);
  //     var controllerProps = useCreateController_1.default(props);
  //     var translate = i18n_1.useTranslate(); // injected for backwards compatibility
  //     return children(__assign({ translate: translate }, controllerProps));
  // }
  export const EditController: React.ComponentType<any>;
  // function (_a) {
  //     var children = _a.children, props = __rest(_a, ["children"]);
  //     var controllerProps = useEditController_1.default(props);
  //     var translate = i18n_1.useTranslate(); // injected for backwards compatibility
  //     return children(__assign({ translate: translate }, controllerProps));
  // }
  export const ListController: React.ComponentType<any>;
  // function (_a) {
  //     var children = _a.children, props = __rest(_a, ["children"]);
  //     var controllerProps = useListController_1.default(props);
  //     var translate = i18n_1.useTranslate(); // injected for backwards compatibility
  //     return children(__assign({ translate: translate }, controllerProps));
  // }
  export const ShowController: React.ComponentType<any>;
  // function (_a) {
  //     var children = _a.children, props = __rest(_a, ["children"]);
  //     var controllerProps = useShowController_1.default(props);
  //     var translate = i18n_1.useTranslate(); // injected for backwards compatibility
  //     return children(__assign({ translate: translate }, controllerProps));
  // }
  export function getListControllerProps(props?: any): any;
  // function (props) {
  //     return exports.injectedProps.reduce(function (acc, key) {
  //         var _a;
  //         return (__assign({}, acc, (_a = {}, _a[key] = props[key], _a)));
  //     }, {});
  // }
  export function sanitizeListRestProps(props?: any): any;
  // function (props) {
  //     return Object.keys(props)
  //         .filter(function (propName) { return !exports.injectedProps.includes(propName); })
  //         .reduce(function (acc, key) {
  //         var _a;
  //         return (__assign({}, acc, (_a = {}, _a[key] = props[key], _a)));
  //     }, {});
  // }
  export function useRecordSelection(resource?: any): any;
  // function (resource) {
  //     var dispatch = react_redux_1.useDispatch();
  //     var selectedIds = react_redux_1.useSelector(function (reduxState) {
  //         return reduxState.admin.resources[resource].list.selectedIds;
  //     }, react_redux_1.shallowEqual);
  //     var selectionModifiers = {
  //         select: react_1.useCallback(function (newIds) {
  //             dispatch(listActions_1.setListSelectedIds(resource, newIds));
  //         }, [resource] // eslint-disable-line react-hooks/exhaustive-deps
  //         ),
  //         toggle: react_1.useCallback(function (id) {
  //             dispatch(listActions_1.toggleListItem(resource, id));
  //         }, [resource] // eslint-disable-line react-hooks/exhaustive-deps
  //         ),
  //         clearSelection: react_1.useCallback(function () {
  //             dispatch(listActions_1.setListSelectedIds(resource, []));
  //         }, [resource]),
  //     };
  //     return [selectedIds, selectionModifiers];
  // }
  export function useVersion(): any;
  // function () {
  //     return react_redux_1.useSelector(function (reduxState) { return reduxState.admin.ui.viewVersion; });
  // }
  export function useSortState(initialSort?: any): any;
  // function (initialSort) {
  //     if (initialSort === void 0) { initialSort = exports.defaultSort; }
  //     var _a = react_1.useReducer(sortReducer, initialSort), sort = _a[0], dispatch = _a[1];
  //     var isFirstRender = react_1.useRef(true);
  //     react_1.useEffect(function () {
  //         if (isFirstRender.current) {
  //             isFirstRender.current = false;
  //             return;
  //         }
  //         dispatch({ type: 'SET_SORT', payload: { sort: initialSort } });
  //     }, [initialSort.field, initialSort.order]); // eslint-disable-line react-hooks/exhaustive-deps
  //     return {
  //         setSort: react_1.useCallback(function (sort) { return dispatch({ type: 'SET_SORT', payload: { sort: sort } }); }, [dispatch]),
  //         setSortField: react_1.useCallback(function (field) {
  //             return dispatch({ type: 'SET_SORT_FIELD', payload: { field: field } });
  //         }, [dispatch]),
  //         setSortOrder: react_1.useCallback(function (order) {
  //             return dispatch({ type: 'SET_SORT_ORDER', payload: { order: order } });
  //         }, [dispatch]),
  //         sort: sort,
  //     };
  // }
  export function usePaginationState(initialPagination?: any): any;
  // function (initialPagination) {
  //     if (initialPagination === void 0) { initialPagination = {}; }
  //     var _a = react_1.useReducer(paginationReducer, __assign({}, defaultPagination, initialPagination)), pagination = _a[0], setPagination = _a[1];
  //     var isFirstRender = react_1.useRef(true);
  //     var setPerPage = react_1.useCallback(function (perPage) { return setPagination({ perPage: perPage }); }, []);
  //     var setPage = react_1.useCallback(function (page) { return setPagination({ page: page }); }, []);
  //     react_1.useEffect(function () {
  //         if (isFirstRender.current) {
  //             isFirstRender.current = false;
  //             return;
  //         }
  //         setPerPage(initialPagination.perPage || 25);
  //     }, [initialPagination.perPage, setPerPage]);
  //     return {
  //         page: pagination.page,
  //         perPage: pagination.perPage,
  //         pagination: pagination,
  //         setPage: setPage,
  //         setPerPage: setPerPage,
  //         setPagination: setPagination,
  //     };
  // }
  export function useListController(props?: any): any;
  // function (props) {
  //     checkMinimumRequiredProps_1.useCheckMinimumRequiredProps('List', ['basePath', 'location', 'resource'], props);
  //     var basePath = props.basePath, resource = props.resource, hasCreate = props.hasCreate, location = props.location, filterDefaultValues = props.filterDefaultValues, _a = props.sort, sort = _a === void 0 ? defaultSort : _a, _b = props.perPage, perPage = _b === void 0 ? 10 : _b, filter = props.filter, _c = props.debounce, debounce = _c === void 0 ? 500 : _c;
  //     if (filter && react_1.isValidElement(filter)) {
  //         throw new Error('<List> received a React element as `filter` props. If you intended to set the list filter elements, use the `filters` (with an s) prop instead. The `filter` prop is internal and should not be set by the developer.');
  //     }
  //     var translate = i18n_1.useTranslate();
  //     var notify = sideEffect_1.useNotify();
  //     var version = useVersion_1.default();
  //     var _d = useListParams_1.default({
  //         resource: resource,
  //         location: location,
  //         filterDefaultValues: filterDefaultValues,
  //         sort: sort,
  //         perPage: perPage,
  //         debounce: debounce,
  //     }), query = _d[0], queryModifiers = _d[1];
  //     var _e = useRecordSelection_1.default(resource), selectedIds = _e[0], selectionModifiers = _e[1];
  //     /**
  //      * We don't use useGetList() here because we want the list of ids to be
  //      * always available for optimistic rendering, and therefore we need a
  //      * custom action (CRUD_GET_LIST), a custom reducer for ids and total
  //      * (admin.resources.[resource].list.ids and admin.resources.[resource].list.total)
  //      * and a custom selector for these reducers.
  //      * Also we don't want that calls to useGetList() in userland change
  //      * the list of ids in the main List view.
  //      */
  //     var _f = useQueryWithStore_1.default({
  //         type: 'getList',
  //         resource: resource,
  //         payload: {
  //             pagination: {
  //                 page: query.page,
  //                 perPage: query.perPage,
  //             },
  //             sort: { field: query.sort, order: query.order },
  //             filter: __assign({}, query.filter, filter),
  //         },
  //     }, {
  //         action: actions_1.CRUD_GET_LIST,
  //         version: version,
  //         onFailure: function (error) {
  //             return notify(typeof error === 'string'
  //                 ? error
  //                 : error.message || 'ra.notification.http_error', 'warning');
  //         },
  //     }, function (state) {
  //         return state.admin.resources[resource]
  //             ? state.admin.resources[resource].list.ids
  //             : null;
  //     }, function (state) {
  //         return state.admin.resources[resource]
  //             ? state.admin.resources[resource].list.total
  //             : null;
  //     }), ids = _f.data, total = _f.total, loading = _f.loading, loaded = _f.loaded;
  //     var data = react_redux_1.useSelector(function (state) {
  //         return state.admin.resources[resource]
  //             ? state.admin.resources[resource].data
  //             : null;
  //     }, react_redux_1.shallowEqual);
  //     react_1.useEffect(function () {
  //         if (query.page <= 0 ||
  //             (!loading && query.page > 1 && (ids || []).length === 0)) {
  //             // query for a page that doesn't exist, set page to 1
  //             queryModifiers.setPage(1);
  //         }
  //     }, [loading, query.page, ids, queryModifiers]);
  //     var currentSort = react_1.useMemo(function () { return ({
  //         field: query.sort,
  //         order: query.order,
  //     }); }, [query.sort, query.order]);
  //     var resourceName = translate("resources." + resource + ".name", {
  //         smart_count: 2,
  //         _: inflection_1.default.humanize(inflection_1.default.pluralize(resource)),
  //     });
  //     var defaultTitle = translate('ra.page.list', {
  //         name: resourceName,
  //     });
  //     return {
  //         basePath: basePath,
  //         currentSort: currentSort,
  //         data: data,
  //         defaultTitle: defaultTitle,
  //         displayedFilters: query.displayedFilters,
  //         filterValues: query.filterValues,
  //         hasCreate: hasCreate,
  //         ids: ids,
  //         loading: loading,
  //         loaded: loaded,
  //         onSelect: selectionModifiers.select,
  //         onToggleItem: selectionModifiers.toggle,
  //         onUnselectItems: selectionModifiers.clearSelection,
  //         page: query.page,
  //         perPage: query.perPage,
  //         resource: resource,
  //         selectedIds: selectedIds,
  //         setFilters: queryModifiers.setFilters,
  //         hideFilter: queryModifiers.hideFilter,
  //         showFilter: queryModifiers.showFilter,
  //         setPage: queryModifiers.setPage,
  //         setPerPage: queryModifiers.setPerPage,
  //         setSort: queryModifiers.setSort,
  //         total: total,
  //         version: version,
  //     };
  // }
  export function useEditController(props?: any): any;
  // function (props) {
  //     checkMinimumRequiredProps_1.useCheckMinimumRequiredProps('Edit', ['basePath', 'resource'], props);
  //     var basePath = props.basePath, id = props.id, resource = props.resource, successMessage = props.successMessage, _a = props.undoable, undoable = _a === void 0 ? true : _a;
  //     var translate = i18n_1.useTranslate();
  //     var notify = sideEffect_1.useNotify();
  //     var redirect = sideEffect_1.useRedirect();
  //     var refresh = sideEffect_1.useRefresh();
  //     var version = useVersion_1.default();
  //     var _b = dataProvider_1.useGetOne(resource, id, {
  //         version: version,
  //         action: actions_1.CRUD_GET_ONE,
  //         onFailure: function () {
  //             notify('ra.notification.item_doesnt_exist', 'warning');
  //             redirect('list', basePath);
  //             refresh();
  //         },
  //     }), record = _b.data, loading = _b.loading, loaded = _b.loaded;
  //     var resourceName = translate("resources." + resource + ".name", {
  //         smart_count: 1,
  //         _: inflection_1.default.humanize(inflection_1.default.singularize(resource)),
  //     });
  //     var defaultTitle = translate('ra.page.edit', {
  //         name: "" + resourceName,
  //         id: id,
  //         record: record,
  //     });
  //     var _c = dataProvider_1.useUpdate(resource, id, {}, // set by the caller
  //     record), update = _c[0], saving = _c[1].loading;
  //     var save = react_1.useCallback(function (data, redirectTo) {
  //         if (redirectTo === void 0) { redirectTo = 'list'; }
  //         return update({ payload: { data: data } }, {
  //             action: actions_1.CRUD_UPDATE,
  //             onSuccess: function () {
  //                 notify(successMessage || 'ra.notification.updated', 'info', {
  //                     smart_count: 1,
  //                 }, undoable);
  //                 redirect(redirectTo, basePath, data.id, data);
  //             },
  //             onFailure: function (error) {
  //                 return notify(typeof error === 'string'
  //                     ? error
  //                     : error.message || 'ra.notification.http_error', 'warning');
  //             },
  //             undoable: undoable,
  //         });
  //     }, [basePath, notify, redirect, undoable, update, successMessage]);
  //     return {
  //         loading: loading,
  //         loaded: loaded,
  //         saving: saving,
  //         defaultTitle: defaultTitle,
  //         save: save,
  //         resource: resource,
  //         basePath: basePath,
  //         record: record,
  //         version: version,
  //     };
  // }
  export function useCreateController(props?: any): any;
  // function (props) {
  //     checkMinimumRequiredProps_1.useCheckMinimumRequiredProps('Create', ['basePath', 'location', 'resource'], props);
  //     var basePath = props.basePath, resource = props.resource, location = props.location, _a = props.record, record = _a === void 0 ? {} : _a, hasShow = props.hasShow, hasEdit = props.hasEdit, successMessage = props.successMessage;
  //     var translate = i18n_1.useTranslate();
  //     var notify = sideEffect_1.useNotify();
  //     var redirect = sideEffect_1.useRedirect();
  //     var recordToUse = exports.getRecord(location, record);
  //     var version = _1.useVersion();
  //     var _b = dataProvider_1.useCreate(resource), create = _b[0], saving = _b[1].loading;
  //     var save = react_1.useCallback(function (data, redirectTo, _a) {
  //         if (redirectTo === void 0) { redirectTo = 'list'; }
  //         var _b = _a === void 0 ? {} : _a, onSuccess = _b.onSuccess, onFailure = _b.onFailure;
  //         return create({ payload: { data: data } }, {
  //             action: actions_1.CRUD_CREATE,
  //             onSuccess: onSuccess
  //                 ? onSuccess
  //                 : function (_a) {
  //                     var newRecord = _a.data;
  //                     notify(successMessage || 'ra.notification.created', 'info', {
  //                         smart_count: 1,
  //                     });
  //                     redirect(redirectTo, basePath, newRecord.id, newRecord);
  //                 },
  //             onFailure: onFailure
  //                 ? onFailure
  //                 : function (error) {
  //                     notify(typeof error === 'string'
  //                         ? error
  //                         : error.message ||
  //                             'ra.notification.http_error', 'warning');
  //                 },
  //         });
  //     }, [create, notify, successMessage, redirect, basePath]);
  //     var resourceName = translate("resources." + resource + ".name", {
  //         smart_count: 1,
  //         _: inflection_1.default.humanize(inflection_1.default.singularize(resource)),
  //     });
  //     var defaultTitle = translate('ra.page.create', {
  //         name: "" + resourceName,
  //     });
  //     return {
  //         loading: false,
  //         loaded: true,
  //         saving: saving,
  //         defaultTitle: defaultTitle,
  //         save: save,
  //         resource: resource,
  //         basePath: basePath,
  //         record: recordToUse,
  //         redirect: getDefaultRedirectRoute(hasShow, hasEdit),
  //         version: version,
  //     };
  // }
  export function useShowController(props?: any): any;
  // function (props) {
  //     checkMinimumRequiredProps_1.useCheckMinimumRequiredProps('Show', ['basePath', 'resource'], props);
  //     var basePath = props.basePath, id = props.id, resource = props.resource;
  //     var translate = i18n_1.useTranslate();
  //     var notify = sideEffect_1.useNotify();
  //     var redirect = sideEffect_1.useRedirect();
  //     var refresh = sideEffect_1.useRefresh();
  //     var version = useVersion_1.default();
  //     var _a = dataProvider_1.useGetOne(resource, id, {
  //         version: version,
  //         action: actions_1.CRUD_GET_ONE,
  //         onFailure: function () {
  //             notify('ra.notification.item_doesnt_exist', 'warning');
  //             redirect('list', basePath);
  //             refresh();
  //         },
  //     }), record = _a.data, loading = _a.loading, loaded = _a.loaded;
  //     var resourceName = translate("resources." + resource + ".name", {
  //         smart_count: 1,
  //         _: inflection_1.default.humanize(inflection_1.default.singularize(resource)),
  //     });
  //     var defaultTitle = translate('ra.page.show', {
  //         name: "" + resourceName,
  //         id: id,
  //         record: record,
  //     });
  //     return {
  //         loading: loading,
  //         loaded: loaded,
  //         defaultTitle: defaultTitle,
  //         resource: resource,
  //         basePath: basePath,
  //         record: record,
  //         version: version,
  //     };
  // }
  export function useReference(_a?: any): any;
  // function (_a) {
  //     var reference = _a.reference, id = _a.id;
  //     var _b = dataProvider_1.useGetMany(reference, [id]), data = _b.data, error = _b.error, loading = _b.loading, loaded = _b.loaded;
  //     return {
  //         referenceRecord: error ? undefined : data[0],
  //         error: error,
  //         loading: loading,
  //         loaded: loaded,
  //     };
  // }
  export function useCheckMinimumRequiredProps(
    displayName?: any,
    requiredProps?: any,
    props?: any
  ): any;
  // function (displayName, requiredProps, props) {
  //     var propNames = Object.keys(props);
  //     var missingProps = requiredProps.filter(function (prop) { return !propNames.includes(prop); });
  //     if (missingProps.length > 0) {
  //         throw new Error("<" + displayName + "> component is not properly configured, some essential props are missing.\nBe sure to pass the props from the parent. Example:\n\nconst My" + displayName + " = props => (\n    <" + displayName + " {...props}></" + displayName + ">\n);\n\nThe missing props are: " + missingProps.join(', '));
  //     }
  // }
  export const ReferenceArrayFieldController: React.ComponentType<any>;
  // function (_a) {
  //     var resource = _a.resource, reference = _a.reference, basePath = _a.basePath, record = _a.record, source = _a.source, children = _a.children;
  //     return children(__assign({ currentSort: {
  //             field: 'id',
  //             order: 'ASC',
  //         } }, useReferenceArrayFieldController_1.default({
  //         resource: resource,
  //         reference: reference,
  //         basePath: basePath,
  //         record: record,
  //         source: source,
  //     })));
  // }
  export const ReferenceFieldController: React.ComponentType<any>;
  // function (_a) {
  //     var children = _a.children, record = _a.record, source = _a.source, props = __rest(_a, ["children", "record", "source"]);
  //     var id = get_1.default(record, source);
  //     return children(__assign({}, useReference_1.default(__assign({}, props, { id: id })), { resourceLinkPath: getResourceLinkPath_1.default(__assign({}, props, { record: record, source: source })) }));
  // }
  export const ReferenceManyFieldController: React.ComponentType<any>;
  // function (_a) {
  //     var resource = _a.resource, reference = _a.reference, record = _a.record, target = _a.target, filter = _a.filter, source = _a.source, basePath = _a.basePath, initialPerPage = _a.perPage, initialSort = _a.sort, children = _a.children;
  //     var _b = useSortState_1.default(initialSort), sort = _b.sort, setSortField = _b.setSortField;
  //     var _c = usePaginationState_1.default({
  //         perPage: initialPerPage || defaultPerPage,
  //     }), page = _c.page, perPage = _c.perPage, setPage = _c.setPage, setPerPage = _c.setPerPage;
  //     var _d = useReferenceManyFieldController_1.default({
  //         resource: resource,
  //         reference: reference,
  //         record: record,
  //         target: target,
  //         filter: filter,
  //         source: source,
  //         basePath: basePath,
  //         perPage: perPage,
  //         page: page,
  //         sort: sort,
  //     }), data = _d.data, ids = _d.ids, loaded = _d.loaded, referenceBasePath = _d.referenceBasePath, total = _d.total;
  //     return children({
  //         currentSort: sort,
  //         data: data,
  //         ids: ids,
  //         loaded: loaded,
  //         page: page,
  //         perPage: perPage,
  //         referenceBasePath: referenceBasePath,
  //         setPage: setPage,
  //         setPerPage: setPerPage,
  //         setSort: setSortField,
  //         total: total,
  //     });
  // }
  export function getResourceLinkPath(_a?: any): any;
  // function (_a) {
  //     var basePath = _a.basePath, _b = _a.link, link = _b === void 0 ? 'edit' : _b, linkType = _a.linkType, reference = _a.reference, _c = _a.record, record = _c === void 0 ? { id: '' } : _c, resource = _a.resource, source = _a.source;
  //     var sourceId = get_1.default(record, source);
  //     var rootPath = basePath.replace(resource, reference);
  //     // Backward compatibility: keep linkType but with warning
  //     var getResourceLinkPath = function (linkTo) {
  //         return !linkTo
  //             ? false
  //             : typeof linkTo === 'function'
  //                 ? linkTo(record, reference)
  //                 : util_1.linkToRecord(rootPath, sourceId, linkTo);
  //     };
  //     if (linkType !== undefined) {
  //         console.warn("The 'linkType' prop is deprecated and should be named to 'link' in <ReferenceField />");
  //     }
  //     var resourceLinkPath = getResourceLinkPath(linkType !== undefined ? linkType : link);
  //     return resourceLinkPath;
  // }
  export function useReferenceArrayFieldController(_a?: any): any;
  // function (_a) {
  //     var resource = _a.resource, reference = _a.reference, basePath = _a.basePath, record = _a.record, source = _a.source;
  //     var ids = get_1.default(record, source) || [];
  //     var _b = dataProvider_1.useGetMany(reference, ids), data = _b.data, error = _b.error, loading = _b.loading, loaded = _b.loaded;
  //     var referenceBasePath = basePath.replace(resource, reference); // FIXME obviously very weak
  //     return {
  //         ids: ids,
  //         data: react_1.useMemo(function () { return indexById(data); }, [data]),
  //         error: error,
  //         loaded: loaded,
  //         loading: loading,
  //         referenceBasePath: referenceBasePath,
  //     };
  // }
  export function useReferenceManyFieldController(_a?: any): any;
  // function (_a) {
  //     var resource = _a.resource, reference = _a.reference, record = _a.record, target = _a.target, _b = _a.filter, filter = _b === void 0 ? defaultFilter : _b, source = _a.source, basePath = _a.basePath, page = _a.page, perPage = _a.perPage, _c = _a.sort, sort = _c === void 0 ? { field: 'id', order: 'DESC' } : _c;
  //     var referenceId = get_1.default(record, source);
  //     var notify = sideEffect_1.useNotify();
  //     var _d = dataProvider_1.useGetManyReference(reference, target, referenceId, { page: page, perPage: perPage }, sort, filter, resource, {
  //         onFailure: function (error) {
  //             return notify(typeof error === 'string'
  //                 ? error
  //                 : error.message || 'ra.notification.http_error', 'warning');
  //         },
  //     }), data = _d.data, ids = _d.ids, total = _d.total, loading = _d.loading, loaded = _d.loaded;
  //     var referenceBasePath = basePath.replace(resource, reference);
  //     return {
  //         data: data,
  //         ids: ids,
  //         loaded: loaded,
  //         loading: loading,
  //         referenceBasePath: referenceBasePath,
  //         total: total,
  //     };
  // }
  export const ReferenceArrayInputController: React.ComponentType<any>;
  // function (_a) {
  //     var basePath = _a.basePath, children = _a.children, _b = _a.filter, filter = _b === void 0 ? {} : _b, input = _a.input, _c = _a.filterToQuery, filterToQuery = _c === void 0 ? function (searchText) { return ({ q: searchText }); } : _c, _d = _a.perPage, perPage = _d === void 0 ? 25 : _d, reference = _a.reference, resource = _a.resource, _e = _a.sort, sort = _e === void 0 ? { field: 'id', order: 'DESC' } : _e, source = _a.source;
  //     var _f = useReferenceArrayInputController_1.default({
  //         basePath: basePath,
  //         filter: filter,
  //         filterToQuery: filterToQuery,
  //         input: input,
  //         perPage: perPage,
  //         sort: sort,
  //         reference: reference,
  //         resource: resource,
  //         source: source,
  //     }), choices = _f.choices, error = _f.error, loaded = _f.loaded, loading = _f.loading, setFilter = _f.setFilter, setPagination = _f.setPagination, setSort = _f.setSort, warning = _f.warning;
  //     var debouncedSetFilter = react_1.useCallback(debounce_1.default(setFilter, 500), [
  //         setFilter,
  //     ]);
  //     return children({
  //         choices: choices,
  //         error: error,
  //         loaded: loaded,
  //         loading: loading,
  //         setFilter: debouncedSetFilter,
  //         setPagination: setPagination,
  //         setSort: setSort,
  //         warning: warning,
  //     });
  // }
  export const ReferenceInputController: React.ComponentType<any>;
  // function (_a) {
  //     var children = _a.children, props = __rest(_a, ["children"]);
  //     return children(useReferenceInputController_1.default(props));
  // }
  export function useReferenceInputController(_a?: any): any;
  // function (_a) {
  //     var input = _a.input, _b = _a.perPage, perPage = _b === void 0 ? 25 : _b, _c = _a.filter, filter = _c === void 0 ? defaultFilter : _c, reference = _a.reference, filterToQuery = _a.filterToQuery, _d = _a.referenceSource, referenceSource = _d === void 0 ? defaultReferenceSource : _d, resource = _a.resource, sortOverride = _a.sort, source = _a.source;
  //     var translate = useTranslate_1.default();
  //     var _e = usePaginationState_1.default({ perPage: perPage }), pagination = _e.pagination, setPagination = _e.setPagination;
  //     var _f = __1.useSortState(sortOverride), sort = _f.sort, setSort = _f.setSort;
  //     var _g = useFilterState_1.default({
  //         permanentFilter: filter,
  //         filterToQuery: filterToQuery,
  //     }), filterValue = _g.filter, setFilter = _g.setFilter;
  //     var matchingReferences = useGetMatchingReferences_1.default({
  //         reference: reference,
  //         referenceSource: referenceSource,
  //         filter: filterValue,
  //         pagination: pagination,
  //         sort: sort,
  //         resource: resource,
  //         source: source,
  //         id: input.value,
  //     }).matchingReferences;
  //     var referenceRecord = useReference_1.default({
  //         id: input.value,
  //         reference: reference,
  //     }).referenceRecord;
  //     var dataStatus = referenceDataStatus_1.getStatusForInput({
  //         input: input,
  //         matchingReferences: matchingReferences,
  //         referenceRecord: referenceRecord,
  //         translate: translate,
  //     });
  //     return {
  //         choices: dataStatus.choices,
  //         error: dataStatus.error,
  //         loading: dataStatus.waiting,
  //         filter: filterValue,
  //         setFilter: setFilter,
  //         pagination: pagination,
  //         setPagination: setPagination,
  //         sort: sort,
  //         setSort: setSort,
  //         warning: dataStatus.warning,
  //     };
  // }
  export function useReferenceArrayInputController(_a?: any): any;
  // function (_a) {
  //     var defaultFilter = _a.filter, _b = _a.filterToQuery, filterToQuery = _b === void 0 ? defaultFilterToQuery : _b, input = _a.input, _c = _a.perPage, perPage = _c === void 0 ? 25 : _c, _d = _a.sort, defaultSort = _d === void 0 ? { field: 'id', order: 'DESC' } : _d, options = _a.options, reference = _a.reference, resource = _a.resource, source = _a.source;
  //     var translate = i18n_1.useTranslate();
  //     // We store the current input value in a ref so that we are able to fetch
  //     // only the missing references when the input value changes
  //     var inputValue = react_1.useRef(input.value);
  //     var _e = react_1.useState(input.value), idsToFetch = _e[0], setIdsToFetch = _e[1];
  //     react_1.useEffect(function () {
  //         var newIdsToFetch = difference_1.default(input.value, inputValue.current);
  //         if (newIdsToFetch.length > 0) {
  //             setIdsToFetch(newIdsToFetch);
  //         }
  //         inputValue.current = input.value;
  //     }, [input.value, setIdsToFetch]);
  //     var _f = react_1.useState({ page: 1, perPage: perPage }), pagination = _f[0], setPagination = _f[1];
  //     var _g = react_1.useState(defaultSort), sort = _g[0], setSort = _g[1];
  //     var _h = react_1.useState(''), filter = _h[0], setFilter = _h[1];
  //     // Ensure sort can be updated through props too, not just by using the setSort function
  //     react_1.useEffect(function () {
  //         if (!isEqual_1.default(defaultSort, sort)) {
  //             setSort(defaultSort);
  //         }
  //     }, [setSort, defaultSort, sort]);
  //     // Ensure pagination can be updated through props too, not just by using the setPagination function
  //     react_1.useEffect(function () {
  //         var newPagination = {
  //             page: 1,
  //             perPage: perPage,
  //         };
  //         if (!isEqual_1.default(newPagination, pagination)) {
  //             setPagination(newPagination);
  //         }
  //     }, [setPagination, perPage, pagination]);
  //     // Merge the user filters with the default ones
  //     var finalFilter = react_1.useMemo(function () { return (__assign({}, defaultFilter, filterToQuery(filter))); }, [defaultFilter, filter, filterToQuery]);
  //     var _j = dataProvider_1.useGetMany(reference, idsToFetch || []), referenceRecords = _j.data, loaded = _j.loaded;
  //     var matchingReferences = useGetMatching_1.default(reference, pagination, sort, finalFilter, source, resource, options).data;
  //     // filter out not found references - happens when the dataProvider doesn't guarantee referential integrity
  //     var finalReferenceRecords = referenceRecords
  //         ? referenceRecords.filter(Boolean)
  //         : [];
  //     // We merge the currently selected records with the matching ones, otherwise
  //     // the component displaying the currently selected records may fail
  //     var finalMatchingReferences = matchingReferences && matchingReferences.length > 0
  //         ? mergeReferences(matchingReferences, finalReferenceRecords)
  //         : finalReferenceRecords.length > 0
  //             ? finalReferenceRecords
  //             : matchingReferences;
  //     var dataStatus = referenceDataStatus_1.getStatusForArrayInput({
  //         input: input,
  //         matchingReferences: finalMatchingReferences,
  //         referenceRecords: finalReferenceRecords,
  //         translate: translate,
  //     });
  //     return {
  //         choices: dataStatus.choices,
  //         error: dataStatus.error,
  //         loaded: loaded,
  //         loading: dataStatus.waiting,
  //         setFilter: setFilter,
  //         setPagination: setPagination,
  //         setSort: setSort,
  //         warning: dataStatus.warning,
  //     };
  // }
  export function addField(BaseComponent?: any, fieldProps?: any): any;
  // function (BaseComponent, fieldProps) {
  //     if (fieldProps === void 0) { fieldProps = {}; }
  //     var WithFormField = function (props) { return (react_1.default.createElement(FormField_1.default, __assign({ component: BaseComponent }, fieldProps, props))); };
  //     return WithFormField;
  // }
  export const FormDataConsumer: React.ComponentType<any>;
  // function (_a) {
  //     var subscription = _a.subscription, props = __rest(_a, ["subscription"]);
  //     var formState = react_final_form_1.useFormState({ subscription: subscription });
  //     return react_1.default.createElement(exports.FormDataConsumerView, __assign({ formData: formState.values }, props));
  // }
  export const FormField: React.ComponentType<any>;
  // function (_a) {
  //     var id = _a.id, input = _a.input, validate = _a.validate, props = __rest(_a, ["id", "input", "validate"]);
  //     if (process.env.NODE_ENV !== 'production') {
  //         console.log('FormField is deprecated, use the useInput hook instead.');
  //     }
  //     var sanitizedValidate = Array.isArray(validate)
  //         ? validate_1.composeValidators(validate)
  //         : validate;
  //     var finalId = id || props.source;
  //     return input ? ( // An ancestor is already decorated by Field
  //     react_1.default.createElement(props.component, __assign({ input: input, id: finalId }, props))) : (react_1.default.createElement(react_final_form_1.Field, __assign({}, props, { id: finalId, name: props.source, isRequired: exports.isRequired(validate), validate: sanitizedValidate })));
  // }
  export function useInput(_a?: any): any;
  // function (_a) {
  //     var defaultValue = _a.defaultValue, id = _a.id, name = _a.name, source = _a.source, validate = _a.validate, customOnBlur = _a.onBlur, customOnChange = _a.onChange, customOnFocus = _a.onFocus, options = __rest(_a, ["defaultValue", "id", "name", "source", "validate", "onBlur", "onChange", "onFocus"]);
  //     var finalName = name || source;
  //     var sanitizedValidate = Array.isArray(validate)
  //         ? validate_1.composeValidators(validate)
  //         : validate;
  //     var _b = react_final_form_1.useField(finalName, __assign({ initialValue: defaultValue, validate: sanitizedValidate }, options)), input = _b.input, meta = _b.meta;
  //     // Extract the event handlers so that we can provide ours
  //     // allowing users to provide theirs without breaking the form
  //     var onBlur = input.onBlur, onChange = input.onChange, onFocus = input.onFocus, inputProps = __rest(input, ["onBlur", "onChange", "onFocus"]);
  //     var handleBlur = react_1.useCallback(function (event) {
  //         onBlur(event);
  //         if (typeof customOnBlur === 'function') {
  //             customOnBlur(event);
  //         }
  //     }, [onBlur, customOnBlur]);
  //     var handleChange = react_1.useCallback(function (event) {
  //         onChange(event);
  //         if (typeof customOnChange === 'function') {
  //             customOnChange(event);
  //         }
  //     }, [onChange, customOnChange]);
  //     var handleFocus = react_1.useCallback(function (event) {
  //         onFocus(event);
  //         if (typeof customOnFocus === 'function') {
  //             customOnFocus(event);
  //         }
  //     }, [onFocus, customOnFocus]);
  //     // If there is an input prop, this input has already been enhanced by final-form
  //     // This is required in for inputs used inside other inputs (such as the SelectInput inside a ReferenceInput)
  //     if (options.input) {
  //         return {
  //             id: id || source,
  //             input: options.input,
  //             meta: options.meta,
  //             isRequired: isRequired_1.default(validate),
  //         };
  //     }
  //     return {
  //         id: id || source,
  //         input: __assign({}, inputProps, { onBlur: handleBlur, onChange: handleChange, onFocus: handleFocus }),
  //         meta: meta,
  //         isRequired: isRequired_1.default(validate),
  //     };
  // }
  export const ValidationError: React.ComponentType<any>;
  // function (_a) {
  //     var error = _a.error;
  //     var translate = i18n_1.useTranslate();
  //     if (error.message) {
  //         var _b = error, message = _b.message, args = _b.args;
  //         return react_1.default.createElement(react_1.default.Fragment, null, translate(message, __assign({ _: message }, args)));
  //     }
  //     return react_1.default.createElement(react_1.default.Fragment, null, translate(error, { _: error }));
  // }
  export function useInitializeFormWithRecord(record?: any): any;
  // function (record) {
  //     var form = react_final_form_1.useForm();
  //     react_1.useEffect(function () {
  //         if (!record) {
  //             return;
  //         }
  //         var registeredFields = form.getRegisteredFields();
  //         // react-final-form does not provide a way to set multiple values in one call.
  //         // Using batch ensure we don't get rerenders until all our values are set
  //         form.batch(function () {
  //             Object.keys(record).forEach(function (key) {
  //                 // We have to check the record key is actually registered as a field
  //                 // as some record keys may not have a matching input
  //                 if (registeredFields.some(function (field) { return field === key; })) {
  //                     form.change(key, record[key]);
  //                     form.resetFieldState(key);
  //                 }
  //             });
  //         });
  //     }, [form, record]);
  // }
  export function sanitizeEmptyValues(initialValues?: any, values?: any): any;
  // function (initialValues, values) {
  //     // For every field initialy provided, we check wether it value has been removed
  //     // and set it explicitly to an empty string
  //     var initialValuesWithEmptyFields = Object.keys(initialValues).reduce(function (acc, key) {
  //         if (typeof values[key] === 'object' && values[key] !== null) {
  //             acc[key] = sanitizeEmptyValues(initialValues[key], values[key]);
  //         }
  //         else {
  //             acc[key] =
  //                 typeof values[key] === 'undefined' ? '' : values[key];
  //         }
  //         return acc;
  //     }, {});
  //     // Finaly, we merge back the values to not miss any which wasn't initialy provided
  //     return merge_1.default(initialValuesWithEmptyFields, values);
  // }
  export function useChoices(_a?: any): any;
  // function (_a) {
  //     var _b = _a.optionText, optionText = _b === void 0 ? 'name' : _b, _c = _a.optionValue, optionValue = _c === void 0 ? 'id' : _c, _d = _a.translateChoice, translateChoice = _d === void 0 ? true : _d;
  //     var translate = i18n_1.useTranslate();
  //     var getChoiceText = react_1.useCallback(function (choice) {
  //         if (react_1.isValidElement(optionText)) {
  //             return react_1.cloneElement(optionText, {
  //                 record: choice,
  //             });
  //         }
  //         var choiceName = typeof optionText === 'function'
  //             ? optionText(choice)
  //             : get_1.default(choice, optionText);
  //         return translateChoice
  //             ? translate(choiceName, { _: choiceName })
  //             : choiceName;
  //     }, [optionText, translate, translateChoice]);
  //     var getChoiceValue = react_1.useCallback(function (choice) { return get_1.default(choice, optionValue); }, [
  //         optionValue,
  //     ]);
  //     return {
  //         getChoiceText: getChoiceText,
  //         getChoiceValue: getChoiceValue,
  //     };
  // }
  export function useSuggestions(_a?: any): any;
  // function (_a) {
  //     var allowEmpty = _a.allowEmpty, choices = _a.choices, _b = _a.emptyText, emptyText = _b === void 0 ? '' : _b, _c = _a.emptyValue, emptyValue = _c === void 0 ? null : _c, limitChoicesToValue = _a.limitChoicesToValue, matchSuggestion = _a.matchSuggestion, optionText = _a.optionText, optionValue = _a.optionValue, selectedItem = _a.selectedItem, _d = _a.suggestionLimit, suggestionLimit = _d === void 0 ? 0 : _d, translateChoice = _a.translateChoice;
  //     var translate = i18n_1.useTranslate();
  //     var _e = useChoices_1.default({
  //         optionText: optionText,
  //         optionValue: optionValue,
  //         translateChoice: translateChoice,
  //     }), getChoiceText = _e.getChoiceText, getChoiceValue = _e.getChoiceValue;
  //     var getSuggestions = react_1.useCallback(exports.getSuggestionsFactory({
  //         allowEmpty: allowEmpty,
  //         choices: choices,
  //         emptyText: translate(emptyText, { _: emptyText }),
  //         emptyValue: emptyValue,
  //         getChoiceText: getChoiceText,
  //         getChoiceValue: getChoiceValue,
  //         limitChoicesToValue: limitChoicesToValue,
  //         matchSuggestion: matchSuggestion,
  //         optionText: optionText,
  //         optionValue: optionValue,
  //         selectedItem: selectedItem,
  //         suggestionLimit: suggestionLimit,
  //     }), [
  //         allowEmpty,
  //         choices,
  //         emptyText,
  //         emptyValue,
  //         getChoiceText,
  //         getChoiceValue,
  //         limitChoicesToValue,
  //         matchSuggestion,
  //         optionText,
  //         optionValue,
  //         selectedItem,
  //         suggestionLimit,
  //         translate,
  //     ]);
  //     return {
  //         getChoiceText: getChoiceText,
  //         getChoiceValue: getChoiceValue,
  //         getSuggestions: getSuggestions,
  //     };
  // }
  export function isRequired(validate?: any): any;
  // function (validate) {
  //     if (validate && validate.isRequired) {
  //         return true;
  //     }
  //     if (Array.isArray(validate)) {
  //         return !!validate.find(function (it) { return it.isRequired; });
  //     }
  //     return false;
  // }
  export function composeValidators(): any;
  // function () {
  //     var validators = [];
  //     for (var _i = 0; _i < arguments.length; _i++) {
  //         validators[_i] = arguments[_i];
  //     }
  //     return function (value, values, meta) {
  //         var allValidators = Array.isArray(validators[0])
  //             ? validators[0]
  //             : validators;
  //         return allValidators.reduce(function (error, validator) {
  //             return error ||
  //                 (typeof validator === 'function' && validator(value, values, meta));
  //         }, undefined);
  //     };
  // }
  export function required(): any;
  // function() {
  //     var args = arguments,
  //         key = resolver ? resolver.apply(this, args) : args[0],
  //         cache = memoized.cache;
  //
  //     if (cache.has(key)) {
  //       return cache.get(key);
  //     }
  //     var result = func.apply(this, args);
  //     memoized.cache = cache.set(key, result) || cache;
  //     return result;
  //   }
  export function minLength(): any;
  // function() {
  //     var args = arguments,
  //         key = resolver ? resolver.apply(this, args) : args[0],
  //         cache = memoized.cache;
  //
  //     if (cache.has(key)) {
  //       return cache.get(key);
  //     }
  //     var result = func.apply(this, args);
  //     memoized.cache = cache.set(key, result) || cache;
  //     return result;
  //   }
  export function maxLength(): any;
  // function() {
  //     var args = arguments,
  //         key = resolver ? resolver.apply(this, args) : args[0],
  //         cache = memoized.cache;
  //
  //     if (cache.has(key)) {
  //       return cache.get(key);
  //     }
  //     var result = func.apply(this, args);
  //     memoized.cache = cache.set(key, result) || cache;
  //     return result;
  //   }
  export function minValue(): any;
  // function() {
  //     var args = arguments,
  //         key = resolver ? resolver.apply(this, args) : args[0],
  //         cache = memoized.cache;
  //
  //     if (cache.has(key)) {
  //       return cache.get(key);
  //     }
  //     var result = func.apply(this, args);
  //     memoized.cache = cache.set(key, result) || cache;
  //     return result;
  //   }
  export function maxValue(): any;
  // function() {
  //     var args = arguments,
  //         key = resolver ? resolver.apply(this, args) : args[0],
  //         cache = memoized.cache;
  //
  //     if (cache.has(key)) {
  //       return cache.get(key);
  //     }
  //     var result = func.apply(this, args);
  //     memoized.cache = cache.set(key, result) || cache;
  //     return result;
  //   }
  export function number(): any;
  // function() {
  //     var args = arguments,
  //         key = resolver ? resolver.apply(this, args) : args[0],
  //         cache = memoized.cache;
  //
  //     if (cache.has(key)) {
  //       return cache.get(key);
  //     }
  //     var result = func.apply(this, args);
  //     memoized.cache = cache.set(key, result) || cache;
  //     return result;
  //   }
  export function regex(): any;
  // function() {
  //     var args = arguments,
  //         key = resolver ? resolver.apply(this, args) : args[0],
  //         cache = memoized.cache;
  //
  //     if (cache.has(key)) {
  //       return cache.get(key);
  //     }
  //     var result = func.apply(this, args);
  //     memoized.cache = cache.set(key, result) || cache;
  //     return result;
  //   }
  export function email(): any;
  // function() {
  //     var args = arguments,
  //         key = resolver ? resolver.apply(this, args) : args[0],
  //         cache = memoized.cache;
  //
  //     if (cache.has(key)) {
  //       return cache.get(key);
  //     }
  //     var result = func.apply(this, args);
  //     memoized.cache = cache.set(key, result) || cache;
  //     return result;
  //   }
  export function choices(): any;
  // function() {
  //     var args = arguments,
  //         key = resolver ? resolver.apply(this, args) : args[0],
  //         cache = memoized.cache;
  //
  //     if (cache.has(key)) {
  //       return cache.get(key);
  //     }
  //     var result = func.apply(this, args);
  //     memoized.cache = cache.set(key, result) || cache;
  //     return result;
  //   }
  export const REDUX_FORM_NAME: string;
  export function getResources(state?: any): any;
  // function (state) { return admin_1.getResources(state.admin); }
  export function getReferenceResource(state?: any, props?: any): any;
  // function (state, props) {
  //     return admin_1.getReferenceResource(state.admin, props);
  // }
  export function getNotification(state?: any): any;
  // function (state) { return state.admin.notifications[0]; }
  export function getPossibleReferences(
    referenceState?: any,
    possibleValues?: any,
    selectedIds?: any
  ): any;
  // function (referenceState, possibleValues, selectedIds) {
  //     if (selectedIds === void 0) { selectedIds = []; }
  //     if (!possibleValues) {
  //         return null;
  //     }
  //     if (possibleValues.error) {
  //         return possibleValues;
  //     }
  //     possibleValues = Array.from(possibleValues);
  //     selectedIds.forEach(function (id) {
  //         return possibleValues.some(function (value) { return value === id; }) ||
  //             possibleValues.unshift(id);
  //     });
  //     return possibleValues
  //         .map(function (id) { return referenceState.data[id]; })
  //         .filter(function (r) { return typeof r !== 'undefined'; });
  // }
  export function getPossibleReferenceValues(state?: any, props?: any): any;
  // function (state, props) {
  //     return admin_1.getPossibleReferenceValues(state.admin, props);
  // }
  export function getIds(state?: any, relatedTo?: any): any;
  // function (state, relatedTo) {
  //     return state.admin.references.oneToMany[relatedTo] &&
  //         state.admin.references.oneToMany[relatedTo].ids;
  // }
  export function getReferences(
    state?: any,
    reference?: any,
    relatedTo?: any
  ): any;
  // function (state, reference, relatedTo) {
  //     var ids = exports.getIds(state, relatedTo);
  //     if (typeof ids === 'undefined') {
  //         return undefined;
  //     }
  //     if (!state.admin.resources[reference]) {
  //         // eslint-disable-next-line no-console
  //         console.error("Invalid Resource \"" + reference + "\"\n" +
  //             ("You are trying to display or edit a field of a resource called \"" + reference + "\", ") +
  //             'but it has not been declared.\n' +
  //             "Declare this resource in the Admin or check the 'reference' prop of ReferenceArrayField and ReferenceManyField.", { ids: ids });
  //     }
  //     return ids
  //         .map(function (id) {
  //         var resource = state.admin.resources[reference];
  //         if (!resource) {
  //             return undefined;
  //         }
  //         return resource.data[id];
  //     })
  //         .filter(function (r) { return typeof r !== 'undefined'; })
  //         .reduce(function (prev, record) {
  //         prev[record.id] = record; // eslint-disable-line no-param-reassign
  //         return prev;
  //     }, {});
  // }
  export function getReferencesByIds(
    state?: any,
    reference?: any,
    ids?: any
  ): any;
  // function (state, reference, ids) {
  //     if (ids.length === 0) {
  //         return {};
  //     }
  //     if (!state.admin.resources[reference]) {
  //         // eslint-disable-next-line no-console
  //         console.error("Invalid Resource \"" + reference + "\"\n" +
  //             ("You are trying to display or edit a field of a resource called \"" + reference + "\", ") +
  //             'but it has not been declared.\n' +
  //             "Declare this resource in the Admin or check the 'reference' prop of ReferenceArrayField.", { ids: ids });
  //     }
  //     var references = ids
  //         .map(function (id) {
  //         var resource = state.admin.resources[reference];
  //         if (!resource) {
  //             return undefined;
  //         }
  //         return resource.data[id];
  //     })
  //         .filter(function (r) { return typeof r !== 'undefined'; })
  //         .reduce(function (prev, record) {
  //         prev[record.id] = record; // eslint-disable-line no-param-reassign
  //         return prev;
  //     }, {});
  //     return Object.keys(references).length > 0 ? references : null;
  // }
  export function nameRelatedTo(
    reference?: any,
    id?: any,
    resource?: any,
    target?: any,
    filter?: any
  ): any;
  // function (reference, id, resource, target, filter) {
  //     if (filter === void 0) { filter = {}; }
  //     var keys = Object.keys(filter);
  //     if (!keys.length) {
  //         return resource + "_" + reference + "@" + target + "_" + id;
  //     }
  //     return resource + "_" + reference + "@" + target + "_" + id + "?" + keys
  //         .map(function (key) { return key + "=" + JSON.stringify(filter[key]); })
  //         .join('&');
  // }
  export function adminSaga(dataProvider?: any, authProvider?: any): any;
  // function (dataProvider, authProvider) {
  //     return function admin() {
  //         return __generator(this, function (_a) {
  //             switch (_a.label) {
  //                 case 0: return [4 /*yield*/, effects_1.all([
  //                         auth_1.default(authProvider)(),
  //                         undo_1.default(),
  //                         fetch_1.default(dataProvider)(),
  //                         accumulate_1.default(),
  //                         redirection_1.default(),
  //                         refresh_1.default(),
  //                         notification_1.default(),
  //                         callback_1.default(),
  //                     ])];
  //                 case 1:
  //                     _a.sent();
  //                     return [2 /*return*/];
  //             }
  //         });
  //     };
  // }
  export function authSaga(authProvider?: any): any;
  // function (authProvider) {
  //     if (!authProvider) {
  //         return function () { return null; };
  //     }
  //     return function watchAuthActions() {
  //         return __generator(this, function (_a) {
  //             switch (_a.label) {
  //                 case 0: return [4 /*yield*/, effects_1.all([
  //                         effects_1.takeEvery(authActions_1.USER_LOGIN, exports.handleLogin(authProvider)),
  //                         effects_1.takeEvery(authActions_1.USER_CHECK, exports.handleCheck(authProvider)),
  //                         effects_1.takeEvery(authActions_1.USER_LOGOUT, exports.handleLogout(authProvider)),
  //                         effects_1.takeLatest(fetchActions_1.FETCH_ERROR, exports.handleFetchError(authProvider)),
  //                     ])];
  //                 case 1:
  //                     _a.sent();
  //                     return [2 /*return*/];
  //             }
  //         });
  //     };
  // }
  export function callbackSaga(): any;
  // function default_1() {
  //     return __generator(this, function (_a) {
  //         switch (_a.label) {
  //             case 0: return [4 /*yield*/, effects_1.takeEvery(function (action) { return action.meta && action.meta.callback; }, handleCallback)];
  //             case 1:
  //                 _a.sent();
  //                 return [2 /*return*/];
  //         }
  //     });
  // }
  export function fetchSaga(dataProvider?: any): any;
  // function (dataProvider) {
  //     return function watchFetch() {
  //         return __generator(this, function (_a) {
  //             switch (_a.label) {
  //                 case 0: return [4 /*yield*/, effects_1.takeEvery(exports.takeFetchAction, handleFetch, dataProvider)];
  //                 case 1:
  //                     _a.sent();
  //                     return [2 /*return*/];
  //             }
  //         });
  //     };
  // }
  export function notificationSaga(): any;
  // function default_1() {
  //     return __generator(this, function (_a) {
  //         switch (_a.label) {
  //             case 0: return [4 /*yield*/, effects_1.takeEvery(
  //                 // @ts-ignore
  //                 function (action) { return action.meta && action.meta.notification; }, handleNotification)];
  //             case 1:
  //                 _a.sent();
  //                 return [2 /*return*/];
  //         }
  //     });
  // }
  export function redirectionSaga(): any;
  // function default_1() {
  //     return __generator(this, function (_a) {
  //         switch (_a.label) {
  //             case 0: return [4 /*yield*/, effects_1.takeEvery(
  //                 // @ts-ignore
  //                 function (action) { return action.meta && typeof action.meta.redirectTo !== 'undefined'; }, handleRedirection)];
  //             case 1:
  //                 _a.sent();
  //                 return [2 /*return*/];
  //         }
  //     });
  // }
  export function accumulateSaga(): any;
  // function default_1() {
  //     var accumulations, tasks;
  //     return __generator(this, function (_a) {
  //         switch (_a.label) {
  //             case 0:
  //                 accumulations = {};
  //                 tasks = {};
  //                 return [4 /*yield*/, effects_1.takeEvery(function (action) { return action.meta && action.meta.accumulate; }, exports.accumulateFactory(tasks, accumulations, exports.finalizeFactory(tasks, accumulations)))];
  //             case 1:
  //                 _a.sent();
  //                 return [2 /*return*/];
  //         }
  //     });
  // }
  export function refreshSaga(): any;
  // function default_1() {
  //     return __generator(this, function (_a) {
  //         switch (_a.label) {
  //             case 0: return [4 /*yield*/, effects_1.takeEvery(function (action) { return action.meta && action.meta.refresh; }, handleRefresh)];
  //             case 1:
  //                 _a.sent();
  //                 return [2 /*return*/];
  //         }
  //     });
  // }
  export function undoSaga(): any;
  // function watchUndoable() {
  //     return __generator(this, function (_a) {
  //         switch (_a.label) {
  //             case 0:
  //             // @ts-ignore
  //             return [4 /*yield*/, effects_1.takeEvery(undoActions_1.UNDOABLE, handleUndoRace)];
  //             case 1:
  //                 // @ts-ignore
  //                 _a.sent();
  //                 return [2 /*return*/];
  //         }
  //     });
  // }
  export function useRedirect(): any;
  // function () {
  //     var dispatch = react_redux_1.useDispatch();
  //     var history = react_router_dom_1.useHistory();
  //     return react_1.useCallback(function (redirectTo, basePath, id, data) {
  //         if (basePath === void 0) { basePath = ''; }
  //         if (!redirectTo) {
  //             dispatch(uiActions_1.refreshView());
  //             return;
  //         }
  //         history.push(resolveRedirectTo_1.default(redirectTo, basePath, id, data));
  //     }, [dispatch, history]);
  // }
  export function useNotify(): any;
  // function () {
  //     var dispatch = react_redux_1.useDispatch();
  //     return react_1.useCallback(function (message, type, messageArgs, undoable) {
  //         if (type === void 0) { type = 'info'; }
  //         if (messageArgs === void 0) { messageArgs = {}; }
  //         if (undoable === void 0) { undoable = false; }
  //         dispatch(notificationActions_1.showNotification(message, type, {
  //             messageArgs: messageArgs,
  //             undoable: undoable,
  //         }));
  //     }, [dispatch]);
  // }
  export function useRefresh(): any;
  // function () {
  //     var dispatch = react_redux_1.useDispatch();
  //     return react_1.useCallback(function (doRefresh) {
  //         if (doRefresh === void 0) { doRefresh = true; }
  //         return doRefresh && dispatch(uiActions_1.refreshView());
  //     }, [dispatch]);
  // }
  export function useUnselectAll(resource1?: any): any;
  // function (resource1) {
  //     var dispatch = react_redux_1.useDispatch();
  //     return react_1.useCallback(function (resource2) {
  //         util_1.warning(!resource2 && !resource1, "You didn't specify the resource at initialization (useUnselectAll('posts')) nor when using the callback (unselectAll('posts'))");
  //         dispatch(actions_1.setListSelectedIds(resource2 || resource1, []));
  //     }, [dispatch, resource1]);
  // }
  export const I18N_TRANSLATE: string;
  export const I18N_CHANGE_LOCALE: string;
  export const Link: React.ComponentType<any>;
  // function (_a) {
  //     var to = _a.to, children = _a.children, classesOverride = _a.classes, className = _a.className, rest = __rest(_a, ["to", "children", "classes", "className"]);
  //     var classes = useStyles({ classes: classesOverride });
  //     return (react_1.default.createElement(react_router_dom_1.Link, __assign({ to: to, className: classnames_1.default(classes.link, className) }, rest), children));
  // }
  export const defaultTheme: {};
  // palette: {"secondary":{"light":"string","main":"string","dark":"string","contrastText":"string"}}
  // typography: {"title":{"fontWeight":"number"}}
  // sidebar: {"width":"number","closedWidth":"number"}
  // overrides: {"MuiFilledInput":{"root":{"backgroundColor":"string","&$disabled":{"backgroundColor":"string"}}}}
  export const Login: React.ComponentType<any>;
  // function (_a) {
  //     var theme = _a.theme, classesOverride = _a.classes, className = _a.className, children = _a.children, staticContext = _a.staticContext, backgroundImage = _a.backgroundImage, rest = __rest(_a, ["theme", "classes", "className", "children", "staticContext", "backgroundImage"]);
  //     var containerRef = react_1.useRef();
  //     var classes = useStyles({ classes: classesOverride });
  //     var muiTheme = react_1.useMemo(function () { return core_1.createMuiTheme(theme); }, [theme]);
  //     var backgroundImageLoaded = false;
  //     var checkAuth = ra_core_1.useCheckAuth();
  //     var history = react_router_dom_1.useHistory();
  //     react_1.useEffect(function () {
  //         checkAuth({}, false)
  //             .then(function () {
  //             // already authenticated, redirect to the home page
  //             history.push('/');
  //         })
  //             .catch(function () {
  //             // not authenticated, stay on the login page
  //         });
  //     }, [checkAuth, history]);
  //     var updateBackgroundImage = function () {
  //         if (!backgroundImageLoaded && containerRef.current) {
  //             containerRef.current.style.backgroundImage = "url(" + backgroundImage + ")";
  //             backgroundImageLoaded = true;
  //         }
  //     };
  //     // Load background image asynchronously to speed up time to interactive
  //     var lazyLoadBackgroundImage = function () {
  //         if (backgroundImage) {
  //             var img = new Image();
  //             img.onload = updateBackgroundImage;
  //             img.src = backgroundImage;
  //         }
  //     };
  //     react_1.useEffect(function () {
  //         if (!backgroundImageLoaded) {
  //             lazyLoadBackgroundImage();
  //         }
  //     });
  //     return (react_1.default.createElement(styles_1.ThemeProvider, { theme: muiTheme },
  //         react_1.default.createElement("div", __assign({ className: classnames_1.default(classes.main, className) }, rest, { ref: containerRef }),
  //             react_1.default.createElement(core_1.Card, { className: classes.card },
  //                 react_1.default.createElement("div", { className: classes.avatar },
  //                     react_1.default.createElement(core_1.Avatar, { className: classes.icon },
  //                         react_1.default.createElement(Lock_1.default, null))),
  //                 children),
  //             react_1.default.createElement(Notification_1.default, null))));
  // }
  export const LoginForm: React.ComponentType<any>;
  // function (_a) {
  //     var redirectTo = _a.redirectTo;
  //     var _b = ra_core_1.useSafeSetState(false), loading = _b[0], setLoading = _b[1];
  //     var login = ra_core_1.useLogin();
  //     var translate = ra_core_1.useTranslate();
  //     var notify = ra_core_1.useNotify();
  //     var classes = useStyles({});
  //     var validate = function (values) {
  //         var errors = { username: undefined, password: undefined };
  //         if (!values.username) {
  //             errors.username = translate('ra.validation.required');
  //         }
  //         if (!values.password) {
  //             errors.password = translate('ra.validation.required');
  //         }
  //         return errors;
  //     };
  //     var submit = function (values) {
  //         setLoading(true);
  //         login(values, redirectTo)
  //             .then(function () {
  //             setLoading(false);
  //         })
  //             .catch(function (error) {
  //             setLoading(false);
  //             notify(typeof error === 'string'
  //                 ? error
  //                 : typeof error === 'undefined' || !error.message
  //                     ? 'ra.auth.sign_in_error'
  //                     : error.message, 'warning');
  //         });
  //     };
  //     return (react_1.default.createElement(react_final_form_1.Form, { onSubmit: submit, validate: validate, render: function (_a) {
  //             var handleSubmit = _a.handleSubmit;
  //             return (react_1.default.createElement("form", { onSubmit: handleSubmit, noValidate: true },
  //                 react_1.default.createElement("div", { className: classes.form },
  //                     react_1.default.createElement("div", { className: classes.input },
  //                         react_1.default.createElement(react_final_form_1.Field, { autoFocus: true, id: "username", name: "username", component: Input, label: translate('ra.auth.username'), disabled: loading })),
  //                     react_1.default.createElement("div", { className: classes.input },
  //                         react_1.default.createElement(react_final_form_1.Field, { id: "password", name: "password", component: Input, label: translate('ra.auth.password'), type: "password", disabled: loading, autoComplete: "current-password" }))),
  //                 react_1.default.createElement(CardActions_1.default, null,
  //                     react_1.default.createElement(Button_1.default, { variant: "contained", type: "submit", color: "primary", disabled: loading, className: classes.button },
  //                         loading && (react_1.default.createElement(CircularProgress_1.default, { className: classes.icon, size: 18, thickness: 2 })),
  //                         translate('ra.auth.sign_in')))));
  //         } }));
  // }
  export const Logout: {};
  // $$typeof: "symbol"
  // render: "function Logout(props, ref) {\n    var className = props.className, redirectTo = props.redirectTo, rest = __rest(props, [\"className\", \"redirectTo\"]);\n    var classes = useStyles({}); // the empty {} is a temp fix for https://github.com/mui-org/material-ui/issues/15942\n    var translate = ra_core_1.useTranslate();\n    var logout = ra_core_1.useLogout();\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    var handleClick = react_1.useCallback(function () { return logout(redirectTo); }, [\n        redirectTo,\n        logout,\n    ]);\n    return (react_1.default.createElement(core_1.MenuItem, __assign({ className: classnames_1.default('logout', classes.menuItem, className), onClick: handleClick, ref: ref }, rest),\n        react_1.default.createElement(core_1.ListItemIcon, { className: classes.icon },\n            react_1.default.createElement(PowerSettingsNew_1.default, null)),\n        translate('ra.auth.logout')));\n}"
  // propTypes: {"className":"function () { [native code] }","redirectTo":"function () { [native code] }"}
  export const BulkDeleteButton: React.ComponentType<any>;
  // function (_a) {
  //     var undoable = _a.undoable, props = __rest(_a, ["undoable"]);
  //     return undoable ? (react_1.default.createElement(BulkDeleteWithUndoButton_1.default, __assign({}, props))) : (react_1.default.createElement(BulkDeleteWithConfirmButton_1.default, __assign({}, props)));
  // }
  export const BulkDeleteWithConfirmButton: React.ComponentType<any>;
  // function (_a) {
  //     var basePath = _a.basePath, classesOverride = _a.classes, crudDeleteMany = _a.crudDeleteMany, icon = _a.icon, label = _a.label, onClick = _a.onClick, resource = _a.resource, selectedIds = _a.selectedIds, rest = __rest(_a, ["basePath", "classes", "crudDeleteMany", "icon", "label", "onClick", "resource", "selectedIds"]);
  //     var _b = react_1.useState(false), isOpen = _b[0], setOpen = _b[1];
  //     var classes = useStyles({ classes: classesOverride });
  //     var notify = ra_core_1.useNotify();
  //     var unselectAll = ra_core_1.useUnselectAll();
  //     var refresh = ra_core_1.useRefresh();
  //     var translate = ra_core_1.useTranslate();
  //     var _c = ra_core_1.useDeleteMany(resource, selectedIds, {
  //         action: ra_core_1.CRUD_DELETE_MANY,
  //         onSuccess: function () {
  //             refresh();
  //             notify('ra.notification.deleted', 'info', {
  //                 smart_count: selectedIds.length,
  //             });
  //             unselectAll(resource);
  //         },
  //         onFailure: function (error) {
  //             return notify(typeof error === 'string'
  //                 ? error
  //                 : error.message || 'ra.notification.http_error', 'warning');
  //         },
  //     }), deleteMany = _c[0], loading = _c[1].loading;
  //     var handleClick = function (e) {
  //         setOpen(true);
  //         e.stopPropagation();
  //     };
  //     var handleDialogClose = function () {
  //         setOpen(false);
  //     };
  //     var handleDelete = function () {
  //         deleteMany();
  //         if (typeof onClick === 'function') {
  //             onClick();
  //         }
  //     };
  //     return (react_1.default.createElement(react_1.Fragment, null,
  //         react_1.default.createElement(Button_1.default, __assign({ onClick: handleClick, label: label, className: classes.deleteButton }, sanitizeRestProps(rest)), icon),
  //         react_1.default.createElement(Confirm_1.default, { isOpen: isOpen, loading: loading, title: "ra.message.bulk_delete_title", content: "ra.message.bulk_delete_content", translateOptions: {
  //                 smart_count: selectedIds.length,
  //                 name: inflection_1.default.humanize(translate("resources." + resource + ".name", {
  //                     smart_count: selectedIds.length,
  //                     _: inflection_1.default.inflect(resource, selectedIds.length),
  //                 }), true),
  //             }, onConfirm: handleDelete, onClose: handleDialogClose })));
  // }
  export const BulkDeleteWithUndoButton: React.ComponentType<any>;
  // function (_a) {
  //     var basePath = _a.basePath, classesOverride = _a.classes, icon = _a.icon, label = _a.label, onClick = _a.onClick, resource = _a.resource, selectedIds = _a.selectedIds, startUndoable = _a.startUndoable, rest = __rest(_a, ["basePath", "classes", "icon", "label", "onClick", "resource", "selectedIds", "startUndoable"]);
  //     var classes = useStyles({ classes: classesOverride });
  //     var notify = ra_core_1.useNotify();
  //     var unselectAll = ra_core_1.useUnselectAll();
  //     var refresh = ra_core_1.useRefresh();
  //     var _b = ra_core_1.useDeleteMany(resource, selectedIds, {
  //         action: ra_core_1.CRUD_DELETE_MANY,
  //         onSuccess: function () {
  //             notify('ra.notification.deleted', 'info', { smart_count: selectedIds.length }, true);
  //             unselectAll(resource);
  //             refresh();
  //         },
  //         onFailure: function (error) {
  //             return notify(typeof error === 'string'
  //                 ? error
  //                 : error.message || 'ra.notification.http_error', 'warning');
  //         },
  //         undoable: true,
  //     }), deleteMany = _b[0], loading = _b[1].loading;
  //     var handleClick = function () {
  //         deleteMany();
  //         if (typeof onClick === 'function') {
  //             onClick();
  //         }
  //     };
  //     return (react_1.default.createElement(Button_1.default, __assign({ onClick: handleClick, label: label, className: classes.deleteButton, disabled: loading }, sanitizeRestProps(rest)), icon));
  // }
  export const Button: React.ComponentType<any>;
  // function (_a) {
  //     var _b;
  //     var _c = _a.alignIcon, alignIcon = _c === void 0 ? 'left' : _c, children = _a.children, classesOverride = _a.classes, className = _a.className, color = _a.color, disabled = _a.disabled, label = _a.label, size = _a.size, rest = __rest(_a, ["alignIcon", "children", "classes", "className", "color", "disabled", "label", "size"]);
  //     var translate = ra_core_1.useTranslate();
  //     var classes = useStyles({ classes: classesOverride });
  //     var isXSmall = core_1.useMediaQuery(function (theme) { return theme.breakpoints.down('xs'); });
  //     return isXSmall ? (label && !disabled ? (react_1.default.createElement(core_1.Tooltip, { title: translate(label, { _: label }) },
  //         react_1.default.createElement(core_1.IconButton, __assign({ "aria-label": translate(label, { _: label }), className: className, color: color }, rest), children))) : (react_1.default.createElement(core_1.IconButton, __assign({ className: className, color: color, disabled: disabled }, rest), children))) : (react_1.default.createElement(core_1.Button, __assign({ className: classnames_1.default(classes.button, className), color: color, size: size, "aria-label": label ? translate(label, { _: label }) : undefined, disabled: disabled }, rest),
  //         alignIcon === 'left' &&
  //             children &&
  //             react_1.default.cloneElement(children, {
  //                 className: classes[size + "Icon"],
  //             }),
  //         label && (react_1.default.createElement("span", { className: classnames_1.default((_b = {},
  //                 _b[classes.label] = alignIcon === 'left',
  //                 _b[classes.labelRightIcon] = alignIcon !== 'left',
  //                 _b)) }, translate(label, { _: label }))),
  //         alignIcon === 'right' &&
  //             children &&
  //             react_1.default.cloneElement(children, {
  //                 className: classes[size + "Icon"],
  //             })));
  // }
  export const CloneButton: React.ComponentType<any>;
  // function ShouldUpdate() {
  //         _classCallCheck(this, ShouldUpdate);
  //
  //         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  //       }
  export const CreateButton: React.ComponentType<any>;
  // function ShouldUpdate() {
  //         _classCallCheck(this, ShouldUpdate);
  //
  //         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  //       }
  export const DeleteButton: React.ComponentType<any>;
  // function (_a) {
  //     var undoable = _a.undoable, props = __rest(_a, ["undoable"]);
  //     return undoable ? (react_1.default.createElement(DeleteWithUndoButton_1.default, __assign({}, props))) : (react_1.default.createElement(DeleteWithConfirmButton_1.default, __assign({}, props)));
  // }
  export const DeleteWithConfirmButton: React.ComponentType<any>;
  // function (_a) {
  //     var basePath = _a.basePath, classesOverride = _a.classes, className = _a.className, icon = _a.icon, _b = _a.label, label = _b === void 0 ? 'ra.action.delete' : _b, onClick = _a.onClick, record = _a.record, resource = _a.resource, redirectTo = _a.redirect, rest = __rest(_a, ["basePath", "classes", "className", "icon", "label", "onClick", "record", "resource", "redirect"]);
  //     var _c = react_1.useState(false), open = _c[0], setOpen = _c[1];
  //     var translate = ra_core_1.useTranslate();
  //     var notify = ra_core_1.useNotify();
  //     var redirect = ra_core_1.useRedirect();
  //     var refresh = ra_core_1.useRefresh();
  //     var classes = useStyles({ classes: classesOverride });
  //     var _d = ra_core_1.useDelete(resource, record && record.id, record, {
  //         action: ra_core_1.CRUD_DELETE,
  //         onSuccess: function () {
  //             notify('ra.notification.deleted', 'info', { smart_count: 1 });
  //             redirect(redirectTo, basePath);
  //             refresh();
  //         },
  //         onFailure: function (error) {
  //             return notify(typeof error === 'string'
  //                 ? error
  //                 : error.message || 'ra.notification.http_error', 'warning');
  //         },
  //         undoable: false,
  //     }), deleteOne = _d[0], loading = _d[1].loading;
  //     var handleClick = function (e) {
  //         setOpen(true);
  //         e.stopPropagation();
  //     };
  //     var handleDialogClose = function (e) {
  //         setOpen(false);
  //         e.stopPropagation();
  //     };
  //     var handleDelete = react_1.useCallback(function () {
  //         deleteOne();
  //         if (typeof onClick === 'function') {
  //             onClick();
  //         }
  //     }, [deleteOne, onClick]);
  //     return (react_1.default.createElement(react_1.Fragment, null,
  //         react_1.default.createElement(Button_1.default, __assign({ onClick: handleClick, label: label, className: classnames_1.default('ra-delete-button', classes.deleteButton, className), key: "button" }, sanitizeRestProps(rest)), icon),
  //         react_1.default.createElement(Confirm_1.default, { isOpen: open, loading: loading, title: "ra.message.delete_title", content: "ra.message.delete_content", translateOptions: {
  //                 name: inflection_1.default.humanize(translate("resources." + resource + ".name", {
  //                     smart_count: 1,
  //                     _: inflection_1.default.singularize(resource),
  //                 }), true),
  //                 id: record.id,
  //             }, onConfirm: handleDelete, onClose: handleDialogClose })));
  // }
  export const DeleteWithUndoButton: React.ComponentType<any>;
  // function (_a) {
  //     var _b = _a.label, label = _b === void 0 ? 'ra.action.delete' : _b, classesOverride = _a.classes, className = _a.className, icon = _a.icon, onClick = _a.onClick, resource = _a.resource, record = _a.record, basePath = _a.basePath, redirectTo = _a.redirect, rest = __rest(_a, ["label", "classes", "className", "icon", "onClick", "resource", "record", "basePath", "redirect"]);
  //     var classes = useStyles({ classes: classesOverride });
  //     var notify = ra_core_1.useNotify();
  //     var redirect = ra_core_1.useRedirect();
  //     var refresh = ra_core_1.useRefresh();
  //     var _c = ra_core_1.useDelete(resource, record && record.id, record, {
  //         action: ra_core_1.CRUD_DELETE,
  //         onSuccess: function () {
  //             notify('ra.notification.deleted', 'info', { smart_count: 1 }, true);
  //             redirect(redirectTo, basePath);
  //             refresh();
  //         },
  //         onFailure: function (error) {
  //             return notify(typeof error === 'string'
  //                 ? error
  //                 : error.message || 'ra.notification.http_error', 'warning');
  //         },
  //         undoable: true,
  //     }), deleteOne = _c[0], loading = _c[1].loading;
  //     var handleDelete = react_1.useCallback(function (event) {
  //         event.stopPropagation();
  //         deleteOne();
  //         if (typeof onClick === 'function') {
  //             onClick();
  //         }
  //     }, [deleteOne, onClick]);
  //     return (react_1.default.createElement(Button_1.default, __assign({ onClick: handleDelete, disabled: loading, label: label, className: classnames_1.default('ra-delete-button', classes.deleteButton, className), key: "button" }, exports.sanitizeRestProps(rest)), icon));
  // }
  export const EditButton: React.ComponentType<any>;
  // function (_a) {
  //     var _b = _a.basePath, basePath = _b === void 0 ? '' : _b, _c = _a.label, label = _c === void 0 ? 'ra.action.edit' : _c, _d = _a.record, record = _d === void 0 ? {} : _d, _e = _a.icon, icon = _e === void 0 ? react_1.default.createElement(Create_1.default, null) : _e, rest = __rest(_a, ["basePath", "label", "record", "icon"]);
  //     return (react_1.default.createElement(Button_1.default, __assign({ component: react_router_dom_1.Link, to: ra_core_1.linkToRecord(basePath, record.id), label: label, onClick: stopPropagation }, rest), icon));
  // }
  export const ExportButton: React.ComponentType<any>;
  // function (_a) {
  //     var exporter = _a.exporter, sort = _a.sort, _b = _a.filter, filter = _b === void 0 ? defaultFilter : _b, _c = _a.maxResults, maxResults = _c === void 0 ? 1000 : _c, resource = _a.resource, onClick = _a.onClick, _d = _a.label, label = _d === void 0 ? 'ra.action.export' : _d, _e = _a.icon, icon = _e === void 0 ? DefaultIcon : _e, rest = __rest(_a, ["exporter", "sort", "filter", "maxResults", "resource", "onClick", "label", "icon"]);
  //     var dataProvider = ra_core_1.useDataProvider();
  //     var notify = ra_core_1.useNotify();
  //     var handleClick = react_1.useCallback(function (event) {
  //         dataProvider
  //             .getList(resource, {
  //             sort: sort,
  //             filter: filter,
  //             pagination: { page: 1, perPage: maxResults },
  //         })
  //             .then(function (_a) {
  //             var data = _a.data;
  //             return exporter
  //                 ? exporter(data, fetchRelatedRecords(dataProvider), dataProvider)
  //                 : dist_1.default(data, function (err, csv) {
  //                     return ra_core_1.downloadCSV(csv, resource);
  //                 });
  //         })
  //             .catch(function (error) {
  //             console.error(error);
  //             notify('ra.notification.http_error', 'warning');
  //         });
  //         if (typeof onClick === 'function') {
  //             onClick(event);
  //         }
  //     }, [
  //         dataProvider,
  //         exporter,
  //         filter,
  //         maxResults,
  //         notify,
  //         onClick,
  //         resource,
  //         sort,
  //     ]);
  //     return (react_1.default.createElement(Button_1.default, __assign({ onClick: handleClick, label: label }, sanitizeRestProps(rest)), icon));
  // }
  export const ListButton: React.ComponentType<any>;
  // function (_a) {
  //     var _b = _a.basePath, basePath = _b === void 0 ? '' : _b, _c = _a.label, label = _c === void 0 ? 'ra.action.list' : _c, _d = _a.icon, icon = _d === void 0 ? react_1.default.createElement(List_1.default, null) : _d, rest = __rest(_a, ["basePath", "label", "icon"]);
  //     return (react_1.default.createElement(Button_1.default, __assign({ component: react_router_dom_1.Link, to: basePath, label: label }, rest), icon));
  // }
  export const SaveButton: React.ComponentType<any>;
  // function (_a) {
  //     var className = _a.className, _b = _a.classes, classesOverride = _b === void 0 ? {} : _b, invalid = _a.invalid, _c = _a.label, label = _c === void 0 ? 'ra.action.save' : _c, pristine = _a.pristine, redirect = _a.redirect, saving = _a.saving, submitOnEnter = _a.submitOnEnter, _d = _a.variant, variant = _d === void 0 ? 'contained' : _d, icon = _a.icon, onClick = _a.onClick, handleSubmitWithRedirect = _a.handleSubmitWithRedirect, rest = __rest(_a, ["className", "classes", "invalid", "label", "pristine", "redirect", "saving", "submitOnEnter", "variant", "icon", "onClick", "handleSubmitWithRedirect"]);
  //     var classes = useStyles({ classes: classesOverride });
  //     var notify = ra_core_1.useNotify();
  //     var translate = ra_core_1.useTranslate();
  //     // We handle the click event through mousedown because of an issue when
  //     // the button is not as the same place when mouseup occurs, preventing the click
  //     // event to fire.
  //     // It can happen when some errors appear under inputs, pushing the button
  //     // towards the window bottom.
  //     var handleMouseDown = function (event) {
  //         if (saving) {
  //             // prevent double submission
  //             event.preventDefault();
  //         }
  //         else {
  //             if (invalid) {
  //                 notify('ra.message.invalid_form', 'warning');
  //             }
  //             // always submit form explicitly regardless of button type
  //             if (event) {
  //                 event.preventDefault();
  //             }
  //             handleSubmitWithRedirect(redirect);
  //         }
  //         if (typeof onClick === 'function') {
  //             onClick(event);
  //         }
  //     };
  //     // As we handle the "click" through the mousedown event, we have to make sure we cancel
  //     // the default click in case the issue mentionned above does not occur.
  //     // Otherwise, this would trigger a standard HTML submit, not the final-form one.
  //     var handleClick = function (event) {
  //         event.preventDefault();
  //         event.stopPropagation();
  //     };
  //     var type = submitOnEnter ? 'submit' : 'button';
  //     var displayedLabel = label && translate(label, { _: label });
  //     return (react_1.default.createElement(Button_1.default, __assign({ className: classnames_1.default(classes.button, className), variant: variant, type: type, onMouseDown: handleMouseDown, onClick: handleClick, color: saving ? 'default' : 'primary', "aria-label": displayedLabel }, sanitizeRestProps(rest)),
  //         saving && saving.redirect === redirect ? (react_1.default.createElement(CircularProgress_1.default, { size: 18, thickness: 2, className: classes.leftIcon })) : (react_1.cloneElement(icon, {
  //             className: classnames_1.default(classes.leftIcon, classes.icon),
  //         })),
  //         displayedLabel));
  // }
  export const ShowButton: React.ComponentType<any>;
  // function ShouldUpdate() {
  //         _classCallCheck(this, ShouldUpdate);
  //
  //         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  //       }
  export const RefreshButton: React.ComponentType<any>;
  // function (_a) {
  //     var _b = _a.label, label = _b === void 0 ? 'ra.action.refresh' : _b, _c = _a.icon, icon = _c === void 0 ? defaultIcon : _c, onClick = _a.onClick, rest = __rest(_a, ["label", "icon", "onClick"]);
  //     var dispatch = react_redux_1.useDispatch();
  //     var handleClick = react_1.useCallback(function (event) {
  //         event.preventDefault();
  //         dispatch(ra_core_1.refreshView());
  //         if (typeof onClick === 'function') {
  //             onClick();
  //         }
  //     }, [dispatch, onClick]);
  //     return (react_1.default.createElement(Button_1.default, __assign({ label: label, onClick: handleClick }, rest), icon));
  // }
  export const RefreshIconButton: React.ComponentType<any>;
  // function (_a) {
  //     var _b = _a.label, label = _b === void 0 ? 'ra.action.refresh' : _b, _c = _a.icon, icon = _c === void 0 ? defaultIcon : _c, onClick = _a.onClick, className = _a.className, rest = __rest(_a, ["label", "icon", "onClick", "className"]);
  //     var dispatch = react_redux_1.useDispatch();
  //     var translate = ra_core_1.useTranslate();
  //     var handleClick = react_1.useCallback(function (event) {
  //         event.preventDefault();
  //         dispatch(ra_core_1.refreshView());
  //         if (typeof onClick === 'function') {
  //             onClick();
  //         }
  //     }, [dispatch, onClick]);
  //     return (react_1.default.createElement(Tooltip_1.default, { title: label && translate(label, { _: label }) },
  //         react_1.default.createElement(IconButton_1.default, __assign({ "aria-label": label && translate(label, { _: label }), className: className, color: "inherit", onClick: handleClick }, rest), icon)));
  // }
  export const Create: React.ComponentType<any>;
  // function (props) { return (react_1.default.createElement(exports.CreateView, __assign({}, props, ra_core_1.useCreateController(props)))); }
  export const CreateView: React.ComponentType<any>;
  // function (props) {
  //     var _a;
  //     var actions = props.actions, aside = props.aside, basePath = props.basePath, children = props.children, classesOverride = props.classes, className = props.className, defaultTitle = props.defaultTitle, hasList = props.hasList, hasShow = props.hasShow, _b = props.record, record = _b === void 0 ? {} : _b, redirect = props.redirect, resource = props.resource, save = props.save, saving = props.saving, title = props.title, version = props.version, rest = __rest(props, ["actions", "aside", "basePath", "children", "classes", "className", "defaultTitle", "hasList", "hasShow", "record", "redirect", "resource", "save", "saving", "title", "version"]);
  //     ra_core_1.useCheckMinimumRequiredProps('Create', ['children'], props);
  //     var classes = useStyles({ classes: classesOverride });
  //     return (react_1.default.createElement("div", __assign({ className: classnames_1.default('create-page', classes.root, className) }, sanitizeRestProps(rest)),
  //         react_1.default.createElement(TitleForRecord_1.default, { title: title, record: record, defaultTitle: defaultTitle }),
  //         actions &&
  //             react_1.cloneElement(actions, __assign({ basePath: basePath,
  //                 resource: resource,
  //                 hasList: hasList }, actions.props)),
  //         react_1.default.createElement("div", { className: classnames_1.default(classes.main, (_a = {},
  //                 _a[classes.noActions] = !actions,
  //                 _a)) },
  //             react_1.default.createElement(Card_1.default, { className: classes.card }, react_1.cloneElement(react_1.Children.only(children), {
  //                 basePath: basePath,
  //                 record: record,
  //                 redirect: typeof children.props.redirect === 'undefined'
  //                     ? redirect
  //                     : children.props.redirect,
  //                 resource: resource,
  //                 save: save,
  //                 saving: saving,
  //                 version: version,
  //             })),
  //             aside &&
  //                 react_1.cloneElement(aside, {
  //                     basePath: basePath,
  //                     record: record,
  //                     resource: resource,
  //                     save: save,
  //                     saving: saving,
  //                     version: version,
  //                 }))));
  // }
  export const CreateActions: React.ComponentType<any>;
  // function (_a) {
  //     var basePath = _a.basePath, className = _a.className, hasList = _a.hasList, rest = __rest(_a, ["basePath", "className", "hasList"]);
  //     return (react_1.default.createElement(TopToolbar_1.default, __assign({ className: className }, sanitizeRestProps(rest)), hasList && react_1.default.createElement(button_1.ListButton, { basePath: basePath })));
  // }
  export const Edit: React.ComponentType<any>;
  // function (props) { return react_1.default.createElement(exports.EditView, __assign({}, props, ra_core_1.useEditController(props))); }
  export const EditView: React.ComponentType<any>;
  // function (_a) {
  //     var _b;
  //     var actions = _a.actions, aside = _a.aside, basePath = _a.basePath, children = _a.children, classesOverride = _a.classes, className = _a.className, defaultTitle = _a.defaultTitle, hasList = _a.hasList, hasShow = _a.hasShow, record = _a.record, redirect = _a.redirect, resource = _a.resource, save = _a.save, saving = _a.saving, title = _a.title, undoable = _a.undoable, version = _a.version, rest = __rest(_a, ["actions", "aside", "basePath", "children", "classes", "className", "defaultTitle", "hasList", "hasShow", "record", "redirect", "resource", "save", "saving", "title", "undoable", "version"]);
  //     var classes = exports.useStyles({ classes: classesOverride });
  //     if (typeof actions === 'undefined' && hasShow) {
  //         actions = react_1.default.createElement(EditActions_1.default, null);
  //     }
  //     if (!children) {
  //         return null;
  //     }
  //     return (react_1.default.createElement("div", __assign({ className: classnames_1.default('edit-page', classes.root, className) }, sanitizeRestProps(rest)),
  //         react_1.default.createElement(TitleForRecord_1.default, { title: title, record: record, defaultTitle: defaultTitle }),
  //         actions &&
  //             react_1.cloneElement(actions, __assign({ basePath: basePath, data: record, hasShow: hasShow,
  //                 hasList: hasList,
  //                 resource: resource }, actions.props)),
  //         react_1.default.createElement("div", { className: classnames_1.default(classes.main, (_b = {},
  //                 _b[classes.noActions] = !actions,
  //                 _b)) },
  //             react_1.default.createElement(Card_1.default, { className: classes.card }, record ? (react_1.cloneElement(react_1.Children.only(children), {
  //                 basePath: basePath,
  //                 record: record,
  //                 redirect: typeof children.props.redirect === 'undefined'
  //                     ? redirect
  //                     : children.props.redirect,
  //                 resource: resource,
  //                 save: save,
  //                 saving: saving,
  //                 undoable: undoable,
  //                 version: version,
  //             })) : (react_1.default.createElement(CardContent_1.default, null, "\u00A0"))),
  //             aside &&
  //                 react_1.default.cloneElement(aside, {
  //                     basePath: basePath,
  //                     record: record,
  //                     resource: resource,
  //                     version: version,
  //                     save: save,
  //                     saving: saving,
  //                 }))));
  // }
  export const EditActions: React.ComponentType<any>;
  // function (_a) {
  //     var basePath = _a.basePath, className = _a.className, data = _a.data, hasShow = _a.hasShow, rest = __rest(_a, ["basePath", "className", "data", "hasShow"]);
  //     return (react_1.default.createElement(TopToolbar_1.default, __assign({ className: className }, sanitizeRestProps(rest)), hasShow && react_1.default.createElement(button_1.ShowButton, { basePath: basePath, record: data })));
  // }
  export const EditGuesser: React.ComponentType<any>;
  // function (props) { return (react_1.default.createElement(EditViewGuesser, __assign({}, props, ra_core_1.useEditController(props)))); }
  export const Show: React.ComponentType<any>;
  // function (props) { return react_1.default.createElement(exports.ShowView, __assign({}, props, ra_core_1.useShowController(props))); }
  export const ShowView: React.ComponentType<any>;
  // function (_a) {
  //     var _b;
  //     var actions = _a.actions, aside = _a.aside, basePath = _a.basePath, children = _a.children, classesOverride = _a.classes, className = _a.className, defaultTitle = _a.defaultTitle, hasEdit = _a.hasEdit, hasList = _a.hasList, record = _a.record, resource = _a.resource, title = _a.title, version = _a.version, rest = __rest(_a, ["actions", "aside", "basePath", "children", "classes", "className", "defaultTitle", "hasEdit", "hasList", "record", "resource", "title", "version"]);
  //     var classes = exports.useStyles({ classes: classesOverride });
  //     if (typeof actions === 'undefined' && hasEdit) {
  //         actions = react_1.default.createElement(ShowActions_1.default, null);
  //     }
  //     if (!children) {
  //         return null;
  //     }
  //     return (react_1.default.createElement("div", __assign({ className: classnames_1.default('show-page', classes.root, className) }, sanitizeRestProps(rest)),
  //         react_1.default.createElement(TitleForRecord_1.default, { title: title, record: record, defaultTitle: defaultTitle }),
  //         actions &&
  //             react_1.cloneElement(actions, __assign({ basePath: basePath, data: record, hasList: hasList,
  //                 hasEdit: hasEdit,
  //                 resource: resource }, actions.props)),
  //         react_1.default.createElement("div", { className: classnames_1.default(classes.main, (_b = {},
  //                 _b[classes.noActions] = !actions,
  //                 _b)) },
  //             react_1.default.createElement(Card_1.default, { className: classes.card }, record &&
  //                 react_1.cloneElement(react_1.Children.only(children), {
  //                     resource: resource,
  //                     basePath: basePath,
  //                     record: record,
  //                     version: version,
  //                 })),
  //             aside &&
  //                 react_1.cloneElement(aside, {
  //                     resource: resource,
  //                     basePath: basePath,
  //                     record: record,
  //                     version: version,
  //                 }))));
  // }
  export const ShowActions: React.ComponentType<any>;
  // function (_a) {
  //     var basePath = _a.basePath, className = _a.className, data = _a.data, hasEdit = _a.hasEdit, rest = __rest(_a, ["basePath", "className", "data", "hasEdit"]);
  //     return (react_1.default.createElement(TopToolbar_1.default, __assign({ className: className }, sanitizeRestProps(rest)), hasEdit && react_1.default.createElement(button_1.EditButton, { basePath: basePath, record: data })));
  // }
  export const ShowGuesser: React.ComponentType<any>;
  // function (props) { return (react_1.default.createElement(ShowViewGuesser, __assign({}, props, ra_core_1.useShowController(props)))); }
  export const SimpleShowLayout: React.ComponentType<any>;
  // function (_a) {
  //     var basePath = _a.basePath, className = _a.className, children = _a.children, record = _a.record, resource = _a.resource, version = _a.version, rest = __rest(_a, ["basePath", "className", "children", "record", "resource", "version"]);
  //     return (react_1.default.createElement(CardContentInner_1.default, __assign({ className: className, key: version }, sanitizeRestProps(rest)), react_1.Children.map(children, function (field) {
  //         return field && react_1.isValidElement(field) ? (react_1.default.createElement("div", { key: field.props.source, className: classnames_1.default("ra-field ra-field-" + field.props.source, field.props.className) }, field.props.addLabel ? (react_1.default.createElement(Labeled_1.default, { record: record, resource: resource, basePath: basePath, label: field.props.label, source: field.props.source, disabled: false }, field)) : typeof field.type === 'string' ? (field) : (react_1.cloneElement(field, {
  //             record: record,
  //             resource: resource,
  //             basePath: basePath,
  //         })))) : null;
  //     })));
  // }
  export const TabbedShowLayout: React.ComponentType<any>;
  // function (_a) {
  //     var basePath = _a.basePath, children = _a.children, classesOverride = _a.classes, className = _a.className, record = _a.record, resource = _a.resource, version = _a.version, value = _a.value, tabs = _a.tabs, rest = __rest(_a, ["basePath", "children", "classes", "className", "record", "resource", "version", "value", "tabs"]);
  //     var match = react_router_dom_2.useRouteMatch();
  //     var classes = useStyles({ classes: classesOverride });
  //     return (react_1.default.createElement("div", __assign({ className: className, key: version }, sanitizeRestProps(rest)),
  //         react_1.cloneElement(tabs, {}, children),
  //         react_1.default.createElement(Divider_1.default, null),
  //         react_1.default.createElement("div", { className: classes.content }, react_1.Children.map(children, function (tab, index) {
  //             return tab && react_1.isValidElement(tab) ? (react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: TabbedShowLayoutTabs_1.getTabFullPath(tab, index, match.url), render: function () {
  //                     return react_1.cloneElement(tab, {
  //                         context: 'content',
  //                         resource: resource,
  //                         record: record,
  //                         basePath: basePath,
  //                     });
  //                 } })) : null;
  //         }))));
  // }
  export const Tab: React.ComponentType<any>;
  // function (props) {
  //         var translate = useTranslate_1.default();
  //         var locale = useLocale_1.default();
  //         return (react_1.default.createElement(BaseComponent, __assign({ translate: translate, locale: locale }, props)));
  //     }
  export const TabbedShowLayoutTabs: React.ComponentType<any>;
  // function (_a) {
  //     var children = _a.children, rest = __rest(_a, ["children"]);
  //     var location = react_router_dom_1.useLocation();
  //     var match = react_router_dom_1.useRouteMatch();
  //     // The location pathname will contain the page path including the current tab path
  //     // so we can use it as a way to determine the current tab
  //     var value = location.pathname;
  //     return (react_1.default.createElement(Tabs_1.default, __assign({ indicatorColor: "primary", value: value }, rest), react_1.Children.map(children, function (tab, index) {
  //         if (!tab || !react_1.isValidElement(tab))
  //             return null;
  //         // Builds the full tab tab which is the concatenation of the last matched route in the
  //         // TabbedShowLayout hierarchy (ex: '/posts/create', '/posts/12', , '/posts/12/show')
  //         // and the tab path.
  //         // This will be used as the Tab's value
  //         var tabPath = exports.getTabFullPath(tab, index, match.url);
  //         return react_1.cloneElement(tab, {
  //             context: 'header',
  //             value: tabPath,
  //         });
  //     })));
  // }
  export const FormInput: React.ComponentType<any>;
  // function (_a) {
  //     var _b, _c;
  //     var input = _a.input, classesOverride = _a.classes, rest = __rest(_a, ["input", "classes"]);
  //     var classes = useStyles({ classes: classesOverride });
  //     return input ? (react_1.default.createElement("div", { className: classnames_1.default('ra-input', "ra-input-" + input.props.source, input.props.formClassName) }, input.props.addLabel ? (react_1.default.createElement(Labeled_1.default, __assign({ id: input.props.id || input.props.source }, input.props, sanitizeRestProps(rest)), react_1.default.cloneElement(input, __assign({ className: classnames_1.default((_b = {},
  //             _b[classes.input] = !input.props.fullWidth,
  //             _b), input.props.className), id: input.props.id || input.props.source }, rest)))) : (react_1.default.cloneElement(input, __assign({ className: classnames_1.default((_c = {},
  //             _c[classes.input] = !input.props.fullWidth,
  //             _c), input.props.className), id: input.props.id || input.props.source }, rest))))) : null;
  // }
  export const FormTab: React.ComponentType<any>;
  // function (props) {
  //         var translate = useTranslate_1.default();
  //         var locale = useLocale_1.default();
  //         return (react_1.default.createElement(BaseComponent, __assign({ translate: translate, locale: locale }, props)));
  //     }
  export const SimpleForm: React.ComponentType<any>;
  // function (_a) {
  //     var initialValues = _a.initialValues, defaultValue = _a.defaultValue, saving = _a.saving, props = __rest(_a, ["initialValues", "defaultValue", "saving"]);
  //     var redirect = react_1.useRef(props.redirect);
  //     // We don't use state here for two reasons:
  //     // 1. There no way to execute code only after the state has been updated
  //     // 2. We don't want the form to rerender when redirect is changed
  //     var setRedirect = function (newRedirect) {
  //         redirect.current = newRedirect;
  //     };
  //     var translate = ra_core_1.useTranslate();
  //     var finalInitialValues = getFormInitialValues_1.default(initialValues, defaultValue, props.record);
  //     var submit = function (values) {
  //         var finalRedirect = typeof redirect.current === undefined
  //             ? props.redirect
  //             : redirect.current;
  //         var finalValues = ra_core_1.sanitizeEmptyValues(finalInitialValues, values);
  //         props.save(finalValues, finalRedirect);
  //     };
  //     return (react_1.default.createElement(react_final_form_1.Form, __assign({ key: props.version, initialValues: finalInitialValues, onSubmit: submit, mutators: __assign({}, final_form_arrays_1.default), keepDirtyOnReinitialize: true, subscription: defaultSubscription }, props, { render: function (formProps) { return (react_1.default.createElement(SimpleFormView, __assign({ saving: formProps.submitting || saving, translate: translate, setRedirect: setRedirect }, props, formProps))); } })));
  // }
  export const SimpleFormIterator: React.ComponentType<any>;
  // function (props) {
  //         var translate = useTranslate_1.default();
  //         var locale = useLocale_1.default();
  //         return (react_1.default.createElement(BaseComponent, __assign({ translate: translate, locale: locale }, props)));
  //     }
  export const TabbedForm: React.ComponentType<any>;
  // function (_a) {
  //     var initialValues = _a.initialValues, defaultValue = _a.defaultValue, saving = _a.saving, props = __rest(_a, ["initialValues", "defaultValue", "saving"]);
  //     var redirect = react_1.useRef(props.redirect);
  //     // We don't use state here for two reasons:
  //     // 1. There no way to execute code only after the state has been updated
  //     // 2. We don't want the form to rerender when redirect is changed
  //     var setRedirect = function (newRedirect) {
  //         redirect.current = newRedirect;
  //     };
  //     var translate = ra_core_1.useTranslate();
  //     var classes = useStyles();
  //     var finalInitialValues = getFormInitialValues_1.default(initialValues, defaultValue, props.record);
  //     var submit = function (values) {
  //         var finalRedirect = typeof redirect.current === undefined
  //             ? props.redirect
  //             : redirect.current;
  //         var finalValues = ra_core_1.sanitizeEmptyValues(finalInitialValues, values);
  //         props.save(finalValues, finalRedirect);
  //     };
  //     return (react_1.default.createElement(react_final_form_1.Form, __assign({ key: props.version, initialValues: finalInitialValues, onSubmit: submit, mutators: __assign({}, final_form_arrays_1.default), setRedirect: setRedirect, keepDirtyOnReinitialize: true, subscription: defaultSubscription }, props, { render: function (formProps) { return (react_1.default.createElement(exports.TabbedFormView, __assign({ classes: classes, saving: formProps.submitting || saving, translate: translate }, props, formProps))); } })));
  // }
  export const TabbedFormTabs: React.ComponentType<any>;
  // function (_a) {
  //     var children = _a.children, classes = _a.classes, url = _a.url, tabsWithErrors = _a.tabsWithErrors, rest = __rest(_a, ["children", "classes", "url", "tabsWithErrors"]);
  //     var location = react_router_dom_1.useLocation();
  //     var validTabPaths = react_1.Children.map(children, function (tab, index) {
  //         if (!react_1.isValidElement(tab))
  //             return undefined;
  //         return exports.getTabFullPath(tab, index, url);
  //     });
  //     // This ensure we don't get warnings from material-ui Tabs component when
  //     // the current location pathname targets a dynamically added Tab
  //     // In the case the targeted Tab is not present at first render (when
  //     // using permissions for example) we temporarily switch to the first
  //     // available tab. The current location will be applied again on the
  //     // first render containing the targeted tab. This is almost transparent
  //     // for the user who may just see an short tab selection animation
  //     var tabValue = validTabPaths.includes(location.pathname)
  //         ? location.pathname
  //         : validTabPaths[0];
  //     return (react_1.default.createElement(Tabs_1.default, __assign({ value: tabValue, indicatorColor: "primary" }, rest), react_1.Children.map(children, function (tab, index) {
  //         if (!react_1.isValidElement(tab))
  //             return null;
  //         // Builds the full tab tab which is the concatenation of the last matched route in the
  //         // TabbedShowLayout hierarchy (ex: '/posts/create', '/posts/12', , '/posts/12/show')
  //         // and the tab path.
  //         // This will be used as the Tab's value
  //         var tabPath = exports.getTabFullPath(tab, index, url);
  //         return react_1.cloneElement(tab, {
  //             intent: 'header',
  //             value: tabPath,
  //             className: tabsWithErrors.includes(tab.props.label) &&
  //                 location.pathname !== tabPath
  //                 ? classes.errorTabButton
  //                 : null,
  //         });
  //     })));
  // }
  export const Toolbar: React.ComponentType<any>;
  // function WithWidth(props) {
  //       var contextTheme = (0, _useTheme.default)();
  //       var theme = props.theme || contextTheme;
  //
  //       var _getThemeProps = (0, _styles.getThemeProps)({
  //         theme: theme,
  //         name: 'MuiWithWidth',
  //         props: (0, _extends2.default)({}, props)
  //       }),
  //           initialWidth = _getThemeProps.initialWidth,
  //           width = _getThemeProps.width,
  //           other = (0, _objectWithoutProperties2.default)(_getThemeProps, ["initialWidth", "width"]);
  //
  //       var _React$useState = _react.default.useState(false),
  //           mountedState = _React$useState[0],
  //           setMountedState = _React$useState[1];
  //
  //       useEnhancedEffect(function () {
  //         setMountedState(true);
  //       }, []);
  //       /**
  //        * innerWidth |xs      sm      md      lg      xl
  //        *            |-------|-------|-------|-------|------>
  //        * width      |  xs   |  sm   |  md   |  lg   |  xl
  //        */
  //
  //       var keys = (0, _toConsumableArray2.default)(theme.breakpoints.keys).reverse();
  //       var widthComputed = keys.reduce(function (output, key) {
  //         // eslint-disable-next-line react-hooks/rules-of-hooks
  //         var matches = (0, _useMediaQuery.default)(theme.breakpoints.up(key));
  //         return !output && matches ? key : output;
  //       }, null);
  //       var more = (0, _extends2.default)({
  //         width: width || (mountedState || noSSR ? widthComputed : undefined) || initialWidth || initialWidthOption
  //       }, withThemeOption ? {
  //         theme: theme
  //       } : {}, {}, other); // When rendering the component on the server,
  //       // we have no idea about the client browser screen width.
  //       // In order to prevent blinks and help the reconciliation of the React tree
  //       // we are not rendering the child component.
  //       //
  //       // An alternative is to use the `initialWidth` property.
  //
  //       if (more.width === undefined) {
  //         return null;
  //       }
  //
  //       return _react.default.createElement(Component, more);
  //     }
  export function getFormInitialValues(
    initialValues?: any,
    defaultValue?: any,
    record?: any
  ): any;
  // function getFormInitialValues(initialValues, defaultValue, record) {
  //     var finalInitialValues = __assign({}, initialValues, record);
  //     if (typeof defaultValue !== 'undefined') {
  //         console.warn('"defaultValue" is deprecated, please use "initialValues" instead');
  //     }
  //     if (typeof defaultValue === 'object') {
  //         finalInitialValues = __assign({}, defaultValue, finalInitialValues);
  //     }
  //     else if (typeof defaultValue === 'function') {
  //         finalInitialValues = __assign({}, defaultValue(record), finalInitialValues);
  //     }
  //     return finalInitialValues;
  // }
  export const ArrayField: React.ComponentType<any>;
  // function ShouldUpdate() {
  //         _classCallCheck(this, ShouldUpdate);
  //
  //         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  //       }
  export const BooleanField: React.ComponentType<any>;
  // function ShouldUpdate() {
  //         _classCallCheck(this, ShouldUpdate);
  //
  //         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  //       }
  export const ChipField: React.ComponentType<any>;
  // function ShouldUpdate() {
  //         _classCallCheck(this, ShouldUpdate);
  //
  //         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  //       }
  export const DateField: React.ComponentType<any>;
  // function ShouldUpdate() {
  //         _classCallCheck(this, ShouldUpdate);
  //
  //         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  //       }
  export const EmailField: React.ComponentType<any>;
  // function ShouldUpdate() {
  //         _classCallCheck(this, ShouldUpdate);
  //
  //         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  //       }
  export const FileField: React.ComponentType<any>;
  // function (_a) {
  //     var className = _a.className, classesOverride = _a.classes, record = _a.record, source = _a.source, title = _a.title, src = _a.src, target = _a.target, rest = __rest(_a, ["className", "classes", "record", "source", "title", "src", "target"]);
  //     var sourceValue = get_1.default(record, source);
  //     var classes = useStyles({ classes: classesOverride });
  //     if (!sourceValue) {
  //         return (react_1.default.createElement("div", __assign({ className: classnames_1.default(classes.root, className) }, sanitizeRestProps_1.default(rest))));
  //     }
  //     if (Array.isArray(sourceValue)) {
  //         return (react_1.default.createElement("ul", __assign({ className: classnames_1.default(classes.root, className) }, sanitizeRestProps_1.default(rest)), sourceValue.map(function (file, index) {
  //             var fileTitleValue = get_1.default(file, title) || title;
  //             var srcValue = get_1.default(file, src) || title;
  //             return (react_1.default.createElement("li", { key: index },
  //                 react_1.default.createElement("a", { href: srcValue, title: fileTitleValue, target: target }, fileTitleValue)));
  //         })));
  //     }
  //     var titleValue = get_1.default(record, title) || title;
  //     return (react_1.default.createElement("div", __assign({ className: classnames_1.default(classes.root, className) }, sanitizeRestProps_1.default(rest)),
  //         react_1.default.createElement("a", { href: sourceValue, title: titleValue, target: target }, titleValue)));
  // }
  export const ImageField: React.ComponentType<any>;
  // function (_a) {
  //     var className = _a.className, classesOverride = _a.classes, record = _a.record, source = _a.source, src = _a.src, title = _a.title, rest = __rest(_a, ["className", "classes", "record", "source", "src", "title"]);
  //     var sourceValue = get_1.default(record, source);
  //     var classes = useStyles({ classes: classesOverride });
  //     if (!sourceValue) {
  //         return react_1.default.createElement("div", __assign({ className: className }, sanitizeRestProps_1.default(rest)));
  //     }
  //     if (Array.isArray(sourceValue)) {
  //         return (react_1.default.createElement("ul", __assign({ className: classnames_1.default(classes.list, className) }, sanitizeRestProps_1.default(rest)), sourceValue.map(function (file, index) {
  //             var fileTitleValue = get_1.default(file, title) || title;
  //             var srcValue = get_1.default(file, src) || title;
  //             return (react_1.default.createElement("li", { key: index },
  //                 react_1.default.createElement("img", { alt: fileTitleValue, title: fileTitleValue, src: srcValue, className: classes.image })));
  //         })));
  //     }
  //     var titleValue = get_1.default(record, title) || title;
  //     return (react_1.default.createElement("div", __assign({ className: className }, sanitizeRestProps_1.default(rest)),
  //         react_1.default.createElement("img", { title: titleValue, alt: titleValue, src: sourceValue, className: classes.image })));
  // }
  export const FunctionField: React.ComponentType<any>;
  // function ShouldUpdate() {
  //         _classCallCheck(this, ShouldUpdate);
  //
  //         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  //       }
  export const NumberField: React.ComponentType<any>;
  // function ShouldUpdate() {
  //         _classCallCheck(this, ShouldUpdate);
  //
  //         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  //       }
  export const ReferenceField: React.ComponentType<any>;
  // function (_a) {
  //     var children = _a.children, record = _a.record, source = _a.source, props = __rest(_a, ["children", "record", "source"]);
  //     if (react_1.default.Children.count(children) !== 1) {
  //         throw new Error('<ReferenceField> only accepts a single child');
  //     }
  //     var id = get_1.default(record, source);
  //     var _b = ra_core_1.useReference(__assign({}, props, { id: id })), loaded = _b.loaded, error = _b.error, referenceRecord = _b.referenceRecord;
  //     var resourceLinkPath = ra_core_1.getResourceLinkPath(__assign({ record: record, source: source }, props));
  //     return (react_1.default.createElement(PureReferenceFieldView, __assign({}, props, { loaded: loaded, error: error, referenceRecord: referenceRecord, resourceLinkPath: resourceLinkPath }), children));
  // }
  export const ReferenceArrayField: React.ComponentType<any>;
  // function (_a) {
  //     var children = _a.children, props = __rest(_a, ["children"]);
  //     if (react_1.default.Children.count(children) !== 1) {
  //         throw new Error('<ReferenceArrayField> only accepts a single child (like <Datagrid>)');
  //     }
  //     return (react_1.default.createElement(PureReferenceArrayFieldView, __assign({}, props, ra_core_1.useReferenceArrayFieldController(props)), children));
  // }
  export const ReferenceManyField: React.ComponentType<any>;
  // function (props) {
  //     var children = props.children, initialSort = props.sort, initialPerPage = props.perPage, resource = props.resource, reference = props.reference, record = props.record, target = props.target, filter = props.filter, source = props.source, basePath = props.basePath;
  //     if (react_1.default.Children.count(children) !== 1) {
  //         throw new Error('<ReferenceManyField> only accepts a single child (like <Datagrid>)');
  //     }
  //     var _a = ra_core_1.useSortState(initialSort), sort = _a.sort, setSortField = _a.setSortField;
  //     var _b = ra_core_1.usePaginationState({
  //         perPage: initialPerPage,
  //     }), page = _b.page, perPage = _b.perPage, setPage = _b.setPage, setPerPage = _b.setPerPage;
  //     var controllerProps = ra_core_1.useReferenceManyFieldController({
  //         resource: resource,
  //         reference: reference,
  //         record: record,
  //         target: target,
  //         filter: filter,
  //         source: source,
  //         basePath: basePath,
  //         page: page,
  //         perPage: perPage,
  //         sort: sort,
  //     });
  //     return (react_1.default.createElement(exports.ReferenceManyFieldView, __assign({}, props, __assign({ currentSort: sort, page: page,
  //         perPage: perPage,
  //         setPage: setPage,
  //         setPerPage: setPerPage, setSort: setSortField }, controllerProps))));
  // }
  export const RichTextField: React.ComponentType<any>;
  // function ShouldUpdate() {
  //         _classCallCheck(this, ShouldUpdate);
  //
  //         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  //       }
  export const SelectField: React.ComponentType<any>;
  // function ShouldUpdate() {
  //         _classCallCheck(this, ShouldUpdate);
  //
  //         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  //       }
  export const TextField: React.ComponentType<any>;
  // function ShouldUpdate() {
  //         _classCallCheck(this, ShouldUpdate);
  //
  //         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  //       }
  export const UrlField: React.ComponentType<any>;
  // function ShouldUpdate() {
  //         _classCallCheck(this, ShouldUpdate);
  //
  //         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  //       }
  export const ArrayInput: React.ComponentType<any>;
  // function (_a) {
  //     var className = _a.className, defaultValue = _a.defaultValue, label = _a.label, children = _a.children, record = _a.record, resource = _a.resource, source = _a.source, validate = _a.validate, variant = _a.variant, _b = _a.margin, margin = _b === void 0 ? 'dense' : _b, rest = __rest(_a, ["className", "defaultValue", "label", "children", "record", "resource", "source", "validate", "variant", "margin"]);
  //     var fieldProps = react_final_form_arrays_1.useFieldArray(source, __assign({ initialValue: defaultValue, validate: validate }, rest));
  //     return (react_1.default.createElement(core_1.FormControl, __assign({ fullWidth: true, margin: "normal", className: className }, sanitizeRestProps_1.default(rest)),
  //         react_1.default.createElement(core_1.InputLabel, { htmlFor: source, shrink: true },
  //             react_1.default.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: ra_core_1.isRequired(validate) })),
  //         react_1.cloneElement(react_1.Children.only(children), __assign({}, fieldProps, { record: record,
  //             resource: resource,
  //             source: source,
  //             variant: variant,
  //             margin: margin }))));
  // }
  export const AutocompleteArrayInput: React.ComponentType<any>;
  // function (_a) {
  //     var allowEmpty = _a.allowEmpty, classesOverride = _a.classes, _b = _a.choices, choices = _b === void 0 ? [] : _b, emptyText = _a.emptyText, emptyValue = _a.emptyValue, format = _a.format, helperText = _a.helperText, idOverride = _a.id, inputOverride = _a.input, isRequiredOverride = _a.isRequired, label = _a.label, limitChoicesToValue = _a.limitChoicesToValue, margin = _a.margin, matchSuggestion = _a.matchSuggestion, metaOverride = _a.meta, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, _c = _a.options, _d = _c === void 0 ? {} : _c, suggestionsContainerProps = _d.suggestionsContainerProps, labelProps = _d.labelProps, InputProps = _d.InputProps, options = __rest(_d, ["suggestionsContainerProps", "labelProps", "InputProps"]), _e = _a.optionText, optionText = _e === void 0 ? 'name' : _e, _f = _a.optionValue, optionValue = _f === void 0 ? 'id' : _f, parse = _a.parse, resource = _a.resource, setFilter = _a.setFilter, shouldRenderSuggestionsOverride = _a.shouldRenderSuggestions, source = _a.source, suggestionLimit = _a.suggestionLimit, _g = _a.translateChoice, translateChoice = _g === void 0 ? true : _g, validate = _a.validate, _h = _a.variant, variant = _h === void 0 ? 'filled' : _h, rest = __rest(_a, ["allowEmpty", "classes", "choices", "emptyText", "emptyValue", "format", "helperText", "id", "input", "isRequired", "label", "limitChoicesToValue", "margin", "matchSuggestion", "meta", "onBlur", "onChange", "onFocus", "options", "optionText", "optionValue", "parse", "resource", "setFilter", "shouldRenderSuggestions", "source", "suggestionLimit", "translateChoice", "validate", "variant"]);
  //     ra_core_1.warning(react_1.isValidElement(optionText) && !matchSuggestion, "If the optionText prop is a React element, you must also specify the matchSuggestion prop:\n<AutocompleteInput\n    matchSuggestion={(filterValue, suggestion) => true}\n/>\n        ");
  //     var classes = useStyles({ classes: classesOverride });
  //     var inputEl = react_1.useRef();
  //     var anchorEl = react_1.useRef();
  //     var _j = ra_core_1.useInput(__assign({ format: format, id: idOverride, input: inputOverride, isRequired: isRequiredOverride, meta: metaOverride, onBlur: onBlur,
  //         onChange: onChange,
  //         onFocus: onFocus,
  //         parse: parse,
  //         resource: resource,
  //         source: source,
  //         validate: validate }, rest)), id = _j.id, input = _j.input, isRequired = _j.isRequired, _k = _j.meta, touched = _k.touched, error = _k.error;
  //     var _l = react_1.default.useState(''), filterValue = _l[0], setFilterValue = _l[1];
  //     var getSuggestionFromValue = react_1.useCallback(function (value) { return choices.find(function (choice) { return get_1.default(choice, optionValue) === value; }); }, [choices, optionValue]);
  //     var selectedItems = react_1.useMemo(function () { return (input.value || []).map(getSuggestionFromValue); }, [input.value, getSuggestionFromValue]);
  //     var _m = ra_core_1.useSuggestions({
  //         allowEmpty: allowEmpty,
  //         choices: choices,
  //         emptyText: emptyText,
  //         emptyValue: emptyValue,
  //         limitChoicesToValue: limitChoicesToValue,
  //         matchSuggestion: matchSuggestion,
  //         optionText: optionText,
  //         optionValue: optionValue,
  //         selectedItem: selectedItems,
  //         suggestionLimit: suggestionLimit,
  //         translateChoice: translateChoice,
  //     }), getChoiceText = _m.getChoiceText, getChoiceValue = _m.getChoiceValue, getSuggestions = _m.getSuggestions;
  //     var handleFilterChange = react_1.useCallback(function (eventOrValue) {
  //         var event = eventOrValue;
  //         var value = event.target
  //             ? event.target.value
  //             : eventOrValue;
  //         setFilterValue(value);
  //         if (setFilter) {
  //             setFilter(value);
  //         }
  //     }, [setFilter, setFilterValue]);
  //     // We must reset the filter every time the value changes to ensure we
  //     // display at least some choices even if the input has a value.
  //     // Otherwise, it would only display the currently selected one and the user
  //     // would have to first clear the input before seeing any other choices
  //     react_1.useEffect(function () {
  //         handleFilterChange('');
  //     }, [input.value, handleFilterChange]);
  //     var handleKeyDown = react_1.useCallback(function (event) {
  //         // Remove latest item from array when user hits backspace with no text
  //         if (selectedItems.length &&
  //             !filterValue.length &&
  //             event.key === 'Backspace') {
  //             var newSelectedItems = selectedItems.slice(0, selectedItems.length - 1);
  //             input.onChange(newSelectedItems.map(getChoiceValue));
  //         }
  //     }, [filterValue.length, getChoiceValue, input, selectedItems]);
  //     var handleChange = react_1.useCallback(function (item) {
  //         var newSelectedItems = selectedItems.includes(item)
  //             ? selectedItems.slice() : selectedItems.concat([item]);
  //         setFilterValue('');
  //         input.onChange(newSelectedItems.map(getChoiceValue));
  //     }, [getChoiceValue, input, selectedItems, setFilterValue]);
  //     var handleDelete = react_1.useCallback(function (item) { return function () {
  //         var newSelectedItems = selectedItems.slice();
  //         newSelectedItems.splice(newSelectedItems.indexOf(item), 1);
  //         input.onChange(newSelectedItems.map(getChoiceValue));
  //     }; }, [input, selectedItems, getChoiceValue]);
  //     // This function ensures that the suggestion list stay aligned to the
  //     // input element even if it moves (because user scrolled for example)
  //     var updateAnchorEl = function () {
  //         if (!inputEl.current) {
  //             return;
  //         }
  //         var inputPosition = inputEl.current.getBoundingClientRect();
  //         // It works by implementing a mock element providing the only method used
  //         // by the PopOver component, getBoundingClientRect, which will return a
  //         // position based on the input position
  //         if (!anchorEl.current) {
  //             anchorEl.current = { getBoundingClientRect: function () { return inputPosition; } };
  //         }
  //         else {
  //             var anchorPosition = anchorEl.current.getBoundingClientRect();
  //             if (anchorPosition.x !== inputPosition.x ||
  //                 anchorPosition.y !== inputPosition.y) {
  //                 anchorEl.current = {
  //                     getBoundingClientRect: function () { return inputPosition; },
  //                 };
  //             }
  //         }
  //     };
  //     var storeInputRef = function (input) {
  //         inputEl.current = input;
  //         updateAnchorEl();
  //     };
  //     var handleBlur = react_1.useCallback(function (event) {
  //         setFilterValue('');
  //         handleFilterChange('');
  //         input.onBlur(event);
  //     }, [handleFilterChange, input, setFilterValue]);
  //     var handleFocus = react_1.useCallback(function (openMenu) { return function (event) {
  //         openMenu(event);
  //         input.onFocus(event);
  //     }; }, [input]);
  //     var handleClick = react_1.useCallback(function (openMenu) { return function (event) {
  //         if (event.target === inputEl.current) {
  //             openMenu(event);
  //         }
  //     }; }, []);
  //     var shouldRenderSuggestions = function (val) {
  //         if (shouldRenderSuggestionsOverride !== undefined &&
  //             typeof shouldRenderSuggestionsOverride === 'function') {
  //             return shouldRenderSuggestionsOverride(val);
  //         }
  //         return true;
  //     };
  //     return (react_1.default.createElement(downshift_1.default, __assign({ inputValue: filterValue, onChange: handleChange, selectedItem: selectedItems, itemToString: function (item) { return getChoiceValue(item); } }, rest), function (_a) {
  //         var _b, _c;
  //         var getInputProps = _a.getInputProps, getItemProps = _a.getItemProps, getLabelProps = _a.getLabelProps, getMenuProps = _a.getMenuProps, isOpen = _a.isOpen, suggestionFilter = _a.inputValue, highlightedIndex = _a.highlightedIndex, openMenu = _a.openMenu;
  //         var isMenuOpen = isOpen && shouldRenderSuggestions(suggestionFilter);
  //         var _d = getInputProps({
  //             onBlur: handleBlur,
  //             onFocus: handleFocus(openMenu),
  //             onClick: handleClick(openMenu),
  //             onKeyDown: handleKeyDown,
  //         }), idFromDownshift = _d.id, onBlur = _d.onBlur, onChange = _d.onChange, onFocus = _d.onFocus, ref = _d.ref, inputProps = __rest(_d, ["id", "onBlur", "onChange", "onFocus", "ref"]);
  //         return (react_1.default.createElement("div", { className: classes.container },
  //             react_1.default.createElement(core_1.TextField, __assign({ id: id, fullWidth: true, InputProps: {
  //                     inputRef: storeInputRef,
  //                     classes: {
  //                         root: classnames_1.default(classes.inputRoot, (_b = {},
  //                             _b[classes.inputRootFilled] = variant === 'filled',
  //                             _b)),
  //                         input: classes.inputInput,
  //                     },
  //                     startAdornment: (react_1.default.createElement("div", { className: classnames_1.default((_c = {},
  //                             _c[classes.chipContainerFilled] = variant === 'filled',
  //                             _c)) }, selectedItems.map(function (item, index) { return (react_1.default.createElement(core_1.Chip, { key: index, tabIndex: -1, label: getChoiceText(item), className: classes.chip, onDelete: handleDelete(item) })); }))),
  //                     onBlur: onBlur,
  //                     onChange: function (event) {
  //                         handleFilterChange(event);
  //                         onChange(event);
  //                     },
  //                     onFocus: onFocus,
  //                 }, error: !!(touched && error), label: react_1.default.createElement(ra_core_1.FieldTitle, __assign({ label: label }, labelProps, { source: source, resource: resource, isRequired: isRequired })), InputLabelProps: getLabelProps({
  //                     htmlFor: id,
  //                 }), helperText: (touched && error) || helperText ? (react_1.default.createElement(InputHelperText_1.default, { touched: touched, error: error, helperText: helperText })) : null, variant: variant, margin: margin }, inputProps, options)),
  //             react_1.default.createElement(AutocompleteSuggestionList_1.default, { isOpen: isMenuOpen, menuProps: getMenuProps({},
  //                 // https://github.com/downshift-js/downshift/issues/235
  //                 { suppressRefError: true }), inputEl: inputEl.current, suggestionsContainerProps: suggestionsContainerProps }, getSuggestions(suggestionFilter).map(function (suggestion, index) { return (react_1.default.createElement(AutocompleteSuggestionItem_1.default, __assign({ key: getChoiceValue(suggestion), suggestion: suggestion, index: index, highlightedIndex: highlightedIndex, isSelected: selectedItems
  //                     .map(getChoiceValue)
  //                     .includes(getChoiceValue(suggestion)), filterValue: filterValue, getSuggestionText: getChoiceText }, getItemProps({
  //                 item: suggestion,
  //             })))); }))));
  //     }));
  // }
  export const AutocompleteInput: React.ComponentType<any>;
  // function (_a) {
  //     var allowEmpty = _a.allowEmpty, classesOverride = _a.classes, _b = _a.choices, choices = _b === void 0 ? [] : _b, emptyText = _a.emptyText, emptyValue = _a.emptyValue, format = _a.format, helperText = _a.helperText, idOverride = _a.id, inputOverride = _a.input, isRequiredOverride = _a.isRequired, label = _a.label, limitChoicesToValue = _a.limitChoicesToValue, _c = _a.margin, margin = _c === void 0 ? 'dense' : _c, matchSuggestion = _a.matchSuggestion, metaOverride = _a.meta, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, _d = _a.options, _e = _d === void 0 ? {} : _d, suggestionsContainerProps = _e.suggestionsContainerProps, labelProps = _e.labelProps, InputProps = _e.InputProps, options = __rest(_e, ["suggestionsContainerProps", "labelProps", "InputProps"]), _f = _a.optionText, optionText = _f === void 0 ? 'name' : _f, _g = _a.optionValue, optionValue = _g === void 0 ? 'id' : _g, parse = _a.parse, resource = _a.resource, setFilter = _a.setFilter, shouldRenderSuggestionsOverride = _a.shouldRenderSuggestions, source = _a.source, suggestionLimit = _a.suggestionLimit, _h = _a.translateChoice, translateChoice = _h === void 0 ? true : _h, validate = _a.validate, _j = _a.variant, variant = _j === void 0 ? 'filled' : _j, rest = __rest(_a, ["allowEmpty", "classes", "choices", "emptyText", "emptyValue", "format", "helperText", "id", "input", "isRequired", "label", "limitChoicesToValue", "margin", "matchSuggestion", "meta", "onBlur", "onChange", "onFocus", "options", "optionText", "optionValue", "parse", "resource", "setFilter", "shouldRenderSuggestions", "source", "suggestionLimit", "translateChoice", "validate", "variant"]);
  //     ra_core_1.warning(react_1.isValidElement(optionText) && !matchSuggestion, "If the optionText prop is a React element, you must also specify the matchSuggestion prop:\n<AutocompleteInput\n    matchSuggestion={(filterValue, suggestion) => true}\n/>\n        ");
  //     var classes = useStyles({ classes: classesOverride });
  //     var inputEl = react_1.useRef();
  //     var anchorEl = react_1.useRef();
  //     var _k = ra_core_1.useInput(__assign({ format: format, id: idOverride, input: inputOverride, isRequired: isRequiredOverride, meta: metaOverride, onBlur: onBlur,
  //         onChange: onChange,
  //         onFocus: onFocus,
  //         parse: parse,
  //         resource: resource,
  //         source: source,
  //         validate: validate }, rest)), id = _k.id, input = _k.input, isRequired = _k.isRequired, _l = _k.meta, touched = _l.touched, error = _l.error;
  //     var _m = react_1.useState(''), filterValue = _m[0], setFilterValue = _m[1];
  //     var getSuggestionFromValue = react_1.useCallback(function (value) { return choices.find(function (choice) { return get_1.default(choice, optionValue) === value; }); }, [choices, optionValue]);
  //     var selectedItem = react_1.useMemo(function () { return getSuggestionFromValue(input.value) || null; }, [input.value, getSuggestionFromValue]);
  //     var _o = ra_core_1.useSuggestions({
  //         allowEmpty: allowEmpty,
  //         choices: choices,
  //         emptyText: emptyText,
  //         emptyValue: emptyValue,
  //         limitChoicesToValue: limitChoicesToValue,
  //         matchSuggestion: matchSuggestion,
  //         optionText: optionText,
  //         optionValue: optionValue,
  //         selectedItem: selectedItem,
  //         suggestionLimit: suggestionLimit,
  //         translateChoice: translateChoice,
  //     }), getChoiceText = _o.getChoiceText, getChoiceValue = _o.getChoiceValue, getSuggestions = _o.getSuggestions;
  //     var handleFilterChange = react_1.useCallback(function (eventOrValue) {
  //         var event = eventOrValue;
  //         var value = event.target
  //             ? event.target.value
  //             : eventOrValue;
  //         if (setFilter) {
  //             setFilter(value);
  //         }
  //     }, [setFilter]);
  //     // We must reset the filter every time the value changes to ensure we
  //     // display at least some choices even if the input has a value.
  //     // Otherwise, it would only display the currently selected one and the user
  //     // would have to first clear the input before seeing any other choices
  //     react_1.useEffect(function () {
  //         handleFilterChange('');
  //         // If we have a value, set the filter to its text so that
  //         // Downshift displays it correctly
  //         setFilterValue(input.value ? getChoiceText(selectedItem) : '');
  //     }, [input.value, handleFilterChange, selectedItem, getChoiceText]);
  //     var handleChange = react_1.useCallback(function (item) {
  //         input.onChange(getChoiceValue(item));
  //     }, [getChoiceValue, input]);
  //     // This function ensures that the suggestion list stay aligned to the
  //     // input element even if it moves (because user scrolled for example)
  //     var updateAnchorEl = function () {
  //         if (!inputEl.current) {
  //             return;
  //         }
  //         var inputPosition = inputEl.current.getBoundingClientRect();
  //         // It works by implementing a mock element providing the only method used
  //         // by the PopOver component, getBoundingClientRect, which will return a
  //         // position based on the input position
  //         if (!anchorEl.current) {
  //             anchorEl.current = { getBoundingClientRect: function () { return inputPosition; } };
  //         }
  //         else {
  //             var anchorPosition = anchorEl.current.getBoundingClientRect();
  //             if (anchorPosition.x !== inputPosition.x ||
  //                 anchorPosition.y !== inputPosition.y) {
  //                 anchorEl.current = {
  //                     getBoundingClientRect: function () { return inputPosition; },
  //                 };
  //             }
  //         }
  //     };
  //     var storeInputRef = function (input) {
  //         inputEl.current = input;
  //         updateAnchorEl();
  //     };
  //     var handleBlur = react_1.useCallback(function (event) {
  //         handleFilterChange('');
  //         // If we had a value before, set the filter back to its text so that
  //         // Downshift displays it correctly
  //         setFilterValue(input.value ? getChoiceText(selectedItem) : '');
  //         input.onBlur(event);
  //     }, [getChoiceText, handleFilterChange, input, selectedItem]);
  //     var handleFocus = react_1.useCallback(function (openMenu) { return function (event) {
  //         openMenu(event);
  //         input.onFocus(event);
  //     }; }, [input]);
  //     var shouldRenderSuggestions = function (val) {
  //         if (shouldRenderSuggestionsOverride !== undefined &&
  //             typeof shouldRenderSuggestionsOverride === 'function') {
  //             return shouldRenderSuggestionsOverride(val);
  //         }
  //         return true;
  //     };
  //     return (react_1.default.createElement(downshift_1.default, __assign({ inputValue: filterValue, onChange: handleChange, selectedItem: selectedItem, itemToString: function (item) { return getChoiceValue(item); } }, rest), function (_a) {
  //         var _b;
  //         var getInputProps = _a.getInputProps, getItemProps = _a.getItemProps, getLabelProps = _a.getLabelProps, getMenuProps = _a.getMenuProps, isOpen = _a.isOpen, inputValue = _a.inputValue, highlightedIndex = _a.highlightedIndex, openMenu = _a.openMenu;
  //         var isMenuOpen = isOpen && shouldRenderSuggestions(filterValue);
  //         var _c = getInputProps({
  //             onBlur: handleBlur,
  //             onFocus: handleFocus(openMenu),
  //         }), downshiftId = _c.id, // We want to ignore this to correctly link our label and the input
  //         value = _c.value, onBlur = _c.onBlur, onChange = _c.onChange, onFocus = _c.onFocus, ref = _c.ref, inputProps = __rest(_c, ["id", "value", "onBlur", "onChange", "onFocus", "ref"]);
  //         var suggestions = getSuggestions(filterValue);
  //         return (react_1.default.createElement("div", { className: classes.container },
  //             react_1.default.createElement(core_1.TextField, __assign({ id: id, name: input.name, InputProps: {
  //                     inputRef: storeInputRef,
  //                     classes: {
  //                         root: classnames_1.default(classes.inputRoot, (_b = {},
  //                             _b[classes.inputRootFilled] = variant === 'filled',
  //                             _b)),
  //                         input: classes.inputInput,
  //                     },
  //                     onBlur: onBlur,
  //                     onChange: function (event) {
  //                         handleFilterChange(event);
  //                         setFilterValue(event.target.value);
  //                         onChange(event);
  //                     },
  //                     onFocus: onFocus,
  //                 }, error: !!(touched && error), label: react_1.default.createElement(ra_core_1.FieldTitle, __assign({ label: label }, labelProps, { source: source, resource: resource, isRequired: isRequired })), InputLabelProps: getLabelProps({
  //                     htmlFor: id,
  //                 }), helperText: (touched && error) || helperText ? (react_1.default.createElement(InputHelperText_1.default, { touched: touched, error: error, helperText: helperText })) : null, variant: variant, margin: margin, value: filterValue }, inputProps, options)),
  //             react_1.default.createElement(AutocompleteSuggestionList_1.default, { isOpen: isMenuOpen, menuProps: getMenuProps({},
  //                 // https://github.com/downshift-js/downshift/issues/235
  //                 { suppressRefError: true }), inputEl: inputEl.current, suggestionsContainerProps: suggestionsContainerProps }, suggestions.map(function (suggestion, index) { return (react_1.default.createElement(AutocompleteSuggestionItem_1.default, __assign({ key: getChoiceValue(suggestion), suggestion: suggestion, index: index, highlightedIndex: highlightedIndex, isSelected: input.value ===
  //                     getChoiceValue(suggestion), filterValue: filterValue, getSuggestionText: getChoiceText }, getItemProps({
  //                 item: suggestion,
  //             })))); }))));
  //     }));
  // }
  export const BooleanInput: React.ComponentType<any>;
  // function (_a) {
  //     var format = _a.format, label = _a.label, fullWidth = _a.fullWidth, helperText = _a.helperText, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, options = _a.options, parse = _a.parse, resource = _a.resource, source = _a.source, validate = _a.validate, rest = __rest(_a, ["format", "label", "fullWidth", "helperText", "onBlur", "onChange", "onFocus", "options", "parse", "resource", "source", "validate"]);
  //     var _b = ra_core_1.useInput(__assign({ format: format,
  //         onBlur: onBlur,
  //         onChange: onChange,
  //         onFocus: onFocus,
  //         parse: parse,
  //         resource: resource,
  //         source: source, type: 'checkbox', validate: validate }, rest)), id = _b.id, _c = _b.input, finalFormOnChange = _c.onChange, type = _c.type, value = _c.value, inputProps = __rest(_c, ["onChange", "type", "value"]), isRequired = _b.isRequired, _d = _b.meta, error = _d.error, touched = _d.touched;
  //     var handleChange = react_1.useCallback(function (event, value) {
  //         finalFormOnChange(value);
  //     }, [finalFormOnChange]);
  //     return (react_1.default.createElement(FormGroup_1.default, __assign({}, sanitizeRestProps_1.default(rest)),
  //         react_1.default.createElement(FormControlLabel_1.default, { control: react_1.default.createElement(Switch_1.default, __assign({ id: id, color: "primary", checked: !!value, onChange: handleChange }, inputProps, options)), label: react_1.default.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }) }),
  //         (touched && error) || helperText ? (react_1.default.createElement(FormHelperText_1.default, { error: !!error },
  //             react_1.default.createElement(InputHelperText_1.default, { touched: touched, error: error, helperText: helperText }))) : null));
  // }
  export const CheckboxGroupInput: React.ComponentType<any>;
  // function (_a) {
  //     var _b = _a.choices, choices = _b === void 0 ? [] : _b, format = _a.format, helperText = _a.helperText, label = _a.label, _c = _a.margin, margin = _c === void 0 ? 'dense' : _c, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, optionText = _a.optionText, optionValue = _a.optionValue, options = _a.options, parse = _a.parse, resource = _a.resource, row = _a.row, source = _a.source, translate = _a.translate, translateChoice = _a.translateChoice, validate = _a.validate, rest = __rest(_a, ["choices", "format", "helperText", "label", "margin", "onBlur", "onChange", "onFocus", "optionText", "optionValue", "options", "parse", "resource", "row", "source", "translate", "translateChoice", "validate"]);
  //     var classes = useStyles({});
  //     var _d = ra_core_1.useInput(__assign({ format: format,
  //         onBlur: onBlur,
  //         onChange: onChange,
  //         onFocus: onFocus,
  //         parse: parse,
  //         resource: resource,
  //         source: source,
  //         validate: validate }, rest)), id = _d.id, _e = _d.input, finalFormOnChange = _e.onChange, finalFormOnBlur = _e.onBlur, value = _e.value, isRequired = _d.isRequired, _f = _d.meta, error = _f.error, touched = _f.touched;
  //     var handleCheck = react_1.useCallback(function (event, isChecked) {
  //         var newValue;
  //         try {
  //             // try to convert string value to number, e.g. '123'
  //             newValue = JSON.parse(event.target.value);
  //         }
  //         catch (e) {
  //             // impossible to convert value, e.g. 'abc'
  //             newValue = event.target.value;
  //         }
  //         if (isChecked) {
  //             finalFormOnChange((value || []).concat([newValue]));
  //         }
  //         else {
  //             finalFormOnChange(value.filter(function (v) { return v != newValue; })); // eslint-disable-line eqeqeq
  //         }
  //         finalFormOnBlur(); // HACK: See https://github.com/final-form/react-final-form/issues/365#issuecomment-515045503
  //     }, [finalFormOnChange, finalFormOnBlur, value]);
  //     return (react_1.default.createElement(FormControl_1.default, __assign({ component: "fieldset", margin: margin, error: touched && !!error }, sanitizeRestProps(rest)),
  //         react_1.default.createElement(FormLabel_1.default, { component: "legend", className: classes.label },
  //             react_1.default.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired })),
  //         react_1.default.createElement(FormGroup_1.default, { row: row }, choices.map(function (choice) { return (react_1.default.createElement(CheckboxGroupInputItem_1.default, { key: get_1.default(choice, optionValue), choice: choice, id: id, onChange: handleCheck, options: options, optionText: optionText, optionValue: optionValue, translateChoice: translateChoice, value: value })); })),
  //         (touched && error) || helperText ? (react_1.default.createElement(FormHelperText_1.default, null,
  //             react_1.default.createElement(InputHelperText_1.default, { touched: touched, error: error, helperText: helperText }))) : null));
  // }
  export const DateInput: React.ComponentType<any>;
  // function (_a) {
  //     var _b = _a.format, format = _b === void 0 ? getStringFromDate : _b, label = _a.label, options = _a.options, source = _a.source, resource = _a.resource, helperText = _a.helperText, _c = _a.margin, margin = _c === void 0 ? 'dense' : _c, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, parse = _a.parse, validate = _a.validate, _d = _a.variant, variant = _d === void 0 ? 'filled' : _d, rest = __rest(_a, ["format", "label", "options", "source", "resource", "helperText", "margin", "onBlur", "onChange", "onFocus", "parse", "validate", "variant"]);
  //     var _e = ra_core_1.useInput(__assign({ format: format,
  //         onBlur: onBlur,
  //         onChange: onChange,
  //         onFocus: onFocus,
  //         parse: parse,
  //         resource: resource,
  //         source: source,
  //         validate: validate }, rest)), id = _e.id, input = _e.input, isRequired = _e.isRequired, _f = _e.meta, error = _f.error, touched = _f.touched;
  //     return (react_1.default.createElement(TextField_1.default, __assign({ id: id }, input, { variant: variant, margin: margin, type: "date", error: !!(touched && error), helperText: (touched && error) || helperText ? (react_1.default.createElement(InputHelperText_1.default, { touched: touched, error: error, helperText: helperText })) : null, label: react_1.default.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }), InputLabelProps: {
  //             shrink: true,
  //         } }, options, sanitizeRestProps_1.default(rest))));
  // }
  export const DateTimeInput: React.ComponentType<any>;
  // function (_a) {
  //     var label = _a.label, helperText = _a.helperText, _b = _a.margin, margin = _b === void 0 ? 'dense' : _b, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, options = _a.options, source = _a.source, resource = _a.resource, validate = _a.validate, _c = _a.variant, variant = _c === void 0 ? 'filled' : _c, rest = __rest(_a, ["label", "helperText", "margin", "onBlur", "onChange", "onFocus", "options", "source", "resource", "validate", "variant"]);
  //     var _d = ra_core_1.useInput(__assign({ format: format,
  //         onBlur: onBlur,
  //         onChange: onChange,
  //         onFocus: onFocus,
  //         parse: parse,
  //         resource: resource,
  //         source: source, type: 'datetime-local', validate: validate }, rest)), id = _d.id, input = _d.input, isRequired = _d.isRequired, _e = _d.meta, error = _e.error, touched = _e.touched;
  //     return (react_1.default.createElement(TextField_1.default, __assign({ id: id }, input, { variant: variant, margin: margin, error: !!(touched && error), helperText: (touched && error) || helperText ? (react_1.default.createElement(InputHelperText_1.default, { touched: touched, error: error, helperText: helperText })) : null, label: react_1.default.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }), InputLabelProps: {
  //             shrink: true,
  //         } }, options, sanitizeRestProps_1.default(rest))));
  // }
  export const FileInput: React.ComponentType<any>;
  // function (_a) {
  //     var accept = _a.accept, children = _a.children, className = _a.className, classesOverride = _a.classes, format = _a.format, helperText = _a.helperText, label = _a.label, _b = _a.labelMultiple, labelMultiple = _b === void 0 ? 'ra.input.file.upload_several' : _b, _c = _a.labelSingle, labelSingle = _c === void 0 ? 'ra.input.file.upload_single' : _c, maxSize = _a.maxSize, minSize = _a.minSize, _d = _a.multiple, multiple = _d === void 0 ? false : _d, _e = _a.options, _f = _e === void 0 ? {} : _e, inputPropsOptions = _f.inputProps, options = __rest(_f, ["inputProps"]), parse = _a.parse, placeholder = _a.placeholder, resource = _a.resource, source = _a.source, validate = _a.validate, rest = __rest(_a, ["accept", "children", "className", "classes", "format", "helperText", "label", "labelMultiple", "labelSingle", "maxSize", "minSize", "multiple", "options", "parse", "placeholder", "resource", "source", "validate"]);
  //     var translate = ra_core_1.useTranslate();
  //     var classes = useStyles({ classes: classesOverride });
  //     // turn a browser dropped file structure into expected structure
  //     var transformFile = function (file) {
  //         var _a;
  //         if (!(file instanceof File)) {
  //             return file;
  //         }
  //         var _b = react_1.Children.only(children).props, source = _b.source, title = _b.title;
  //         var preview = URL.createObjectURL(file);
  //         var transformedFile = (_a = {
  //                 rawFile: file
  //             },
  //             _a[source] = preview,
  //             _a);
  //         if (title) {
  //             transformedFile[title] = file.name;
  //         }
  //         return transformedFile;
  //     };
  //     var transformFiles = function (files) {
  //         if (!files) {
  //             return multiple ? [] : null;
  //         }
  //         if (Array.isArray(files)) {
  //             return files.map(transformFile);
  //         }
  //         return transformFile(files);
  //     };
  //     var _g = ra_core_1.useInput(__assign({ format: format || transformFiles, parse: parse || transformFiles, source: source, type: 'file', validate: validate }, rest)), id = _g.id, _h = _g.input, onChange = _h.onChange, value = _h.value, inputProps = __rest(_h, ["onChange", "value"]), meta = _g.meta, isRequired = _g.isRequired;
  //     var touched = meta.touched, error = meta.error;
  //     var files = value ? (Array.isArray(value) ? value : [value]) : [];
  //     var onDrop = function (newFiles) {
  //         var updatedFiles = multiple ? files.concat(newFiles) : newFiles.slice();
  //         if (multiple) {
  //             onChange(updatedFiles);
  //         }
  //         else {
  //             onChange(updatedFiles[0]);
  //         }
  //     };
  //     var onRemove = function (file) { return function () {
  //         if (multiple) {
  //             var filteredFiles = files.filter(function (stateFile) { return !recompose_1.shallowEqual(stateFile, file); });
  //             onChange(filteredFiles);
  //         }
  //         else {
  //             onChange(null);
  //         }
  //     }; };
  //     var childrenElement = react_1.isValidElement(react_1.Children.only(children))
  //         ? react_1.Children.only(children)
  //         : undefined;
  //     var _j = react_dropzone_1.useDropzone(__assign({}, options, { accept: accept,
  //         maxSize: maxSize,
  //         minSize: minSize,
  //         multiple: multiple,
  //         onDrop: onDrop })), getRootProps = _j.getRootProps, getInputProps = _j.getInputProps;
  //     return (react_1.default.createElement(Labeled_1.default, __assign({ id: id, label: label, className: classnames_1.default(classes.root, className), source: source, resource: resource, isRequired: isRequired, meta: meta }, sanitizeRestProps_1.default(rest)),
  //         react_1.default.createElement(react_1.default.Fragment, null,
  //             react_1.default.createElement("div", __assign({ "data-testid": "dropzone", className: classes.dropZone }, getRootProps()),
  //                 react_1.default.createElement("input", __assign({ id: id }, getInputProps(__assign({}, inputProps, inputPropsOptions)))),
  //                 placeholder ? (placeholder) : multiple ? (react_1.default.createElement("p", null, translate(labelMultiple))) : (react_1.default.createElement("p", null, translate(labelSingle)))),
  //             children && (react_1.default.createElement("div", { className: "previews" }, files.map(function (file, index) { return (react_1.default.createElement(FileInputPreview_1.default, { key: index, file: file, onRemove: onRemove(file), className: classes.removeButton }, react_1.cloneElement(childrenElement, {
  //                 record: file,
  //                 className: classes.preview,
  //             }))); }))),
  //             (touched && error) || helperText ? (react_1.default.createElement(FormHelperText_1.default, null,
  //                 react_1.default.createElement(InputHelperText_1.default, { touched: touched, error: error, helperText: helperText }))) : null)));
  // }
  export const ImageInput: React.ComponentType<any>;
  // function (props) {
  //     var classes = useStyles(props);
  //     return (react_1.default.createElement(FileInput_1.default, __assign({ labelMultiple: "ra.input.image.upload_several", labelSingle: "ra.input.image.upload_single", classes: classes }, props)));
  // }
  export const InputHelperText: React.ComponentType<any>;
  // function (_a) {
  //     var helperText = _a.helperText, touched = _a.touched, error = _a.error;
  //     var translate = ra_core_1.useTranslate();
  //     return touched && error ? (react_1.default.createElement(ra_core_1.ValidationError, { error: error })) : helperText ? (react_1.default.createElement(react_1.default.Fragment, null, translate(helperText, { _: helperText }))) : null;
  // }
  export const InputPropTypes: {};
  // label: "function () { [native code] }"
  // resource: "function () { [native code] }"
  // source: "function () { [native code] }"
  export const Labeled: React.ComponentType<any>;
  // function (_a) {
  //     var children = _a.children, className = _a.className, classesOverride = _a.classes, fullWidth = _a.fullWidth, id = _a.id, input = _a.input, isRequired = _a.isRequired, label = _a.label, _b = _a.margin, margin = _b === void 0 ? 'dense' : _b, meta = _a.meta, resource = _a.resource, source = _a.source, rest = __rest(_a, ["children", "className", "classes", "fullWidth", "id", "input", "isRequired", "label", "margin", "meta", "resource", "source"]);
  //     var classes = useStyles({ classes: classesOverride });
  //     if (!label && !source) {
  //         // @ts-ignore
  //         var name_1 = children && children.type && children.type.name;
  //         throw new Error("Cannot create label for component <" + name_1 + ">: You must set either the label or source props. You can also disable automated label insertion by setting 'addLabel: false' in the component default props");
  //     }
  //     var restProps = fullWidth ? __assign({}, rest, { fullWidth: fullWidth }) : rest;
  //     return (react_1.default.createElement(FormControl_1.default, { className: className, fullWidth: fullWidth, error: meta && meta.touched && !!meta.error, margin: margin },
  //         react_1.default.createElement(InputLabel_1.default, { htmlFor: id, shrink: true, className: classes.label },
  //             react_1.default.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired })),
  //         react_1.default.createElement("div", { className: classes.value }, children && typeof children.type !== 'string'
  //             ? react_1.default.cloneElement(children, __assign({ input: input,
  //                 resource: resource }, restProps))
  //             : children)));
  // }
  export const NullableBooleanInput: React.ComponentType<any>;
  // function (_a) {
  //     var className = _a.className, _b = _a.format, format = _b === void 0 ? getStringFromBoolean : _b, helperText = _a.helperText, label = _a.label, _c = _a.margin, margin = _c === void 0 ? 'dense' : _c, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, options = _a.options, _d = _a.parse, parse = _d === void 0 ? getBooleanFromString : _d, resource = _a.resource, source = _a.source, validate = _a.validate, _e = _a.variant, variant = _e === void 0 ? 'filled' : _e, rest = __rest(_a, ["className", "format", "helperText", "label", "margin", "onBlur", "onChange", "onFocus", "options", "parse", "resource", "source", "validate", "variant"]);
  //     var classes = useStyles({});
  //     var translate = ra_core_1.useTranslate();
  //     var _f = ra_core_1.useInput({
  //         format: format,
  //         onBlur: onBlur,
  //         onChange: onChange,
  //         onFocus: onFocus,
  //         parse: parse,
  //         resource: resource,
  //         source: source,
  //         type: 'checkbox',
  //         validate: validate,
  //     }), id = _f.id, input = _f.input, isRequired = _f.isRequired, _g = _f.meta, error = _g.error, touched = _g.touched;
  //     return (react_1.default.createElement(TextField_1.default, __assign({ id: id }, input, { select: true, margin: margin, label: react_1.default.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }), error: !!(touched && error), helperText: (touched && error) || helperText ? (react_1.default.createElement(InputHelperText_1.default, { touched: touched, error: error, helperText: helperText })) : null, className: classnames_1.default(classes.input, className), variant: variant }, options, sanitizeRestProps_1.default(rest)),
  //         react_1.default.createElement(MenuItem_1.default, { value: "" }, translate('ra.boolean.null')),
  //         react_1.default.createElement(MenuItem_1.default, { value: "false" }, translate('ra.boolean.false')),
  //         react_1.default.createElement(MenuItem_1.default, { value: "true" }, translate('ra.boolean.true'))));
  // }
  export const NumberInput: React.ComponentType<any>;
  // function (_a) {
  //     var format = _a.format, helperText = _a.helperText, label = _a.label, _b = _a.margin, margin = _b === void 0 ? 'dense' : _b, onBlur = _a.onBlur, onFocus = _a.onFocus, onChange = _a.onChange, options = _a.options, _c = _a.parse, parse = _c === void 0 ? convertStringToNumber : _c, resource = _a.resource, source = _a.source, step = _a.step, validate = _a.validate, _d = _a.variant, variant = _d === void 0 ? 'filled' : _d, overrideInputProps = _a.inputProps, rest = __rest(_a, ["format", "helperText", "label", "margin", "onBlur", "onFocus", "onChange", "options", "parse", "resource", "source", "step", "validate", "variant", "inputProps"]);
  //     var _e = ra_core_1.useInput(__assign({ format: format,
  //         onBlur: onBlur,
  //         onChange: onChange,
  //         onFocus: onFocus,
  //         parse: parse,
  //         resource: resource,
  //         source: source, type: 'number', validate: validate }, rest)), id = _e.id, input = _e.input, isRequired = _e.isRequired, _f = _e.meta, error = _f.error, touched = _f.touched;
  //     var inputProps = __assign({}, overrideInputProps, { step: step });
  //     return (react_1.default.createElement(TextField_1.default, __assign({ id: id }, input, { variant: variant, error: !!(touched && error), helperText: (touched && error) || helperText ? (react_1.default.createElement(InputHelperText_1.default, { touched: touched, error: error, helperText: helperText })) : null, label: react_1.default.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }), margin: margin, inputProps: inputProps }, options, sanitizeRestProps_1.default(rest))));
  // }
  export const RadioButtonGroupInput: React.ComponentType<any>;
  // function (_a) {
  //     var _b = _a.choices, choices = _b === void 0 ? [] : _b, classesOverride = _a.classes, format = _a.format, helperText = _a.helperText, label = _a.label, _c = _a.margin, margin = _c === void 0 ? 'dense' : _c, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, options = _a.options, optionText = _a.optionText, optionValue = _a.optionValue, parse = _a.parse, resource = _a.resource, row = _a.row, source = _a.source, translateChoice = _a.translateChoice, validate = _a.validate, rest = __rest(_a, ["choices", "classes", "format", "helperText", "label", "margin", "onBlur", "onChange", "onFocus", "options", "optionText", "optionValue", "parse", "resource", "row", "source", "translateChoice", "validate"]);
  //     var classes = useStyles(classesOverride);
  //     var _d = ra_core_1.useInput(__assign({ format: format,
  //         onBlur: onBlur,
  //         onChange: onChange,
  //         onFocus: onFocus,
  //         parse: parse,
  //         resource: resource,
  //         source: source,
  //         validate: validate }, rest)), id = _d.id, isRequired = _d.isRequired, _e = _d.meta, error = _e.error, touched = _e.touched;
  //     return (react_1.default.createElement(core_1.FormControl, __assign({ component: "fieldset", margin: margin, error: touched && !!error }, sanitizeRestProps_1.default(rest)),
  //         react_1.default.createElement(core_1.FormLabel, { component: "legend", className: classes.label },
  //             react_1.default.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired })),
  //         react_1.default.createElement(core_1.RadioGroup, __assign({ id: id, row: row }, options), choices.map(function (choice) { return (react_1.default.createElement(RadioButtonGroupInputItem_1.default, { key: get_1.default(choice, optionValue), choice: choice, optionText: optionText, optionValue: optionValue, source: source, translateChoice: translateChoice })); })),
  //         (touched && error) || helperText ? (react_1.default.createElement(core_1.FormHelperText, null,
  //             react_1.default.createElement(InputHelperText_1.default, { touched: touched, error: error, helperText: helperText }))) : null));
  // }
  export const ReferenceArrayInput: React.ComponentType<any>;
  // function (_a) {
  //     var children = _a.children, idOverride = _a.id, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, validate = _a.validate, props = __rest(_a, ["children", "id", "onBlur", "onChange", "onFocus", "validate"]);
  //     if (react_1.default.Children.count(children) !== 1) {
  //         throw new Error('<ReferenceArrayInput> only accepts a single child (like <Datagrid>)');
  //     }
  //     var _b = ra_core_1.useInput({
  //         id: idOverride,
  //         onBlur: onBlur,
  //         onChange: onChange,
  //         onFocus: onFocus,
  //         source: props.source,
  //         validate: validate,
  //     }), id = _b.id, input = _b.input, isRequired = _b.isRequired, meta = _b.meta;
  //     var controllerProps = ra_core_1.useReferenceArrayInputController(__assign({}, props, { input: input }));
  //     var translate = ra_core_1.useTranslate();
  //     return (react_1.default.createElement(exports.ReferenceArrayInputView, __assign({ id: id, input: input, isRequired: isRequired, meta: meta, translate: translate, children: children }, props, controllerProps)));
  // }
  export const ReferenceInput: React.ComponentType<any>;
  // function (_a) {
  //     var format = _a.format, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, parse = _a.parse, validate = _a.validate, props = __rest(_a, ["format", "onBlur", "onChange", "onFocus", "parse", "validate"]);
  //     var inputProps = ra_core_1.useInput(__assign({ format: format,
  //         onBlur: onBlur,
  //         onChange: onChange,
  //         onFocus: onFocus,
  //         parse: parse,
  //         validate: validate }, props));
  //     return (react_1.default.createElement(exports.ReferenceInputView, __assign({}, inputProps, props, ra_core_1.useReferenceInputController(__assign({}, props, inputProps)))));
  // }
  export const ResettableTextField: React.ComponentType<any>;
  // function ResettableTextField(_a) {
  //     var _b, _c;
  //     var classesOverride = _a.classes, clearAlwaysVisible = _a.clearAlwaysVisible, InputProps = _a.InputProps, value = _a.value, resettable = _a.resettable, disabled = _a.disabled, _d = _a.variant, variant = _d === void 0 ? 'filled' : _d, _e = _a.margin, margin = _e === void 0 ? 'dense' : _e, props = __rest(_a, ["classes", "clearAlwaysVisible", "InputProps", "value", "resettable", "disabled", "variant", "margin"]);
  //     var _f = react_1.useState(false), showClear = _f[0], setShowClear = _f[1];
  //     var classes = useStyles({ classes: classesOverride });
  //     var translate = ra_core_1.useTranslate();
  //     var onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur;
  //     var handleClickClearButton = react_1.useCallback(function (event) {
  //         event.preventDefault();
  //         onChange('');
  //     }, [onChange]);
  //     var handleFocus = react_1.useCallback(function (event) {
  //         setShowClear(true);
  //         onFocus && onFocus(event);
  //     }, [onFocus]);
  //     var handleBlur = react_1.useCallback(function (event) {
  //         setShowClear(false);
  //         onBlur && onBlur(event);
  //     }, [onBlur]);
  //     var clearButton = classes.clearButton, clearIcon = classes.clearIcon, inputAdornedEnd = classes.inputAdornedEnd, selectAdornment = classes.selectAdornment, visibleClearButton = classes.visibleClearButton, visibleClearIcon = classes.visibleClearIcon, restClasses = __rest(classes, ["clearButton", "clearIcon", "inputAdornedEnd", "selectAdornment", "visibleClearButton", "visibleClearIcon"]);
  //     return (react_1.default.createElement(TextField_1.default, __assign({ classes: restClasses, value: value, InputProps: __assign({ classes: props.select && variant === 'filled'
  //                 ? { adornedEnd: inputAdornedEnd }
  //                 : {}, endAdornment: resettable && value && (react_1.default.createElement(InputAdornment_1.default, { position: "end", classes: {
  //                     root: props.select ? selectAdornment : null,
  //                 } },
  //                 react_1.default.createElement(IconButton_1.default, { className: classnames_1.default(clearButton, (_b = {},
  //                         _b[visibleClearButton] = clearAlwaysVisible || showClear,
  //                         _b)), "aria-label": translate('ra.action.clear_input_value'), title: translate('ra.action.clear_input_value'), disableRipple: true, onClick: handleClickClearButton, onMouseDown: handleMouseDownClearButton, disabled: disabled },
  //                     react_1.default.createElement(Clear_1.default, { className: classnames_1.default(clearIcon, (_c = {},
  //                             _c[visibleClearIcon] = clearAlwaysVisible || showClear,
  //                             _c)) })))) }, InputProps), disabled: disabled, variant: variant, margin: margin }, props, { onFocus: handleFocus, onBlur: handleBlur })));
  // }
  export const SearchInput: React.ComponentType<any>;
  // function (_a) {
  //     var classesOverride = _a.classes, props = __rest(_a, ["classes"]);
  //     var translate = ra_core_1.useTranslate();
  //     var classes = useStyles({ classes: classesOverride });
  //     return (react_1.default.createElement(TextInput_1.default, __assign({ hiddenLabel: true, label: "", placeholder: translate('ra.action.search'), InputProps: {
  //             endAdornment: (react_1.default.createElement(core_1.InputAdornment, { position: "end" },
  //                 react_1.default.createElement(Search_1.default, { color: "disabled" }))),
  //         }, className: classes.input }, props)));
  // }
  export const SelectArrayInput: React.ComponentType<any>;
  // function (_a) {
  //     var _b = _a.choices, choices = _b === void 0 ? [] : _b, classesOverride = _a.classes, className = _a.className, format = _a.format, helperText = _a.helperText, label = _a.label, _c = _a.margin, margin = _c === void 0 ? 'dense' : _c, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, options = _a.options, optionText = _a.optionText, optionValue = _a.optionValue, parse = _a.parse, resource = _a.resource, source = _a.source, translateChoice = _a.translateChoice, validate = _a.validate, _d = _a.variant, variant = _d === void 0 ? 'filled' : _d, rest = __rest(_a, ["choices", "classes", "className", "format", "helperText", "label", "margin", "onBlur", "onChange", "onFocus", "options", "optionText", "optionValue", "parse", "resource", "source", "translateChoice", "validate", "variant"]);
  //     var classes = useStyles({ classes: classesOverride });
  //     var _e = ra_core_1.useChoices({
  //         optionText: optionText,
  //         optionValue: optionValue,
  //         translateChoice: translateChoice,
  //     }), getChoiceText = _e.getChoiceText, getChoiceValue = _e.getChoiceValue;
  //     var _f = ra_core_1.useInput(__assign({ format: format,
  //         onBlur: onBlur,
  //         onChange: onChange,
  //         onFocus: onFocus,
  //         parse: parse,
  //         resource: resource,
  //         source: source,
  //         validate: validate }, rest)), id = _f.id, input = _f.input, isRequired = _f.isRequired, _g = _f.meta, error = _g.error, touched = _g.touched;
  //     var renderMenuItemOption = react_1.useCallback(function (choice) { return getChoiceText(choice); }, [
  //         getChoiceText,
  //     ]);
  //     var renderMenuItem = react_1.useCallback(function (choice) {
  //         return choice ? (react_1.default.createElement(core_1.MenuItem, { key: getChoiceValue(choice), value: getChoiceValue(choice) }, renderMenuItemOption(choice))) : null;
  //     }, [getChoiceValue, renderMenuItemOption]);
  //     return (react_1.default.createElement(core_1.FormControl, __assign({ margin: margin, className: classnames_1.default(classes.root, className), error: touched && !!error, variant: variant }, sanitizeRestProps(rest)),
  //         react_1.default.createElement(core_1.InputLabel, { htmlFor: id, shrink: true, variant: variant },
  //             react_1.default.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired })),
  //         react_1.default.createElement(core_1.Select, __assign({ autoWidth: true, multiple: true, input: variant === 'standard' ? (react_1.default.createElement(core_1.Input, { id: id })) : (react_1.default.createElement(core_1.FilledInput, { id: id })), error: !!(touched && error), renderValue: function (selected) { return (react_1.default.createElement("div", { className: classes.chips }, selected
  //                 .map(function (item) {
  //                 return choices.find(function (choice) { return getChoiceValue(choice) === item; });
  //             })
  //                 .map(function (item) { return (react_1.default.createElement(core_1.Chip, { key: getChoiceValue(item), label: renderMenuItemOption(item), className: classes.chip })); }))); }, "data-testid": "selectArray", variant: variant }, input, { value: input.value || [] }, options), choices.map(renderMenuItem)),
  //         (touched && error) || helperText ? (react_1.default.createElement(core_1.FormHelperText, null,
  //             react_1.default.createElement(InputHelperText_1.default, { touched: touched, error: error, helperText: helperText }))) : null));
  // }
  export const SelectInput: React.ComponentType<any>;
  // function (_a) {
  //     var allowEmpty = _a.allowEmpty, _b = _a.choices, choices = _b === void 0 ? [] : _b, className = _a.className, disableValue = _a.disableValue, emptyText = _a.emptyText, emptyValue = _a.emptyValue, format = _a.format, helperText = _a.helperText, label = _a.label, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, options = _a.options, optionText = _a.optionText, optionValue = _a.optionValue, parse = _a.parse, resource = _a.resource, source = _a.source, translateChoice = _a.translateChoice, validate = _a.validate, rest = __rest(_a, ["allowEmpty", "choices", "className", "disableValue", "emptyText", "emptyValue", "format", "helperText", "label", "onBlur", "onChange", "onFocus", "options", "optionText", "optionValue", "parse", "resource", "source", "translateChoice", "validate"]);
  //     var translate = ra_core_1.useTranslate();
  //     var classes = useStyles({});
  //     var _c = ra_core_1.useChoices({
  //         optionText: optionText,
  //         optionValue: optionValue,
  //         translateChoice: translateChoice,
  //     }), getChoiceText = _c.getChoiceText, getChoiceValue = _c.getChoiceValue;
  //     var _d = ra_core_1.useInput(__assign({ format: format,
  //         onBlur: onBlur,
  //         onChange: onChange,
  //         onFocus: onFocus,
  //         parse: parse,
  //         resource: resource,
  //         source: source,
  //         validate: validate }, rest)), id = _d.id, input = _d.input, isRequired = _d.isRequired, _e = _d.meta, error = _e.error, touched = _e.touched;
  //     var renderEmptyItemOption = react_1.useCallback(function () {
  //         return react_1.default.isValidElement(emptyText)
  //             ? react_1.default.cloneElement(emptyText)
  //             : translate(emptyText, { _: emptyText });
  //     }, [emptyText, translate]);
  //     var renderMenuItemOption = react_1.useCallback(function (choice) { return getChoiceText(choice); }, [
  //         getChoiceText,
  //     ]);
  //     return (react_1.default.createElement(ResettableTextField_1.default, __assign({ id: id }, input, { select: true, label: react_1.default.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }), className: classes.input + " " + className, clearAlwaysVisible: true, error: !!(touched && error), helperText: (touched && error) || helperText ? (react_1.default.createElement(InputHelperText_1.default, { touched: touched, error: error, helperText: helperText })) : null }, options, sanitizeRestProps(rest)),
  //         allowEmpty ? (react_1.default.createElement(MenuItem_1.default, { value: emptyValue, key: "null", "aria-label": translate('ra.action.clear_input_value'), title: translate('ra.action.clear_input_value') }, renderEmptyItemOption())) : null,
  //         choices.map(function (choice) { return (react_1.default.createElement(MenuItem_1.default, { key: getChoiceValue(choice), value: getChoiceValue(choice), disabled: get_1.default(choice, disableValue) }, renderMenuItemOption(choice))); })));
  // }
  export const TextInput: React.ComponentType<any>;
  // function (_a) {
  //     var label = _a.label, format = _a.format, helperText = _a.helperText, onBlur = _a.onBlur, onFocus = _a.onFocus, onChange = _a.onChange, options = _a.options, parse = _a.parse, resource = _a.resource, source = _a.source, validate = _a.validate, rest = __rest(_a, ["label", "format", "helperText", "onBlur", "onFocus", "onChange", "options", "parse", "resource", "source", "validate"]);
  //     var _b = ra_core_1.useInput(__assign({ format: format,
  //         onBlur: onBlur,
  //         onChange: onChange,
  //         onFocus: onFocus,
  //         parse: parse,
  //         resource: resource,
  //         source: source, type: 'text', validate: validate }, rest)), id = _b.id, input = _b.input, isRequired = _b.isRequired, _c = _b.meta, error = _c.error, touched = _c.touched;
  //     return (react_1.default.createElement(ResettableTextField_1.default, __assign({ id: id }, input, { label: label !== '' &&
  //             label !== false && (react_1.default.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired })), error: !!(touched && error), helperText: (touched && error) || helperText ? (react_1.default.createElement(InputHelperText_1.default, { touched: touched, error: error, helperText: helperText })) : null }, options, sanitizeRestProps_1.default(rest))));
  // }
  export const AppBar: React.ComponentType<any>;
  // function (_a) {
  //     var children = _a.children, classesOverride = _a.classes, className = _a.className, logo = _a.logo, logout = _a.logout, open = _a.open, title = _a.title, userMenu = _a.userMenu, rest = __rest(_a, ["children", "classes", "className", "logo", "logout", "open", "title", "userMenu"]);
  //     var classes = useStyles({ classes: classesOverride });
  //     var dispatch = react_redux_1.useDispatch();
  //     var isXSmall = useMediaQuery_1.default(function (theme) { return theme.breakpoints.down('xs'); });
  //     return (react_1.default.createElement(HideOnScroll_1.default, null,
  //         react_1.default.createElement(AppBar_1.default, __assign({ className: className, color: "secondary" }, rest),
  //             react_1.default.createElement(Toolbar_1.default, { disableGutters: true, variant: isXSmall ? 'regular' : 'dense', className: classes.toolbar },
  //                 react_1.default.createElement(IconButton_1.default, { color: "inherit", "aria-label": "open drawer", onClick: function () { return dispatch(ra_core_1.toggleSidebar()); }, className: classnames_1.default(classes.menuButton) },
  //                     react_1.default.createElement(Menu_1.default, { classes: {
  //                             root: open
  //                                 ? classes.menuButtonIconOpen
  //                                 : classes.menuButtonIconClosed,
  //                         } })),
  //                 react_1.Children.count(children) === 0 ? (react_1.default.createElement(Typography_1.default, { variant: "h6", color: "inherit", className: classes.title, id: "react-admin-title" })) : (children),
  //                 react_1.default.createElement(LoadingIndicator_1.default, null),
  //                 react_1.cloneElement(userMenu, { logout: logout })))));
  // }
  export const CardActions: React.ComponentType<any>;
  // function (_a) {
  //     var className = _a.className, children = _a.children, rest = __rest(_a, ["className", "children"]);
  //     ra_core_1.warning(true, '<CardActions> is deprecated. Please use the <TopToolbar> component instead to wrap your action buttons');
  //     var classes = useStyles({}); // the empty {} is a temp fix for https://github.com/mui-org/material-ui/issues/15942
  //     return (react_1.default.createElement("div", __assign({ className: classnames_1.default(classes.cardActions, className) }, rest), children));
  // }
  export const CardContentInner: React.ComponentType<any>;
  // function (_a) {
  //     var classesOverride = _a.classes, className = _a.className, children = _a.children;
  //     var classes = useStyles({ classes: classesOverride });
  //     return (react_1.default.createElement(CardContent_1.default, { className: classnames_1.default(classes.root, className) }, children));
  // }
  export const Confirm: React.ComponentType<any>;
  // function (_a) {
  //     var _b;
  //     var isOpen = _a.isOpen, loading = _a.loading, title = _a.title, content = _a.content, confirm = _a.confirm, cancel = _a.cancel, confirmColor = _a.confirmColor, onClose = _a.onClose, onConfirm = _a.onConfirm, classesOverride = _a.classes, _c = _a.translateOptions, translateOptions = _c === void 0 ? {} : _c;
  //     var classes = useStyles({ classes: classesOverride });
  //     var translate = ra_core_1.useTranslate();
  //     var handleConfirm = react_1.useCallback(function (e) {
  //         e.stopPropagation();
  //         onConfirm();
  //     }, [onConfirm]);
  //     var handleClick = react_1.useCallback(function (e) {
  //         e.stopPropagation();
  //     }, []);
  //     return (react_1.default.createElement(Dialog_1.default, { open: isOpen, onClose: onClose, onClick: handleClick, "aria-labelledby": "alert-dialog-title" },
  //         react_1.default.createElement(DialogTitle_1.default, { id: "alert-dialog-title" }, translate(title, __assign({ _: title }, translateOptions))),
  //         react_1.default.createElement(DialogContent_1.default, null,
  //             react_1.default.createElement(DialogContentText_1.default, { className: classes.contentText }, translate(content, __assign({ _: content }, translateOptions)))),
  //         react_1.default.createElement(DialogActions_1.default, null,
  //             react_1.default.createElement(Button_1.default, { disabled: loading, onClick: onClose },
  //                 react_1.default.createElement(ErrorOutline_1.default, { className: classes.iconPaddingStyle }),
  //                 translate(cancel, { _: cancel })),
  //             react_1.default.createElement(Button_1.default, { disabled: loading, onClick: handleConfirm, className: classnames_1.default('ra-confirm', (_b = {},
  //                     _b[classes.confirmWarning] = confirmColor === 'warning',
  //                     _b[classes.confirmPrimary] = confirmColor === 'primary',
  //                     _b)), autoFocus: true },
  //                 react_1.default.createElement(CheckCircle_1.default, { className: classes.iconPaddingStyle }),
  //                 translate(confirm, { _: confirm })))));
  // }
  export const DashboardMenuItem: React.ComponentType<any>;
  // function (_a) {
  //     var locale = _a.locale, onClick = _a.onClick, props = __rest(_a, ["locale", "onClick"]);
  //     var translate = ra_core_1.useTranslate();
  //     return (react_1.default.createElement(MenuItemLink_1.default, __assign({ onClick: onClick, to: "/", primaryText: translate('ra.page.dashboard'), leftIcon: react_1.default.createElement(Dashboard_1.default, null), exact: true, dense: true }, props)));
  // }
  export const DeviceTestWrapper: React.ComponentType<any>;
  // function (_a) {
  //     var _b = _a.width, width = _b === void 0 ? 'md' : _b, children = _a.children;
  //     var theme = styles_2.createMuiTheme();
  //     // Use https://github.com/ericf/css-mediaquery as ponyfill.
  //     var ssrMatchMedia = function (query) { return ({
  //         matches: css_mediaquery_1.default.match(query, {
  //             // The estimated CSS width of the browser.
  //             // For the sake of this demo, we are using a fixed value.
  //             // In production, you can look into client-hint https://caniuse.com/#search=client%20hint
  //             // or user-agent resolution.
  //             width: theme.breakpoints.width(width),
  //         }),
  //     }); };
  //     return (react_1.default.createElement(styles_1.ThemeProvider, { theme: __assign({}, theme, { props: { MuiUseMediaQuery: { ssrMatchMedia: ssrMatchMedia } } }) }, children));
  // }
  export const Error: React.ComponentType<any>;
  // function (_a) {
  //     var error = _a.error, errorInfo = _a.errorInfo, classesOverride = _a.classes, className = _a.className, title = _a.title, rest = __rest(_a, ["error", "errorInfo", "classes", "className", "title"]);
  //     var classes = useStyles({ classes: classesOverride });
  //     var translate = ra_core_1.useTranslate();
  //     return (react_1.default.createElement(react_1.Fragment, null,
  //         react_1.default.createElement(Title_1.default, { defaultTitle: title }),
  //         react_1.default.createElement("div", __assign({ className: classnames_1.default(classes.container, className) }, rest),
  //             react_1.default.createElement("h1", { className: classes.title, role: "alert" },
  //                 react_1.default.createElement(Report_1.default, { className: classes.icon }),
  //                 translate('ra.page.error')),
  //             react_1.default.createElement("div", null, translate('ra.message.error')),
  //             process.env.NODE_ENV !== 'production' && (react_1.default.createElement(ExpansionPanel_1.default, { className: classes.panel },
  //                 react_1.default.createElement(ExpansionPanelSummary_1.default, { expandIcon: react_1.default.createElement(ExpandMore_1.default, null) }, translate('ra.message.details')),
  //                 react_1.default.createElement(ExpansionPanelDetails_1.default, { className: classes.panelDetails },
  //                     react_1.default.createElement("div", null,
  //                         react_1.default.createElement("h2", null, translate(error.toString())),
  //                         errorInfo.componentStack)))),
  //             react_1.default.createElement("div", { className: classes.toolbar },
  //                 react_1.default.createElement(Button_1.default, { variant: "contained", icon: react_1.default.createElement(History_1.default, null), onClick: goBack }, translate('ra.action.back'))))));
  // }
  export const HideOnScroll: React.ComponentType<any>;
  // function HideOnScroll(props) {
  //     var children = props.children;
  //     var trigger = useScrollTrigger_1.default();
  //     return (react_1.default.createElement(Slide_1.default, { appear: false, direction: "down", in: !trigger }, children));
  // }
  export const Layout: React.ComponentType<any>;
  // function (_a) {
  //     var themeOverride = _a.theme, props = __rest(_a, ["theme"]);
  //     var themeProp = react_1.useRef(themeOverride);
  //     var _b = react_1.useState(styles_1.createMuiTheme(themeOverride)), theme = _b[0], setTheme = _b[1];
  //     react_1.useEffect(function () {
  //         if (themeProp.current !== themeOverride) {
  //             themeProp.current = themeOverride;
  //             setTheme(styles_1.createMuiTheme(themeOverride));
  //         }
  //     }, [themeOverride, themeProp, theme, setTheme]);
  //     return (react_1.default.createElement(styles_2.ThemeProvider, { theme: theme },
  //         react_1.default.createElement(EnhancedLayout, __assign({}, props))));
  // }
  export const Loading: React.ComponentType<any>;
  // function (_a) {
  //     var classesOverride = _a.classes, className = _a.className, _b = _a.loadingPrimary, loadingPrimary = _b === void 0 ? 'ra.page.loading' : _b, _c = _a.loadingSecondary, loadingSecondary = _c === void 0 ? 'ra.message.loading' : _c;
  //     var classes = useStyles({ classes: classesOverride });
  //     var translate = ra_core_1.useTranslate();
  //     return (react_1.default.createElement("div", { className: classnames_1.default(classes.container, className) },
  //         react_1.default.createElement("div", { className: classes.message },
  //             react_1.default.createElement(CircularProgress_1.default, { className: classes.icon, color: "primary" }),
  //             react_1.default.createElement("h1", null, translate(loadingPrimary)),
  //             react_1.default.createElement("div", null,
  //                 translate(loadingSecondary),
  //                 "."))));
  // }
  export const LinearProgress: React.ComponentType<any>;
  // function (_a) {
  //     var classesOverride = _a.classes, className = _a.className, rest = __rest(_a, ["classes", "className"]);
  //     var classes = useStyles({ classes: classesOverride });
  //     return (react_1.default.createElement(LinearProgress_1.default, __assign({ className: classnames_1.default(classes.root, className) }, rest)));
  // }
  export const LoadingIndicator: React.ComponentType<any>;
  // function (_a) {
  //     var classesOverride = _a.classes, className = _a.className, rest = __rest(_a, ["classes", "className"]);
  //     var loading = react_redux_1.useSelector(function (state) { return state.admin.loading > 0; });
  //     var classes = useStyles({ classes: classesOverride });
  //     return loading ? (react_1.default.createElement(CircularProgress_1.default, __assign({ className: classnames_1.default('app-loader', classes.loader, className), color: "inherit", size: 18, thickness: 5 }, rest))) : (react_1.default.createElement(RefreshIconButton_1.default, null));
  // }
  export const Menu: React.ComponentType<any>;
  // function (_a) {
  //     var classesOverride = _a.classes, className = _a.className, dense = _a.dense, hasDashboard = _a.hasDashboard, onMenuClick = _a.onMenuClick, logout = _a.logout, rest = __rest(_a, ["classes", "className", "dense", "hasDashboard", "onMenuClick", "logout"]);
  //     var translate = ra_core_1.useTranslate();
  //     var classes = useStyles({ classes: classesOverride });
  //     var isXSmall = core_1.useMediaQuery(function (theme) { return theme.breakpoints.down('xs'); });
  //     var open = react_redux_1.useSelector(function (state) { return state.admin.ui.sidebarOpen; });
  //     var resources = react_redux_1.useSelector(ra_core_1.getResources, react_redux_1.shallowEqual);
  //     react_redux_1.useSelector(function (state) { return state.router.location.pathname; }); // used to force redraw on navigation
  //     return (react_1.default.createElement("div", __assign({ className: classnames_1.default(classes.main, className) }, rest),
  //         hasDashboard && (react_1.default.createElement(DashboardMenuItem_1.default, { onClick: onMenuClick, sidebarIsOpen: open })),
  //         resources
  //             .filter(function (r) { return r.hasList; })
  //             .map(function (resource) { return (react_1.default.createElement(MenuItemLink_1.default, { key: resource.name, to: "/" + resource.name, primaryText: translatedResourceName(resource, translate), leftIcon: resource.icon ? react_1.default.createElement(resource.icon, null) : react_1.default.createElement(ViewList_1.default, null), onClick: onMenuClick, dense: dense, sidebarIsOpen: open })); }),
  //         isXSmall && logout));
  // }
  export const MenuItemLink: {};
  // $$typeof: "symbol"
  // render: "function (_a, ref) {\n    var classesOverride = _a.classes, className = _a.className, primaryText = _a.primaryText, leftIcon = _a.leftIcon, onClick = _a.onClick, sidebarIsOpen = _a.sidebarIsOpen, props = __rest(_a, [\"classes\", \"className\", \"primaryText\", \"leftIcon\", \"onClick\", \"sidebarIsOpen\"]);\n    var classes = useStyles({ classes: classesOverride });\n    var handleMenuTap = react_1.useCallback(function (e) {\n        onClick && onClick(e);\n    }, [onClick]);\n    var renderMenuItem = function () {\n        return (react_1.default.createElement(MenuItem_1.default, __assign({ className: classnames_1.default(classes.root, className), activeClassName: classes.active, component: NavLinkRef, ref: ref }, props, { onClick: handleMenuTap }),\n            leftIcon && (react_1.default.createElement(ListItemIcon_1.default, { className: classes.icon }, react_1.cloneElement(leftIcon, {\n                titleAccess: primaryText,\n            }))),\n            primaryText));\n    };\n    if (sidebarIsOpen) {\n        return renderMenuItem();\n    }\n    return (react_1.default.createElement(Tooltip_1.default, { title: primaryText, placement: \"right\" }, renderMenuItem()));\n}"
  // propTypes: {"classes":"function () { [native code] }","className":"function () { [native code] }","leftIcon":"function () { [native code] }","onClick":"function () { [native code] }","primaryText":"function () { [native code] }","staticContext":"function () { [native code] }","to":"function () { [native code] }"}
  export const NotFound: React.ComponentType<any>;
  // function (_a) {
  //     var className = _a.className, classesOverride = _a.classes, title = _a.title, location = _a.location, rest = __rest(_a, ["className", "classes", "title", "location"]);
  //     var classes = useStyles({ classes: classesOverride });
  //     var translate = ra_core_1.useTranslate();
  //     return (react_1.default.createElement(ra_core_1.Authenticated, { location: location },
  //         react_1.default.createElement("div", __assign({ className: classnames_1.default(classes.container, className) }, rest),
  //             react_1.default.createElement(Title_1.default, { defaultTitle: title }),
  //             react_1.default.createElement("div", { className: classes.message },
  //                 react_1.default.createElement(HotTub_1.default, { className: classes.icon }),
  //                 react_1.default.createElement("h1", null, translate('ra.page.not_found')),
  //                 react_1.default.createElement("div", null,
  //                     translate('ra.message.not_found'),
  //                     ".")),
  //             react_1.default.createElement("div", { className: classes.toolbar },
  //                 react_1.default.createElement(Button_1.default, { variant: "contained", icon: react_1.default.createElement(History_1.default, null), onClick: goBack }, translate('ra.action.back'))))));
  // }
  export const Notification: React.ComponentType<any>;
  // function (_a) {
  //     var type = _a.type, className = _a.className, autoHideDuration = _a.autoHideDuration, rest = __rest(_a, ["type", "className", "autoHideDuration"]);
  //     var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
  //     var notification = react_redux_1.useSelector(ra_core_1.getNotification);
  //     var dispatch = react_redux_1.useDispatch();
  //     var translate = ra_core_1.useTranslate();
  //     var styles = useStyles({});
  //     react_1.useEffect(function () {
  //         setOpen(!!notification);
  //     }, [notification]);
  //     var handleRequestClose = react_1.useCallback(function () {
  //         setOpen(false);
  //     }, [setOpen]);
  //     var handleExited = react_1.useCallback(function () {
  //         if (notification && notification.undoable) {
  //             dispatch(ra_core_1.complete());
  //             ra_core_1.undoableEventEmitter.emit('end', { isUndo: false });
  //         }
  //         dispatch(ra_core_1.hideNotification());
  //     }, [dispatch, notification]);
  //     var handleUndo = react_1.useCallback(function () {
  //         dispatch(ra_core_1.undo());
  //         ra_core_1.undoableEventEmitter.emit('end', { isUndo: true });
  //     }, [dispatch]);
  //     return (react_1.default.createElement(Snackbar_1.default, __assign({ open: open, message: notification &&
  //             notification.message &&
  //             translate(notification.message, notification.messageArgs), autoHideDuration: (notification && notification.autoHideDuration) ||
  //             autoHideDuration, disableWindowBlurListener: notification && notification.undoable, onExited: handleExited, onClose: handleRequestClose, ContentProps: {
  //             className: classnames_1.default(styles[(notification && notification.type) || type], className),
  //         }, action: notification && notification.undoable ? (react_1.default.createElement(Button_1.default, { color: "primary", className: styles.undo, size: "small", onClick: handleUndo }, translate('ra.action.undo'))) : null }, rest)));
  // }
  export const Responsive: React.ComponentType<any>;
  // function WithWidth(props) {
  //       var contextTheme = (0, _useTheme.default)();
  //       var theme = props.theme || contextTheme;
  //
  //       var _getThemeProps = (0, _styles.getThemeProps)({
  //         theme: theme,
  //         name: 'MuiWithWidth',
  //         props: (0, _extends2.default)({}, props)
  //       }),
  //           initialWidth = _getThemeProps.initialWidth,
  //           width = _getThemeProps.width,
  //           other = (0, _objectWithoutProperties2.default)(_getThemeProps, ["initialWidth", "width"]);
  //
  //       var _React$useState = _react.default.useState(false),
  //           mountedState = _React$useState[0],
  //           setMountedState = _React$useState[1];
  //
  //       useEnhancedEffect(function () {
  //         setMountedState(true);
  //       }, []);
  //       /**
  //        * innerWidth |xs      sm      md      lg      xl
  //        *            |-------|-------|-------|-------|------>
  //        * width      |  xs   |  sm   |  md   |  lg   |  xl
  //        */
  //
  //       var keys = (0, _toConsumableArray2.default)(theme.breakpoints.keys).reverse();
  //       var widthComputed = keys.reduce(function (output, key) {
  //         // eslint-disable-next-line react-hooks/rules-of-hooks
  //         var matches = (0, _useMediaQuery.default)(theme.breakpoints.up(key));
  //         return !output && matches ? key : output;
  //       }, null);
  //       var more = (0, _extends2.default)({
  //         width: width || (mountedState || noSSR ? widthComputed : undefined) || initialWidth || initialWidthOption
  //       }, withThemeOption ? {
  //         theme: theme
  //       } : {}, {}, other); // When rendering the component on the server,
  //       // we have no idea about the client browser screen width.
  //       // In order to prevent blinks and help the reconciliation of the React tree
  //       // we are not rendering the child component.
  //       //
  //       // An alternative is to use the `initialWidth` property.
  //
  //       if (more.width === undefined) {
  //         return null;
  //       }
  //
  //       return _react.default.createElement(Component, more);
  //     }
  export const Sidebar: React.ComponentType<any>;
  // function (_a) {
  //     var children = _a.children, closedSize = _a.closedSize, size = _a.size, rest = __rest(_a, ["children", "closedSize", "size"]);
  //     var dispatch = react_redux_1.useDispatch();
  //     var isXSmall = core_1.useMediaQuery(function (theme) { return theme.breakpoints.down('xs'); });
  //     var isSmall = core_1.useMediaQuery(function (theme) { return theme.breakpoints.down('sm'); });
  //     // FIXME negating isXSmall and isSmall should be enough, but unfortunately
  //     // mui media queries use a two pass system and are always false at first
  //     // see https://github.com/mui-org/material-ui/issues/14336
  //     var isDesktop = core_1.useMediaQuery(function (theme) { return theme.breakpoints.up('md'); });
  //     react_1.useEffect(function () {
  //         if (isDesktop) {
  //             dispatch(ra_core_1.setSidebarVisibility(true)); // FIXME renders with a closed sidebar at first
  //         }
  //     }, [isDesktop, dispatch]);
  //     var open = react_redux_1.useSelector(function (state) { return state.admin.ui.sidebarOpen; });
  //     react_redux_1.useSelector(function (state) { return state.locale; }); // force redraw on locale change
  //     var handleClose = function () { return dispatch(ra_core_1.setSidebarVisibility(false)); };
  //     var toggleSidebar = function () { return dispatch(ra_core_1.setSidebarVisibility(!open)); };
  //     var classes = useStyles({ open: open });
  //     return isXSmall ? (react_1.default.createElement(core_1.Drawer, __assign({ variant: "temporary", open: open, PaperProps: {
  //             className: classes.drawerPaper,
  //         }, onClose: toggleSidebar }, rest), react_1.cloneElement(react_1.Children.only(children), {
  //         onMenuClick: handleClose,
  //     }))) : isSmall ? (react_1.default.createElement(core_1.Drawer, __assign({ variant: "permanent", open: open, PaperProps: {
  //             className: classes.drawerPaper,
  //         }, onClose: toggleSidebar }, rest), react_1.cloneElement(react_1.Children.only(children), {
  //         dense: true,
  //         onMenuClick: handleClose,
  //     }))) : (react_1.default.createElement(core_1.Drawer, __assign({ variant: "permanent", open: open, PaperProps: {
  //             className: classes.drawerPaper,
  //         }, onClose: toggleSidebar }, rest), react_1.cloneElement(react_1.Children.only(children), { dense: true })));
  // }
  export const Title: React.ComponentType<any>;
  // function (_a) {
  //     var className = _a.className, defaultTitle = _a.defaultTitle, locale = _a.locale, record = _a.record, title = _a.title, rest = __rest(_a, ["className", "defaultTitle", "locale", "record", "title"]);
  //     var translate = ra_core_1.useTranslate();
  //     var container = document.getElementById('react-admin-title');
  //     if (!container)
  //         return null;
  //     ra_core_1.warning(!defaultTitle && !title, 'Missing title prop in <Title> element');
  //     var titleElement = !title ? (react_1.default.createElement("span", __assign({ className: className }, rest), defaultTitle)) : typeof title === 'string' ? (react_1.default.createElement("span", __assign({ className: className }, rest), translate(title, { _: title }))) : (react_1.cloneElement(title, __assign({ className: className, record: record }, rest)));
  //     return react_dom_1.createPortal(titleElement, container);
  // }
  export const TitlePropType: React.ComponentType<any>;
  // function () { [native code] }
  export const TitleForRecord: React.ComponentType<any>;
  // function (_a) {
  //     var defaultTitle = _a.defaultTitle, record = _a.record, title = _a.title;
  //     return record ? (react_1.default.createElement(Title_1.default, { title: title, record: record, defaultTitle: defaultTitle })) : ('');
  // }
  export const TopToolbar: React.ComponentType<any>;
  // function (_a) {
  //     var className = _a.className, children = _a.children, rest = __rest(_a, ["className", "children"]);
  //     var classes = useStyles();
  //     return (react_1.default.createElement(Toolbar_1.default, __assign({ className: classnames_1.default(classes.root, className) }, rest), children));
  // }
  export const UserMenu: React.ComponentType<any>;
  // function (props) {
  //     var _a = react_1.useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
  //     var translate = ra_core_1.useTranslate();
  //     var children = props.children, label = props.label, icon = props.icon, logout = props.logout;
  //     if (!logout && !children)
  //         return null;
  //     var open = Boolean(anchorEl);
  //     var handleMenu = function (event) { return setAnchorEl(event.currentTarget); };
  //     var handleClose = function () { return setAnchorEl(null); };
  //     return (react_1.default.createElement("div", null,
  //         react_1.default.createElement(Tooltip_1.default, { title: label && translate(label, { _: label }) },
  //             react_1.default.createElement(IconButton_1.default, { "aria-label": label && translate(label, { _: label }), "aria-owns": open ? 'menu-appbar' : null, "aria-haspopup": true, color: "inherit", onClick: handleMenu }, icon)),
  //         react_1.default.createElement(Menu_1.default, { id: "menu-appbar", anchorEl: anchorEl, anchorOrigin: {
  //                 vertical: 'top',
  //                 horizontal: 'right',
  //             }, transformOrigin: {
  //                 vertical: 'top',
  //                 horizontal: 'right',
  //             }, open: open, onClose: handleClose },
  //             react_1.Children.map(children, function (menuItem) {
  //                 return react_1.isValidElement(menuItem)
  //                     ? react_1.cloneElement(menuItem, {
  //                         onClick: handleClose,
  //                     })
  //                     : null;
  //             }),
  //             logout)));
  // }
  export const BulkActionsToolbar: React.ComponentType<any>;
  // function (_a) {
  //     var _b;
  //     var basePath = _a.basePath, classesOverride = _a.classes, filterValues = _a.filterValues, label = _a.label, resource = _a.resource, selectedIds = _a.selectedIds, children = _a.children, rest = __rest(_a, ["basePath", "classes", "filterValues", "label", "resource", "selectedIds", "children"]);
  //     var classes = useStyles({ classes: classesOverride });
  //     var translate = ra_core_1.useTranslate();
  //     return (react_1.default.createElement(Toolbar_1.default, __assign({ "data-test": "bulk-actions-toolbar", className: classnames_1.default(classes.toolbar, (_b = {},
  //             _b[classes.collapsed] = selectedIds.length === 0,
  //             _b)) }, ra_core_1.sanitizeListRestProps(rest)),
  //         react_1.default.createElement("div", { className: classes.title },
  //             react_1.default.createElement(Typography_1.default, { color: "inherit", variant: "subtitle1" }, translate(label, {
  //                 _: label,
  //                 smart_count: selectedIds.length,
  //             }))),
  //         react_1.default.createElement(TopToolbar_1.default, null, react_1.Children.map(children, function (child) {
  //             return react_1.cloneElement(react_1.Children.only(child), {
  //                 basePath: basePath,
  //                 filterValues: filterValues,
  //                 resource: resource,
  //                 selectedIds: selectedIds,
  //             });
  //         }))));
  // }
  export const BulkDeleteAction: React.ComponentType<any>;
  // function (props) {
  //     var dispatch = react_redux_1.useDispatch();
  //     react_1.useEffect(function () {
  //         if (process.env.NODE_ENV !== 'production') {
  //             // eslint-disable-next-line no-console
  //             console.warn('<BulkDeleteAction> is deprecated. Use the <BulkDeleteButton> component instead, via the bulkActionButton props.');
  //         }
  //         var basePath = props.basePath, resource = props.resource, selectedIds = props.selectedIds, undoable = props.undoable, onExit = props.onExit;
  //         if (undoable) {
  //             dispatch(ra_core_1.startUndoable(ra_core_1.crudDeleteMany(resource, selectedIds, basePath)));
  //         }
  //         else {
  //             dispatch(ra_core_1.crudDeleteMany(resource, selectedIds, basePath));
  //         }
  //         onExit();
  //     }, [dispatch, props]);
  //     return null;
  // }
  export const Datagrid: React.ComponentType<any>;
  // function Datagrid(_a) {
  //     var classesOverride = _a.classes, props = __rest(_a, ["classes"]);
  //     var classes = useStyles({ classes: classesOverride });
  //     var basePath = props.basePath, _b = props.optimized, optimized = _b === void 0 ? false : _b, _c = props.body, body = _c === void 0 ? optimized ? react_1.default.createElement(DatagridBody_1.PureDatagridBody, null) : react_1.default.createElement(DatagridBody_1.default, null) : _c, children = props.children, className = props.className, currentSort = props.currentSort, data = props.data, expand = props.expand, hasBulkActions = props.hasBulkActions, hover = props.hover, ids = props.ids, loading = props.loading, loaded = props.loaded, onSelect = props.onSelect, onToggleItem = props.onToggleItem, resource = props.resource, rowClick = props.rowClick, rowStyle = props.rowStyle, selectedIds = props.selectedIds, setSort = props.setSort, _d = props.size, size = _d === void 0 ? 'small' : _d, total = props.total, version = props.version, rest = __rest(props, ["basePath", "optimized", "body", "children", "className", "currentSort", "data", "expand", "hasBulkActions", "hover", "ids", "loading", "loaded", "onSelect", "onToggleItem", "resource", "rowClick", "rowStyle", "selectedIds", "setSort", "size", "total", "version"]);
  //     var updateSort = react_1.useCallback(function (event) {
  //         event.stopPropagation();
  //         setSort(event.currentTarget.dataset.sort);
  //     }, [setSort]);
  //     var handleSelectAll = react_1.useCallback(function (event) {
  //         if (event.target.checked) {
  //             onSelect(ids.concat(selectedIds.filter(function (id) { return !ids.includes(id); })));
  //         }
  //         else {
  //             onSelect([]);
  //         }
  //     }, [ids, onSelect, selectedIds]);
  //     /**
  //      * if loaded is false, the list displays for the first time, and the dataProvider hasn't answered yet
  //      * if loaded is true, the data for the list has at least been returned once by the dataProvider
  //      * if loaded is undefined, the Datagrid parent doesn't track loading state (e.g. ReferenceArrayField)
  //      */
  //     if (loaded === false) {
  //         return (react_1.default.createElement(DatagridLoading_1.default, { classes: classes, className: className, expand: expand, hasBulkActions: hasBulkActions, nbChildren: react_1.default.Children.count(children), size: size }));
  //     }
  //     /**
  //      * Once loaded, the data for the list may be empty. Instead of
  //      * displaying the table header with zero data rows,
  //      * the datagrid displays nothing in this case.
  //      */
  //     if (loaded && (ids.length === 0 || total === 0)) {
  //         return null;
  //     }
  //     /**
  //      * After the initial load, if the data for the list isn't empty,
  //      * and even if the data is refreshing (e.g. after a filter change),
  //      * the datagrid displays the current data.
  //      */
  //     return (react_1.default.createElement(Table_1.default, __assign({ className: classnames_1.default(classes.table, className), size: size }, ra_core_1.sanitizeListRestProps(rest)),
  //         react_1.default.createElement(TableHead_1.default, { className: classes.thead },
  //             react_1.default.createElement(TableRow_1.default, { className: classnames_1.default(classes.row, classes.headerRow) },
  //                 expand && (react_1.default.createElement(TableCell_1.default, { padding: "none", className: classes.expandHeader })),
  //                 hasBulkActions && (react_1.default.createElement(TableCell_1.default, { padding: "checkbox" },
  //                     react_1.default.createElement(Checkbox_1.default, { className: "select-all", color: "primary", checked: selectedIds.length > 0 &&
  //                             ids.length > 0 &&
  //                             ids.every(function (id) { return selectedIds.includes(id); }), onChange: handleSelectAll }))),
  //                 react_1.Children.map(children, function (field, index) {
  //                     return react_1.isValidElement(field) ? (react_1.default.createElement(DatagridHeaderCell_1.default, { className: classes.headerCell, currentSort: currentSort, field: field, isSorting: currentSort.field ===
  //                             (field.props.sortBy || field.props.source), key: field.props.source || index, resource: resource, updateSort: updateSort })) : null;
  //                 }))),
  //         react_1.cloneElement(body, {
  //             basePath: basePath,
  //             className: classes.tbody,
  //             classes: classes,
  //             expand: expand,
  //             rowClick: rowClick,
  //             data: data,
  //             hasBulkActions: hasBulkActions,
  //             hover: hover,
  //             ids: ids,
  //             onToggleItem: onToggleItem,
  //             resource: resource,
  //             rowStyle: rowStyle,
  //             selectedIds: selectedIds,
  //             version: version,
  //         }, children)));
  // }
  export const DatagridLoading: {};
  // $$typeof: "symbol"
  // type: "function (_a) {\n    var classes = _a.classes, className = _a.className, expand = _a.expand, hasBulkActions = _a.hasBulkActions, nbChildren = _a.nbChildren, _b = _a.nbFakeLines, nbFakeLines = _b === void 0 ? 5 : _b, size = _a.size;\n    return (react_1.default.createElement(Table_1.default, { className: classnames_1.default(classes.table, className), size: size },\n        react_1.default.createElement(TableHead_1.default, null,\n            react_1.default.createElement(TableRow_1.default, { className: classes.row },\n                expand && (react_1.default.createElement(TableCell_1.default, { padding: \"none\", className: classes.expandHeader })),\n                hasBulkActions && (react_1.default.createElement(TableCell_1.default, { padding: \"checkbox\", className: classes.expandIconCell },\n                    react_1.default.createElement(Checkbox_1.default, { className: \"select-all\", color: \"primary\", checked: false }))),\n                times(nbChildren, function (key) { return (react_1.default.createElement(TableCell_1.default, { variant: \"head\", className: classes.headerCell, key: key },\n                    react_1.default.createElement(Placeholder, null))); }))),\n        react_1.default.createElement(TableBody_1.default, null, times(nbFakeLines, function (key1) { return (react_1.default.createElement(TableRow_1.default, { key: key1, style: { opacity: 1 / (key1 + 1) } },\n            expand && (react_1.default.createElement(TableCell_1.default, { padding: \"none\", className: classes.expandIconCell },\n                react_1.default.createElement(IconButton_1.default, { className: classes.expandIcon, component: \"div\", \"aria-hidden\": \"true\" },\n                    react_1.default.createElement(ExpandMore_1.default, null)))),\n            hasBulkActions && (react_1.default.createElement(TableCell_1.default, { padding: \"checkbox\", className: classes.expandIconCell },\n                react_1.default.createElement(Checkbox_1.default, { className: \"select-all\", color: \"primary\", checked: false }))),\n            times(nbChildren, function (key2) { return (react_1.default.createElement(TableCell_1.default, { className: classes.rowCell, key: key2 },\n                react_1.default.createElement(Placeholder, null))); }))); }))));\n}"
  // compare: null
  export const DatagridBody: React.ComponentType<any>;
  // function (_a) {
  //     var basePath = _a.basePath, children = _a.children, classes = _a.classes, className = _a.className, data = _a.data, expand = _a.expand, hasBulkActions = _a.hasBulkActions, hover = _a.hover, ids = _a.ids, onToggleItem = _a.onToggleItem, resource = _a.resource, row = _a.row, rowClick = _a.rowClick, rowStyle = _a.rowStyle, selectedIds = _a.selectedIds, styles = _a.styles, version = _a.version, rest = __rest(_a, ["basePath", "children", "classes", "className", "data", "expand", "hasBulkActions", "hover", "ids", "onToggleItem", "resource", "row", "rowClick", "rowStyle", "selectedIds", "styles", "version"]);
  //     return (react_1.default.createElement(TableBody_1.default, __assign({ className: classnames_1.default('datagrid-body', className) }, rest), ids.map(function (id, rowIndex) {
  //         var _a;
  //         return react_1.cloneElement(row, {
  //             basePath: basePath,
  //             classes: classes,
  //             className: classnames_1.default(classes.row, (_a = {},
  //                 _a[classes.rowEven] = rowIndex % 2 === 0,
  //                 _a[classes.rowOdd] = rowIndex % 2 !== 0,
  //                 _a[classes.clickableRow] = rowClick,
  //                 _a)),
  //             expand: expand,
  //             hasBulkActions: hasBulkActions,
  //             hover: hover,
  //             id: id,
  //             key: id,
  //             onToggleItem: onToggleItem,
  //             record: data[id],
  //             resource: resource,
  //             rowClick: rowClick,
  //             selected: selectedIds.includes(id),
  //             style: rowStyle ? rowStyle(data[id], rowIndex) : null,
  //         }, children);
  //     })));
  // }
  export const PureDatagridBody: {};
  // $$typeof: "symbol"
  // type: "function (_a) {\n    var basePath = _a.basePath, children = _a.children, classes = _a.classes, className = _a.className, data = _a.data, expand = _a.expand, hasBulkActions = _a.hasBulkActions, hover = _a.hover, ids = _a.ids, onToggleItem = _a.onToggleItem, resource = _a.resource, row = _a.row, rowClick = _a.rowClick, rowStyle = _a.rowStyle, selectedIds = _a.selectedIds, styles = _a.styles, version = _a.version, rest = __rest(_a, [\"basePath\", \"children\", \"classes\", \"className\", \"data\", \"expand\", \"hasBulkActions\", \"hover\", \"ids\", \"onToggleItem\", \"resource\", \"row\", \"rowClick\", \"rowStyle\", \"selectedIds\", \"styles\", \"version\"]);\n    return (react_1.default.createElement(TableBody_1.default, __assign({ className: classnames_1.default('datagrid-body', className) }, rest), ids.map(function (id, rowIndex) {\n        var _a;\n        return react_1.cloneElement(row, {\n            basePath: basePath,\n            classes: classes,\n            className: classnames_1.default(classes.row, (_a = {},\n                _a[classes.rowEven] = rowIndex % 2 === 0,\n                _a[classes.rowOdd] = rowIndex % 2 !== 0,\n                _a[classes.clickableRow] = rowClick,\n                _a)),\n            expand: expand,\n            hasBulkActions: hasBulkActions,\n            hover: hover,\n            id: id,\n            key: id,\n            onToggleItem: onToggleItem,\n            record: data[id],\n            resource: resource,\n            rowClick: rowClick,\n            selected: selectedIds.includes(id),\n            style: rowStyle ? rowStyle(data[id], rowIndex) : null,\n        }, children);\n    })));\n}"
  // compare: "function (prevProps, nextProps) {\n    var _ = prevProps.children, prevPropsWithoutChildren = __rest(prevProps, [\"children\"]);\n    var __ = nextProps.children, nextPropsWithoutChildren = __rest(nextProps, [\"children\"]);\n    return isEqual_1.default(prevPropsWithoutChildren, nextPropsWithoutChildren);\n}"
  // muiName: "string"
  // defaultProps: {"row":{"$$typeof":"symbol","type":{"$$typeof":"symbol","type":"function (_a) {\n    var basePath = _a.basePath, children = _a.children, _b = _a.classes, classes = _b === void 0 ? defaultClasses : _b, className = _a.className, expand = _a.expand, hasBulkActions = _a.hasBulkActions, hover = _a.hover, id = _a.id, onToggleItem = _a.onToggleItem, record = _a.record, resource = _a.resource, rowClick = _a.rowClick, selected = _a.selected, style = _a.style, rest = __rest(_a, [\"basePath\", \"children\", \"classes\", \"className\", \"expand\", \"hasBulkActions\", \"hover\", \"id\", \"onToggleItem\", \"record\", \"resource\", \"rowClick\", \"selected\", \"style\"]);\n    var _c = react_1.useState(false), expanded = _c[0], setExpanded = _c[1];\n    var _d = react_1.useState(computeNbColumns(expand, children, hasBulkActions)), nbColumns = _d[0], setNbColumns = _d[1];\n    react_1.useEffect(function () {\n        // Fields can be hidden dynamically based on permissions;\n        // The expand panel must span over the remaining columns\n        // So we must recompute the number of columns to span on\n        var newNbColumns = computeNbColumns(expand, children, hasBulkActions);\n        if (newNbColumns !== nbColumns) {\n            setNbColumns(newNbColumns);\n        }\n    }, [expand, nbColumns, children, hasBulkActions]);\n    var history = react_router_dom_1.useHistory();\n    var handleToggleExpand = react_1.useCallback(function (event) {\n        setExpanded(!expanded);\n        event.stopPropagation();\n    }, [expanded]);\n    var handleToggleSelection = react_1.useCallback(function (event) {\n        onToggleItem(id);\n        event.stopPropagation();\n    }, [id, onToggleItem]);\n    var handleClick = react_1.useCallback(function (event) { return __awaiter(_this, void 0, void 0, function () {\n        var effect, _a;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    if (!rowClick)\n                        return [2 /*return*/];\n                    if (!(typeof rowClick === 'function')) return [3 /*break*/, 2];\n                    return [4 /*yield*/, rowClick(id, basePath, record)];\n                case 1:\n                    _a = _b.sent();\n                    return [3 /*break*/, 3];\n                case 2:\n                    _a = rowClick;\n                    _b.label = 3;\n                case 3:\n                    effect = _a;\n                    switch (effect) {\n                        case 'edit':\n                            history.push(ra_core_1.linkToRecord(basePath, id));\n                            return [2 /*return*/];\n                        case 'show':\n                            history.push(ra_core_1.linkToRecord(basePath, id, 'show'));\n                            return [2 /*return*/];\n                        case 'expand':\n                            handleToggleExpand(event);\n                            return [2 /*return*/];\n                        case 'toggleSelection':\n                            handleToggleSelection(event);\n                            return [2 /*return*/];\n                        default:\n                            if (effect)\n                                history.push(effect);\n                            return [2 /*return*/];\n                    }\n                    return [2 /*return*/];\n            }\n        });\n    }); }, [\n        basePath,\n        history,\n        handleToggleExpand,\n        handleToggleSelection,\n        id,\n        record,\n        rowClick,\n    ]);\n    return (react_1.default.createElement(react_1.Fragment, null,\n        react_1.default.createElement(core_1.TableRow, __assign({ className: className, key: id, style: style, hover: hover, onClick: handleClick }, rest),\n            expand && (react_1.default.createElement(core_1.TableCell, { padding: \"none\", className: classes.expandIconCell },\n                react_1.default.createElement(ExpandRowButton_1.default, { classes: classes, expanded: expanded, onClick: handleToggleExpand, expandContentId: id + \"-expand\" }))),\n            hasBulkActions && (react_1.default.createElement(core_1.TableCell, { padding: \"checkbox\" },\n                react_1.default.createElement(core_1.Checkbox, { color: \"primary\", className: \"select-item \" + classes.checkbox, checked: selected, onClick: handleToggleSelection }))),\n            react_1.default.Children.map(children, function (field, index) {\n                return react_1.isValidElement(field) ? (react_1.default.createElement(DatagridCell_1.default, __assign({ key: id + \"-\" + (field.props.source || index), className: classnames_1.default(\"column-\" + field.props.source, classes.rowCell), record: record }, { field: field, basePath: basePath, resource: resource }))) : null;\n            })),\n        expand && expanded && (react_1.default.createElement(core_1.TableRow, { key: id + \"-expand\", id: id + \"-expand\" },\n            react_1.default.createElement(core_1.TableCell, { colSpan: nbColumns }, react_1.isValidElement(expand)\n                ? react_1.cloneElement(expand, {\n                    record: record,\n                    basePath: basePath,\n                    resource: resource,\n                    id: String(id),\n                })\n                : react_1.createElement(expand, {\n                    record: record,\n                    basePath: basePath,\n                    resource: resource,\n                    id: String(id),\n                }))))));\n}","compare":"function (prevProps, nextProps) {\n    var _ = prevProps.children, prevPropsWithoutChildren = __rest(prevProps, [\"children\"]);\n    var __ = nextProps.children, nextPropsWithoutChildren = __rest(nextProps, [\"children\"]);\n    return isEqual_1.default(prevPropsWithoutChildren, nextPropsWithoutChildren);\n}","displayName":"string"},"key":null,"ref":null,"props":{},"_owner":null,"_store":{}}}
  export const DatagridRow: React.ComponentType<any>;
  // function (_a) {
  //     var basePath = _a.basePath, children = _a.children, _b = _a.classes, classes = _b === void 0 ? defaultClasses : _b, className = _a.className, expand = _a.expand, hasBulkActions = _a.hasBulkActions, hover = _a.hover, id = _a.id, onToggleItem = _a.onToggleItem, record = _a.record, resource = _a.resource, rowClick = _a.rowClick, selected = _a.selected, style = _a.style, rest = __rest(_a, ["basePath", "children", "classes", "className", "expand", "hasBulkActions", "hover", "id", "onToggleItem", "record", "resource", "rowClick", "selected", "style"]);
  //     var _c = react_1.useState(false), expanded = _c[0], setExpanded = _c[1];
  //     var _d = react_1.useState(computeNbColumns(expand, children, hasBulkActions)), nbColumns = _d[0], setNbColumns = _d[1];
  //     react_1.useEffect(function () {
  //         // Fields can be hidden dynamically based on permissions;
  //         // The expand panel must span over the remaining columns
  //         // So we must recompute the number of columns to span on
  //         var newNbColumns = computeNbColumns(expand, children, hasBulkActions);
  //         if (newNbColumns !== nbColumns) {
  //             setNbColumns(newNbColumns);
  //         }
  //     }, [expand, nbColumns, children, hasBulkActions]);
  //     var history = react_router_dom_1.useHistory();
  //     var handleToggleExpand = react_1.useCallback(function (event) {
  //         setExpanded(!expanded);
  //         event.stopPropagation();
  //     }, [expanded]);
  //     var handleToggleSelection = react_1.useCallback(function (event) {
  //         onToggleItem(id);
  //         event.stopPropagation();
  //     }, [id, onToggleItem]);
  //     var handleClick = react_1.useCallback(function (event) { return __awaiter(_this, void 0, void 0, function () {
  //         var effect, _a;
  //         return __generator(this, function (_b) {
  //             switch (_b.label) {
  //                 case 0:
  //                     if (!rowClick)
  //                         return [2 /*return*/];
  //                     if (!(typeof rowClick === 'function')) return [3 /*break*/, 2];
  //                     return [4 /*yield*/, rowClick(id, basePath, record)];
  //                 case 1:
  //                     _a = _b.sent();
  //                     return [3 /*break*/, 3];
  //                 case 2:
  //                     _a = rowClick;
  //                     _b.label = 3;
  //                 case 3:
  //                     effect = _a;
  //                     switch (effect) {
  //                         case 'edit':
  //                             history.push(ra_core_1.linkToRecord(basePath, id));
  //                             return [2 /*return*/];
  //                         case 'show':
  //                             history.push(ra_core_1.linkToRecord(basePath, id, 'show'));
  //                             return [2 /*return*/];
  //                         case 'expand':
  //                             handleToggleExpand(event);
  //                             return [2 /*return*/];
  //                         case 'toggleSelection':
  //                             handleToggleSelection(event);
  //                             return [2 /*return*/];
  //                         default:
  //                             if (effect)
  //                                 history.push(effect);
  //                             return [2 /*return*/];
  //                     }
  //                     return [2 /*return*/];
  //             }
  //         });
  //     }); }, [
  //         basePath,
  //         history,
  //         handleToggleExpand,
  //         handleToggleSelection,
  //         id,
  //         record,
  //         rowClick,
  //     ]);
  //     return (react_1.default.createElement(react_1.Fragment, null,
  //         react_1.default.createElement(core_1.TableRow, __assign({ className: className, key: id, style: style, hover: hover, onClick: handleClick }, rest),
  //             expand && (react_1.default.createElement(core_1.TableCell, { padding: "none", className: classes.expandIconCell },
  //                 react_1.default.createElement(ExpandRowButton_1.default, { classes: classes, expanded: expanded, onClick: handleToggleExpand, expandContentId: id + "-expand" }))),
  //             hasBulkActions && (react_1.default.createElement(core_1.TableCell, { padding: "checkbox" },
  //                 react_1.default.createElement(core_1.Checkbox, { color: "primary", className: "select-item " + classes.checkbox, checked: selected, onClick: handleToggleSelection }))),
  //             react_1.default.Children.map(children, function (field, index) {
  //                 return react_1.isValidElement(field) ? (react_1.default.createElement(DatagridCell_1.default, __assign({ key: id + "-" + (field.props.source || index), className: classnames_1.default("column-" + field.props.source, classes.rowCell), record: record }, { field: field, basePath: basePath, resource: resource }))) : null;
  //             })),
  //         expand && expanded && (react_1.default.createElement(core_1.TableRow, { key: id + "-expand", id: id + "-expand" },
  //             react_1.default.createElement(core_1.TableCell, { colSpan: nbColumns }, react_1.isValidElement(expand)
  //                 ? react_1.cloneElement(expand, {
  //                     record: record,
  //                     basePath: basePath,
  //                     resource: resource,
  //                     id: String(id),
  //                 })
  //                 : react_1.createElement(expand, {
  //                     record: record,
  //                     basePath: basePath,
  //                     resource: resource,
  //                     id: String(id),
  //                 }))))));
  // }
  export const PureDatagridRow: {};
  // $$typeof: "symbol"
  // type: "function (_a) {\n    var basePath = _a.basePath, children = _a.children, _b = _a.classes, classes = _b === void 0 ? defaultClasses : _b, className = _a.className, expand = _a.expand, hasBulkActions = _a.hasBulkActions, hover = _a.hover, id = _a.id, onToggleItem = _a.onToggleItem, record = _a.record, resource = _a.resource, rowClick = _a.rowClick, selected = _a.selected, style = _a.style, rest = __rest(_a, [\"basePath\", \"children\", \"classes\", \"className\", \"expand\", \"hasBulkActions\", \"hover\", \"id\", \"onToggleItem\", \"record\", \"resource\", \"rowClick\", \"selected\", \"style\"]);\n    var _c = react_1.useState(false), expanded = _c[0], setExpanded = _c[1];\n    var _d = react_1.useState(computeNbColumns(expand, children, hasBulkActions)), nbColumns = _d[0], setNbColumns = _d[1];\n    react_1.useEffect(function () {\n        // Fields can be hidden dynamically based on permissions;\n        // The expand panel must span over the remaining columns\n        // So we must recompute the number of columns to span on\n        var newNbColumns = computeNbColumns(expand, children, hasBulkActions);\n        if (newNbColumns !== nbColumns) {\n            setNbColumns(newNbColumns);\n        }\n    }, [expand, nbColumns, children, hasBulkActions]);\n    var history = react_router_dom_1.useHistory();\n    var handleToggleExpand = react_1.useCallback(function (event) {\n        setExpanded(!expanded);\n        event.stopPropagation();\n    }, [expanded]);\n    var handleToggleSelection = react_1.useCallback(function (event) {\n        onToggleItem(id);\n        event.stopPropagation();\n    }, [id, onToggleItem]);\n    var handleClick = react_1.useCallback(function (event) { return __awaiter(_this, void 0, void 0, function () {\n        var effect, _a;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    if (!rowClick)\n                        return [2 /*return*/];\n                    if (!(typeof rowClick === 'function')) return [3 /*break*/, 2];\n                    return [4 /*yield*/, rowClick(id, basePath, record)];\n                case 1:\n                    _a = _b.sent();\n                    return [3 /*break*/, 3];\n                case 2:\n                    _a = rowClick;\n                    _b.label = 3;\n                case 3:\n                    effect = _a;\n                    switch (effect) {\n                        case 'edit':\n                            history.push(ra_core_1.linkToRecord(basePath, id));\n                            return [2 /*return*/];\n                        case 'show':\n                            history.push(ra_core_1.linkToRecord(basePath, id, 'show'));\n                            return [2 /*return*/];\n                        case 'expand':\n                            handleToggleExpand(event);\n                            return [2 /*return*/];\n                        case 'toggleSelection':\n                            handleToggleSelection(event);\n                            return [2 /*return*/];\n                        default:\n                            if (effect)\n                                history.push(effect);\n                            return [2 /*return*/];\n                    }\n                    return [2 /*return*/];\n            }\n        });\n    }); }, [\n        basePath,\n        history,\n        handleToggleExpand,\n        handleToggleSelection,\n        id,\n        record,\n        rowClick,\n    ]);\n    return (react_1.default.createElement(react_1.Fragment, null,\n        react_1.default.createElement(core_1.TableRow, __assign({ className: className, key: id, style: style, hover: hover, onClick: handleClick }, rest),\n            expand && (react_1.default.createElement(core_1.TableCell, { padding: \"none\", className: classes.expandIconCell },\n                react_1.default.createElement(ExpandRowButton_1.default, { classes: classes, expanded: expanded, onClick: handleToggleExpand, expandContentId: id + \"-expand\" }))),\n            hasBulkActions && (react_1.default.createElement(core_1.TableCell, { padding: \"checkbox\" },\n                react_1.default.createElement(core_1.Checkbox, { color: \"primary\", className: \"select-item \" + classes.checkbox, checked: selected, onClick: handleToggleSelection }))),\n            react_1.default.Children.map(children, function (field, index) {\n                return react_1.isValidElement(field) ? (react_1.default.createElement(DatagridCell_1.default, __assign({ key: id + \"-\" + (field.props.source || index), className: classnames_1.default(\"column-\" + field.props.source, classes.rowCell), record: record }, { field: field, basePath: basePath, resource: resource }))) : null;\n            })),\n        expand && expanded && (react_1.default.createElement(core_1.TableRow, { key: id + \"-expand\", id: id + \"-expand\" },\n            react_1.default.createElement(core_1.TableCell, { colSpan: nbColumns }, react_1.isValidElement(expand)\n                ? react_1.cloneElement(expand, {\n                    record: record,\n                    basePath: basePath,\n                    resource: resource,\n                    id: String(id),\n                })\n                : react_1.createElement(expand, {\n                    record: record,\n                    basePath: basePath,\n                    resource: resource,\n                    id: String(id),\n                }))))));\n}"
  // compare: "function (prevProps, nextProps) {\n    var _ = prevProps.children, prevPropsWithoutChildren = __rest(prevProps, [\"children\"]);\n    var __ = nextProps.children, nextPropsWithoutChildren = __rest(nextProps, [\"children\"]);\n    return isEqual_1.default(prevPropsWithoutChildren, nextPropsWithoutChildren);\n}"
  // displayName: "string"
  export const DatagridHeaderCell: React.ComponentType<any>;
  // function ShouldUpdate() {
  //         _classCallCheck(this, ShouldUpdate);
  //
  //         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  //       }
  export const DatagridCell: React.ComponentType<any>;
  // function (_a) {
  //     var className = _a.className, field = _a.field, record = _a.record, basePath = _a.basePath, resource = _a.resource, rest = __rest(_a, ["className", "field", "record", "basePath", "resource"]);
  //     return (react_1.default.createElement(TableCell_1.default, __assign({ className: classnames_1.default(className, field.props.cellClassName), align: field.props.textAlign }, sanitizeRestProps(rest)), react_1.default.cloneElement(field, {
  //         record: record,
  //         basePath: field.props.basePath || basePath,
  //         resource: resource,
  //     })));
  // }
  export const Filter: React.ComponentType<any>;
  // function (props) {
  //     var classes = useStyles({ classes: props.classes });
  //     var renderButton = function () {
  //         var classesOverride = props.classes, context = props.context, resource = props.resource, children = props.children, showFilter = props.showFilter, hideFilter = props.hideFilter, displayedFilters = props.displayedFilters, filterValues = props.filterValues, variant = props.variant, rest = __rest(props, ["classes", "context", "resource", "children", "showFilter", "hideFilter", "displayedFilters", "filterValues", "variant"]);
  //         return (react_1.default.createElement(FilterButton_1.default, __assign({ className: classes.button, resource: resource, filters: react_1.default.Children.toArray(children), showFilter: showFilter, displayedFilters: displayedFilters, filterValues: filterValues }, ra_core_1.sanitizeListRestProps(rest))));
  //     };
  //     var renderForm = function () {
  //         var classesOverride = props.classes, context = props.context, resource = props.resource, children = props.children, hideFilter = props.hideFilter, displayedFilters = props.displayedFilters, showFilter = props.showFilter, filterValues = props.filterValues, setFilters = props.setFilters, rest = __rest(props, ["classes", "context", "resource", "children", "hideFilter", "displayedFilters", "showFilter", "filterValues", "setFilters"]);
  //         return (react_1.default.createElement(FilterForm_1.default, __assign({ className: classes.form, resource: resource, filters: react_1.default.Children.toArray(children), hideFilter: hideFilter, displayedFilters: displayedFilters, initialValues: filterValues, setFilters: setFilters }, ra_core_1.sanitizeListRestProps(rest))));
  //     };
  //     return props.context === 'button' ? renderButton() : renderForm();
  // }
  export const FilterButton: React.ComponentType<any>;
  // function (_a) {
  //     var filters = _a.filters, displayedFilters = _a.displayedFilters, filterValues = _a.filterValues, showFilter = _a.showFilter, classesOverride = _a.classes, className = _a.className, resource = _a.resource, rest = __rest(_a, ["filters", "displayedFilters", "filterValues", "showFilter", "classes", "className", "resource"]);
  //     var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
  //     var anchorEl = react_1.useRef();
  //     var classes = useStyles({ classes: classesOverride });
  //     var hiddenFilters = filters.filter(function (filterElement) {
  //         return !filterElement.props.alwaysOn &&
  //             !displayedFilters[filterElement.props.source] &&
  //             typeof get_1.default(filterValues, filterElement.props.source) ===
  //                 'undefined';
  //     });
  //     var handleClickButton = react_1.useCallback(function (event) {
  //         // This prevents ghost click.
  //         event.preventDefault();
  //         setOpen(true);
  //         anchorEl.current = event.currentTarget;
  //     }, [anchorEl, setOpen]);
  //     var handleRequestClose = react_1.useCallback(function () {
  //         setOpen(false);
  //     }, [setOpen]);
  //     var handleShow = react_1.useCallback(function (_a) {
  //         var source = _a.source, defaultValue = _a.defaultValue;
  //         showFilter(source, defaultValue);
  //         setOpen(false);
  //     }, [showFilter, setOpen]);
  //     if (hiddenFilters.length === 0)
  //         return null;
  //     return (react_1.default.createElement("div", __assign({ className: classnames_1.default(classes.root, className) }, rest),
  //         react_1.default.createElement(Button_1.default, { className: "add-filter", label: "ra.action.add_filter", onClick: handleClickButton },
  //             react_1.default.createElement(FilterList_1.default, null)),
  //         react_1.default.createElement(Menu_1.default, { open: open, anchorEl: anchorEl.current, onClose: handleRequestClose }, hiddenFilters.map(function (filterElement) { return (react_1.default.createElement(FilterButtonMenuItem_1.default, { key: filterElement.props.source, filter: filterElement.props, resource: resource, onShow: handleShow })); }))));
  // }
  export const FilterForm: React.ComponentType<any>;
  // function (_a) {
  //     var classesOverride = _a.classes, props = __rest(_a, ["classes"]);
  //     var classes = useStyles({ classes: classesOverride });
  //     var mergedInitialValuesWithDefaultValues = exports.mergeInitialValuesWithDefaultValues(props);
  //     var initialValues = props.initialValues, rest = __rest(props, ["initialValues"]);
  //     return (react_1.default.createElement(react_final_form_1.Form, { onSubmit: handleFinalFormSubmit, initialValues: mergedInitialValuesWithDefaultValues, render: function (formProps) { return (react_1.default.createElement(react_1.default.Fragment, null,
  //             react_1.default.createElement(react_final_form_1.FormSpy, { subscription: FormSpySubscription, onChange: function (_a) {
  //                     var pristine = _a.pristine, values = _a.values;
  //                     if (pristine) {
  //                         return;
  //                     }
  //                     props && props.setFilters(values);
  //                 } }),
  //             react_1.default.createElement(exports.FilterForm, __assign({ classes: classes }, formProps, rest)))); } }));
  // }
  export const List: React.ComponentType<any>;
  // function (props) { return react_1.default.createElement(exports.ListView, __assign({}, props, ra_core_1.useListController(props))); }
  export const ListView: React.ComponentType<any>;
  // function (props) {
  //     var _a;
  //     var actions = props.actions, aside = props.aside, filter = props.filter, filters = props.filters, bulkActionButtons = props.bulkActionButtons, pagination = props.pagination, children = props.children, className = props.className, classesOverride = props.classes, Content = props.component, exporter = props.exporter, title = props.title, rest = __rest(props, ["actions", "aside", "filter", "filters", "bulkActionButtons", "pagination", "children", "className", "classes", "component", "exporter", "title"]);
  //     ra_core_1.useCheckMinimumRequiredProps('List', ['children'], props);
  //     var classes = exports.useStyles({ classes: classesOverride });
  //     var defaultTitle = rest.defaultTitle, version = rest.version;
  //     var controllerProps = ra_core_1.getListControllerProps(rest);
  //     return (react_1.default.createElement("div", __assign({ className: classnames_1.default('list-page', classes.root, className) }, sanitizeRestProps(rest)),
  //         react_1.default.createElement(Title_1.default, { title: title, defaultTitle: defaultTitle }),
  //         (filters || actions) && (react_1.default.createElement(ListToolbar_1.default, __assign({ filters: filters }, controllerProps, { actions: actions, exporter: exporter, permanentFilter: filter }))),
  //         react_1.default.createElement("div", { className: classes.main },
  //             react_1.default.createElement(Content, { className: classnames_1.default(classes.content, (_a = {},
  //                     _a[classes.bulkActionsDisplayed] = controllerProps.selectedIds.length > 0,
  //                     _a)), key: version },
  //                 bulkActionButtons !== false && bulkActionButtons && (react_1.default.createElement(BulkActionsToolbar_1.default, __assign({}, controllerProps), bulkActionButtons)),
  //                 children &&
  //                     react_1.cloneElement(react_1.Children.only(children), __assign({}, controllerProps, { hasBulkActions: bulkActionButtons !== false })),
  //                 pagination && react_1.cloneElement(pagination, controllerProps)),
  //             aside && react_1.cloneElement(aside, controllerProps))));
  // }
  export const ListActions: React.ComponentType<any>;
  // function (_a) {
  //     var currentSort = _a.currentSort, className = _a.className, resource = _a.resource, filters = _a.filters, displayedFilters = _a.displayedFilters, exporter = _a.exporter, filterValues = _a.filterValues, permanentFilter = _a.permanentFilter, hasCreate = _a.hasCreate, basePath = _a.basePath, selectedIds = _a.selectedIds, onUnselectItems = _a.onUnselectItems, showFilter = _a.showFilter, total = _a.total, rest = __rest(_a, ["currentSort", "className", "resource", "filters", "displayedFilters", "exporter", "filterValues", "permanentFilter", "hasCreate", "basePath", "selectedIds", "onUnselectItems", "showFilter", "total"]);
  //     return react_1.useMemo(function () { return (react_1.default.createElement(TopToolbar_1.default, __assign({ className: className }, ra_core_1.sanitizeListRestProps(rest)),
  //         filters &&
  //             react_1.cloneElement(filters, {
  //                 resource: resource,
  //                 showFilter: showFilter,
  //                 displayedFilters: displayedFilters,
  //                 filterValues: filterValues,
  //                 context: 'button',
  //             }),
  //         hasCreate && react_1.default.createElement(button_1.CreateButton, { basePath: basePath }),
  //         exporter !== false && (react_1.default.createElement(button_1.ExportButton, { disabled: total === 0, resource: resource, sort: currentSort, filter: __assign({}, filterValues, permanentFilter), exporter: exporter })))); }, [resource, displayedFilters, filterValues, selectedIds, filters, total] // eslint-disable-line react-hooks/exhaustive-deps
  //     );
  // }
  export const ListGuesser: React.ComponentType<any>;
  // function (props) { return (react_1.default.createElement(ListViewGuesser, __assign({}, props, ra_core_1.useListController(props)))); }
  export const ListToolbar: {};
  // $$typeof: "symbol"
  // type: "function (_a) {\n    var _b = _a.classes, classes = _b === void 0 ? defaultClasses : _b, filters = _a.filters, filterValues = _a.filterValues, // dynamically set via the UI by the user\n    permanentFilter = _a.permanentFilter, // set in the List component by the developer\n    actions = _a.actions, exporter = _a.exporter, rest = __rest(_a, [\"classes\", \"filters\", \"filterValues\", \"permanentFilter\", \"actions\", \"exporter\"]);\n    var styles = useStyles({ classes: classes });\n    return (react_1.default.createElement(Toolbar_1.default, { className: styles.toolbar },\n        filters &&\n            react_1.default.cloneElement(filters, __assign({}, rest, { filterValues: filterValues, context: 'form' })),\n        react_1.default.createElement(\"span\", null),\n        actions &&\n            react_1.default.cloneElement(actions, __assign({}, rest, { className: styles.actions, exporter: exporter,\n                filters: filters,\n                filterValues: filterValues,\n                permanentFilter: permanentFilter }, actions.props))));\n}"
  // compare: null
  export const Pagination: {};
  // $$typeof: "symbol"
  // type: "function (_a) {\n    var loading = _a.loading, page = _a.page, perPage = _a.perPage, rowsPerPageOptions = _a.rowsPerPageOptions, total = _a.total, setPage = _a.setPage, setPerPage = _a.setPerPage, rest = __rest(_a, [\"loading\", \"page\", \"perPage\", \"rowsPerPageOptions\", \"total\", \"setPage\", \"setPerPage\"]);\n    react_1.useEffect(function () {\n        if (page < 1 || isNaN(page)) {\n            setPage(1);\n        }\n    }, [page, setPage]);\n    var translate = ra_core_1.useTranslate();\n    var isSmall = core_1.useMediaQuery(function (theme) { return theme.breakpoints.down('sm'); });\n    var getNbPages = function () { return Math.ceil(total / perPage) || 1; };\n    /**\n     * Warning: material-ui's page is 0-based\n     */\n    var handlePageChange = react_1.useCallback(function (event, page) {\n        event && event.stopPropagation();\n        if (page < 0 || page > getNbPages() - 1) {\n            throw new Error(translate('ra.navigation.page_out_of_boundaries', {\n                page: page + 1,\n            }));\n        }\n        setPage(page + 1);\n    }, [total, perPage, setPage, translate] // eslint-disable-line react-hooks/exhaustive-deps\n    );\n    var handlePerPageChange = react_1.useCallback(function (event) {\n        setPerPage(event.target.value);\n    }, [setPerPage]);\n    var labelDisplayedRows = react_1.useCallback(function (_a) {\n        var from = _a.from, to = _a.to, count = _a.count;\n        return translate('ra.navigation.page_range_info', {\n            offsetBegin: from,\n            offsetEnd: to,\n            total: count,\n        });\n    }, [translate]);\n    if (total === 0) {\n        return loading ? react_1.default.createElement(core_1.Toolbar, { variant: \"dense\" }) : react_1.default.createElement(PaginationLimit_1.default, null);\n    }\n    if (isSmall) {\n        return (react_1.default.createElement(core_1.TablePagination, __assign({ count: total, rowsPerPage: perPage, page: page - 1, onChangePage: handlePageChange, rowsPerPageOptions: emptyArray, component: \"span\", labelDisplayedRows: labelDisplayedRows }, ra_core_1.sanitizeListRestProps(rest))));\n    }\n    return (react_1.default.createElement(core_1.TablePagination, __assign({ count: total, rowsPerPage: perPage, page: page - 1, onChangePage: handlePageChange, onChangeRowsPerPage: handlePerPageChange, ActionsComponent: PaginationActions_1.default, component: \"span\", labelRowsPerPage: translate('ra.navigation.page_rows_per_page'), labelDisplayedRows: labelDisplayedRows, rowsPerPageOptions: rowsPerPageOptions }, ra_core_1.sanitizeListRestProps(rest))));\n}"
  // compare: null
  export const PaginationLimit: React.ComponentType<any>;
  // function ShouldUpdate() {
  //         _classCallCheck(this, ShouldUpdate);
  //
  //         return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  //       }
  export const SimpleList: React.ComponentType<any>;
  // function (_a) {
  //     var basePath = _a.basePath, className = _a.className, classesOverride = _a.classes, data = _a.data, hasBulkActions = _a.hasBulkActions, ids = _a.ids, loading = _a.loading, leftAvatar = _a.leftAvatar, leftIcon = _a.leftIcon, linkType = _a.linkType, onToggleItem = _a.onToggleItem, primaryText = _a.primaryText, rightAvatar = _a.rightAvatar, rightIcon = _a.rightIcon, secondaryText = _a.secondaryText, selectedIds = _a.selectedIds, tertiaryText = _a.tertiaryText, total = _a.total, rest = __rest(_a, ["basePath", "className", "classes", "data", "hasBulkActions", "ids", "loading", "leftAvatar", "leftIcon", "linkType", "onToggleItem", "primaryText", "rightAvatar", "rightIcon", "secondaryText", "selectedIds", "tertiaryText", "total"]);
  //     var classes = useStyles({ classes: classesOverride });
  //     return ((loading || total > 0) && (react_1.default.createElement(List_1.default, __assign({ className: className }, ra_core_1.sanitizeListRestProps(rest)), ids.map(function (id) { return (react_1.default.createElement(LinkOrNot, { linkType: linkType, basePath: basePath, id: id, key: id },
  //         react_1.default.createElement(ListItem_1.default, { button: !!linkType },
  //             leftIcon && (react_1.default.createElement(ListItemIcon_1.default, null, leftIcon(data[id], id))),
  //             leftAvatar && (react_1.default.createElement(ListItemAvatar_1.default, null,
  //                 react_1.default.createElement(Avatar_1.default, null, leftAvatar(data[id], id)))),
  //             react_1.default.createElement(ListItemText_1.default, { primary: react_1.default.createElement("div", null,
  //                     primaryText(data[id], id),
  //                     tertiaryText && (react_1.default.createElement("span", { className: classes.tertiary }, tertiaryText(data[id], id)))), secondary: secondaryText && secondaryText(data[id], id) }),
  //             (rightAvatar || rightIcon) && (react_1.default.createElement(ListItemSecondaryAction_1.default, null,
  //                 rightAvatar && (react_1.default.createElement(Avatar_1.default, null, rightAvatar(data[id], id))),
  //                 rightIcon && (react_1.default.createElement(ListItemIcon_1.default, null, rightIcon(data[id], id)))))))); }))));
  // }
  export const SingleFieldList: React.ComponentType<any>;
  // function SingleFieldList(_a) {
  //     var classesOverride = _a.classes, className = _a.className, ids = _a.ids, data = _a.data, loaded = _a.loaded, resource = _a.resource, basePath = _a.basePath, children = _a.children, linkType = _a.linkType, rest = __rest(_a, ["classes", "className", "ids", "data", "loaded", "resource", "basePath", "children", "linkType"]);
  //     var classes = useStyles({ classes: classesOverride });
  //     if (loaded === false) {
  //         return react_1.default.createElement(LinearProgress_1.default, null);
  //     }
  //     return (react_1.default.createElement("div", __assign({ className: classnames_1.default(classes.root, className) }, sanitizeRestProps(rest)), ids.map(function (id) {
  //         var resourceLinkPath = !linkType
  //             ? false
  //             : ra_core_1.linkToRecord(basePath, id, linkType);
  //         if (resourceLinkPath) {
  //             return (react_1.default.createElement(Link_1.default, { className: classes.link, key: id, to: resourceLinkPath, onClick: stopPropagation }, react_1.cloneElement(react_1.Children.only(children), {
  //                 record: data[id],
  //                 resource: resource,
  //                 basePath: basePath,
  //                 // Workaround to force ChipField to be clickable
  //                 onClick: handleClick,
  //             })));
  //         }
  //         return react_1.cloneElement(react_1.Children.only(children), {
  //             key: id,
  //             record: data[id],
  //             resource: resource,
  //             basePath: basePath,
  //         });
  //     })));
  // }
}
