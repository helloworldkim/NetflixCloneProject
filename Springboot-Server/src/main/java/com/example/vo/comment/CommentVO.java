package com.example.vo.comment;

import lombok.Data;

@Data
public class CommentVO {
    private int id;
    private String user_email;
    private long movie_id;
    private String content;
    private java.sql.Date RegDt;
    private java.sql.Date ModDt;
    private long user_id;
}