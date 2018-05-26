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
    public class TypeInvestmentService : IDisposable
    {
        private TypeInvestmentRepository _typeInvestmentRepository;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="typeInvestmentRepository"></param>
        public TypeInvestmentService(TypeInvestmentRepository typeInvestmentRepository)
        {
            _typeInvestmentRepository = typeInvestmentRepository;
        }

        /// <summary>
        /// 
        /// </summary>
        public TypeInvestmentService()
        {
            _typeInvestmentRepository = new TypeInvestmentRepository();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<List<Domain.Entities.TypeInvestment>> Get()
        {
            Result<List<Domain.Entities.TypeInvestment>> result = new Result<List<Domain.Entities.TypeInvestment>>();
            result.Content = new List<Domain.Entities.TypeInvestment>();

            try
            {
                foreach (var typeInvest in _typeInvestmentRepository.Get())
                {
                    result.Content.Add(Converters.ConvertTypeInvestmentToModel(typeInvest));
                }

                result = Result<List<Domain.Entities.TypeInvestment>>.ReturnMessageCollect("Sucess", result.Content);
            }
            catch (Exception ex)
            {
                result = Result<List<Domain.Entities.TypeInvestment>>.ReturnMessageCollect(ex.Message, null);
            }

            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public Result<Domain.Entities.TypeInvestment> Get(int idTypeInvestment)
        {
            Result<Domain.Entities.TypeInvestment> result = new Result<Domain.Entities.TypeInvestment>();

            try
            {
                result.Content = Converters.ConvertTypeInvestmentToModel(_typeInvestmentRepository.Get(idTypeInvestment));

                result = Result<Domain.Entities.TypeInvestment>.ReturnMessageCollect("Sucess", result.Content);
            }
            catch (Exception ex)
            {
                result = Result<Domain.Entities.TypeInvestment>.ReturnMessageCollect(ex.Message, null);
            }

            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        public void Dispose()
        {
            if (_typeInvestmentRepository != null)
                _typeInvestmentRepository = null;
        }
    }
}
