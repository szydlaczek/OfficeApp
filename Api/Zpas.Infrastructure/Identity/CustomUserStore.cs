using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Zpas.Domain.Entities;
using Zpas.Persistence.Context;

namespace Zpas.Infrastructure.Identity
{
    public class CustomUserStore : IUserStore<User>,
                                   IUserRoleStore<User>,
                                   IUserPasswordStore<User>,
                                   IUserEmailStore<User>
    {
        private ApplicationDbContext _contextDB;

        public CustomUserStore(ApplicationDbContext contextDB)
        {
            this._contextDB = contextDB;
        }

        public Task<IdentityResult> CreateAsync(User user, CancellationToken cancellationToken)
        {
            _contextDB.Users.Add(user);
            _contextDB.SaveChanges();

            return Task.FromResult(IdentityResult.Success);
        }

        public Task<IdentityResult> UpdateAsync(User user, CancellationToken cancellationToken)
        {
            if (user == null)
            {
                throw new ArgumentNullException("user");
            }

            _contextDB.Entry(user).State = EntityState.Modified;
            _contextDB.SaveChanges();

            return Task.FromResult(IdentityResult.Success);
        }

        /// <summary>
        /// Usunięcie wybranego użytkownika
        /// </summary>
        public Task<IdentityResult> DeleteAsync(User user, CancellationToken cancellationToken)
        {
            if (user == null)
            {
                throw new ArgumentNullException("user");
            }

            _contextDB.Users.Remove(user);
            _contextDB.SaveChanges();

            return Task.FromResult(IdentityResult.Success);
        }

        public Task<User> FindByIdAsync(string userId, CancellationToken cancellationToken)
            => Task.FromResult(_contextDB.Users.Find(userId));

        public Task<User> FindByNameAsync(string normalizedUserName, CancellationToken cancellationToken)
            => Task.FromResult(_contextDB.Users.Where(u => u.UserName == normalizedUserName).FirstOrDefault());

        public Task<string> GetUserIdAsync(User user, CancellationToken cancellationToken)
            => Task.FromResult(user.Id.ToString());

        public Task<string> GetUserNameAsync(User user, CancellationToken cancellationToken)
            => Task.FromResult(user.UserName);

        public Task SetUserNameAsync(User user, string userName, CancellationToken cancellationToken)
        {
            if (user == null)
            {
                throw new ArgumentNullException("user");
            }

            user.UserName = userName;
            _contextDB.SaveChanges();

            return Task.CompletedTask;
        }

        public Task<string> GetNormalizedUserNameAsync(User user, CancellationToken cancellationToken)
            => Task.FromResult(user.UserName);

        public Task SetNormalizedUserNameAsync(User user, string normalizedName, CancellationToken cancellationToken)
            => Task.CompletedTask;

        public Task AddToRoleAsync(User user, string roleName, CancellationToken cancellationToken)
        {
            if (user == null)
            {
                throw new ArgumentNullException("user");
            }

            if (string.IsNullOrEmpty(roleName))
            {
                throw new ArgumentNullException("Argument cannot be null or empty: roleName.");
            }

            var findRole = _contextDB.Roles.Where(r => r.Name == roleName).FirstOrDefault();
            if (findRole != null)
            {
                _contextDB.UserRoles.Add(new UserRole { UserId = user.Id, RoleId = findRole.Id });
                _contextDB.SaveChanges();
            }

            return Task.CompletedTask;
        }

        public Task<IList<string>> GetRolesAsync(User user, CancellationToken cancellationToken)
            => Task.FromResult((IList<string>)user.UserRoles.Select(ur => ur.Role).Select(r => r.Name).ToList());

        public Task<bool> IsInRoleAsync(User user, string roleName, CancellationToken cancellationToken)
            => Task.FromResult(user.UserRoles.Select(ur => ur.Role.Name).Contains(roleName));

        public Task<IList<User>> GetUsersInRoleAsync(string roleName, CancellationToken cancellationToken)
        {
            if (String.IsNullOrEmpty(roleName))
            {
                throw new ArgumentNullException("roleName");
            }

            return Task.FromResult((IList<User>)(_contextDB.UserRoles
                .Include(ur => ur.Role)
                .Include(ur => ur.User)
                .Where(ur => ur.Role.Name == roleName)
                .Select(ur => ur.User)
                .ToList()));
        }

        public Task RemoveFromRoleAsync(User user, string roleName, CancellationToken cancellationToken)
        {
            if (user == null)
            {
                throw new ArgumentNullException("user");
            }

            var findRole = _contextDB.Roles.Where(r => r.Name == roleName).FirstOrDefault();
            if (findRole != null)
            {
                _contextDB.UserRoles.Remove(user.UserRoles.Where(ur => ur.RoleId == findRole.Id).FirstOrDefault());
                _contextDB.SaveChanges();
            }

            return Task.CompletedTask;
        }

        public Task SetPasswordHashAsync(User user, string passwordHash, CancellationToken cancellationToken)
        {
            if (user == null)
            {
                throw new ArgumentNullException("user");
            }

            user.PasswordHash = passwordHash;

            return Task.CompletedTask;
        }

        public Task<string> GetPasswordHashAsync(User user, CancellationToken cancellationToken)
            => Task.FromResult(user.PasswordHash);

        public Task<bool> HasPasswordAsync(User user, CancellationToken cancellationToken)
        {
            if (user == null)
            {
                throw new ArgumentNullException("user");
            }

            var hasPassword = !string.IsNullOrEmpty(user.PasswordHash);

            return Task.FromResult(hasPassword);
        }

        public void Dispose()
        {
            if (_contextDB != null)
            {
                _contextDB.Dispose();
                _contextDB = null;
            }
        }

        public Task SetEmailAsync(User user, string email, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<string> GetEmailAsync(User user, CancellationToken cancellationToken)
        {
            return Task.FromResult<string>(user.Email);
        }

        public Task<bool> GetEmailConfirmedAsync(User user, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task SetEmailConfirmedAsync(User user, bool confirmed, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public async Task<User> FindByEmailAsync(string normalizedEmail, CancellationToken cancellationToken)
        {
            var user = await _contextDB
                .Users
                .FirstOrDefaultAsync(u => u.Email == normalizedEmail);

            return user;
        }

        public Task<string> GetNormalizedEmailAsync(User user, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task SetNormalizedEmailAsync(User user, string normalizedEmail, CancellationToken cancellationToken)
        {
            user.Email = normalizedEmail;
            return Task.CompletedTask;
        }
    }
}