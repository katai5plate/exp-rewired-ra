declare module "ra-ui-materialui" {
  import { ReactNodeLike } from "prop-types";

  type JSComponent = React.ComponentType<any>;
  type TSIncompleteComponent = React.ComponentType<any>;

  export const Link: React.ComponentType<{
    className?: string;
    children?: ReactNodeLike;
    to?: string | object;
  }>;
  import defaultTheme from "ra-ui-materialui/src/defaultTheme";
  export { defaultTheme };

  // auth
  export * from "ra-ui-materialui/src/auth";

  // button
  export const BulkDeleteButton: JSComponent;
  export const BulkDeleteWithConfirmButton: JSComponent;
  export const BulkDeleteWithUndoButton: JSComponent;
  export const Button: JSComponent;
  export const CloneButton: JSComponent;
  export const CreateButton: JSComponent;
  export const DeleteButton: JSComponent;
  export const DeleteWithConfirmButton: JSComponent;
  export const DeleteWithUndoButton: JSComponent;
  export const EditButton: JSComponent;
  export const ExportButton: TSIncompleteComponent;
  export const ListButton: JSComponent;
  export const SaveButton: JSComponent;
  export const ShowButton: JSComponent;
  export const RefreshButton: JSComponent;
  export const RefreshIconButton: JSComponent;

  // detail
  export const Create: JSComponent;
  export const CreateView: JSComponent;
  export const CreateActions: JSComponent;
  export const Edit: JSComponent;
  export const EditView: JSComponent;
  export const EditActions: JSComponent;
  export const EditGuesser: JSComponent;
  export const Show: JSComponent;
  export const ShowView: JSComponent;
  export const ShowActions: JSComponent;
  export const ShowGuesser: JSComponent;
  export const SimpleShowLayout: JSComponent;
  export const TabbedShowLayout: JSComponent;
  export const Tab: JSComponent;
  export const TabbedShowLayoutTabs: JSComponent;

  // field
  export * from "ra-ui-materialui/src/field/types";
  export * from "ra-ui-materialui/src/field/ArrayField";
  export * from "ra-ui-materialui/src/field/BooleanField";
  export * from "ra-ui-materialui/src/field/ChipField";
  export * from "ra-ui-materialui/src/field/DateField";
  export const EmailField: TSIncompleteComponent;
  export * from "ra-ui-materialui/src/field/FileField";
  export * from "ra-ui-materialui/src/field/ImageField";
  export const FunctionField: TSIncompleteComponent;
  export * from "ra-ui-materialui/src/field/NumberField";
  export const ReferenceField: JSComponent;
  export const ReferenceArrayField: JSComponent;
  export const ReferenceManyField: JSComponent;
  export const RichTextField: TSIncompleteComponent;
  export * from "ra-ui-materialui/src/field/SelectField";
  export const TextField: TSIncompleteComponent;
  export const UrlField: TSIncompleteComponent;

  // form
  export const FormInput: JSComponent;
  export const FormTab: JSComponent;
  export const SimpleForm: JSComponent;
  export const SimpleFormIterator: JSComponent;
  export const TabbedForm: JSComponent;
  export const TabbedFormTabs: JSComponent;
  export const Toolbar: JSComponent;
  export function getFormInitialValues(
    initialValues?: any,
    defaultValue?: any,
    record?: any
  ): any;

  // input
  export * from "ra-ui-materialui/src/input/ArrayInput";
  export const AutocompleteArrayInput: TSIncompleteComponent;
  export const AutocompleteInput: TSIncompleteComponent;
  export const BooleanInput: TSIncompleteComponent;
  export const CheckboxGroupInput: TSIncompleteComponent;
  export * from "ra-ui-materialui/src/input/DateInput";
  export * from "ra-ui-materialui/src/input/DateTimeInput";
  export const FileInput: TSIncompleteComponent;
  export const ImageInput: TSIncompleteComponent;
  export const InputHelperText: TSIncompleteComponent;
  export const InputPropTypes: TSIncompleteComponent;
  export const Labeled: TSIncompleteComponent;
  export const NullableBooleanInput: TSIncompleteComponent;
  export const NumberInput: TSIncompleteComponent;
  export * from "ra-ui-materialui/src/input/RadioButtonGroupInput";
  export const ReferenceArrayInput: JSComponent;
  export * from "ra-ui-materialui/src/input/ReferenceInput";
  export const ResettableTextField: JSComponent;
  export const SearchInput: TSIncompleteComponent;
  export const SelectArrayInput: TSIncompleteComponent;
  export const SelectInput: TSIncompleteComponent;
  export * from "ra-ui-materialui/src/input/TextInput";

  // layout
  export const AppBar: JSComponent;
  export const CardActions: TSIncompleteComponent;
  export const CardContentInner: JSComponent;
  export const Confirm: JSComponent;
  export const DashboardMenuItem: JSComponent;
  export const DeviceTestWrapper: JSComponent;
  export const Error: JSComponent;
  export const HideOnScroll: TSIncompleteComponent;
  export const Layout: JSComponent;
  export const Loading: JSComponent;
  export const LinearProgress: JSComponent;
  export const LoadingIndicator: JSComponent;
  export const Menu: JSComponent;
  export const MenuItemLink: JSComponent;
  export const NotFound: JSComponent;
  export const Notification: TSIncompleteComponent;
  export const Responsive: JSComponent;
  export const Sidebar: JSComponent;
  export const Title: JSComponent;
  export const TitleForRecord: JSComponent;
  export const TitlePropType: JSComponent;
  export const TopToolbar: JSComponent;
  export const UserMenu: JSComponent;

  // list
  export const BulkActionsToolbar: JSComponent;
  export const BulkDeleteAction: JSComponent;
  export const Datagrid: JSComponent;
  export const DatagridLoading: JSComponent;
  export const DatagridBody: JSComponent;
  export const DatagridRow: JSComponent;
  export const DatagridHeaderCell: JSComponent;
  export const DatagridCell: JSComponent;
  export const ExpandRowButton: TSIncompleteComponent;
  export const Filter: JSComponent;
  export const FilterButton: JSComponent;
  export const FilterForm: JSComponent;
  export const List: JSComponent;
  export const ListView: JSComponent;
  export const ListActions: JSComponent;
  export const ListGuesser: JSComponent;
  export const ListToolbar: JSComponent;
  export const Pagination: JSComponent;
  export const PaginationLimit: JSComponent;
  export const PureDatagridBody: JSComponent;
  export const PureDatagridRow: JSComponent;
  export const SimpleList: JSComponent;
  export const SingleFieldList: JSComponent;
}
