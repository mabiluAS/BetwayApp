namespace BetwayApp.Models
{
    public interface IUsersRepository
    {
        public void Register(User user);

        public User? Login(string email, string password);
    }
}
