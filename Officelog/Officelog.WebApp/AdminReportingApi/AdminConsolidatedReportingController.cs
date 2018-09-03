using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Officelog.Domain.UserProfileLog;
using Officelog.WebApp.UserProfileApi;
using OfficeLog.Persistence;
using Officelog.Domain.Reports;

namespace Officelog.WebApp.AdminReportingApi
{
    [Produces("application/json")]
    [Route("api/admin")]
    public class AdminConsolidatedReportingController : UserProfileController
    {
        private readonly IReadModelDatabase _database;
        public AdminConsolidatedReportingController(IMapper mappper, IReadModelDatabase database,
                                                    IUserProfileRepository userProfileRepository, IUnitOfWork unitOfWork)
                                                  : base(mappper, database, userProfileRepository, unitOfWork)
        {
            _database = database;

        }

        [HttpGet("Companies")]
            public IActionResult GetConsolidatedCompaniesReports()
            {
                 var totalVisits = _database.Companies.Where(c => c.AdminId == AdminId).Count(tv=>tv.VisitorType == "Client"
                                                     || tv.VisitorType =="Franchise"
                                                     || tv.VisitorType == "First"
                                                     || tv.VisitorType == "Second Or Third"
                                                     );
        
          var totalClientVisits = _database.Companies.Where(c => c.AdminId == AdminId).Count(tc => tc.VisitorType == "Client");
          var totalFirstVisits = _database.Companies.Where(c => c.AdminId == AdminId).Count(tc => tc.VisitorType == "First");
          var totalFranchiseVisits = _database.Companies.Where(c => c.AdminId == AdminId).Count(tc => tc.VisitorType == "Franchise");
          var totalSecondOrThirdVisits = _database.Companies.Where(c => c.AdminId == AdminId).Count(tc => tc.VisitorType == "Second Or Third");
        
          var totalBadQueryRating = _database.Companies.Where(c => c.AdminId == AdminId).Count(tb => tb.QueryHandling == "Bad");
          var totalGoodQueryRating = _database.Companies.Where(c => c.AdminId == AdminId).Count(tb => tb.QueryHandling == "Good");
          var totalVeryGoodQueryRating = _database.Companies.Where(c => c.AdminId == AdminId).Count(tb => tb.QueryHandling == "Very Good");
          var totalExcellentRating = _database.Companies.Where(c => c.AdminId == AdminId).Count(tb => tb.QueryHandling == "Excellent");
          
          var totalBadServiceRating = _database.Companies.Where(c => c.AdminId == AdminId).Count(tb => tb.ServiceProvided == "Bad");
          var totalGoodServiceRating = _database.Companies.Where(c => c.AdminId == AdminId).Count(tb => tb.ServiceProvided == "Good");
          var totalVeryGoodServiceRating = _database.Companies.Where(c => c.AdminId == AdminId).Count(tb => tb.ServiceProvided == "Very Good");
          var totalExcellentServiceRating = _database.Companies.Where(c => c.AdminId == AdminId).Count(tb => tb.ServiceProvided == "Excellent");

          var totalSoftwareInterested = _database.Companies.Where(c => c.AdminId == AdminId).Count(ts => ts.SoftwareInterested == "Yes");

                 return Ok (new CompanyReport{
              TotalVisits = totalVisits,
              TotalClientVisits = totalClientVisits,
              TotalFirstVisits = totalFirstVisits,
              TotalFranchiseVisits = totalFranchiseVisits,
              TotalSecondOrThirdVisits = totalSecondOrThirdVisits,

              TotalBadQueryRating = totalBadQueryRating,
              TotalGoodQueryRating = totalGoodQueryRating,
              TotalVeryGoodQueryRating = totalGoodQueryRating,
              TotalExcellentQueryRating = totalExcellentRating,

              TotalBadServiceRating = totalBadServiceRating,
              TotalGoodServiceRating = totalGoodServiceRating,
              TotalVeryGoodServiceRating = totalVeryGoodServiceRating,
              TotalExcellentServiceRating = totalExcellentServiceRating,

              TotalSoftwareInterested = totalSoftwareInterested

          });


            }

            [HttpGet("Marketings")]
            public IActionResult GetConsolidatedMarketingReports(){
                  var totalServiceInterested = _database.Marketings.Where(m => m.AdminId == AdminId).Count(ts=>ts.ServiceInterested=="Yes");

            var totalSoftwareInterested = _database.Marketings.Where(m => m.AdminId == AdminId).Count(ts => ts.SoftwareInterested =="Yes");
            

            return Ok(new MarketingReport{

                TotalServiceInterested = totalServiceInterested,
                TotalSoftwareInterested = totalSoftwareInterested
            });
            }
    }
}