import RequestBuilder from ".";

export interface iRequest {
    url: string;
    method: string;
    payload: object;
}

export interface iRequestBuilder {
    request: iRequest;
    forUrl: (url: string) => RequestBuilder;
    useMethod: (method: string) => RequestBuilder;
    payload: (payload: object) => RequestBuilder;
    build: (url: string) => iRequest;
}

