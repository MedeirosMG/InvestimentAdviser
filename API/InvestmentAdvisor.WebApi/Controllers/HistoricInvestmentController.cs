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
    public class HistoricInvestmentController : ApiController
    {
        HistoricInvestmentService _historicInvestmentService;

        /// <summary>
        /// 
        /// </summary>
        public HistoricInvestmentController()
        {
            _historicInvestmentService = new HistoricInvestmentService();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<List<HistoricInvestment>> Get()
        {
            return _historicInvestmentService.Get();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<List<HistoricInvestment>> GetByUser(int idUser)
        {
            return _historicInvestmentService.GetByUser(idUser);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<HistoricInvestment> GetById(int idHistoricInvestment)
        {
            return _historicInvestmentService.Get(idHistoricInvestment);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<HistoricInvestment> Add(HistoricInvestment historicInvestment)
        {
            return _historicInvestmentService.Add(historicInvestment);
        }
    }
}
