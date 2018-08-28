using Microsoft.EntityFrameworkCore;
using Officelog.Domain.Companylog;
using Officelog.Domain.Marketinglog;

namespace OfficeLog.Persistence
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base((DbContextOptions)options)
        {
        }

     public DbSet<Company> Companies {get; set;}
     public DbSet<Marketing> Marketings {get; set;}
    }
}