using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Officelog.Domain.Marketinglog;
using OfficeLog.Persistence;

namespace Officelog.WebApp.MarketingApi
{
    [Produces("application/json")]
    [Route("api/Marketings")]
    public class MarketingController : Controller
    {
        private readonly IMarketingRepository _marketingRepository;
        private readonly IMapper _mapper;
        private readonly IReadModelDatabase _database;
        private readonly IUnitOfWork _unitOfWork;
        public MarketingController(IMarketingRepository marketingRepository, IMapper mapper,
                                IReadModelDatabase database, IUnitOfWork unitOfWork)
        {
            _database = database;
            _mapper = mapper;
            _marketingRepository = marketingRepository;
            _unitOfWork = unitOfWork;

        }

        [HttpGet]
        public async Task<IEnumerable<MarketingResource>> GetMarketingLogs(DateTime fromDate,DateTime toDate)
        {
            var marketings = await _database.
                                    Marketings
                                    .Where(mk => mk.Date.Date >= fromDate.Date && mk.Date.Date <= toDate.Date)
                                    .Where(mk => mk.ConversionStatus == ConversionStatus.Created)
                                    .ToListAsync();
            return _mapper.Map<List<Marketing>, List<MarketingResource>>(marketings.Where(mk => mk.IsActive).ToList());
        }

        

        [HttpGet("{id}")]

        public async Task<SaveMarketingResource> GetById(int id)
        {
            var marketing = await _marketingRepository.GetAsync(id);

            return _mapper.Map<Marketing, SaveMarketingResource>(marketing);
        }

        [HttpPost]

        public async Task<IActionResult> NewMarketingLog([FromBody] SaveMarketingResource model)
        {

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

           
            
            var marketing = new Marketing(model.Name, model.ContactNumber, model.ServiceInterested,
                             model.SoftwareInterested, model.ConversionStatus,
                              model.RateUs, model.SuggestionForYes, model.SuggestionForNo, model.Area,model.Date,
                              model.Price,model.CurrentScenario,model.RateUsForNo,model.Fee,ServiceItems(model));

            _marketingRepository.Add(marketing);

            await _unitOfWork.CompleteAsync();
            return Ok(_mapper.Map<Marketing, MarketingResource>(marketing));
        }

        private static List<ServiceItem> ServiceItems(SaveMarketingResource model)
        {
            return model.ServiceItems.Select(item => ServiceItem.Add(item.ServiceType,
                     item.Rate))
                .ToList();
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> UpdateMarketingLog(int id, [FromBody] SaveMarketingResource model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var marketingFromDb = await _marketingRepository.GetAsync(id);
            if (marketingFromDb == null)
            {
                return NotFound();
            }

            marketingFromDb.Modify(model.Name, model.ContactNumber, model.ServiceInterested,
                                  model.SoftwareInterested, model.ConversionStatus,
                                   model.RateUs, model.SuggestionForYes, model.SuggestionForNo,model.Area,
                                   model.Price,model.CurrentScenario,model.RateUsForNo,model.Fee,ServiceItems(model));

            await _unitOfWork.CompleteAsync();
            return Ok(_mapper.Map<Marketing, MarketingResource>(marketingFromDb));


        }

        [HttpPatch("converted")]
        public async Task<IActionResult> Conversion(int id)
        {
            var marketing = await _marketingRepository.GetAsync(id);
            
            if(marketing == null)
                return NotFound();

            marketing.Converted();

            await _unitOfWork.CompleteAsync();
            return Ok();    
        }

       

        [HttpDelete("{id}")]

        public async Task<IActionResult> Delete(int id)

        {
            var marketingFromDb = await _marketingRepository.GetAsync(id);
            if (marketingFromDb == null)
            {
                return NotFound();
            }
            marketingFromDb.Delete();
            await _unitOfWork.CompleteAsync();
            return Ok();
        }

        // [HttpGet("MarketingDetails")]
        // public async Task<IActionResult> GetDetails()
        // {
            
        // }


    }
}