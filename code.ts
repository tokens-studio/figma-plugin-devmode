// This plugin will generate a sample codegen plugin
// that appears in the Element tab of the Inspect panel.

// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

const properties = {
  sizing: "sizing",
  height: "height",
  width: "width",
  spacing: "spacing",
  verticalPadding: "verticalPadding",
  horizontalPadding: "horizontalPadding",
  paddingTop: "paddingTop",
  paddingRight: "paddingRight",
  paddingBottom: "paddingBottom",
  paddingLeft: "paddingLeft",
  itemSpacing: "itemSpacing",
  fill: "fill",
  backgroundBlur: "backgroundBlur",
  border: "border",
  borderTop: "borderTop",
  borderRight: "borderRight",
  borderBottom: "borderBottom",
  borderLeft: "borderLeft",
  borderColor: "borderColor",
  borderRadius: "borderRadius",
  borderRadiusTopLeft: "borderRadiusTopLeft",
  borderRadiusTopRight: "borderRadiusTopRight",
  borderRadiusBottomRight: "borderRadiusBottomRight",
  borderRadiusBottomLeft: "borderRadiusBottomLeft",
  borderWidth: "borderWidth",
  borderWidthTop: "borderWidthTop",
  borderWidthRight: "borderWidthRight",
  borderWidthBottom: "borderWidthBottom",
  borderWidthLeft: "borderWidthLeft",
  boxShadow: "boxShadow",
  opacity: "opacity",
  fontFamilies: "fontFamilies",
  fontWeights: "fontWeights",
  fontSizes: "fontSizes",
  lineHeights: "lineHeights",
  typography: "typography",
  composition: "composition",
  letterSpacing: "letterSpacing",
  paragraphSpacing: "paragraphSpacing",
  textCase: "textCase",
  dimension: "dimension",
  textDecoration: "textDecoration",
  asset: "asset",
  visibility: "visibility",
  text: "text",
  number: "number",
  tokenValue: "tokenValue",
  value: "value",
  tokenName: "tokenName",
  description: "description",
};

// This provides the callback to generate the code.
figma.codegen.on("generate", (event: any): CodegenResult[] => {
  const tokenKeys = Object.keys(properties);

  const code = tokenKeys
    .map((key) => {
      const value = event.node.getSharedPluginData("tokens", key);

      return value && `${key}: ${value};`;
    })
    .filter((x) => x)
    .join("\n");

  return [
    {
      language: "CSS",
      code: code === "" ? "/* No Tokens found */" : code,
      title: "Applied Tokens (Tokens Studio)",
    },
  ];
});
