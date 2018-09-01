using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Officelog.Domain.Marketinglog;
using OfficeLog.Persistence;

namespace Officelog.WebApp.ConversionApi
{
     [Produces("application/json")]
    [Route("api/Conversions")]

    public class ConversionController : Controller
    {
        private readonly IReadModelDatabase _database;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public ConversionController(IReadModelDatabase database,IMapper mapper,IUnitOfWork unitOfWork)
        {
            _database = database;
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

         [HttpGet]
        public async Task<IEnumerable<ConvertedResource>> GetConvertedLogs()
        {
            var convertedLogs = await _database.Marketings.Where(co => co.ConversionStatus == ConversionStatus.Achieved)
                                                            .ToListAsync();

               return _mapper.Map<List<Marketing>,List<ConvertedResource>>(convertedLogs);                                             
        }

         [HttpGet("{id}")]
        public async Task<SaveConvertedResource> GetConvertedLogsById(int id)
        {
            var convertedLogsById = await _database.Marketings.Include(co => co.ServiceItems).Where(co => co.ConversionStatus == ConversionStatus.Achieved)
                                                            .SingleOrDefaultAsync(co => co.Id == id);

               return _mapper.Map<Marketing,SaveConvertedResource>(convertedLogsById);                                             
        }
    }
}