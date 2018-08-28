using System.Linq;
using Microsoft.EntityFrameworkCore;
using Officelog.Domain.Companylog;
using Officelog.Domain.Marketinglog;

namespace OfficeLog.Persistence
{
    public interface IReadModelDatabase
    {
        IQueryable<Company> Companies { get; }
        IQueryable<Marketing> Marketings { get; }

    }

    public class ReadModelDatabase : IReadModelDatabase
    {
        private readonly ApplicationDbContext _context;
        public ReadModelDatabase(ApplicationDbContext context)
        {
            _context = context;

        }
        public IQueryable<Company> Companies => _context.Companies.AsNoTracking();

        public IQueryable<Marketing> Marketings => _context.Marketings.AsNoTracking();
    }
}