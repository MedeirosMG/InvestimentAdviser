using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Util;

namespace mvc.Controllers
{
    public class LoginController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public JsonResult validaLogin(string email, string password){

            if(email == "medeiros_mg@hotmail.com" && password == "Gabriel123#")
                return Json(Utils<string>.SetResult("Sucesso","Login realizado com sucesso!"));
            else
                return Json(Utils<string>.SetResult(null,"Login ou senha incorretos."));
        }
    }
}
