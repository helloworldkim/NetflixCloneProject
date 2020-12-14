package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.service.TvService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

//티비 데이터만 호출될 주소 컨트롤 영역 추가함 12/10
@RestController
public class RestTvController {

	@Autowired
	TvService tvService;
	
	//tmdb api  queryString 으로 tv 서치하는곳 query값으로 검색할 값 전달받아야함
	@GetMapping(value ="/api/tv/search")
	public String searchTvShowsByQueryString(@RequestParam(value = "pageNo",defaultValue = "1")String page,
			@RequestParam(value = "query",required = true) String query) {
		String result=tvService.searchTvShowsByQueryString(page, query);
		
		return result;
	}
	//TV 1개 디테일정보 호출 메서드
		@GetMapping(value ="/api/tv/detail")
		public String searchTvShowsByQueryString(
				@RequestParam(value = "id",required = true) String id) {
			String result=tvService.getTvDetails(id);
			
			return result;
		}
	
	//tmdb api TV의 id값 전달해주면 해당값과 비슷한 tv 프로그램을 찾아서 전달해줌
	@GetMapping(value ="/api/tv/similar")
	public String searchSimilarTvShowsByid(@RequestParam(value = "pageNo",defaultValue = "1")String page,
			@RequestParam(value = "id",required = true) String id) {
		String result=tvService.searchSimilarTvShowsByid(page, id);
		
		return result;
	}
	
	// query 값으로 전달받은 id(movie)가 가지고있는 file_path(이미지들)의 정보를 배열로 전달함
			@GetMapping("/api/tv/image")
			public Object getTvImage(@RequestParam(value = "id") String id) throws JsonMappingException, JsonProcessingException {
				Object result = tvService.getTvImage(id);
				 return result;
			}
			
		//  http://image.tmdb.org/t/p/w500/이미지.Spng
			//해당 이미지 정말 불러주기 -> string 값으로 전달 
			@GetMapping("/api/tv/realimage")
			public String getRealTvImage(@RequestParam(value = "image") String image) throws JsonMappingException, JsonProcessingException {
				String result = tvService.getRealTvImage(image);
				
				return result;
			}
			
			//popular Tv데이터 호출 
			@GetMapping(value ="/api/tv/popular")
			public String popularTvs(@RequestParam(value = "pageNo",defaultValue = "1")String page) {
				String result=tvService.getPopularTvs(page);
				
				return result;
			}
			
			// 해당 영화 id를 인자로 받아서 해당 영화의 video정보를 돌려줌 youtube에서 예고편 재생가능
			@GetMapping("/api/tv/video")
			public Object getTvVideo(@RequestParam(value = "id") String id) throws JsonMappingException, JsonProcessingException {
				Object result = tvService.getTvVideo(id);
				 return result;
			}
			
}
