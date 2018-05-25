using InvestmentAdvisor.Data.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InvestmentAdvisor.Data.Repository
{
    public class HistoricInvestmentRepository : IDisposable
    {
        private DatabaseEntities _ctx;

        public HistoricInvestmentRepository(DatabaseEntities ctx)
        {
            _ctx = ctx;
        }

        public HistoricInvestmentRepository()
        {
            _ctx = new DatabaseEntities();
        }

        public List<HistoricInvestment> Get()
        {            
            return _ctx.HistoricInvestmentSet.ToList();
        }

        public HistoricInvestment Get(int idHistoricInvestment)
        {
            return _ctx.HistoricInvestmentSet.FirstOrDefault(hist => hist.IdHistoricInvestment == idHistoricInvestment);
        }

        public List<HistoricInvestment> GetByUser(int idUser)
        {
            return _ctx.HistoricInvestmentSet.Where(user => user.IdUser == idUser).ToList();
        }

        public HistoricInvestment Add(HistoricInvestment user)
        {
            return _ctx.HistoricInvestmentSet.Add(user);
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
