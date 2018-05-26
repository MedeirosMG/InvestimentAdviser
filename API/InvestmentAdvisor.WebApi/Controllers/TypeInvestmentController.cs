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
    public class TypeInvestmentController : ApiController
    {
        TypeInvestmentService _typeInvestmentService;

        /// <summary>
        /// 
        /// </summary>
        public TypeInvestmentController()
        {
            _typeInvestmentService = new TypeInvestmentService();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<List<TypeInvestment>> Get()
        {
            return _typeInvestmentService.Get();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<TypeInvestment> GetById(int idTypeInvestment)
        {
            return _typeInvestmentService.Get(idTypeInvestment);
        }
    }
}
