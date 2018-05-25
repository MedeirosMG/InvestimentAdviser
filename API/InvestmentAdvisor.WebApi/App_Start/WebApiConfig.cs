using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace InvestmentAdvisor.WebApi
{
    /// <summary>
    /// 
    /// </summary>
    public static class WebApiConfig
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="config"></param>
        public static void Register(HttpConfiguration config)
        {
            EnableCrossSiteRequests(config);

            //Web API configuration and services
            //para remover o XML
            //se não estou usando xml, ou minha api é exclusivamente json..excluir o formato xml
            var formatters = config.Formatters;
            formatters.Remove(formatters.XmlFormatter);

            //Modifica a identação
            var jsonSettings = formatters.JsonFormatter.SerializerSettings;
            jsonSettings.Formatting = Formatting.Indented;
            jsonSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            config.Formatters.JsonFormatter.SerializerSettings = new JsonSerializerSettings();

            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = RouteParameter.Optional }
            );


            //habilita a configuração de autorização
            //config.Filters.Add(new AuthorizeAttribute());

            //habilita o filtro de validação
            //config.Filters.Add(new ValidateModelAttribute());

            //habilita a validação null objects
            // config.Filters.Add(new CheckModelForNullAttribute());
        }

        private static void EnableCrossSiteRequests(HttpConfiguration config)
        {
            var cors = new EnableCorsAttribute(
                origins: "*",
                headers: "*",
                methods: "*");
            config.EnableCors(cors);
        }
    }
}
