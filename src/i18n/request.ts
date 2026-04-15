import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const enMessages = (await import("../../messages/en.json")).default;
  const messages =
    locale === "en"
      ? enMessages
      : { ...enMessages, ...(await import(`../../messages/${locale}.json`)).default };

  return {
    locale,
    messages,
  };
});
