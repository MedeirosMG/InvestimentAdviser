using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InvestmentAdvisor.Domain.Entities
{
    /// <summary>
    ///
    /// </summary>
    public class User
    {
        /// <summary>
        /// 
        /// </summary>
        public int IdUser { get; set; }
        
        /// <summary>
        /// 
        /// </summary>
        public string Name { get; set; }
        
        /// <summary>
        /// 
        /// </summary>
        public string Password { get; set; }
        
        /// <summary>
        /// 
        /// </summary>
        public string Email { get; set; }
        
        /// <summary>
        /// 
        /// </summary>
        public string Cpf { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public int NumberChildren { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public decimal VolumAvailable { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public int IdRiskAvailability { get; set; }
    }
}
