using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Validation;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Script.Serialization;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class productsController : ApiController
    {
        private sup2DBEntities db = new sup2DBEntities();

        // GET: api/products
        public IQueryable<product> Getproducts()
        {
            return db.products;
        }

        
        // PUT: api/products/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putproduct()
        {
            int id = 0;                   
            //if (id != product.productID)
            //{
            //    return BadRequest();
            //}

            //db.Entry(product).State = EntityState.Modified;
            try
            {
                var postedFileGarment = System.Web.HttpContext.Current.Request.Files["Garment"];
                var postedFilelogolabel1 = System.Web.HttpContext.Current.Request.Files["logolabel1"];
                var postedFilelogolabel2 = System.Web.HttpContext.Current.Request.Files["logolabel2"];
                var postedFilelogoImg1 = System.Web.HttpContext.Current.Request.Files["logoImg1"];
                var postedFilelogoImg2 = System.Web.HttpContext.Current.Request.Files["logoImg2"];
                var postedFilelogoImg3 = System.Web.HttpContext.Current.Request.Files["logoImg3"];
                var postedFilelogoImg4 = System.Web.HttpContext.Current.Request.Files["logoImg4"];
                var a = System.Web.HttpContext.Current.Request.Form["obj"];
                dynamic rss = JObject.Parse(a);
                JavaScriptSerializer json_serializer = new JavaScriptSerializer();
                product routes_list = new product();
                id = rss.productID;
                routes_list.productID = rss.productID;
                routes_list.fabricInfo = rss.fabricInfo;
                routes_list.productName = rss.productName;
                routes_list.garmentDes = rss.garmentDes;
                routes_list.fontName = rss.fontName;
                routes_list.fontNumber = rss.fontNumber;
                //routes_list.garmentImg = rss.garmentImg;
                routes_list.garmentSpecf = rss.garmentSpecf;
                routes_list.chestXs = rss.chestXs;
                routes_list.chestS = rss.chestS;
                routes_list.chestM = rss.chestM;
                routes_list.chestL = rss.chestL;
                routes_list.chestXl = rss.chestXl;
                routes_list.chest2xl = rss.chest2xl;
                routes_list.chest3xl = rss.chest3xl;
                routes_list.chest4xl = rss.chest4xl;
                routes_list.chest5xl = rss.chest5xl;
                routes_list.lengthXs = rss.lengthXs;
                routes_list.lengthS = rss.lengthS;
                routes_list.lengthM = rss.lengthM;
                routes_list.lengthL = rss.lengthL;
                routes_list.lengthXl = rss.lengthXl;
                routes_list.length2xl = rss.length2xl;
                routes_list.length3xl = rss.length3xl;
                routes_list.length4xl = rss.length4xl;
                routes_list.length5xl = rss.length5xl;
                routes_list.specialInstruction = rss.specialInstruction;
                routes_list.signature = rss.signature;
                routes_list.orderedDate = rss.orderedDate;
                routes_list.requiredDate = rss.requiredDate;
                routes_list.favcolor1 = rss.favcolor1;
                routes_list.favcolorText1 = rss.favcolorText1;
                routes_list.favcolor2 = rss.favcolor2;
                routes_list.favcolorText2 = rss.favcolorText2;
                routes_list.favcolor3 = rss.favcolor3;
                routes_list.favcolorText3 = rss.favcolorText3;
                routes_list.favcolor4 = rss.favcolor4;
                routes_list.favcolorText4 = rss.favcolorText4;
                routes_list.favcolor5 = rss.favcolor5;
                routes_list.favcolorText5 = rss.favcolorText5;
                routes_list.favcolor6 = rss.favcolor6;
                routes_list.favcolorText6 = rss.favcolorText6;
                routes_list.piecesXs = rss.piecesXs;
                routes_list.piecesS = rss.piecesS;
                routes_list.piecesM = rss.piecesM;
                routes_list.piecesL = rss.piecesL;
                routes_list.piecesXl = rss.piecesXl;
                routes_list.pieces2xl = rss.pieces2xl;
                routes_list.pieces3xl = rss.pieces3xl;
                routes_list.pieces4xl = rss.pieces4xl;
                routes_list.pieces5xl = rss.pieces5xl;
                routes_list.pieces6xl = rss.pieces6xl;
                routes_list.pieces7xl = rss.pieces7xl;
                routes_list.piecesTotal = rss.piecesTotal;
                routes_list.labelText1 = rss.labelText1;
                //routes_list.labelImg1 = rss.labelImg1;
                routes_list.labelText2 = rss.labelText2;
                //routes_list.labelImg2 = rss.labelImg2;
                routes_list.logoText1 = rss.logoText1;
                routes_list.logoText2 = rss.logoText2;
                routes_list.logoText3 = rss.logoText3;
                routes_list.logoText4 = rss.logoText4;
                //routes_list.logoImg1 = rss.logoImg1;
                //routes_list.logoImg2 = rss.logoImg2;
                //routes_list.logoImg3 = rss.logoImg3;
                //routes_list.logoImg4 = rss.logoImg4;

                //product product = db.products.Find(id);
                //routes_list.garmentImg = product.garmentImg;
                //routes_list.labelImg1 = product.labelImg1;
                //routes_list.labelImg2 = product.labelImg2;
                //routes_list.logoImg1 = product.logoImg1;
                //routes_list.logoImg2 = product.logoImg2;
                //routes_list.logoImg3 = product.logoImg3;
                //routes_list.logoImg4 = product.logoImg4;

                //var j = db.products.First(c => c.productID == id);
                //routes_list.garmentImg = j.labelImg2;

                /* Image uploading Code:Start1*/
                if (postedFilelogolabel1 != null)
                {
                    string sImageForOffer = "";
                    sImageForOffer = System.Web.Hosting.HostingEnvironment.MapPath("~/Image/Products/");
                    var millisecondsTimestamp = MillisecondsTimestamp(DateTime.Now);
                    routes_list.labelImg1 = millisecondsTimestamp + postedFilelogolabel1.FileName;
                    postedFilelogolabel1.SaveAs(sImageForOffer + Path.GetFileName(millisecondsTimestamp + postedFilelogolabel1.FileName));
                }
                //else
                //    routes_list.labelImg1 = "";//End1
                //Imgae uploading code:Strat2
                if (postedFileGarment != null)
                {
                    string sImageForOffer = "";
                    sImageForOffer = System.Web.Hosting.HostingEnvironment.MapPath("~/Image/Products/");
                    var millisecondsTimestamp = MillisecondsTimestamp(DateTime.Now);
                    routes_list.garmentImg = millisecondsTimestamp + postedFileGarment.FileName;
                    postedFileGarment.SaveAs(sImageForOffer + Path.GetFileName(millisecondsTimestamp + postedFileGarment.FileName));
                }
                //else
                //    routes_list.garmentImg = "";//End2
                                                /* Image uploading Code:Start3*/
                if (postedFilelogolabel2 != null)
                {
                    string sImageForOffer = "";
                    sImageForOffer = System.Web.Hosting.HostingEnvironment.MapPath("~/Image/Products/");
                    var millisecondsTimestamp = MillisecondsTimestamp(DateTime.Now);
                    routes_list.labelImg2 = millisecondsTimestamp + postedFilelogolabel2.FileName;
                    postedFilelogolabel2.SaveAs(sImageForOffer + Path.GetFileName(millisecondsTimestamp + postedFilelogolabel2.FileName));
                }
                //else
                //    routes_list.labelImg2 = "";//End3
                                               /* Image uploading Code:Start4*/
                if (postedFilelogoImg1 != null)
                {
                    string sImageForOffer = "";
                    sImageForOffer = System.Web.Hosting.HostingEnvironment.MapPath("~/Image/Products/");
                    var millisecondsTimestamp = MillisecondsTimestamp(DateTime.Now);
                    routes_list.logoImg1 = millisecondsTimestamp + postedFilelogoImg1.FileName;
                    postedFilelogoImg1.SaveAs(sImageForOffer + Path.GetFileName(millisecondsTimestamp + postedFilelogoImg1.FileName));
                }
                //else
                //    routes_list.logoImg1 = "";//End4
                /* Image uploading Code:Start5*/
                if (postedFilelogoImg2 != null)
                {
                    string sImageForOffer = "";
                    sImageForOffer = System.Web.Hosting.HostingEnvironment.MapPath("~/Image/Products/");
                    var millisecondsTimestamp = MillisecondsTimestamp(DateTime.Now);
                    routes_list.logoImg2 = millisecondsTimestamp + postedFilelogoImg2.FileName;
                    postedFilelogoImg2.SaveAs(sImageForOffer + Path.GetFileName(millisecondsTimestamp + postedFilelogoImg2.FileName));
                }
                //else
                //    routes_list.logoImg2 = "";//End5
                /* Image uploading Code:Start6*/
                if (postedFilelogoImg3 != null)
                {
                    string sImageForOffer = "";
                    sImageForOffer = System.Web.Hosting.HostingEnvironment.MapPath("~/Image/Products/");
                    var millisecondsTimestamp = MillisecondsTimestamp(DateTime.Now);
                    routes_list.logoImg3 = millisecondsTimestamp + postedFilelogoImg3.FileName;
                    postedFilelogoImg3.SaveAs(sImageForOffer + Path.GetFileName(millisecondsTimestamp + postedFilelogoImg3.FileName));
                }
                //else
                //    routes_list.logoImg3 = "";//End6
                /* Image uploading Code:Start7*/
                if (postedFilelogoImg4 != null)
                {
                    string sImageForOffer = "";
                    sImageForOffer = System.Web.Hosting.HostingEnvironment.MapPath("~/Image/Products/");
                    var millisecondsTimestamp = MillisecondsTimestamp(DateTime.Now);
                    routes_list.logoImg4 = millisecondsTimestamp + postedFilelogoImg4.FileName;
                    postedFilelogoImg4.SaveAs(sImageForOffer + Path.GetFileName(millisecondsTimestamp + postedFilelogoImg4.FileName));
                }
                //else
                //    routes_list.logoImg4 = "";//End7

                db.products.Add(routes_list);
                db.Entry(routes_list).State = EntityState.Modified;
                db.SaveChanges();
                //db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!productExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/products
        [ResponseType(typeof(product))]
        public IHttpActionResult Postproduct()
        {
            var postedFileGarment = System.Web.HttpContext.Current.Request.Files["Garment"];
            var postedFilelogolabel1 = System.Web.HttpContext.Current.Request.Files["logolabel1"];
            var postedFilelogolabel2 = System.Web.HttpContext.Current.Request.Files["logolabel2"];
            var postedFilelogoImg1 = System.Web.HttpContext.Current.Request.Files["logoImg1"];
            var postedFilelogoImg2 = System.Web.HttpContext.Current.Request.Files["logoImg2"];
            var postedFilelogoImg3 = System.Web.HttpContext.Current.Request.Files["logoImg3"];
            var postedFilelogoImg4 = System.Web.HttpContext.Current.Request.Files["logoImg4"];
            var a = System.Web.HttpContext.Current.Request.Form["obj"];
            dynamic rss = JObject.Parse(a);
            JavaScriptSerializer json_serializer = new JavaScriptSerializer();
            product routes_list = new product();            

            if (rss.productID == null)
                routes_list.productID = 0;
            else
                routes_list.productID=rss.productID;
            routes_list.fabricInfo= rss.fabricInfo;
            routes_list.productName =rss.productName;
            routes_list.garmentDes=rss.garmentDes;
            routes_list.fontName =rss.fontName;
            routes_list.fontNumber=rss.fontNumber;
            routes_list.garmentImg =rss.garmentImg;
            routes_list.garmentSpecf =rss.garmentSpecf;
            routes_list.chestXs = rss.chestXs;
            routes_list.chestS = rss.chestS;
            routes_list.chestM = rss.chestM;
            routes_list.chestL = rss.chestL;
            routes_list.chestXl = rss.chestXl;
            routes_list.chest2xl = rss.chest2xl;
            routes_list.chest3xl = rss.chest3xl;
            routes_list.chest4xl = rss.chest4xl;
            routes_list.chest5xl = rss.chest5xl;
            routes_list.lengthXs = rss.lengthXs;
            routes_list.lengthS = rss.lengthS;
            routes_list.lengthM = rss.lengthM;
            routes_list.lengthL = rss.lengthL;
            routes_list.lengthXl = rss.lengthXl;
            routes_list.length2xl = rss.length2xl;
            routes_list.length3xl = rss.length3xl;
            routes_list.length4xl = rss.length4xl;
            routes_list.length5xl = rss.length5xl;
            routes_list.specialInstruction = rss.specialInstruction;
            routes_list.signature = rss.signature;
            routes_list.orderedDate = rss.orderedDate;
            routes_list.requiredDate = rss.requiredDate;
            routes_list.favcolor1 = rss.favcolor1;
            routes_list.favcolorText1 = rss.favcolorText1;
            routes_list.favcolor2 = rss.favcolor2;
            routes_list.favcolorText2 = rss.favcolorText2;
            routes_list.favcolor3 = rss.favcolor3;
            routes_list.favcolorText3 = rss.favcolorText3;
            routes_list.favcolor4 = rss.favcolor4;
            routes_list.favcolorText4 = rss.favcolorText4;
            routes_list.favcolor5 = rss.favcolor5;
            routes_list.favcolorText5 = rss.favcolorText5;
            routes_list.favcolor6 = rss.favcolor6;
            routes_list.favcolorText6 = rss.favcolorText6;
            routes_list.piecesXs = rss.piecesXs;
            routes_list.piecesS = rss.piecesS;
            routes_list.piecesM = rss.piecesM;
            routes_list.piecesL = rss.piecesL;
            routes_list.piecesXl = rss.piecesXl;
            routes_list.pieces2xl = rss.pieces2xl;    
            routes_list.pieces3xl =rss.pieces3xl;    
            routes_list.pieces4xl=rss.pieces4xl;    
            routes_list.pieces5xl=rss.pieces5xl;    
            routes_list.pieces6xl=rss.pieces6xl;
            routes_list.pieces7xl = rss.pieces7xl;
            routes_list.piecesTotal = rss.piecesTotal;
            routes_list.labelText1 = rss.labelText1;
            routes_list.labelImg1 = rss.labelImg1;
            routes_list.labelText2 = rss.labelText2;
            routes_list.labelImg2 = rss.labelImg2;
            routes_list.logoText1 = rss.logoText1;
            routes_list.logoText2 = rss.logoText2;
            routes_list.logoText3 = rss.logoText3;
            routes_list.logoText4 = rss.logoText4;
            routes_list.logoImg1 = rss.logoImg1;
            routes_list.logoImg2 = rss.logoImg2;
            routes_list.logoImg3 = rss.logoImg3;
            routes_list.logoImg4 = rss.logoImg4;

            //Imgae uploading code:Strat1
            if (postedFilelogolabel1 != null)
            {
                string sImageForOffer = "";
                sImageForOffer = System.Web.Hosting.HostingEnvironment.MapPath("~/Image/Products/");
                var millisecondsTimestamp = MillisecondsTimestamp(DateTime.Now);
                routes_list.labelImg1 = millisecondsTimestamp + postedFilelogolabel1.FileName;
                postedFilelogolabel1.SaveAs(sImageForOffer + Path.GetFileName(millisecondsTimestamp + postedFilelogolabel1.FileName));
            }
            else
                routes_list.labelImg1 = "";

            //Imgae uploading code:Strat2
            if (postedFileGarment != null)
            {
                string sImageForOffer = "";
                sImageForOffer = System.Web.Hosting.HostingEnvironment.MapPath("~/Image/Products/");
                var millisecondsTimestamp = MillisecondsTimestamp(DateTime.Now);
                routes_list.garmentImg = millisecondsTimestamp + postedFileGarment.FileName;
                postedFileGarment.SaveAs(sImageForOffer + Path.GetFileName(millisecondsTimestamp + postedFileGarment.FileName));
            }
            else
                routes_list.garmentImg = "";//End2
                                            /* Image uploading Code:Start3*/
            if (postedFilelogolabel2 != null)
            {
                string sImageForOffer = "";
                sImageForOffer = System.Web.Hosting.HostingEnvironment.MapPath("~/Image/Products/");
                var millisecondsTimestamp = MillisecondsTimestamp(DateTime.Now);
                routes_list.labelImg2 = millisecondsTimestamp + postedFilelogolabel2.FileName;
                postedFilelogolabel2.SaveAs(sImageForOffer + Path.GetFileName(millisecondsTimestamp + postedFilelogolabel2.FileName));
            }
            else
                routes_list.labelImg2 = "";//End3
                                           /* Image uploading Code:Start4*/
            if (postedFilelogoImg1 != null)
            {
                string sImageForOffer = "";
                sImageForOffer = System.Web.Hosting.HostingEnvironment.MapPath("~/Image/Products/");
                var millisecondsTimestamp = MillisecondsTimestamp(DateTime.Now);
                routes_list.logoImg1 = millisecondsTimestamp + postedFilelogoImg1.FileName;
                postedFilelogoImg1.SaveAs(sImageForOffer + Path.GetFileName(millisecondsTimestamp + postedFilelogoImg1.FileName));
            }
            else
                routes_list.logoImg1 = "";//End4
                                          /* Image uploading Code:Start5*/
            if (postedFilelogoImg2 != null)
            {
                string sImageForOffer = "";
                sImageForOffer = System.Web.Hosting.HostingEnvironment.MapPath("~/Image/Products/");
                var millisecondsTimestamp = MillisecondsTimestamp(DateTime.Now);
                routes_list.logoImg2 = millisecondsTimestamp + postedFilelogoImg2.FileName;
                postedFilelogoImg2.SaveAs(sImageForOffer + Path.GetFileName(millisecondsTimestamp + postedFilelogoImg2.FileName));
            }
            else
                routes_list.logoImg2 = "";//End5
                                          /* Image uploading Code:Start6*/
            if (postedFilelogoImg3 != null)
            {
                string sImageForOffer = "";
                sImageForOffer = System.Web.Hosting.HostingEnvironment.MapPath("~/Image/Products/");
                var millisecondsTimestamp = MillisecondsTimestamp(DateTime.Now);
                routes_list.logoImg3 = millisecondsTimestamp + postedFilelogoImg3.FileName;
                postedFilelogoImg3.SaveAs(sImageForOffer + Path.GetFileName(millisecondsTimestamp + postedFilelogoImg3.FileName));
            }
            else
                routes_list.logoImg3 = "";//End6
                                          /* Image uploading Code:Start7*/
            if (postedFilelogoImg4 != null)
            {
                string sImageForOffer = "";
                sImageForOffer = System.Web.Hosting.HostingEnvironment.MapPath("~/Image/Products/");
                var millisecondsTimestamp = MillisecondsTimestamp(DateTime.Now);
                routes_list.logoImg4 = millisecondsTimestamp + postedFilelogoImg4.FileName;
                postedFilelogoImg4.SaveAs(sImageForOffer + Path.GetFileName(millisecondsTimestamp + postedFilelogoImg4.FileName));
            }
            else
                routes_list.logoImg4 = "";//End7

            db.products.Add(routes_list);
            try
            {
                // Your code...
                // Could also be before try if you know the exception occurs in SaveChanges

                db.SaveChanges();
            }
            catch (DbEntityValidationException e)
            {
                foreach (var eve in e.EntityValidationErrors)
                {
                    Console.WriteLine("Entity of type \"{0}\" in state \"{1}\" has the following validation errors:",
                        eve.Entry.Entity.GetType().Name, eve.Entry.State);
                    foreach (var ve in eve.ValidationErrors)
                    {
                        Console.WriteLine("- Property: \"{0}\", Error: \"{1}\"",
                            ve.PropertyName, ve.ErrorMessage);
                    }
                }
                throw;
            }
            
            return CreatedAtRoute("DefaultApi", new { id = routes_list.productID }, routes_list);
        }

        private static long MillisecondsTimestamp(DateTime date)
        {
            DateTime baseDate = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);
            return (long)(date.ToUniversalTime() - baseDate).TotalMilliseconds;
        }

        // DELETE: api/products/5
        [ResponseType(typeof(product))]
        public IHttpActionResult Deleteproduct(int id)
        {
            product product = db.products.Find(id);
            if (product == null)
            {
                return NotFound();
            }

            db.products.Remove(product);
            db.SaveChanges();
            return Ok(product);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool productExists(int id)
        {
            return db.products.Count(e => e.productID == id) > 0;
        }
    }
}