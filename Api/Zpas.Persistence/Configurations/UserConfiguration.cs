using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Zpas.Domain.Entities;

namespace Zpas.Persistence.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(k => k.Id);
            builder.HasMany(ur => ur.UserRoles)
                .WithOne(u => u.User)
                .HasForeignKey(f => f.UserId);
        }
    }
}