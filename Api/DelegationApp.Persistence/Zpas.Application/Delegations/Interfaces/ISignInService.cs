using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Zpas.Application.Helpers;

namespace Zpas.Application.Delegations.Interfaces
{
    public interface ISignInService
    {
        Task<Response> SignInUser(string userName, string password);
    }
}
