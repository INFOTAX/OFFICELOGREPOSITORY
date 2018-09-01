using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Officelog.Domain.UserProfileLog;
using OfficeLog.Persistence;

namespace Officelog.WebApp.UserProfileApi
{
    [Produces("application/json")]
    [Route("api/UserProfile")]
    public class UserProfileController:Controller
    {
        private readonly IMapper _mappper;
        private readonly IReadModelDatabase _database;
        private readonly IUserProfileRepository _userProfileRepository;
        private readonly IUnitOfWork _unitOfWork;

        protected string UserProfileId => GetCurrentUserProfileId();

        public UserProfileController(IMapper mappper, IReadModelDatabase database,
                                     IUserProfileRepository userProfileRepository, 
                                     IUnitOfWork unitOfWork   )
        {
            _mappper = mappper;
            _database = database;
            _userProfileRepository = userProfileRepository;
            _unitOfWork = unitOfWork;
        }
            private string GetCurrentUserProfileId(){

                return "1";
        
    }

        [HttpGet("Profile")]

        public async Task<UserProfileResource> GetUserProfileById(string id="1")

        {
            var userProfile = await _database.UserProfiles.SingleOrDefaultAsync(p=> p.Id == id);

            return _mappper.Map<UserProfile, UserProfileResource>(userProfile);
        }

    }


}