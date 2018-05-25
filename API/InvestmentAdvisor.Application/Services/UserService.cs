using System;
using System.Collections.Generic;
using System.Linq;
using InvestmentAdvisor.Data.EntityFramework;
using InvestmentAdvisor.Data.Repository;
using InvestmentAdvisor.Domain.Entities;
using InvestmentAdvisor.Domain.Helpers;

namespace InvestmentAdvisor.Application.Services
{

    /// <summary>
    /// 
    /// </summary>
    public class UserService : IDisposable
    {
        private UserRepository _userRepository;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="userRepository"></param>
        public UserService(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        /// <summary>
        /// 
        /// </summary>
        public UserService()
        {
            _userRepository = new UserRepository();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<List<Domain.Entities.User>> Get()
        {
            Result<List<Domain.Entities.User>> result = new Result<List<Domain.Entities.User>>();
            result.Content = new List<Domain.Entities.User>();

            try
            {
                foreach (var user in _userRepository.Get())
                {
                    result.Content.Add(Converters.ConvertUserToModel(user));
                }

                result = Result<List<Domain.Entities.User>>.ReturnMessageCollect("Sucess", result.Content);
            }
            catch (Exception ex)
            {
                result = Result<List<Domain.Entities.User>>.ReturnMessageCollect(ex.Message, null);
            }

            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<Domain.Entities.User> Get(int idUser)
        {
            Result<Domain.Entities.User> result = new Result<Domain.Entities.User>();

            try
            {
                result.Content = Converters.ConvertUserToModel(_userRepository.Get(idUser));

                result = Result<Domain.Entities.User>.ReturnMessageCollect("Sucess", result.Content);
            }
            catch (Exception ex)
            {
                result = Result<Domain.Entities.User>.ReturnMessageCollect(ex.Message, null);
            }

            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<Domain.Entities.User> GetByEmail(string email)
        {
            Result<Domain.Entities.User> result = new Result<Domain.Entities.User>();

            try
            {
                result.Content = Converters.ConvertUserToModel(_userRepository.GetByEmail(email));

                if(result.Content == null)
                    result = Result<Domain.Entities.User>.ReturnMessageCollect("Usuário não existe", null);
                else
                    result = Result<Domain.Entities.User>.ReturnMessageCollect("Usuário já existe", result.Content);
            }
            catch (Exception ex)
            {
                result = Result<Domain.Entities.User>.ReturnMessageCollect(ex.Message, null);
            }

            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<Domain.Entities.User> Add(Domain.Entities.User user)
        {
            Result<Domain.Entities.User> result = new Result<Domain.Entities.User>();

            try
            {
                result.Content = Converters.ConvertUserToModel(
                                    _userRepository.Add(Converters.ConvertUserToData(user))
                                 );

                _userRepository.SaveChanges();

                result = Result<Domain.Entities.User>.ReturnMessageCollect("Sucess", result.Content);
            }
            catch (Exception ex)
            {
                result = Result<Domain.Entities.User>.ReturnMessageCollect(ex.Message, null);
            }

            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<Domain.Entities.User> Login(Domain.Entities.User user)
        {
            Result<Domain.Entities.User> result = new Result<Domain.Entities.User>();

            try
            {
                result.Content = Converters.ConvertUserToModel(
                                    _userRepository.Login(Converters.ConvertUserToData(user))
                                 );

                if(result.Content == null)
                    result = Result<Domain.Entities.User>.ReturnMessageCollect("E-mail ou senha incorreta.", null);
                else
                    result = Result<Domain.Entities.User>.ReturnMessageCollect("Sucess", result.Content);
            }
            catch (Exception ex)
            {
                result = Result<Domain.Entities.User>.ReturnMessageCollect(ex.Message, null);
            }

            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        public void Dispose()
        {
            if (_userRepository != null)
                _userRepository = null;
        }
    }
}
