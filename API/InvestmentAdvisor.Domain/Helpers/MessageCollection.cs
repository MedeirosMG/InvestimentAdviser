using System;
using System.Collections.Generic;
using System.Text;

namespace InvestmentAdvisor.Domain.Helpers
{
    [Serializable]
    public class MessageCollection : List<Message>
    {
        public void Add(string key, string message, MessageTypes messageType)
        {
            var msg = new Message(message, key, messageType);
            this.Add(msg);
        }

        #region Error
        /// <summary>
        /// 
        /// </summary>
        /// <param name="error"></param>
        public void AddError(string error)
        {
            var msg = new Message(error, string.Empty, MessageTypes.Error);
            this.Add(msg);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="error"></param>
        /// <param name="parameters"></param>
        public void AddErrorFormat(string error, params object[] parameters)
        {
            this.AddError(string.Format(error, parameters));
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="key"></param>
        /// <param name="error"></param>
        public void AddError(string key, string error)
        {
            this.Add(key, error, MessageTypes.Error);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="key"></param>
        /// <param name="error"></param>
        /// <param name="parameters"></param>
        public void AddErrorFormat(string key, string error, params object[] parameters)
        {
            this.Add(key, string.Format(error, parameters), MessageTypes.Error);
        }
        #endregion

        #region Information

        /// <summary>
        /// 
        /// </summary>
        /// <param name="info"></param>
        public void AddInformation(string info)
        {
            var msg = new Message(info, string.Empty, MessageTypes.Information);
            this.Add(msg);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="info"></param>
        /// <param name="parameters"></param>
        public void AddInformationFormat(string info, params object[] parameters)
        {
            this.AddInformation(string.Format(info, parameters));
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="key"></param>
        /// <param name="info"></param>
        /// <param name="parameters"></param>
        public void AddInformationFormat(string key, string info, params object[] parameters)
        {
            this.Add(key, string.Format(info, parameters), MessageTypes.Information);
        }

        #endregion
        
        public override string ToString()
        {
            var sbErrors = new StringBuilder();
            this.ForEach(msg => sbErrors.AppendFormat("{2} - {0}{1}", string.IsNullOrEmpty(msg.Key) ? msg.Content : string.Format("{0}:{1}", msg.Key, msg.Content, msg.Type.ToString()), "<br />"));
            return sbErrors.ToString();
        }
        
        public string ToString(string separator)
        {
            var sbErrors = new StringBuilder();
            this.ForEach(msg => sbErrors.AppendFormat("{0}{1}{2}", string.IsNullOrEmpty(msg.Key) ? msg.Content : string.Format("{2} - {0}:{1}", msg.Key, msg.Content, msg.Type.ToString()), "<br />", separator));
            return sbErrors.ToString();
        }
    }
}
