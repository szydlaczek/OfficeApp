using System.Collections.Generic;

namespace Zpas.Domain.Entities
{
    public class Role
    {
        public string Id { get; set; }

        public string Name { get; set; }
        public virtual ICollection<UserRole> UserRoles { get; protected set; } = new HashSet<UserRole>();
    }
}