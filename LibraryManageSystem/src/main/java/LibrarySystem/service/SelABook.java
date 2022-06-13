package LibrarySystem.service;

import LibrarySystem.dao.Mapper;
import LibrarySystem.model.Book;
import LibrarySystem.utils.MybatisUtils;
import com.alibaba.fastjson.JSON;
import org.apache.ibatis.session.SqlSession;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/SelABook")
public class SelABook extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        SqlSession sqlSession = MybatisUtils.getSqlSession();
        Mapper mapper = sqlSession.getMapper(Mapper.class);
        String id = req.getParameter("id");
        Book book = mapper.SelABook(id);
        String s = JSON.toJSONString(book);
        resp.setContentType("text/json;charset=utf-8");
        resp.getWriter().write(s);
        sqlSession.close();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req,resp);
    }
}
