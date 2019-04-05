using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Zpas.Application.Delegations.Interfaces;
using Zpas.Application.Helpers;

namespace Zpas.Application.Delegations.Users.Commands.SignIn
{
    public class SignInUserCommandHandler : IRequestHandler<SignInUserCommand, Response>
    {
        private readonly ISignInService _signInService;
        public SignInUserCommandHandler(ISignInService signInService)
        {
            _signInService = signInService;
        }
        public async Task<Response> Handle(SignInUserCommand request, CancellationToken cancellationToken)
        {
            var result = await _signInService.SignInUser(request.UserName, request.Password);
            return result;
        }
    }
}
