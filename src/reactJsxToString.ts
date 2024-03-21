import { isArray, isString, get, isUndefined } from "lodash";
import React from "react";
import xmlFormat from "xml-formatter";

export const reactJsxToString = (
  node: React.ReactElement,
  params?: {
    helper?: (
      type: string,
      attributes: Record<string, any>,
      children: string
    ) => string | null;
    beautify?: boolean;
  }
): string => {
  const beautify = params?.beautify;
  const mjmlString = renderNode(node, params);
  if (isUndefined(beautify) || beautify) {
    return xmlFormat(mjmlString);
  }
  return mjmlString;
};

const renderNode = (
  node: React.ReactElement,
  params?: {
    helper?: (
      type: string,
      attributes: Record<string, any>,
      children: string
    ) => string | null;
  }
) => {
  if (isString(node)) return node;
  const type = node.type?.toString();

  let children = "";
  if (isString(node.props.children)) {
    children = node.props.children;
  } else if (isArray(node.props.children)) {
    children = node.props.children
      .map((item: any) => renderNode(item, params))
      .join("");
  } else if (get(node.props.children, "type")) {
    children = renderNode(node.props.children, params);
  }
  if (!type || type.includes("Symbol")) {
    return children;
  }

  if (params?.helper) {
    const result = params.helper(
      type,
      { ...node.props, children: undefined },
      children
    );
    if (result !== null) {
      return result;
    }
  }

  const attributes = Object.keys({ ...node.props, children: undefined })
    .filter((key) => key !== "children")
    .map((key) => `${key}="${node.props[key]}"`)
    .join(" ");

  return `<${type} ${attributes}>${children}</${type}>`;
};
