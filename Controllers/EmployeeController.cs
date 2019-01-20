using System.Collections;
using System.Collections.Generic;
using System.Linq;
using avt.Data;
using avt.Data.Models;
using Microsoft.AspNetCore.Mvc;

namespace avt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController:Controller
    {
        private readonly AppDbContext _context;

        public EmployeeController(AppDbContext context)
        {
            this._context = context;
        }

        [HttpGet]
        public IEnumerable<Employee> GetEmployees()
        {
            return _context.Employees;
        }

        [HttpGet("id")]
        public Employee GetEmployee(int id)
        {
            return _context.Employees.Find(id);
        }

        [HttpPost("id")]
        public Employee UpdateEmployee(int id)
        {
            return new Employee();
        }

        [HttpDelete("id")]
        public int DeleteEmployee(int id)
        {
            var emp = _context.Employees.Find(id);
            _context.Employees.Remove(emp);
            _context.SaveChanges();
            return id;
        }
    }
}