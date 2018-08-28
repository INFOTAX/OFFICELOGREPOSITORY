using System;
using System.Collections.Generic;
using System.Text;

namespace Officelog.Domain.Companylog
{
    public class Company
    {
        public int Id { get; set; }
        
        public string Name { get; set; }
        public int ContactNumber { get; set; }
        public string QueryHandling { get; set; }
        public string ServiceProvided { get; set; }

        public string VisitorType {get; set;}

        public bool SoftwareInterested { get; set; }
        public string RateUs { get; set; }

        public string SuggestionForYes { get; set; }
        public string SuggestionForNo { get; set; }
    }
}
