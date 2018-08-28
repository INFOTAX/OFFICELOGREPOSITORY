using System.Linq;
using Microsoft.EntityFrameworkCore;
using Officelog.Domain.Companylog;

namespace OfficeLog.Persistence
{
    public interface IReadModelDatabase
    {
        IQueryable<Company> Companies { get; }

    }

    public class ReadModelDatabase : IReadModelDatabase
    {
        private readonly ApplicationDbContext _context;
        public ReadModelDatabase(ApplicationDbContext context)
        {
            _context = context;

        }
        public IQueryable<Company> Companies => _context.Companies.AsNoTracking();
    }
}