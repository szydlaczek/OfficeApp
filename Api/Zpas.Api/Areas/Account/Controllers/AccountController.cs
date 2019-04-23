using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;
using Zpas.Application.Delegations.Users.Commands.SignIn;

namespace Zpas.Api.Areas.Account.Controllers
{
    [Route("api/[controller]/[action]")]
    public class AccountController : Controller
    {
        private readonly IMediator _mediator;

        public AccountController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<IActionResult> SignIn([FromBody] SignInUserCommand command)
        {
            var response = await _mediator.Send(command);
            if (response.Errors.Any())
                return BadRequest(response.Errors);
            return Ok(response.Result);
        }
    }
}