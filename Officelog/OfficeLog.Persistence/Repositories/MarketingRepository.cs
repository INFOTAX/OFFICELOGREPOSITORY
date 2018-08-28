using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Officelog.Domain.Marketinglog;

namespace OfficeLog.Persistence.Repositories
{
    public class MarketingRepository : RepositoryBase<Marketing>, IMarketingRepository
    {
        private readonly ApplicationDbContext _context;

        public MarketingRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }
        public override Task<Marketing> GetAllAsync(object id)
        {
            throw new System.NotImplementedException();
        }

        public override Task<Marketing> GetAsync(object id)
        {
            return _context.Marketings.SingleOrDefaultAsync(m => m.Id == (int)id);
        }
    }
}