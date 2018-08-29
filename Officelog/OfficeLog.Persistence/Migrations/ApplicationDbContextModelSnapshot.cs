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
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.3-rtm-10026")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Officelog.Domain.Companylog.Company", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ContactNumber");

                    b.Property<DateTime>("Date");

                    b.Property<bool>("IsActive");

                    b.Property<string>("Name");

                    b.Property<string>("QueryHandling");

                    b.Property<string>("RateUs");

                    b.Property<string>("ServiceProvided");

                    b.Property<bool>("SoftwareInterested");

                    b.Property<string>("SuggestionForNo");

                    b.Property<string>("SuggestionForYes");

                    b.Property<string>("VisitorType");

                    b.HasKey("Id");

                    b.ToTable("Companies");
                });

            modelBuilder.Entity("Officelog.Domain.Marketinglog.Marketing", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Area");

                    b.Property<int>("ContactNumber");

                    b.Property<int>("ConversionStatus");

                    b.Property<DateTime>("Date");

                    b.Property<bool>("IsActive");

                    b.Property<string>("Name");

                    b.Property<string>("RateUs");

                    b.Property<bool>("ServiceInterested");

                    b.Property<bool>("SoftwareInterested");

                    b.Property<string>("SuggestionForNo");

                    b.Property<string>("SuggestionForYes");

                    b.HasKey("Id");

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

            modelBuilder.Entity("Officelog.Domain.Marketinglog.ServiceItem", b =>
                {
                    b.HasOne("Officelog.Domain.Marketinglog.Marketing", "Marketing")
                        .WithMany("ServiceItems")
                        .HasForeignKey("MarketingId");
                });
#pragma warning restore 612, 618
        }
    }
}
