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
    public class HistoricInvestmentService : IDisposable
    {
        private HistoricInvestmentRepository _historicInvestmentRepository;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="historicInvestmentRepository"></param>
        public HistoricInvestmentService(HistoricInvestmentRepository historicInvestmentRepository)
        {
            _historicInvestmentRepository = historicInvestmentRepository;
        }

        /// <summary>
        /// 
        /// </summary>
        public HistoricInvestmentService()
        {
            _historicInvestmentRepository = new HistoricInvestmentRepository();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<List<Domain.Entities.HistoricInvestment>> Get()
        {
            Result<List<Domain.Entities.HistoricInvestment>> result = new Result<List<Domain.Entities.HistoricInvestment>>();

            try
            {
                foreach (var HistoricInvestment in _historicInvestmentRepository.Get())
                {
                    result.Content.Add(Converters.ConvertHistoricInvestmentToModel(HistoricInvestment));
                }

                result = Result<List<Domain.Entities.HistoricInvestment>>.ReturnMessageCollect("Sucess", result.Content);
            }
            catch (Exception ex)
            {
                result = Result<List<Domain.Entities.HistoricInvestment>>.ReturnMessageCollect(ex.Message, null);
            }

            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<Domain.Entities.HistoricInvestment> Get(int idHistoricInvestment)
        {
            Result<Domain.Entities.HistoricInvestment> result = new Result<Domain.Entities.HistoricInvestment>();

            try
            {
                result.Content = Converters.ConvertHistoricInvestmentToModel(_historicInvestmentRepository.Get(idHistoricInvestment));

                result = Result<Domain.Entities.HistoricInvestment>.ReturnMessageCollect("Sucess", result.Content);
            }
            catch (Exception ex)
            {
                result = Result<Domain.Entities.HistoricInvestment>.ReturnMessageCollect(ex.Message, null);
            }

            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<Domain.Entities.HistoricInvestment> Add(Domain.Entities.HistoricInvestment HistoricInvestment)
        {
            Result<Domain.Entities.HistoricInvestment> result = new Result<Domain.Entities.HistoricInvestment>();

            try
            {
                result.Content = Converters.ConvertHistoricInvestmentToModel(
                                    _historicInvestmentRepository.Add(Converters.ConvertHistoricInvestmentToData(HistoricInvestment))
                                 );

                _historicInvestmentRepository.SaveChanges();

                result = Result<Domain.Entities.HistoricInvestment>.ReturnMessageCollect("Sucess", result.Content);
            }
            catch (Exception ex)
            {
                result = Result<Domain.Entities.HistoricInvestment>.ReturnMessageCollect(ex.Message, null);
            }

            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="idUser"></param>
        /// <returns></returns>
        public Result<List<Domain.Entities.HistoricInvestment>> GetByUser(int idUser)
        {
            Result<List<Domain.Entities.HistoricInvestment>> result = new Result<List<Domain.Entities.HistoricInvestment>>();

            try
            {
                foreach (var HistoricInvestment in _historicInvestmentRepository.GetByUser(idUser))
                {
                    result.Content.Add(Converters.ConvertHistoricInvestmentToModel(HistoricInvestment));
                }

                result = Result<List<Domain.Entities.HistoricInvestment>>.ReturnMessageCollect("Sucess", result.Content);
            }
            catch (Exception ex)
            {
                result = Result<List<Domain.Entities.HistoricInvestment>>.ReturnMessageCollect(ex.Message, null);
            }

            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        public void Dispose()
        {
            if (_historicInvestmentRepository != null)
                _historicInvestmentRepository = null;
        }
    }
}
