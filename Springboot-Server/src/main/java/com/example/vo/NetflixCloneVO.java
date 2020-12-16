// 넷플릭스클론VO 추가 12/09
package com.example.vo;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class NetflixCloneVO {

	Long ID;
	Long movie_id;
	String movie_original_title;
	LocalDateTime movie_save_date;
	String user_email;
}
