using InvestmentAdvisor.Data.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InvestmentAdvisor.Data.Repository
{
    public class InvestmentRepository : IDisposable
    {
        private DatabaseEntities _ctx;

        public InvestmentRepository(DatabaseEntities ctx)
        {
            _ctx = ctx;
        }

        public InvestmentRepository()
        {
            _ctx = new DatabaseEntities();
        }

        public List<Investment> Get()
        {            
            return _ctx.InvestmentSet.ToList();
        }

        public Investment Get(int idInvestment)
        {
            return _ctx.InvestmentSet.FirstOrDefault(invest => invest.IdInvestment == idInvestment);
        }

        public List<Investment> GetByType(int idTypeInvestment)
        {
            return _ctx.InvestmentSet.Where(invest => invest.IdTypeInvestment == idTypeInvestment).ToList();
        }

        public List<Investment> GetByRisk(int idRiskAvailability)
        {
            return _ctx.InvestmentSet.Where(invest => invest.IdRiskAvailability == idRiskAvailability).ToList();
        }

        public List<Investment> GetByName(string name)
        {
            return _ctx.InvestmentSet.Where(invest => invest.Name.Contains(name)).ToList();
        }

        public void SaveChanges()
        {
            _ctx.SaveChanges();
        }

        public void Dispose()
        {
            if (_ctx != null)
                _ctx = null;
        }
    }
}
