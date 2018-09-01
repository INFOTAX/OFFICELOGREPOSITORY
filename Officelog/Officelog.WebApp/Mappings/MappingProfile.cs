using AutoMapper;
using Officelog.Domain.Companylog;
using Officelog.Domain.Marketinglog;
using Officelog.WebApp.CompanyApi;
using Officelog.WebApp.ConversionApi;
using Officelog.WebApp.MarketingApi;

namespace Officelog.WebApp.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Company, SaveCompanyResource>();
            CreateMap<Company, CompanyResource>();
            CreateMap<Marketing, MarketingResource>();
            CreateMap<Marketing, SaveMarketingResource>();
            CreateMap<ServiceItem, SaveServiceItemResource>();
            CreateMap<Marketing, ConvertedResource>();
            CreateMap<Marketing, SaveConvertedResource>();
        }    
    }
}