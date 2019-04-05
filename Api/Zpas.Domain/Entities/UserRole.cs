using System;
using System.Collections.Generic;
using System.Text;

namespace Zpas.Domain.Entities
{
    public class UserRole
    {
        #region Fields
        public string UserId { get; set; }
        public User User { get; set; }        
        public string RoleId { get; set; }
        public Role Role { get; set; }
        #endregion Fields
    }
}
