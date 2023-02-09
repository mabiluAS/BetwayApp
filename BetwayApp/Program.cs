using Microsoft.EntityFrameworkCore;
using BetwayApp.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<BetwayContext>(opt =>
    opt.UseSqlite());
builder.Services.AddScoped<IUsersRepository, UsersRepository>();
builder.Services.AddEndpointsApiExplorer();

var provider = builder.Services.BuildServiceProvider();
var config = provider.GetService<IConfiguration>();
builder.Services.AddCors(options => 
{
    var fronendUrl = config.GetValue<string>("frontend_url");
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin();
    });
});
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", null );
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "My API");
    });
}

app.UseCors();

app.UseStaticFiles();
app.UseRouting();

app.MapControllers();

app.Run();
