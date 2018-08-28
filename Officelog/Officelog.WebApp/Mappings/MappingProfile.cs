using AutoMapper;
using Officelog.Domain.Companylog;
using Officelog.WebApp.CompanyApi;

namespace Officelog.WebApp.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Company, SaveCompanyResource>();
            CreateMap<Company, CompanyResource>();
        }    }
}