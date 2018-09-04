using System;
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
        protected int AdminId => GetAdminId();

        private int GetAdminId()
        {
           return 1;
        }

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

        public async Task<UserProfileResource> GetUserProfileById()

        {
            var userProfile = await _database.UserProfiles.SingleOrDefaultAsync(p=> p.Id == "1");

            return _mappper.Map<UserProfile, UserProfileResource>(userProfile);
        }

        [HttpGet("UserUnits")]
        public async Task<IActionResult> Get()
        {
             var userUnits = await _database.UserProfiles
                                    .ToListAsync();

               return Ok(userUnits); 
        }

    }


}