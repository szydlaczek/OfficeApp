using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Zpas.Application.Delegations.Interfaces;
using Zpas.Domain.Entities;
using Zpas.Infrastructure.Settings;

namespace Zpas.Infrastructure.Services
{
    public class JWTService : IJWTService
    {
        private readonly IOptions<JwtSettings> _JwtSettings;

        public JWTService(IOptions<JwtSettings> JwtSettings)
        {
            _JwtSettings = JwtSettings;
        }

        public string GenerateJWT(User user, IList<string> roles)
        {
            var claims = new List<Claim>()
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.Email, user.Email),
            };
            foreach (string role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role.ToUpper()));
            }
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_JwtSettings.Value.JwtKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                _JwtSettings.Value.JwtIssuer,
                _JwtSettings.Value.JwtIssuer,
                claims,
                expires: DateTime.Now.AddMinutes(720),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}