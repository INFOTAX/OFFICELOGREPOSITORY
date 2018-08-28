using System;
using System.Collections.Generic;
using System.Text;

namespace Officelog.Domain.Marketinglog
{
    public class Marketing
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int ContactNumber { get; set; }
        public bool ServiceInterested { get; set; }
        public bool SoftwareInterested { get; set; }
        public ConversionStatus ConversionStatus { get; set; }
        public string RateUs { get; set; }
        public string SuggestionForYes { get; set; }
        public string SuggestionForNo { get; set; }
        public string ServiceType { get; set; }
        public double Rate { get; set; }
        public string  Area { get; set; }

    }

    public enum ConversionStatus{
        Achieved = 1,
        NotAchieved = 2

    }
}
