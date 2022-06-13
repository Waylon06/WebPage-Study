package LibrarySystem.service;

import LibrarySystem.dao.Mapper;
import LibrarySystem.model.Account;
import LibrarySystem.utils.MybatisUtils;
import com.alibaba.fastjson.JSON;
import org.apache.ibatis.session.SqlSession;

import javax.servlet.ServletException;
import javax.servlet.SessionCookieConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/LoginVerify")
public class LoginVerify extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        SqlSession sqlSession = MybatisUtils.getSqlSession();
        Mapper mapper = sqlSession.getMapper(Mapper.class);
        String name = req.getParameter("name");
        String password = req.getParameter("password");
        Account account = new Account(name,password);
        Account account1 = mapper.LoginVerify(account);
        resp.setContentType("text/html;charset=utf-8");
        if (account1 != null){
//            req.getSession().setAttribute("account",account1);
//            Cookie cookie = new Cookie("name", account1.getName());
//            resp.addCookie(cookie);
            resp.getWriter().write("<script>alert('登录成功,欢迎您!');window.location.href='index.html'</script>");
        }else {
            resp.getWriter().write("<script>alert('登录失败,即将返回!');window.location.href='View/login.html'</script>");
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req,resp);
    }
}
