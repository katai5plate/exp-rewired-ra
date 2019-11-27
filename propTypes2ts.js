const mock = require("mock-require");

const g = (x, t = x) => ({
  value: x,
  type: t,
  isOptional: true,
  isRequired: {
    value: x,
    type: t,
    isOptional: false
  }
});

const converter = {
  node: g("PropTypes.ReactNodeLike"),
  element: g("PropTypes.ReactElementLike"),
  elementType: g("PropTypes.ReactComponentLike"),
  string: g("string"),
  number: g("number"),
  bool: g("boolean"),
  object: g("object"),
  func: g("function"),
  any: g("any"),
  oneOfType: x => g(x.join(" | "), "oneOfType"),
  arrayOf: x => g(`${x}[]`, "arrayOf"),
  oneOf: x => g(`"${x.join('" | "')}"`, "oneOf"),
  instanceOf: x => g(x, "instanceOf"),
  shape: x => g(x, "shape"),
  exact: x => g(x, "exact") // shapeと殆ど同じ？
};

mock("prop-types", {
  ...converter,
  default: {
    ...converter,
    PropTypes: {
      ...converter
    }
  },
  PropTypes: {
    ...converter
  }
});

const data = require("ra-ui-materialui").Login.propTypes;

console.log(
  JSON.stringify(
    Object.entries(data).map(([propName, content]) => {
      content.isRequired && delete content.isRequired;
      return content;
    }),
    null,
    2
  )
);
