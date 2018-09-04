﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using Officelog.Domain.Marketinglog;
using OfficeLog.Persistence;
using System;

namespace OfficeLog.Persistence.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20180903065907_AlterTableAdminAddName")]
    partial class AlterTableAdminAddName
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.3-rtm-10026")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Officelog.Domain.AdminLog.Admin", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Admin");
                });

            modelBuilder.Entity("Officelog.Domain.Companylog.Company", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ContactNumber");

                    b.Property<DateTime>("Date");

                    b.Property<bool>("IsActive");

                    b.Property<string>("Name");

                    b.Property<string>("QueryHandling");

                    b.Property<string>("RateUs");

                    b.Property<string>("RateUsForNo");

                    b.Property<string>("ServiceProvided");

                    b.Property<string>("SoftwareInterested");

                    b.Property<string>("SuggestionForNo");

                    b.Property<string>("SuggestionForYes");

                    b.Property<string>("UserProfileId");

                    b.Property<string>("VisitorType");

                    b.HasKey("Id");

                    b.HasIndex("UserProfileId");

                    b.ToTable("Companies");
                });

            modelBuilder.Entity("Officelog.Domain.Marketinglog.Marketing", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Area");

                    b.Property<string>("ContactNumber");

                    b.Property<int>("ConversionStatus");

                    b.Property<string>("CurrentScenario");

                    b.Property<DateTime>("Date");

                    b.Property<double>("Fee");

                    b.Property<bool>("IsActive");

                    b.Property<string>("Name");

                    b.Property<double>("Price");

                    b.Property<string>("RateUs");

                    b.Property<string>("RateUsForNo");

                    b.Property<string>("ServiceInterested");

                    b.Property<string>("SoftwareInterested");

                    b.Property<string>("SuggestionForNo");

                    b.Property<string>("SuggestionForYes");

                    b.Property<string>("UserProfileId");

                    b.HasKey("Id");

                    b.HasIndex("UserProfileId");

                    b.ToTable("Marketings");
                });

            modelBuilder.Entity("Officelog.Domain.Marketinglog.ServiceItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("MarketingId");

                    b.Property<double>("Rate");

                    b.Property<string>("ServiceType");

                    b.HasKey("Id");

                    b.HasIndex("MarketingId");

                    b.ToTable("ServiceItems");
                });

            modelBuilder.Entity("Officelog.Domain.UserProfileLog.UserProfile", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AdminId");

                    b.Property<string>("ContactNumber");

                    b.Property<string>("Designation");

                    b.Property<string>("Name");

                    b.Property<string>("Password");

                    b.Property<string>("Subject");

                    b.HasKey("Id");

                    b.HasIndex("AdminId");

                    b.ToTable("UserProfiles");
                });

            modelBuilder.Entity("Officelog.Domain.Companylog.Company", b =>
                {
                    b.HasOne("Officelog.Domain.UserProfileLog.UserProfile", "UserProfile")
                        .WithMany()
                        .HasForeignKey("UserProfileId");
                });

            modelBuilder.Entity("Officelog.Domain.Marketinglog.Marketing", b =>
                {
                    b.HasOne("Officelog.Domain.UserProfileLog.UserProfile", "UserProfile")
                        .WithMany()
                        .HasForeignKey("UserProfileId");
                });

            modelBuilder.Entity("Officelog.Domain.Marketinglog.ServiceItem", b =>
                {
                    b.HasOne("Officelog.Domain.Marketinglog.Marketing", "Marketing")
                        .WithMany("ServiceItems")
                        .HasForeignKey("MarketingId");
                });

            modelBuilder.Entity("Officelog.Domain.UserProfileLog.UserProfile", b =>
                {
                    b.HasOne("Officelog.Domain.AdminLog.Admin", "Admin")
                        .WithMany()
                        .HasForeignKey("AdminId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
