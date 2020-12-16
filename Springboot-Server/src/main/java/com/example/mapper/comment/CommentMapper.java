package com.example.mapper.comment;

import com.example.vo.comment.CommentVO;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface CommentMapper {

    @Insert({"INSERT INTO comment(user_email, movie_id, content, RegDt, ModDt) VALUES (#{comment.user_email}, #{comment.movie_id}, #{comment.content}, now(), now())"})
    int insertCommnet(@Param("comment") CommentVO comment);

    @Select({"SELECT * FROM comment WHERE movie_id=#{movidId}"})
    List<CommentVO> getCommentList(@Param("movidId") int movidId);
}