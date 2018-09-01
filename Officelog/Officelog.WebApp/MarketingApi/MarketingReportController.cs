using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Officelog.Domain.Marketinglog;
using Officelog.Domain.Reports;
using OfficeLog.Persistence;

namespace Officelog.WebApp.MarketingApi
{
    [Produces("application/json")]
    [Route("api/MarketingReport")]
    public class MarketingReportController : Controller
    {
        private readonly IReadModelDatabase _database;

        public MarketingReportController(IReadModelDatabase database)
        {
            _database = database;
        }

        [HttpGet]
        public IActionResult GetMarketingReports()
        {
            var totalServiceInterested = _database.Marketings.Count(ts=>ts.ServiceInterested=="Yes");

            var totalSoftwareInterested = _database.Marketings.Count(ts => ts.SoftwareInterested =="Yes");

            return Ok(new MarketingReport{

                TotalServiceInterested = totalServiceInterested,
                TotalSoftwareInterested = totalSoftwareInterested
            });
        }

         [HttpGet("Converted")]

         public IActionResult GetConvertedReports()
         {
            var totalConversions = _database.Marketings.Count(tc=> tc.ConversionStatus == ConversionStatus.Achieved);

            return Ok(new ConvertedReport{
                TotalConversions = totalConversions
            });
         }

    }
}