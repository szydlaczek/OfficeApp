using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Zpas.Application.Delegations.Users.Commands.SignIn;
using Zpas.Persistence.Context;
using Zpas.Infrastructure.Bootstrapping;
using Zpas.Infrastructure.Services;
using Zpas.Application.Delegations.Interfaces;

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
            services.AddIdentity(Configuration)
                .AddMvc()
            .SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
            .AddJsonOptions(options => options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

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
