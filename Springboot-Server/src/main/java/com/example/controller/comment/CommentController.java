package com.example.controller.comment;

import com.example.mapper.comment.CommentMapper;
import com.example.vo.comment.CommentVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comment")
public class CommentController {
    @Autowired
    CommentMapper mapper;

    @PostMapping
    void registerComment(@RequestBody CommentVO comment) {
        mapper.insertCommnet(comment);
    }

    @GetMapping
    List<CommentVO> commentList(@RequestParam(value = "movie_id", defaultValue = "0") int movie_id) {
        List<CommentVO> list = mapper.getCommentList(movie_id);

        return list;
    }

}