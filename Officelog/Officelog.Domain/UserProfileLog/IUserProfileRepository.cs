using System.Threading.Tasks;

namespace Officelog.Domain.UserProfileLog
{
    public interface IUserProfileRepository : IRepositoryBase<UserProfile>
    {
        new Task<UserProfile> GetAsync(object id, string userProfileId);
         
    }
}