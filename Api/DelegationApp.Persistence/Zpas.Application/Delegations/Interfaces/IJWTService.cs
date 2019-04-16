using System.Collections.Generic;
using Zpas.Domain.Entities;

namespace Zpas.Application.Delegations.Interfaces
{
    public interface IJWTService
    {
        string GenerateJWT(User user, IList<string> roles);
    }
}