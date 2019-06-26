import RequestBuilder from ".";

const RB = new RequestBuilder()
const sendNudes = RB.forUrl("https://example.com")
                    .useMethod('POST')
                    .payload({ imgURLs: [] })
                    .build()
console.log(`request: ${sendNudes}`)