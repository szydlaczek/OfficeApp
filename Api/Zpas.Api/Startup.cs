using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;
using Zpas.Application.Delegations.Interfaces;
using Zpas.Application.Delegations.Users.Commands.SignIn;
using Zpas.Infrastructure.Bootstrapping;
using Zpas.Infrastructure.Services;
using Zpas.Infrastructure.Settings;
using Zpas.Persistence.Context;

namespace Zpas.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMediatR(typeof(SignInUserCommandHandler).GetTypeInfo().Assembly);
            services.AddScoped<ISignInService, SignInService>();
            services.AddScoped<IJWTService, JWTService>();
            services.AddIdentity(Configuration)
                .AddMvc()
            .SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
            .AddJsonOptions(options => options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
            services.Configure<JwtSettings>(options => Configuration.GetSection("Jwt").Bind(options));
            services.AddCors();

            services.AddDbContext<ApplicationDbContext>(options => options
           .UseSqlServer(Configuration.GetConnectionString("ZpasConnection")));
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseAuthentication();
            app.UseCookiePolicy();
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCors(builder =>
                        builder.WithOrigins("http://localhost:3000")
                               .AllowAnyHeader()
                               .AllowAnyMethod());
            app.UseMvc();
        }
    }
}