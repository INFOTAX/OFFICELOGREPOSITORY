namespace Officelog.WebApp.CompanyApi
{
    public class CompanyResource
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int ContactNumber { get; set; }
        public string QueryHandling { get; set; }
        public string ServiceProvided { get; set; }
         public string VisitorType {get; set;}
    }
}