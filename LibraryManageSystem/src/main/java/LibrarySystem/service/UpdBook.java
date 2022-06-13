package LibrarySystem.service;

import LibrarySystem.dao.Mapper;
import LibrarySystem.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/UpdBook")
public class UpdBook extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html;charset=utf-8");
        resp.setCharacterEncoding("utf-8");
        SqlSession sqlSession = MybatisUtils.getSqlSession();
        Mapper mapper = sqlSession.getMapper(Mapper.class);
        String title = req.getParameter("title");
        String id = req.getParameter("id");
        int i = mapper.UpdBook(id,title);
        if (i == 1){
            resp.getWriter().write("<script>alert('修改成功，点击跳转!');window.location.href='index.html'</script>");
        }else {
            resp.getWriter().write("<script>alert('修改失败，点击返回!');window.location.href='index.html'</script>");
        }
        sqlSession.commit();
        sqlSession.close();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req,resp);
    }
}
