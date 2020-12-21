package com.example.controller.comment;

import com.example.mapper.comment.CommentMapper;
import com.example.mapper.user.UserMapper;
import com.example.vo.comment.CommentVO;
import com.example.vo.user.UserVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comment")
public class CommentController {
    @Autowired
    CommentMapper mapper;
    @Autowired
    UserMapper userMapper;

    @PostMapping(value = "/write")
    int writeMovieComment(@RequestBody CommentVO comment) {
    	System.out.println(comment);
    	//해당 코멘트의 id값으로 user정보 불러옴
    	UserVO userInfo = userMapper.getUserInfoById(comment.getUser_id());
    	System.out.println(userInfo.toString());
    	System.out.println(userInfo.toString());
    	System.out.println(userInfo.toString());
    	System.out.println(userInfo.toString());
    	
    	comment.setUser_email(userInfo.getEmail());
        int cnt = mapper.insertCommnet(comment);
        //실행결과값
        return cnt;
    }

    @GetMapping(value = "/list")
    List<CommentVO> commentList(@RequestParam(value = "movie_id", defaultValue = "0") int movie_id) {
        List<CommentVO> list = mapper.getCommentList(movie_id);

        return list;
    }
    @GetMapping(value = "/delete")
    String deleteComment(@RequestParam(value = "id")int id) {
//    	System.out.println(id); //해당 댓글 인덱스값
    	mapper.deleteComment(id);
    	return "삭제성공";
    }

}