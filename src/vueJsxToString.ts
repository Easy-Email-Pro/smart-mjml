import { isArray, isUndefined } from "lodash";
import xmlFormat from "xml-formatter";
import { VNode, isVNode } from "vue";

export const vueJsxToString = (
  node: VNode,
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

export const renderNode = (
  node: VNode,
  params?: {
    helper?: (
      type: string,
      attributes: Record<string, any>,
      children: string
    ) => string | null;
  }
) => {
  if (!isVNode(node)) {
    return node;
  }

  let children = "";
  if (isArray(node)) {
    children = node
      .map((item) => {
        if (isVNode(item)) {
          return renderNode(item);
        }
        return item;
      })
      .join("");
  } else {
    const nodeChildren = node.children;
    if (isVNode(nodeChildren)) {
      children = renderNode(nodeChildren);
    } else {
      if (isArray(nodeChildren)) {
        children = nodeChildren
          .map((item) => {
            if (isVNode(item)) {
              return renderNode(item);
            }
            return item;
          })
          .join("");
      } else {
        children = nodeChildren?.toString() || "";
      }
    }
  }

  if (isArray(node.children)) {
    children = node.children
      .map((item) => {
        if (isVNode(item)) {
          return renderNode(item);
        }
        return item;
      })
      .join("");
  }
  const type = node.type?.toString();
  if (!type || type.includes("Symbol")) {
    return children;
  }

  if (params?.helper) {
    const result = params.helper(type, node.props || {}, children);
    if (result !== null) {
      return result;
    }
  }

  const attributes = Object.keys({ ...node.props, children: undefined })
    .filter((key) => key !== "children")
    .map((key) => `${key}="${node.props?.[key]}"`)
    .join(" ");
  return `<${type} ${attributes}>${children}</${type}>`;
};
