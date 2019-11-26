declare module "react-admin" {
  import { AdminProps, I18nProvider } from "ra-core";
  import { CoreAdminUIProps } from "ra-core/esm/core/CoreAdminUI";
  import { AdminContextProps } from "ra-core/esm/core/CoreAdminContext";
  import { AdminRouterProps } from "ra-core/esm/core/CoreAdminRouter";

  const Admin: React.FunctionComponent<AdminProps>;
  const AdminUI: React.FunctionComponent<CoreAdminUIProps>;
  const AdminContext: React.FunctionComponent<AdminContextProps>;
  const AdminRouter: React.FunctionComponent<AdminRouterProps>;
  const defaultI18nProvider: I18nProvider;

  export * from "ra-core";
  export * from "ra-ui-materialui";
  export { Admin, AdminContext, AdminRouter, AdminUI, defaultI18nProvider };
}
