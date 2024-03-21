import mjml2html from "mjml-browser";
import { reactJsxToString } from "smart-mjml";
import { Liquid } from "liquidjs";
import { template } from "./template";
import { helper } from "./helper";
import MJMLEditor from "./MJMLEditor";

const engine = new Liquid();

const dynamicData = {
  customer: {
    name: "Ryan",
  },
  products: [
    {
      title: "#product 1",
      image:
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/blob_4e49ab95-cd58-4ff1-8551-dcaf0edc5183",
    },
    {
      title: "#product 2",
      image:
        "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/blob_0f3e986b-fe20-4601-bd8e-a223e2353589",
    },
  ],
};

function App() {
  let errorString = "";
  let html = "";
  const mjmlString = reactJsxToString(template, { helper });
  try {
    const data = mjml2html(mjmlString, {
      validationLevel: "strict",
    });
    html = engine.parseAndRenderSync(data.html, dynamicData);
  } catch (error) {
    errorString = String(error);
    console.log(error);
  }

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <iframe
        style={{ width: "50%", minWidth: 600, height: "100%", border: "none" }}
        srcDoc={errorString ? errorString : html}
      />
      <div
        style={{ width: "50%", minWidth: 600, height: "100%", border: "none" }}
      >
        <MJMLEditor key={mjmlString} initialValue={mjmlString} />
      </div>

      <style>{`body {margin:0}`}</style>
    </div>
  );
}

export default App;
