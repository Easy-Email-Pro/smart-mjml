export const template = (
  <mjml>
    <mj-head>
      <mj-style inline="inline">
        {`.hide-desktop-block,.hide-desktop-inline-block,.hide-block{display:none!important;mso-hide:all!important}`}{" "}
      </mj-style>
      <mj-style>{`.mjbody a{color:inherit}.overflow-hidden{overflow:hidden}@media (max-width: 480px){.hide-mobile-block{max-height:0px;overflow:hidden;display:none!important}.hide-desktop-block{display:block!important}.hide-mobile-inline-block{max-height:0px;overflow:hidden;display:none!important}.hide-desktop-inline-block{display:inline-block!important}}`}</mj-style>
      <mj-style>{`.mjbody a, .mjbody a:hover, .mjbody a:active, .mjbody a[href], .mjbody a[href]:hover, .mjbody a[href]:active {color: inherit;text-decoration: underline}`}</mj-style>
      <mj-breakpoint width="480px" />
    </mj-head>
    <mj-body width="600px" background-color="#8C9A80" css-class="mjbody">
      <mj-section padding="0px">
        <mj-column>
          <mj-spacer height="30px"></mj-spacer>
        </mj-column>
      </mj-section>
      {`<!-- Header begin -->`}
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
      {`<!-- Header end -->`}
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
            {`Hello, {{ customer.name }}`}
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
            From hearty stews and comforting shepherd's pie to classic fish and
            chips, we have something to satisfy every appetite.
          </mj-text>
        </mj-column>
      </mj-section>

      <mj-wrapper
        background-color="#ffffff"
        padding-right="10px"
        padding-left="10px"
      >
        <mj-section background-color="#FFFFFF" padding="0px">
          <mj-column padding="0px" border="none">
            <mj-text
              align="center"
              font-family="Arial, sans-serif"
              font-size="24px"
              line-height="130%"
              font-weight="600"
              padding-top="3px"
              padding-bottom="3px"
            >
              You might also like
            </mj-text>
          </mj-column>
        </mj-section>
        <mj-section background-color="#FFFFFF" padding="0px">
          <mj-group>
            <mj-for item="item" list="products">
              <mj-column width="50%">
                <mj-image
                  border-radius="5px"
                  padding="10px"
                  src="{{item.image}}"
                ></mj-image>
                <mj-text
                  align="center"
                  font-family="Arial, sans-serif"
                  font-size="16px"
                  padding="10px 0px 0px 0px"
                >{`{{item.title}}`}</mj-text>
                <mj-text
                  align="center"
                  font-family="Arial, sans-serif"
                  padding="10px 0px 0px 0px"
                >{`{{item.price}}`}</mj-text>
                <mj-text
                  align="center"
                  color="#737373"
                  font-family="Arial, sans-serif"
                  text-decoration="line-through"
                  padding="10px 0px 0px 0px"
                >{`{{item.comparePrice}}`}</mj-text>
                <mj-button
                  background-color="#000000"
                  font-family="Arial, sans-serif"
                  href="#"
                >
                  Buy now
                </mj-button>
              </mj-column>
            </mj-for>
          </mj-group>
        </mj-section>
      </mj-wrapper>

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
            <br />
            <br />
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
            <br />
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
            No longer want to receive these emails?{" "}
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
