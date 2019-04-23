using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Zpas.Application.Delegations.Interfaces;
using Zpas.Application.Helpers;
using Zpas.Persistence.Context;

namespace Zpas.Application.Delegations.Users.Commands.SignIn
{
    public class SignInUserCommandHandler : IRequestHandler<SignInUserCommand, Response>
    {
        private readonly ISignInService _signInService;
        private readonly IJWTService _jWTService;
        private readonly ApplicationDbContext _context;

        public SignInUserCommandHandler(ISignInService signInService, IJWTService jWTService, ApplicationDbContext context)
        {
            _signInService = signInService;
            _jWTService = jWTService;
            _context = context;
        }

        public async Task<Response> Handle(SignInUserCommand request, CancellationToken cancellationToken)
        {
            var result = await _signInService.SignInUser(request.UserName, request.Password);

            if (result.Errors.Any())
                return result;

            var user = await _context.Users.Include(r => r.UserRoles).ThenInclude(r => r.Role).FirstOrDefaultAsync();
            var userRoles = user.UserRoles.Select(d => d.Role.Name).ToList();
            var jwtToken = _jWTService.GenerateJWT(user, userRoles);
            var tokenResult = new
            {
                token = jwtToken,
                type = "Bearer",
                expired = DateTime.Now.AddMinutes(720),
                roles = userRoles,
                email = user.Email,
                firstName = user.FirstName,
                lastName = user.LastName                
            };
            return new Response(tokenResult);

        }
    }
}