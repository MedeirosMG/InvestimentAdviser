using System;
using System.Runtime.Serialization;

namespace InvestmentAdvisor.Domain.Helpers
{
    /// <summary>
    /// 
    /// </summary>
    [Serializable]
    public class Message
    {
        public Message()
        {
        }

        public Message(string content, string key = "", MessageTypes type = MessageTypes.Information)
        {
            this.Content = content;
            this.Key = key;
            this.Type = type;
        }

        public string Content { get; set; }

        public MessageTypes Type { get; set; }

        public string MessageType
        {
            get { return Type.ToString(); }
        }

        public string Key { get; set; }
    }

    [Serializable]
    public enum MessageTypes
    {
        Information = 0,
        
        Error = 1,
   
        Debug = 2
    }
}
