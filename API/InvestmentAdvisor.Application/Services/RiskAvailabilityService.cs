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
    public class RiskAvailabilityService : IDisposable
    {
        private RiskAvailabilityRepository _riskAvailabilityRepository;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="riskAvailabilityRepository"></param>
        public RiskAvailabilityService(RiskAvailabilityRepository riskAvailabilityRepository)
        {
            _riskAvailabilityRepository = riskAvailabilityRepository;
        }

        /// <summary>
        /// 
        /// </summary>
        public RiskAvailabilityService()
        {
            _riskAvailabilityRepository = new RiskAvailabilityRepository();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<List<Domain.Entities.RiskAvailability>> Get()
        {
            Result<List<Domain.Entities.RiskAvailability>> result = new Result<List<Domain.Entities.RiskAvailability>>();
            result.Content = new List<Domain.Entities.RiskAvailability>();

            try
            {
                foreach (var risk in _riskAvailabilityRepository.Get())
                {
                    result.Content.Add(Converters.ConvertRiskAvailabilityToModel(risk));
                }

                result = Result<List<Domain.Entities.RiskAvailability>>.ReturnMessageCollect("Sucess", result.Content);
            }
            catch (Exception ex)
            {
                result = Result<List<Domain.Entities.RiskAvailability>>.ReturnMessageCollect(ex.Message, null);
            }

            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<Domain.Entities.RiskAvailability> Get(int idRiskAvailability)
        {
            Result<Domain.Entities.RiskAvailability> result = new Result<Domain.Entities.RiskAvailability>();

            try
            {
                result.Content = Converters.ConvertRiskAvailabilityToModel(_riskAvailabilityRepository.Get(idRiskAvailability));

                result = Result<Domain.Entities.RiskAvailability>.ReturnMessageCollect("Sucess", result.Content);
            }
            catch (Exception ex)
            {
                result = Result<Domain.Entities.RiskAvailability>.ReturnMessageCollect(ex.Message, null);
            }

            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        public void Dispose()
        {
            if (_riskAvailabilityRepository != null)
                _riskAvailabilityRepository = null;
        }
    }
}
