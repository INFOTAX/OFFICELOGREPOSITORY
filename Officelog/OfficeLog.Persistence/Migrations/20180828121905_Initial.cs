using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace OfficeLog.Persistence.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Companies",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ContactNumber = table.Column<int>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    QueryHandling = table.Column<string>(nullable: true),
                    RateUs = table.Column<string>(nullable: true),
                    ServiceProvided = table.Column<string>(nullable: true),
                    SoftwareInterested = table.Column<bool>(nullable: false),
                    SuggestionForNo = table.Column<string>(nullable: true),
                    SuggestionForYes = table.Column<string>(nullable: true),
                    VisitorType = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Companies", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Marketings",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Area = table.Column<string>(nullable: true),
                    ContactNumber = table.Column<int>(nullable: false),
                    ConversionStatus = table.Column<int>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Rate = table.Column<double>(nullable: false),
                    RateUs = table.Column<string>(nullable: true),
                    ServiceInterested = table.Column<bool>(nullable: false),
                    ServiceType = table.Column<string>(nullable: true),
                    SoftwareInterested = table.Column<bool>(nullable: false),
                    SuggestionForNo = table.Column<string>(nullable: true),
                    SuggestionForYes = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Marketings", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Companies");

            migrationBuilder.DropTable(
                name: "Marketings");
        }
    }
}
