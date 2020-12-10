// 넷플릭스클론VO 추가 12/09
package com.example.vo;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class NetflixCloneVO {

	Long ID;
	Long video_id;
	String video_title;
	String video_overview;
	LocalDateTime video_save_date;
}
