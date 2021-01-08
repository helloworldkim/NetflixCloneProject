// 넷플릭스클론VO 추가 12/09
package com.example.vo;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class NetflixCloneVO {

	private Long ID;
	private Long movie_id;
	private Long user_id;
	private String movie_original_title;
	private LocalDateTime movie_save_date;
	private String user_email;
	private String poster_path;
}
