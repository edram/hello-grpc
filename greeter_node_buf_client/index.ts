
import { createPromiseClient } from "@bufbuild/connect";
import { createGrpcTransport } from "@bufbuild/connect-node";
import { Greeter } from "./services/proto/helloworld_connect"

const transport = createGrpcTransport({
    httpVersion: "2",
    baseUrl: "http://localhost:50051",
});

void (async () => {
    const client = createPromiseClient(Greeter, transport);

    const res = await client.sayHello({ name: "yujianmin" });
    console.log(res.message);
})();