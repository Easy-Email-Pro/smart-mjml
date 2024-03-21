import mjml2html from "mjml-browser";

import { vueJsxToString } from "smart-mjml";

export default {
  render() {
    const mjmlData = vueJsxToString(
      <mjml>
        <mj-head>
          <mj-style inline="inline">
            {` .hide-desktop-block,.hide-desktop-inline-block,.hide-block{display:none!important;mso-hide:all!important}`}
          </mj-style>
          <mj-style>
            {` .mjbody a{color:inherit}.overflow-hidden{overflow:hidden}@media (max-width: 480px){.hide-mobile-block{max-height:0px;overflow:hidden;display:none!important}.hide-desktop-block{display:block!important}.hide-mobile-inline-block{max-height:0px;overflow:hidden;display:none!important}.hide-desktop-inline-block{display:inline-block!important}}`}
          </mj-style>
          <mj-style>
            {`.mjbody a, .mjbody a:hover, .mjbody a:active, .mjbody a[href], .mjbody a[href]:hover, .mjbody a[href]:active {color: inherit;text-decoration: underline}`}
          </mj-style>
          <mj-breakpoint width="480px"></mj-breakpoint>
        </mj-head>
        <mj-body width="600px" background-color="#8C9A80" css-class="mjbody">
          <mj-section padding="0">
            <mj-column>
              <mj-spacer height="30px"></mj-spacer>
            </mj-column>
          </mj-section>
          <mj-section
            padding-top="0px"
            padding-bottom="0px"
            background-color="#FFFFFF"
          >
            <mj-column>
              <mj-navbar>
                <mj-navbar-link font-family="Arial, sans-serif">
                  Shop
                </mj-navbar-link>
                <mj-navbar-link font-family="Arial, sans-serif">
                  About
                </mj-navbar-link>
                <mj-navbar-link font-family="Arial, sans-serif">
                  Contact
                </mj-navbar-link>
                <mj-navbar-link font-family="Arial, sans-serif">
                  Blog
                </mj-navbar-link>
              </mj-navbar>
            </mj-column>
          </mj-section>
          <mj-section padding-bottom="0px" background-color="#263D29">
            <mj-column width="100%">
              <mj-text
                align="center"
                color="#FFFFFF"
                font-family="Arial, sans-serif"
                font-size="16px"
                line-height="130%"
                padding-top="3px"
                padding-bottom="3px"
                font-weight="normal"
              >
                JOIN US FOR A FEAST ON
              </mj-text>
            </mj-column>
          </mj-section>
          <mj-section padding-top="0px" background-color="#263D29">
            <mj-column width="480px">
              <mj-text
                align="center"
                color="#FFFFFF"
                font-family="Arial, sans-serif"
                font-size="16px"
                line-height="130%"
                padding-top="3px"
                padding-right="20px"
                padding-bottom="3px"
                padding-left="20px"
                font-weight="normal"
              >
                From hearty stews and comforting shepherd's pie to classic fish
                and chips, we have something to satisfy every appetite.
              </mj-text>
            </mj-column>
          </mj-section>
          <mj-section
            padding-top="0px"
            padding-bottom="0px"
            background-color="#263D29"
          >
            <mj-column width="100%">
              <mj-image
                padding="0px 0px 0px 0px"
                padding-top="0px"
                padding-right="0px"
                padding-bottom="0px"
                padding-left="0px"
                src="http://res.cloudinary.com/djnkpbshx/image/upload/v1706006437/easy-email-pro-test/u7tvjqdbjtxqkykaazra.jpg"
              ></mj-image>
            </mj-column>
          </mj-section>
          <mj-section background-color="#263D29">
            <mj-column width="100%">
              <mj-button
                background-color="#C5900C"
                font-family="Arial, sans-serif"
                font-size="16px"
                inner-padding="10px 25px 10px 25px"
                width="100%"
              >
                Book a table
              </mj-button>
              <mj-button
                background-color="#FCF0D3"
                border="3px solid #C5900C"
                color="#C5900C"
                font-family="Arial, sans-serif"
                font-size="16px"
                inner-padding="10px 25px 10px 25px"
                width="100%"
              >
                Book a table
              </mj-button>
            </mj-column>
          </mj-section>
          <mj-section
            padding-top="0px"
            padding-bottom="0px"
            background-color="#FFFFFF"
          >
            <mj-column width="50%">
              <mj-text
                font-family="Arial, sans-serif"
                font-size="16px"
                line-height="130%"
                padding-top="25px"
                padding-bottom="25px"
                font-weight="normal"
              >
                And of course, no Irish meal would be complete without a pint of
                Guinness or a dram of Irish whiskey to wash it down.
                <br></br>
                <br></br>
                <span>
                  <strong>View drink menu</strong>
                </span>
              </mj-text>
            </mj-column>
            <mj-column width="50%">
              <mj-image
                padding-top="25px"
                padding-bottom="25px"
                src="http://res.cloudinary.com/djnkpbshx/image/upload/v1706006465/easy-email-pro-test/ehhmyj7sq1ilbcojx9zr.jpg"
              ></mj-image>
            </mj-column>
          </mj-section>
          <mj-section
            padding-top="0px"
            padding-bottom="0px"
            background-color="#ffffff"
          >
            <mj-column width="100%">
              <mj-divider></mj-divider>
            </mj-column>
          </mj-section>
          <mj-section
            direction="rtl"
            padding-top="0px"
            padding-bottom="0px"
            background-color="#FFFFFF"
          >
            <mj-column width="50%">
              <mj-text
                font-family="Arial, sans-serif"
                font-size="16px"
                line-height="130%"
                padding-top="25px"
                padding-bottom="25px"
                font-weight="normal"
              >
                And of course, no Irish meal would be complete without a pint of
                Guinness or a dram of Irish whiskey to wash it down.
                <br></br>
                <br></br>
                <span>
                  <strong>View drink menu</strong>
                </span>
              </mj-text>
            </mj-column>
            <mj-column width="50%">
              <mj-image
                padding-top="25px"
                padding-bottom="25px"
                src="http://res.cloudinary.com/djnkpbshx/image/upload/v1706006491/easy-email-pro-test/upr1qet7cymnw3svunss.jpg"
              ></mj-image>
            </mj-column>
          </mj-section>
          <mj-section
            padding-top="0px"
            padding-bottom="0px"
            background-color="#ffffff"
          >
            <mj-column width="100%">
              <mj-divider></mj-divider>
            </mj-column>
          </mj-section>
          <mj-section
            padding-top="0px"
            padding-bottom="0px"
            background-color="#FFFFFF"
          >
            <mj-column width="50%">
              <mj-text
                font-family="Arial, sans-serif"
                font-size="16px"
                line-height="130%"
                padding-top="25px"
                padding-bottom="25px"
                font-weight="normal"
              >
                And of course, no Irish meal would be complete without a pint of
                Guinness or a dram of Irish whiskey to wash it down.
                <br></br>
              </mj-text>
              <mj-button
                background-color="#000000"
                font-family="Arial, sans-serif"
                inner-padding="10px 25px 10px 25px"
                line-height="130%"
              >
                VIEW DRINK
              </mj-button>
            </mj-column>
            <mj-column width="50%">
              <mj-image
                padding-top="25px"
                padding-bottom="25px"
                src="http://res.cloudinary.com/djnkpbshx/image/upload/v1706006848/easy-email-pro-test/lm6rpd3kbmwzkmjtzmp0.jpg"
              ></mj-image>
            </mj-column>
          </mj-section>
          <mj-section background-color="#263D29">
            <mj-column width="100%">
              <mj-text
                align="center"
                color="#FFFFFF"
                font-family="Arial, sans-serif"
                font-size="16px"
                line-height="130%"
                padding-top="3px"
                padding-bottom="3px"
                font-weight="normal"
              >
                No longer want to receive these emails?
                <span>
                  <a href="#" target="_blank">
                    unsubscribe
                  </a>
                </span>
              </mj-text>
            </mj-column>
          </mj-section>
          <mj-section padding="0px">
            <mj-column>
              <mj-spacer height="30px"></mj-spacer>
            </mj-column>
          </mj-section>
        </mj-body>
      </mjml>
    );

    const data = mjml2html(mjmlData);

    return (
      <>
        <div style={{ display: "flex", height: "100vh" }}>
          <div
            style={{
              width: "50%",
              whiteSpace: "pre",
              backgroundColor: "#1f2227",
              color: "#ffffff",
              height: "100%",
              overflow: "auto",
            }}
          >
            {mjmlData}
          </div>
          <iframe
            style={{
              width: "50%",
              minWidth: 600,
              height: "100%",
              border: "none",
            }}
            srcdoc={data.html}
          />
        </div>
        <style>{`body {margin:0}`}</style>
      </>
    );
  },
};
