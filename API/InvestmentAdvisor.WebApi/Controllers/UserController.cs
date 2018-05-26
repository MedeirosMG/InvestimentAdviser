using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using InvestmentAdvisor.Domain.Entities;
using InvestmentAdvisor.Application.Services;
using InvestmentAdvisor.Domain.Helpers;

namespace InvestmentAdvisor.WebApi.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    public class UserController : ApiController
    {
        UserService _userService;

        /// <summary>
        /// 
        /// </summary>
        public UserController()
        {
            _userService = new UserService();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<List<User>> Get()
        {
            return _userService.Get();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<User> GetById(int idUser)
        {
            return _userService.Get(idUser);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<User> GetByEmail(string email)
        {
            return _userService.GetByEmail(email);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<User> Login(User user)
        {
            return _userService.Login(user);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>        
        [HttpPost]
        public Result<User> Add(User user)
        {
            return _userService.Add(user);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<User> Update(User user)
        {
            return _userService.Update(user);
        }
    }
}
