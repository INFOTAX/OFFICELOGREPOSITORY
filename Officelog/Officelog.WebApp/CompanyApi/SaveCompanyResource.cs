namespace Officelog.WebApp.CompanyApi
{
    public class SaveCompanyResource
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