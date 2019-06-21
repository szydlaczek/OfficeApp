using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using Zpas.Application.Delegations.Interfaces;
using Zpas.Application.Exceptions;
using Zpas.Application.Helpers;
using Zpas.Domain.Entities;

namespace Zpas.Infrastructure.Services
{
    public class SignInService : ISignInService
    {
        private readonly SignInManager<User> _signInManager;

        public SignInService(SignInManager<User> signInManager)
        {
            _signInManager = signInManager;
        }

        public async Task<Response> SignInUser(string userName, string password)
        {
            var result = await _signInManager.PasswordSignInAsync(userName, password, false, false);
            if (!result.Succeeded)
            {
                var response = new Response(new ErrorItem
                {
                    Code = ErrorCodesEnum.BasUserNameOrPassword,
                    Description = "Złe hasło lub nazwa użytkownika"
                });

                return response;
            }
            else
                return new Response();
        }
    }
}