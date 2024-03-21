type Pixel = `${number}px`;
type PixelAndPercent = `${number}${"%" | "px"}`;

type NumberString = `${number}`;

type Direction = "ltr" | "rtl";

type TextAlign = "left" | "right" | "center" | "justify";

type Align = "left" | "right" | "center" | "justify";

type VerticalAlign = "middle" | "top" | "bottom";

type LetterSpacing = Pixel | `${number}em`;

type Max4Pixel =
  | `${Pixel}`
  | `${Pixel} ${Pixel}`
  | `${Pixel} ${Pixel} ${Pixel}`
  | `${Pixel} ${Pixel} ${Pixel} ${Pixel}`;

interface BasicElement {
  "mj-class"?: string;
  "css-class"?: string;
  children?: any;
}

interface EndingTagElement extends Omit<BasicElement, "children"> {
  children?: any;
}

interface MJMLBody extends BasicElement {
  "background-color"?: string;
  width?: string;
}

interface MJMLInclude extends BasicElement {
  path: string;
  type?: string;
  "css-inline"?: "inline";
}

interface MJMLHead extends Omit<BasicElement, "mj-class" | "css-class"> {}
interface MJMLAttributes extends Omit<BasicElement, "mj-class" | "css-class"> {}
interface MJMLBreakpoint extends Omit<BasicElement, "mj-class" | "css-class"> {
  width: string;
}
interface MJMLFont {
  name: string;
  href: string;
}
interface MJMLPreview {
  children: string;
}
interface MJMLAll {
  [key: string]: string;
}
interface MJMLHTMLAttributes extends BasicElement {}
interface MJMLSelector extends BasicElement {
  path: string;
}
interface MJMLHTMLAttribute {
  name: string;
  children: string;
}
interface MJMLStyle {
  inline?: "inline";
  children?: any | string | string[];
}
interface MJMLTitle {
  children: string;
}

interface MJMLSection extends BasicElement {
  "background-color"?: string;
  "background-position"?: string;
  "background-position-x"?: string;
  "background-position-y"?: string;
  "background-repeat"?: "repeat" | "no-repeat";
  "background-size"?: string;
  "background-url"?: string;
  border?: string;
  "border-radius"?: string;
  direction?: Direction;
  "full-width"?: string;
  padding?: Max4Pixel;
  "padding-top"?: Pixel;
  "padding-bottom"?: Pixel;
  "padding-left"?: Pixel;
  "padding-right"?: Pixel;
  "text-align"?: string;
}
interface MJMLWrapper extends MJMLSection {}
interface MJMLGroup extends BasicElement {
  width?: string;
  "vertical-align"?: VerticalAlign;
  "background-color"?: string;
  direction?: Direction;
}
interface MJMLColumn extends BasicElement {
  border?: string;
  "border-bottom"?: string;
  "border-left"?: string;
  "border-right"?: string;
  "border-top"?: string;
  "background-color"?: string;
  "border-radius"?: PixelAndPercent;
  "inner-border"?: string;
  "inner-border-bottom"?: string;
  "inner-border-left"?: string;
  "inner-border-right"?: string;
  "inner-border-top"?: string;
  "inner-border-radius"?: PixelAndPercent;
  "inner-background-color"?: "color";
  padding?: Max4Pixel;
  "vertical-align"?: string;
  width?: PixelAndPercent;
  "padding-top"?: Pixel;
  "padding-bottom"?: Pixel;
  "padding-left"?: Pixel;
  "padding-right"?: Pixel;
}
interface MJMLText extends EndingTagElement {
  color?: string;
  "font-family"?: string;
  "font-size"?: Pixel;
  "font-style"?: string;
  "font-weight"?: string;
  "line-height"?: string | number;
  "letter-spacing"?: LetterSpacing;
  height?: Pixel;
  "text-decoration"?: string;
  "text-transform"?: string;
  align?: TextAlign;
  "background-color"?: string;
  "container-background-color"?: string;
  padding?: Max4Pixel;
  "padding-top"?: Pixel;
  "padding-bottom"?: Pixel;
  "padding-left"?: Pixel;
  "padding-right"?: Pixel;
}
interface MJMLButton extends EndingTagElement {
  align?: Align;
  color?: string;
  "background-color"?: string;
  "container-background-color"?: string;
  border?: string;
  "border-radius"?: string;
  href?: string;
  rel?: string;
  target?: string;
  title?: string;
  padding?: Max4Pixel;
  "inner-padding"?: Max4Pixel;
  "text-align"?: string;
  "vertical-align"?: VerticalAlign;
  width?: PixelAndPercent;
  "font-family"?: string;
  "font-size"?: Pixel;
  "font-style"?: string;
  "font-weight"?: string;
  "line-height"?: string | number;
  "letter-spacing"?: LetterSpacing;
  height?: PixelAndPercent;
  "text-decoration"?: string;
  "text-transform"?: string;
  "padding-top"?: Pixel;
  "padding-bottom"?: Pixel;
  "padding-left"?: Pixel;
  "padding-right"?: Pixel;
}
interface MJMLImage extends BasicElement {
  alt?: string;
  src?: string;
  title?: string;
  href?: string;
  target?: string;
  border?: string;
  height?: Pixel | "auto";
  "max-height"?: PixelAndPercent;
  "text-decoration"?: string;
  "text-transform"?: string;
  align?: Align;
  "container-background-color"?: string;
  width?: Pixel;
  padding?: Max4Pixel;
  "padding-top"?: Pixel;
  "padding-bottom"?: Pixel;
  "padding-left"?: Pixel;
  "padding-right"?: Pixel;
  "border-radius"?: string;
}
interface MJMLDivider extends BasicElement {
  "border-color"?: string;
  "border-style"?: string;
  "border-width"?: string;
  "container-background-color"?: string;
  width?: string;
  align?: "left" | "center" | "right";
  padding?: Max4Pixel;
  "padding-top"?: Pixel;
  "padding-bottom"?: Pixel;
  "padding-left"?: Pixel;
  "padding-right"?: Pixel;
}
interface MJMLSpacer extends BasicElement {
  "container-background-color"?: string;
  height?: string;
  padding?: Max4Pixel;
}
interface MJMLCarousel extends BasicElement {
  align?: "horizontal" | "alignment";
  "container-background-color"?: string;
  "border-radius"?: string;
  "icon-width"?: string;
  "left-icon"?: string;
  "right-icon"?: string;
  "tb-border"?: string;
  "tb-border-radius"?: string;
  "tb-hover-border-color"?: string;
  "tb-selected-border-color"?: string;
  "tb-width"?: string;
  thumbnails?: string;
}

