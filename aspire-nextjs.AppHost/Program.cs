using Projects;

var builder = DistributedApplication.CreateBuilder(args);


var api = builder.AddProject<DotnetAspireNext_Api>("api");
var frontend = builder
    .AddNpmApp("frontend", "../my-app", "dev")
    
    //.WithNpmPackageInstallation()
    .WaitFor(api)
    .WithReference(api)
    .WithHttpEndpoint(env: "PORT") // Make sure Next.js uses the port assigned by Aspire
    //.WithHttpEndpoint(env: "PORT", port: 3000)   
    .WithExternalHttpEndpoints();
frontend.WithEnvironment("NEXT_PUBLIC_API_URL", () => api.GetEndpoint("http").Url);
//NEXT_PUBLIC_API_URL
builder.Build().Run();
