using System.Collections.Generic;

namespace Officelog.WebApp.MarketingApi
{
    public class SaveConvertedResource
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ContactNumber { get; set; }
         public List<SaveServiceItemResource> ServiceItems {get; set;}

    }
}