interface MJMLCarouselImage extends EndingTagElement {
  alt?: string;
  href?: string;
  rel?: string;
  src?: string;
  target?: string;
  "thumbnails-src"?: string;
  title: string;
}

interface MJMLAccordion extends BasicElement {
  border?: string;
  "container-background-color"?: string;
  "font-family"?: string;
  "icon-align"?: string;
  "icon-height"?: string;
  "icon-position"?: string;
  "icon-unwrapped-alt"?: string;
  "icon-unwrapped-url"?: string;
  "icon-width"?: string;
  "icon-wrapped-alt"?: string;
  "icon-wrapped-url"?: string;
  padding?: Max4Pixel;
  "padding-top"?: Pixel;
  "padding-bottom"?: Pixel;
  "padding-left"?: Pixel;
  "padding-right"?: Pixel;
}
interface MJMLAccordionElement extends BasicElement {
  border?: string;
  "background-color"?: string;
  "font-family"?: string;
  "icon-align"?: string;
  "icon-height"?: string;
  "icon-position"?: string;
  "icon-unwrapped-alt"?: string;
  "icon-unwrapped-url"?: string;
  "icon-width"?: string;
  "icon-wrapped-alt"?: string;
  "icon-wrapped-url"?: string;
}
interface MJMLAccordionTitle extends EndingTagElement {
  color?: string;
  "background-color"?: string;
  "font-family"?: string;
  "font-size"?: Pixel;
  padding?: Max4Pixel;
  "padding-top"?: Pixel;
  "padding-bottom"?: Pixel;
  "padding-left"?: Pixel;
  "padding-right"?: Pixel;
}
interface MJMLAccordionText extends EndingTagElement {
  color?: string;
  "background-color"?: string;
  "font-family"?: string;
  "font-size"?: Pixel;
  "font-style"?: string;
  "font-weight"?: string;
  "line-height"?: string;
  "letter-spacing"?: LetterSpacing;
  padding?: Max4Pixel;
  "padding-top"?: Pixel;
  "padding-bottom"?: Pixel;
  "padding-left"?: Pixel;
  "padding-right"?: Pixel;
}
interface MJMLSocial extends BasicElement {
  align?: Align;
  color?: string;
  "container-background-color"?: string;
  "border-radius"?: string;
  "icon-height"?: string;
  "icon-size"?: string;
  mode?: "vertical" | "horizontal";
  "icon-padding"?: string;
  "text-padding"?: string;
  "text-decoration"?: string;
  padding?: Max4Pixel;
  "padding-top"?: Pixel;
  "padding-bottom"?: Pixel;
  "padding-left"?: Pixel;
  "padding-right"?: Pixel;
  "inner-padding"?: Max4Pixel;
  "font-family"?: string;
  "font-size"?: Pixel;
  "font-style"?: string;
  "font-weight"?: string;
  "line-height"?: string;
}
interface MJMLSocialElement extends EndingTagElement {
  src?: string;
  align?: Align;
  alt?: string;
  "background-color"?: string;
  "border-radius"?: string;
  color?: string;
  "font-family"?: string;
  "font-size"?: Pixel;
  "font-style"?: string;
  "font-weight"?: string;
  href?: string;
  "icon-height"?: string;
  "icon-size"?: string;
  "line-height"?: string;
  name?: string;
  "icon-padding"?: string;
  "text-padding"?: string;
  target?: string;
  title?: string;
  "text-decoration"?: string;
  "vertical-align"?: string;
  padding?: Max4Pixel;
  "padding-top"?: Pixel;
  "padding-bottom"?: Pixel;
  "padding-left"?: Pixel;
  "padding-right"?: Pixel;
}
interface MJMLNavbar extends BasicElement {
  align?: Align;
  hamburger?: string | null;
  "ico-open"?: string | null;
  "ico-close"?: string | null;
  "ico-font-family"?: string | null;
  "base-url"?: string | null;
  "ico-align"?: string;
  "ico-color"?: string;
  "ico-font-size"?: string;
  "ico-line-height"?: string;
  "ico-padding"?: string;
  "ico-text-decoration"?: string;
  "ico-text-transform"?: string;
  padding?: Max4Pixel;
  "padding-top"?: Pixel;
  "padding-bottom"?: Pixel;
  "padding-left"?: Pixel;
  "padding-right"?: Pixel;
}
interface MJMLNavbarLink extends EndingTagElement {
  color?: string;
  href?: string;
  "font-family"?: string;
  "font-size"?: Pixel;
  "font-style"?: string;
  "font-weight"?: string;
  "line-height"?: string;
  "text-decoration"?: string;
  "text-transform"?: string;
  target?: string;
  padding?: Max4Pixel;
  "padding-top"?: Pixel;
  "padding-bottom"?: Pixel;
  "padding-left"?: Pixel;
  "padding-right"?: Pixel;
}
interface MJMLRaw {
  children?: any;
}
interface MJMLTable extends EndingTagElement {
  align?: Align;
  border?: string;
  cellpadding?: string;
  cellspacing?: string;
  color?: string;
  "container-background-color"?: string;
  "font-family"?: string;
  "font-size"?: Pixel;
  "line-height"?: string | number;
  padding?: Max4Pixel;
  "padding-top"?: Pixel;
  "padding-bottom"?: Pixel;
  "padding-left"?: Pixel;
  "padding-right"?: Pixel;
  role?: "none" | "presentation";
  "table-layout"?: "auto" | "fixed" | "initial" | "inherit";
  width?: string;
  "font-style"?: string;
  "font-weight"?: string;
  "letter-spacing"?: LetterSpacing;
  "text-decoration"?: string;
  "text-transform"?: string;
}

