using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InvestmentAdvisor.Domain.Helpers
{
   
    public class Result<T> : ResultBase
    {
        public T Content { get; set; }

        public static Result<T> ReturnMessageCollect(string message, T content)
        {
            Result<T> result = new Result<T>();

            MessageCollection messageCollection = new MessageCollection();
            messageCollection.AddInformation(message);
            result.Messages = messageCollection;
            result.Content = content == null ? default(T) : content;
            result.Success = content == null ? false : true;

            return result;
        }
    }
    
    public partial class ResultBase
    {
        public ResultBase()
        {
            this.Success = true;
        }

        public MessageCollection Messages = new MessageCollection();

        public virtual bool Success { get; set; }

        public virtual bool HasErrors
        {
            get { return this.Messages.Any(p => p.Type == MessageTypes.Error); }
        }
    }
}
