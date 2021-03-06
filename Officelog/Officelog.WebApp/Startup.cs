﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Officelog.Domain.Companylog;
using Officelog.Domain.Marketinglog;
using Officelog.Domain.UserProfileLog;
using OfficeLog.Persistence;
using OfficeLog.Persistence.Repositories;

namespace Officelog
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<ICompanyRepository,CompanyRepository>();
            services.AddScoped<IMarketingRepository,MarketingRepository>();
            services.AddScoped<IUserProfileRepository,UserProfileRepository>();
            services.AddScoped<IReadModelDatabase,ReadModelDatabase>();
            services.AddScoped<IUnitOfWork,UnitOfWork>();
            
            
            services.AddAutoMapper();

             services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

            }).AddJwtBearer(options =>
            {
                options.Authority = Configuration.GetSection("Auth0Settings").GetSection("Host").Value;
                options.Audience = Configuration.GetSection("Auth0Settings").GetSection("Audience").Value;
            });

            services.AddDbContext<ApplicationDbContext>(
                options =>
                options.UseSqlServer(Configuration.GetConnectionString("Default"))
                );
            services.AddMvc();
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseMvc();

            app.UseAuthentication();

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    // spa.UseAngularCliServer(npmScript: "start");
                    spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");

                }
            });
        }

        

    }
}
