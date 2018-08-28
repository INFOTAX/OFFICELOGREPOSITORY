using System.Collections.Generic;
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
        public async Task<IEnumerable<MarketingResource>> GetMarketingLogs()
        {
            var marketings = await _database.
                                    Marketings
                                    .ToListAsync();
            return _mapper.Map<List<Marketing>, List<MarketingResource>>(marketings);
        }

        [HttpGet("{id}")]

        public async Task<SaveMarketingResource> GetById(int id)
        {
             var marketing = await _marketingRepository.GetAsync(id);

             return _mapper.Map<Marketing, SaveMarketingResource>(marketing);
        }

        [HttpPost]

        public async Task<IActionResult> NewMarketingLog([FromBody] SaveMarketingResource model){

        if(!ModelState.IsValid)
        return BadRequest(ModelState);

        var marketing = new Marketing(model.Name,model.ContactNumber,  model.ServiceInterested,
                         model.SoftwareInterested,  model.ConversionStatus,
                          model.RateUs,model.SuggestionForYes,model.SuggestionForNo,model.ServiceType, 
                         model.Rate, model.Area);

      _marketingRepository.Add(marketing);

      await _unitOfWork.CompleteAsync();
      return Ok(_mapper.Map<Marketing, MarketingResource>(marketing));
  }
  
        [HttpPut("{id}")]

        public async Task<IActionResult> UpdateMarketingLog(int id, [FromBody] SaveMarketingResource model)
        {
              if(!ModelState.IsValid)
        return BadRequest(ModelState);    

         var marketingFromDb = await _marketingRepository.GetAsync(id);
         if(marketingFromDb == null)
         {
             return NotFound();
 }

   marketingFromDb.Modify(model.Name,model.ContactNumber,  model.ServiceInterested,
                         model.SoftwareInterested,  model.ConversionStatus,
                          model.RateUs,model.SuggestionForYes,model.SuggestionForNo,model.ServiceType, 
                         model.Rate, model.Area);

            await _unitOfWork.CompleteAsync();
            return Ok(_mapper.Map<Marketing,MarketingResource>(marketingFromDb));
           

         } 

    [HttpDelete("{id}")]

    public async Task<IActionResult> Delete (int id)

    {
        var marketingFromDb = await _marketingRepository.GetAsync(id);
          if(marketingFromDb == null)
         {
             return NotFound();
 }
        marketingFromDb.Delete();
        await _unitOfWork.CompleteAsync();
        return Ok();
}



    }
}