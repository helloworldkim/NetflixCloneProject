package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.service.MovieService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

//영화 데이터만 호출될 주소 컨트롤 영역 추가함 12/10
@RestController
public class RestMovieController {

	@Autowired
	MovieService movieService;
	
	//특정 단어로 검색해서 데이터 호출
	@GetMapping(value ="/api/movie/search")
	public String searchTvShowsByQueryString(@RequestParam(value = "pageNo",defaultValue = "1")String page,
			@RequestParam(value = "query",required = true) String query) {
		String result=movieService.searchMoviesByQueryString(page, query);
		
		return result;
	}
		//영화 1개 크레딧정보 호출 메서드
		@GetMapping(value ="/api/movie/credits")
		public String getMovieCredits(
				@RequestParam(value = "id",required = true) String id) {
			String result=movieService.getMovieCredits(id);
			
			return result;
		}
	//영화 1개 디테일정보 호출 메서드
	@GetMapping(value ="/api/movie/detail")
	public String getMovieDetails(
			@RequestParam(value = "id",required = true) String id) {
		String result=movieService.getMovieDetails(id);
		
		return result;
	}
		//장르별 영화 리스트를 불러오는 메서드 
		@GetMapping("/api/movie/genre")
		public String getMovieListByGenre(
				@RequestParam(value = "page",defaultValue = "1") String page,	//페이지번호 기본값 1페이지
				@RequestParam(value = "genre") String genre){
			System.out.println(genre);
			String result = movieService.getMovieListByGenre(genre,page);
			 return result;
			
		}
	//popular 영화 리스트를 불러오는 메서드 
	@GetMapping("/api/movie/popular")
	public String popularMovies(@RequestParam(value = "page",defaultValue = "1") String page){
		String result = movieService.popularMovies(page);
		 return result;
		
	}
	//popularity.desc로 정렬해서 해당 리스트를 가져옴 sort_by=popularity.desc
	@GetMapping("/api/movie/sortBy")
	public String getSortByMovies(@RequestParam(value = "page",defaultValue = "1") String page,
			@RequestParam(value ="sort",defaultValue = "popularity.desc") String sort ) {
		String result = movieService.getSortByMovies(page,sort);
		 return result;
	}
	
	// query 값으로 전달받은 id(movie)가 가지고있는 file_path(이미지들)의 정보를 배열로 전달함
		@GetMapping("/api/movie/image")
		public Object getMovieImage(@RequestParam(value = "id") String id) throws JsonMappingException, JsonProcessingException {
			Object result = movieService.getMovieImage(id);
			 return result;
		}
		
		//  http://image.tmdb.org/t/p/w500/이미지.png
		//해당 이미지 정말 불러주기 -> string 값으로 전달 
		@GetMapping("/api/movie/realimage")
		public String getRealMovieImage(@RequestParam(value = "image") String image) throws JsonMappingException, JsonProcessingException {
			String result = movieService.getRealMovieImage(image);
			return result;
		}
		
		// 해당 영화 id를 인자로 받아서 해당 영화의 video정보를 돌려줌 youtube에서 예고편 재생가능
		@GetMapping("/api/movie/video")
		public Object getMovieVideo(@RequestParam(value = "id") String id) throws JsonMappingException, JsonProcessingException {
			Object result = movieService.getMovieVideo(id);
			 return result;
		}
}
