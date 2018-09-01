using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Officelog.Domain.Reports;
using OfficeLog.Persistence;

namespace Officelog.WebApp.CompanyApi
{
    [Produces("application/json")]
    [Route("api/CompanyReport")]
    public class CompanyReportControllers : Controller
    {
        private readonly IReadModelDatabase _database;

        public CompanyReportControllers(IReadModelDatabase database)
        {
            _database = database;
        }

        [HttpGet]

        public  IActionResult GetCompanyReports()
        {
          var totalVisits = _database.Companies.Count(tv=>tv.VisitorType == "Client"
                                                     || tv.VisitorType =="Franchise"
                                                     || tv.VisitorType == "First"
                                                     || tv.VisitorType == "Second Or Third"
                                                     );
        
          var totalClientVisits = _database.Companies.Count(tc => tc.VisitorType == "Client");
          var totalFirstVisits = _database.Companies.Count(tc => tc.VisitorType == "First");
          var totalFranchiseVisits = _database.Companies.Count(tc => tc.VisitorType == "Franchise");
          var totalSecondOrThirdVisits = _database.Companies.Count(tc => tc.VisitorType == "Second Or Third");
        
          var totalBadQueryRating = _database.Companies.Count(tb => tb.QueryHandling == "Bad");
          var totalGoodQueryRating = _database.Companies.Count(tb => tb.QueryHandling == "Good");
          var totalVeryGoodQueryRating = _database.Companies.Count(tb => tb.QueryHandling == "Very Good");
          var totalExcellentRating = _database.Companies.Count(tb => tb.QueryHandling == "Excellent");
          
          var totalBadServiceRating = _database.Companies.Count(tb => tb.ServiceProvided == "Bad");
          var totalGoodServiceRating = _database.Companies.Count(tb => tb.ServiceProvided == "Good");
          var totalVeryGoodServiceRating = _database.Companies.Count(tb => tb.ServiceProvided == "Very Good");
          var totalExcellentServiceRating = _database.Companies.Count(tb => tb.ServiceProvided == "Excellent");

          var totalSoftwareInterested = _database.Companies.Count(ts => ts.SoftwareInterested == "Yes");


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

    }

    

}