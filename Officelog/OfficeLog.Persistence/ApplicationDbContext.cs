using Microsoft.EntityFrameworkCore;
using Officelog.Domain.Companylog;

namespace OfficeLog.Persistence
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base((DbContextOptions)options)
        {
        }

     public DbSet<Company> Companies {get; set;}
    }
}