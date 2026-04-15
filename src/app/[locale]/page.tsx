import HomeClient from "./HomeClient";
import { JsonLd, organizationJsonLd, localBusinessJsonLd } from "~/lib/seo";

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={localBusinessJsonLd()} />
      <HomeClient />
    </>
  );
}
