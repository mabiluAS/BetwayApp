using Microsoft.AspNetCore.Mvc;

namespace BetwayApp.Models
{
    public class UsersRepository : IUsersRepository
    {
        public UsersRepository(BetwayContext context)
        {
            _context = context;
        }

        public readonly BetwayContext _context;

        public User? Login([FromBody] string email, [FromBody] string password)
        {
            return _context.Users.FirstOrDefault(u => u.Email == email && u.Password == password);
        }

        public void Register(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
        }
    }
}
