using System;
using System.Collections.Generic;
using System.Text;

namespace Zpas.Domain.Entities
{
    public class User
    {
        public string Id { get;  set; }
        public string FirstName { get; set; }
        public string LastName { get;  set; }
        public string UserName { get; set; }
        public string Email { get;  set; }
        public string PasswordHash { get;  set; }
        public virtual ICollection<UserRole> UserRoles { get; set; } = new HashSet<UserRole>();
    }
}
