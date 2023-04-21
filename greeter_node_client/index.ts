import * as protoLoader from "@grpc/proto-loader";
import * as grpc from "@grpc/grpc-js";

const packageDefinition = protoLoader.loadSync(
  "../helloworld/helloworld.proto",
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);

const hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function main() {
  var client = new hello_proto.Greeter(
    "localhost:50051",
    grpc.credentials.createInsecure()
  );

  client.sayHello({ name: "world" }, function (err, response) {
    if (err) {
      throw err;
    }
    console.log("Greeting:", response.message);
  });
}

main();
