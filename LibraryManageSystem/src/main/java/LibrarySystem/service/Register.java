package LibrarySystem.service;

import LibrarySystem.dao.Mapper;
import LibrarySystem.model.Account;
import LibrarySystem.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/Register")
public class Register extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        SqlSession sqlSession = MybatisUtils.getSqlSession();
        Mapper mapper = sqlSession.getMapper(Mapper.class);
        String name = req.getParameter("name");
        String password = req.getParameter("password");
        Account account = new Account(name, password);
        int i = mapper.Register(account);
        resp.setContentType("text/html;charset=utf-8");
        if (i == 1){
            resp.getWriter().write("<script>alert('注册成功,欢迎您!');window.location.href='index.html'</script>");
        } else {
            resp.getWriter().write("<script>alert('注册失败,请重试!');window.location.href='View/login.html'</script>");
        }
        sqlSession.commit();
        sqlSession.close();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req,resp);
    }
}
