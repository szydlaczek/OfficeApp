using MediatR;
using Zpas.Application.Helpers;

namespace Zpas.Application.Delegations.Users.Commands.SignIn
{
    public class SignInUserCommand : IRequest<Response>
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}