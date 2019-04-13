using System;
using System.Collections.Generic;
using System.Text;

namespace Zpas.Infrastructure.Settings
{
    public class JwtSettings
    {
        public string JwtKey { get; set; }
        public string JwtIssuer { get; set; }
        public int JwtExpireDays { get; set; }
    }
}
