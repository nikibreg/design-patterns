export interface iRequest {
    url: string;
    method: string;
    payload: object;
}

export interface iRequestBuilder {
    request: iRequest;
    forUrl: (url: string) => iRequestBuilder;
    useMethod: (method: string) => iRequestBuilder;
    payload: (payload: object) => iRequestBuilder;
    build: (url: string) => iRequest;
}

