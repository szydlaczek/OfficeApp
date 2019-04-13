using System;
using System.Collections.Generic;
using System.Text;
using Zpas.Domain.Entities;

namespace Zpas.Application.Delegations.Interfaces
{
    public interface IJWTService
    {
        string GenerateJWT(User user, IList<string> roles);        
    }
}
