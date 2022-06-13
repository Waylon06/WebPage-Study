package LibrarySystem.dao;

import LibrarySystem.model.Account;
import LibrarySystem.model.Book;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface Mapper {

    List<Book> SelAllBook1(@Param("cid") String cid,@Param("title") String title,@Param("author") String author);
    List<Book> SelAllBook2(@Param("title") String title,@Param("author") String author);
    List<Book> SelAllBook3();
    List<Book> SelAllBook4(@Param("cid") String cid);

    List<Book> SelKindBook(@Param("cid") String cid);

    List<Book> SelInfoBook(@Param("title") String title,@Param("author") String author);

    int DelBook(@Param("id")String id);

    int AddBook(Book book);

    int UpdBook(@Param("id")String id,@Param("title") String title);

    Book SelABook(@Param("id")String id);

    Account LoginVerify(Account account);

    int Register(Account account);
}
