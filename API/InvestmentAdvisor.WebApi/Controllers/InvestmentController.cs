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
    public class InvestmentController : ApiController
    {
        InvestmentService _investmentService;

        /// <summary>
        /// 
        /// </summary>
        public InvestmentController()
        {
            _investmentService = new InvestmentService();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<List<Investment>> Get()
        {
            return _investmentService.Get();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<List<Investment>> GetByName(string name)
        {
            return _investmentService.GetByName(name);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<List<Investment>> GetByRisk(int idRiskAvailability)
        {
            return _investmentService.GetByRisk(idRiskAvailability);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<List<Investment>> GetByType(int idTypeInvestment)
        {
            return _investmentService.GetByType(idTypeInvestment);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<Investment> GetById(int idInvestment)
        {
            return _investmentService.Get(idInvestment);
        }
    }
}
