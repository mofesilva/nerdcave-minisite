import { track } from "@vercel/analytics";

export function trackLinkClick(linkId: string, url: string) {
    track("link_click", { link: linkId, url });
}
