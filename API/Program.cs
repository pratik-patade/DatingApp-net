using API.Extensions;
using API.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddApplicationServices(builder.Configuration);

builder.Services.AddIdentityServices(builder.Configuration);

var app = builder.Build();

app.UseExceptionMiddleware();

app.UseCors("CorsPolicy");

app.UseAuthentication();

app.UseAuthorization();

// Configure the HTTP request pipeline.
app.MapControllers();

app.Run();
