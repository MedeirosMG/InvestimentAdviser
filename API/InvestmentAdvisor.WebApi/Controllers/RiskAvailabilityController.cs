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
    public class RiskAvailabilityController : ApiController
    {
        RiskAvailabilityService _riskAvailabilityService;

        /// <summary>
        /// 
        /// </summary>
        public RiskAvailabilityController()
        {
            _riskAvailabilityService = new RiskAvailabilityService();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<List<RiskAvailability>> Get()
        {
            return _riskAvailabilityService.Get();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<RiskAvailability> GetById(int idRiskAvailability)
        {
            return _riskAvailabilityService.Get(idRiskAvailability);
        }
    }
}
