using Officelog.Domain.Marketinglog;

namespace Officelog.WebApp.MarketingApi
{
    public class MarketingResource
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ContactNumber { get; set; }
        public bool ServiceInterested { get; set; }
        public bool SoftwareInterested { get; set; }
        public ConversionStatus ConversionStatus { get; set; }
    }
}