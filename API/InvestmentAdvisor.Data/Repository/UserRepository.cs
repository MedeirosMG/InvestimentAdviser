using InvestmentAdvisor.Data.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace InvestmentAdvisor.Data.Repository
{
    public class UserRepository : IDisposable
    {
        private DatabaseEntities _ctx;

        public UserRepository(DatabaseEntities ctx)
        {
            _ctx = ctx;
        }

        public UserRepository()
        {
            _ctx = new DatabaseEntities();
        }

        public List<User> Get()
        {            
            return _ctx.UserSet.ToList();
        }

        public User Get(int idUser)
        {
            return _ctx.UserSet.FirstOrDefault(user => user.IdUser == idUser);
        }

        public User Add(User user)
        {
            using (SHA256 hash = SHA256Managed.Create())
            {
                user.Password = String.Concat(hash
                  .ComputeHash(Encoding.UTF8.GetBytes(user.Password))
                  .Select(item => item.ToString("x2")));
            }

            return _ctx.UserSet.Add(user);
        }
        
        public User GetByEmail(string email)
        {
            return _ctx.UserSet.FirstOrDefault(o => o.Email == email);
        }

        public User Login(User user)
        {
            using (SHA256 hash = SHA256Managed.Create())
            {
                user.Password = String.Concat(hash
                  .ComputeHash(Encoding.UTF8.GetBytes(user.Password))
                  .Select(item => item.ToString("x2")));
            }

            return _ctx.UserSet.FirstOrDefault(u => u.Password == user.Password && u.Email == user.Email);
        }

        public void SaveChanges()
        {
            _ctx.SaveChanges();
        }

        public void Dispose()
        {
            if (_ctx != null)
                _ctx = null;
        }
    }
}
