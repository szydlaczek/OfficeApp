using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Zpas.Domain.Entities;
using Zpas.Persistence.Context;

namespace Zpas.Infrastructure.Identity
{
    public class CustomRoleStore : IRoleStore<Role>
    {
        private ApplicationDbContext _contextDB;
        public CustomRoleStore(ApplicationDbContext contextDB)
        {
            this._contextDB = contextDB;
        }
        public async Task<IdentityResult> CreateAsync(Role role, CancellationToken cancellationToken)
        {
            if (role == null)
            {
                throw new ArgumentNullException("role");
            }

            _contextDB.Roles.Add(role);
            await _contextDB.SaveChangesAsync();

            return IdentityResult.Success;
        }

        public Task<IdentityResult> DeleteAsync(Role role, CancellationToken cancellationToken)
        {
            if (role == null)
            {
                throw new ArgumentNullException("role");
            }

            _contextDB.Roles.Remove(role);
            _contextDB.SaveChanges();

            return Task.FromResult(IdentityResult.Success);
        }

        public Task<Role> FindByIdAsync(string roleId, CancellationToken cancellationToken)
            => Task.FromResult(_contextDB.Roles.Find(roleId));

        public Task<Role> FindByNameAsync(string normalizedRoleName, CancellationToken cancellationToken)
            => Task.FromResult(_contextDB.Roles.Where(r => r.Name == normalizedRoleName).FirstOrDefault());

        public Task<IdentityResult> UpdateAsync(Role role, CancellationToken cancellationToken)
        {
            if (role == null)
            {
                throw new ArgumentNullException("role");
            }

            _contextDB.Entry(role).State = EntityState.Modified;
            _contextDB.SaveChanges();

            return Task.FromResult(IdentityResult.Success);
        }

        public Task<string> GetNormalizedRoleNameAsync(Role role, CancellationToken cancellationToken)
            => Task.FromResult(role.Name);

        public Task<string> GetRoleIdAsync(Role role, CancellationToken cancellationToken)
            => Task.FromResult(role.Id);

        public Task<string> GetRoleNameAsync(Role role, CancellationToken cancellationToken)
            => Task.FromResult(role.Name);

        public Task SetNormalizedRoleNameAsync(Role role, string normalizedName, CancellationToken cancellationToken)
        {
            if (role == null)
            {
                throw new ArgumentNullException("role");
            }

            role.Name = normalizedName;
            _contextDB.SaveChanges();

            return Task.CompletedTask;
        }

        public Task SetRoleNameAsync(Role role, string roleName, CancellationToken cancellationToken)
        {
            if (role == null)
            {
                throw new ArgumentNullException("role");
            }

            role.Name = roleName;
            _contextDB.SaveChanges();

            return Task.CompletedTask;
        }

        public void Dispose()
        {
        }
    }
}
