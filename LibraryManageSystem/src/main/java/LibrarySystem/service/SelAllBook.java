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

@WebServlet("/SelAllBook")
public class SelAllBook extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        SqlSession sqlSession = MybatisUtils.getSqlSession();
        Mapper mapper = sqlSession.getMapper(Mapper.class);
        String cid = req.getParameter("cid");
        String title = req.getParameter("title");
        resp.setContentType("text/json;charset=utf-8");
        if (cid.equals("0")){
            if (title.equals("")){
                List<Book> Books = mapper.SelAllBook3();
                String s3 = JSON.toJSONString(Books);
                resp.getWriter().write(s3);
            } else {
                List<Book> Books = mapper.SelAllBook2(title, title);
                String s2 = JSON.toJSONString(Books);
                resp.getWriter().write(s2);
            }
        } else if(cid.equals("null")){
            List<Book> Books = mapper.SelAllBook3();
            String s3 = JSON.toJSONString(Books);
            resp.getWriter().write(s3);
        } else {
            if (title.equals("")){
                List<Book> Books = mapper.SelAllBook4(cid);
                String s4 = JSON.toJSONString(Books);
                resp.getWriter().write(s4);
            }else {
                List<Book> Books = mapper.SelAllBook1(cid,title, title);
                String s1 = JSON.toJSONString(Books);
                resp.getWriter().write(s1);
            }
        }
        sqlSession.close();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req,resp);
    }
}
