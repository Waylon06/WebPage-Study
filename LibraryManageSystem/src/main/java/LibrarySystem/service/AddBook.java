package LibrarySystem.service;

import LibrarySystem.dao.Mapper;
import LibrarySystem.model.Book;
import LibrarySystem.utils.MybatisUtils;
import org.apache.ibatis.session.SqlSession;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/AddBook")
public class AddBook extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setCharacterEncoding("utf-8");
        resp.setContentType("text/html;charset=utf-8");
        SqlSession sqlSession = MybatisUtils.getSqlSession();
        Mapper mapper = sqlSession.getMapper(Mapper.class);
        String id = req.getParameter("id");
        Book book = mapper.SelABook(id);
        List<Book> books = mapper.SelAllBook3();
        int newid = 1;
        for (Book book1 : books) {
            newid += 1;
        }
        book.setId(Integer.toString(newid));
        int i = mapper.AddBook(book);
        if (i == 1){
            resp.getWriter().write("<script>alert('添加成功，点击跳转!');window.location.href='index.html'</script>");
        }else {
            resp.getWriter().write("<script>alert('添加失败，点击返回!');window.location.href='index.html'</script>");
        }
        sqlSession.commit();
        sqlSession.close();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req,resp);
    }
}