declare namespace JSX {
  interface IntrinsicElements {
    mjml: {
      children: any;
    };
    ["mj-head"]: MJMLHead;
    ["mj-attributes"]: MJMLAttributes;
    ["mj-all"]: MJMLAll;
    ["mj-html-attributes"]: MJMLHTMLAttributes;
    ["mj-selector"]: MJMLSelector;
    ["mj-html-attribute"]: MJMLHTMLAttribute;
    ["mj-preview"]: MJMLPreview;
    ["mj-breakpoint"]: MJMLBreakpoint;
    ["mj-style"]: MJMLStyle;
    ["mj-title"]: MJMLTitle;
    ["mj-body"]: MJMLBody;
    ["mj-include"]: MJMLInclude;
    ["mj-wrapper"]: MJMLWrapper;
    ["mj-section"]: MJMLSection;
    ["mj-group"]: MJMLGroup;
    ["mj-column"]: MJMLColumn;
    ["mj-text"]: MJMLText;
    ["mj-button"]: MJMLButton;
    ["mj-image"]: MJMLImage;
    ["mj-divider"]: MJMLDivider;
    ["mj-spacer"]: MJMLSpacer;
    ["mj-social"]: MJMLSocial;
    ["mj-social-element"]: MJMLSocialElement;
    ["mj-navbar"]: MJMLNavbar;
    ["mj-navbar-link"]: MJMLNavbarLink;
    ["mj-raw"]: MJMLRaw;
    ["mj-table"]: MJMLTable;
    ["mj-accordion"]: MJMLAccordion;
    ["mj-accordion-element"]: MJMLAccordionElement;
    ["mj-accordion-title"]: MJMLAccordionTitle;
    ["mj-accordion-text"]: MJMLAccordionText;
  }
}
