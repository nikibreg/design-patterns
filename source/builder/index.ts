import { iRequest, iRequestBuilder } from "./interfaces";
class Request implements iRequest {
    url: string = '';
    method: string = '';
    payload: object = {}
}

class RequestBuilder implements iRequestBuilder {
    public request: iRequest;
    constructor() {
        this.request = new Request();
    }

    forUrl(url: string) {
        this.request.url = url;
        return this;
    }

    useMethod(method: string) {
        this.request.method = method;
        return this;
    }

    payload(payload: object) {
        this.request.payload = payload;
        return this;
    }

    build() {
        return this.request;
    }

}

export default RequestBuilder;