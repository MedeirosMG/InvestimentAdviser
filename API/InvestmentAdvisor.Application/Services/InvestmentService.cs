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
    public class InvestmentService : IDisposable
    {
        private InvestmentRepository _investmentRepository;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="investmentRepository"></param>
        public InvestmentService(InvestmentRepository investmentRepository)
        {
            _investmentRepository = investmentRepository;
        }

        /// <summary>
        /// 
        /// </summary>
        public InvestmentService()
        {
            _investmentRepository = new InvestmentRepository();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<List<Domain.Entities.Investment>> Get()
        {
            Result<List<Domain.Entities.Investment>> result = new Result<List<Domain.Entities.Investment>>();
            result.Content = new List<Domain.Entities.Investment>();

            try
            {
                foreach (var invest in _investmentRepository.Get())
                {
                    result.Content.Add(Converters.ConvertInvestmentToModel(invest));
                }

                result = Result<List<Domain.Entities.Investment>>.ReturnMessageCollect("Sucess", result.Content);
            }
            catch (Exception ex)
            {
                result = Result<List<Domain.Entities.Investment>>.ReturnMessageCollect(ex.Message, null);
            }

            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<Domain.Entities.Investment> Get(int idInvestment)
        {
            Result<Domain.Entities.Investment> result = new Result<Domain.Entities.Investment>();

            try
            {
                result.Content = Converters.ConvertInvestmentToModel(_investmentRepository.Get(idInvestment));

                result = Result<Domain.Entities.Investment>.ReturnMessageCollect("Sucess", result.Content);
            }
            catch (Exception ex)
            {
                result = Result<Domain.Entities.Investment>.ReturnMessageCollect(ex.Message, null);
            }

            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="idTypeInvestment"></param>
        /// <returns></returns>
        public Result<List<Domain.Entities.Investment>> GetByType(int idTypeInvestment)
        {
            Result<List<Domain.Entities.Investment>> result = new Result<List<Domain.Entities.Investment>>();
            result.Content = new List<Domain.Entities.Investment>();

            try
            {
                foreach (var invest in _investmentRepository.GetByType(idTypeInvestment))
                {
                    result.Content.Add(Converters.ConvertInvestmentToModel(invest));
                }

                result = Result<List<Domain.Entities.Investment>>.ReturnMessageCollect("Sucess", result.Content);
            }
            catch (Exception ex)
            {
                result = Result<List<Domain.Entities.Investment>>.ReturnMessageCollect(ex.Message, null);
            }

            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="idRiskAvailability"></param>
        /// <returns></returns>
        public Result<List<Domain.Entities.Investment>> GetByRisk(int idRiskAvailability)
        {
            Result<List<Domain.Entities.Investment>> result = new Result<List<Domain.Entities.Investment>>();
            result.Content = new List<Domain.Entities.Investment>();

            try
            {
                foreach (var invest in _investmentRepository.GetByRisk(idRiskAvailability))
                {
                    result.Content.Add(Converters.ConvertInvestmentToModel(invest));
                }

                result = Result<List<Domain.Entities.Investment>>.ReturnMessageCollect("Sucess", result.Content);
            }
            catch (Exception ex)
            {
                result = Result<List<Domain.Entities.Investment>>.ReturnMessageCollect(ex.Message, null);
            }

            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public Result<List<Domain.Entities.Investment>> GetByName(string name)
        {
            Result<List<Domain.Entities.Investment>> result = new Result<List<Domain.Entities.Investment>>();
            result.Content = new List<Domain.Entities.Investment>();

            try
            {
                foreach (var invest in _investmentRepository.GetByName(name))
                {
                    result.Content.Add(Converters.ConvertInvestmentToModel(invest));
                }

                result = Result<List<Domain.Entities.Investment>>.ReturnMessageCollect("Sucess", result.Content);
            }
            catch (Exception ex)
            {
                result = Result<List<Domain.Entities.Investment>>.ReturnMessageCollect(ex.Message, null);
            }

            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        public void Dispose()
        {
            if (_investmentRepository != null)
                _investmentRepository = null;
        }
    }
}
