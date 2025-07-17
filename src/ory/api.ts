import { Configuration, FrontendApi, IdentityApi, OAuth2Api } from "@ory/client-fetch";

export const oryConfig = new Configuration({
    basePath: import.meta.env.ORY_BASE_PATH,
    accessToken: import.meta.env.ORY_ACCESS_TOKEN,
    credentials: 'include',
    headers: {
        'Accept': 'application/json',
    },
});

export const oryOAuth = new OAuth2Api(oryConfig);

export const oryId = new IdentityApi(oryConfig);

export const ory = new FrontendApi(oryConfig);

export type BrowserFlow = "login" | "registration" | "settings" | "recovery" | "verification";

export const getUrlForFlow = (flow: BrowserFlow, query?: URLSearchParams) =>
    `${import.meta.env.ORY_BASE_PATH}/self-service/${flow}/browser${query ? `?${query.toString()}` : ""}`;

