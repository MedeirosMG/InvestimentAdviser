using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InvestmentAdvisor.Domain.Entities;
using InvestmentAdvisor.Data.EntityFramework;

namespace InvestmentAdvisor.Domain.Helpers
{
    public static class Converters
    {
        public static Entities.User ConvertUserToModel(Data.EntityFramework.User user)
        {
            if (user != null)
                return new Entities.User()
                {
                    Cpf = user.Cpf,
                    Email = user.Email,
                    IdRiskAvailability = user.IdRiskAvailability,
                    IdUser = user.IdUser,
                    Name = user.Name,
                    NumberChildren = user.NumberChildren,
                    Password = user.Password,
                    VolumAvailable = user.VolumAvailable,
                };
            else
                return null;
        }

        public static Data.EntityFramework.User ConvertUserToData(Entities.User user)
        {
            if (user != null)
                return new Data.EntityFramework.User()
                {
                    Cpf = user.Cpf,
                    Email = user.Email,
                    IdRiskAvailability = user.IdRiskAvailability,
                    IdUser = user.IdUser,
                    Name = user.Name,
                    NumberChildren = user.NumberChildren,
                    Password = user.Password,
                    VolumAvailable = user.VolumAvailable,
                };
            else
                return null;
        }

        public static Entities.RiskAvailability ConvertRiskAvailabilityToModel(Data.EntityFramework.RiskAvailability riskAvailability)
        {
            if (riskAvailability == null)
                return null;
            else
                return new Entities.RiskAvailability()
                {
                    Description = riskAvailability.Description,
                    IdRiskAvailability = riskAvailability.IdRiskAvailability,
                };
        }

        public static Data.EntityFramework.RiskAvailability ConvertRiskAvailabilityToData(Entities.RiskAvailability riskAvailability)
        {
            if (riskAvailability == null)
                return null;
            else
                return new Data.EntityFramework.RiskAvailability()
                {
                    Description = riskAvailability.Description,
                    IdRiskAvailability = riskAvailability.IdRiskAvailability,
                };
        }

        public static Entities.TypeInvestment ConvertTypeInvestmentToModel(Data.EntityFramework.TypeInvestment typeInvestment)
        {
            if (typeInvestment == null)
                return null;
            else
                return new Entities.TypeInvestment()
                {
                    Description = typeInvestment.Description,
                    IdTypeInvestment = typeInvestment.IdTypeInvestment,
                };
        }

        public static Data.EntityFramework.TypeInvestment ConvertTypeInvestmentToData(Entities.TypeInvestment typeInvestment)
        {
            if (typeInvestment == null)
                return null;
            else
                return new Data.EntityFramework.TypeInvestment()
                {
                    Description = typeInvestment.Description,
                    IdTypeInvestment = typeInvestment.IdTypeInvestment,
                };
        }

        public static Entities.Investment ConvertInvestmentToModel(Data.EntityFramework.Investment investment)
        {
            if (investment == null)
                return null;
            else
                return new Entities.Investment()
                {
                    Details = investment.Details,
                    IdInvestment = investment.IdInvestment,
                    IdRiskAvailability = investment.IdRiskAvailability,
                    IdTypeInvestment = investment.IdTypeInvestment,
                    Link = investment.Link,
                    Name = investment.Name,
                    PercentReturn = investment.PercentReturn,
                    RiskAvailability = ConvertRiskAvailabilityToModel(investment.RiskAvailability),
                    TypeInvestment = ConvertTypeInvestmentToModel(investment.TypeInvestment),
                };
        }

        public static Data.EntityFramework.Investment ConvertInvestmentToData(Entities.Investment investment)
        {
            if (investment == null)
                return null;
            else
                return new Data.EntityFramework.Investment()
                {
                    Details = investment.Details,
                    IdInvestment = investment.IdInvestment,
                    IdRiskAvailability = investment.IdRiskAvailability,
                    IdTypeInvestment = investment.IdTypeInvestment,
                    Link = investment.Link,
                    Name = investment.Name,
                    PercentReturn = investment.PercentReturn,
                };
        }

        public static Entities.HistoricInvestment ConvertHistoricInvestmentToModel(Data.EntityFramework.HistoricInvestment historicInvestment)
        {
            if (historicInvestment == null)
                return null;
            else
                return new Entities.HistoricInvestment()
                {
                    IdInvestment = historicInvestment.IdInvestment,
                    Date = historicInvestment.Date,
                    IdHistoricInvestment = historicInvestment.IdHistoricInvestment,
                    IdUser = historicInvestment.IdUser,
                    ValueInvested = historicInvestment.ValueInvested,
                    Investment = ConvertInvestmentToModel(historicInvestment.Investment),
                    User = ConvertUserToModel(historicInvestment.User),
                };
        }

        public static Data.EntityFramework.HistoricInvestment ConvertHistoricInvestmentToData(Entities.HistoricInvestment historicInvestment)
        {
            if (historicInvestment == null)
                return null;
            else
                return new Data.EntityFramework.HistoricInvestment()
                {
                    IdInvestment = historicInvestment.IdInvestment,
                    Date = historicInvestment.Date,
                    IdHistoricInvestment = historicInvestment.IdHistoricInvestment,
                    IdUser = historicInvestment.IdUser,
                    ValueInvested = historicInvestment.ValueInvested,
                };
        }
    }
}
