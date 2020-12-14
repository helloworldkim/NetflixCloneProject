package com.example.service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
//TMDB API 사용해서 TV 데이터 호출을 위한 서비스 영역 추가됨 12/10 
@Service
public class TvService {
	
	public String getPopularTvs(String page) {
		// https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
		String api_key ="2daa7f8ee3c810361492a3382e06545d";
		String language = "en-KO";
		 String url = "https://api.themoviedb.org/3/tv/popular";
		// RestTemplate 생성
	        RestTemplate rt = new RestTemplate();
			UriComponents builder = UriComponentsBuilder.fromHttpUrl(url)
					.queryParam("page", page)
					.queryParam("language", language)
					.queryParam("api_key", api_key)
					.build(false);    //자동으로 encode해주는 것을 막기 위해 false
			String uri = builder.toUriString();
	        ResponseEntity<String> response =  rt.exchange(
	        		uri,
	        		HttpMethod.GET,
	        		null,
	        		String.class
   		);
	        return response.getBody().toString();
	}
	
	public String searchTvShowsByQueryString(String page,String query) {
		// https://api.themoviedb.org/3/search/tv?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
		 String api_key ="2daa7f8ee3c810361492a3382e06545d";
			String language = "en-KO";
			String url = "https://api.themoviedb.org/3/search/tv";
			
			// RestTemplate 생성
		        RestTemplate rt = new RestTemplate();
				UriComponents builder = UriComponentsBuilder.fromHttpUrl(url)
						.queryParam("page", page)
						.queryParam("language", language)
						.queryParam("query", query)
						.queryParam("api_key", api_key)
						.build(false);    //자동으로 encode해주는 것을 막기 위해 false
				String uri = builder.toUriString();
		        ResponseEntity<String> response =  rt.exchange(
		        		uri,
		        		HttpMethod.GET,
		        		null,
		        		String.class
	   		);
	        return response.getBody().toString();
	}
	public String searchSimilarTvShowsByid(String page,String id) {
		//https://api.themoviedb.org/3/tv/{tv_id}/similar?api_key=<<api_key>>&language=en-US&page=1
		 String api_key ="2daa7f8ee3c810361492a3382e06545d";
			String language = "en-KO";
			String url = "https://api.themoviedb.org/3/tv/"+id+"/similar";
			
			// RestTemplate 생성
		        RestTemplate rt = new RestTemplate();
				UriComponents builder = UriComponentsBuilder.fromHttpUrl(url)
						.queryParam("page", page)
						.queryParam("language", language)
						.queryParam("api_key", api_key)
						.build(false);    //자동으로 encode해주는 것을 막기 위해 false
				String uri = builder.toUriString();
		        ResponseEntity<String> response =  rt.exchange(
		        		uri,
		        		HttpMethod.GET,
		        		null,
		        		String.class
	   		);
	        return response.getBody().toString();
	}
	
	public Object getTvImage(String id) throws JsonMappingException, JsonProcessingException {
		//https://api.themoviedb.org/3/tv/{tv_id}/images?api_key=<<api_key>>&language=en-US
		String api_key ="2daa7f8ee3c810361492a3382e06545d";
		String url = "https://api.themoviedb.org/3/tv/"+id+"/images";
		// RestTemplate 생성
	        RestTemplate rt = new RestTemplate();
			UriComponents builder = UriComponentsBuilder.fromHttpUrl(url)
					.queryParam("api_key", api_key)
					.build(false);    //자동으로 encode해주는 것을 막기 위해 false
			String uri = builder.toUriString();
	        ResponseEntity<String> response =  rt.exchange(
	        		uri,
	        		HttpMethod.GET,
	        		null,
	        		String.class
   		);
	        Map<String, Object> map = new HashMap<>();
	        Object temp = new HashMap<>();
	        ObjectMapper objectMapper = new ObjectMapper();
	       System.out.println(response.getBody().toString());
	        map = objectMapper.readValue(response.getBody().toString(), new TypeReference<Map<String,Object>>() {
			});
	        System.out.println(map);
	        temp =map.get("backdrops");
	        
			return temp;
	}
	
	public String getRealTvImage(String image) {
		String url = "http://image.tmdb.org/t/p/w500"+image;
        URI uri=null;
		try {
			uri = new URI(url);
			System.out.println(uri);
		} catch (URISyntaxException e) {
			e.printStackTrace();
		}
	 return uri.toString();
}
	public String getTvVideo(String id) {
//		https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
		String url = "https://api.themoviedb.org/3/tv/"+id+"/videos";
		String api_key ="2daa7f8ee3c810361492a3382e06545d";
		// RestTemplate 생성
	        RestTemplate rt = new RestTemplate();
			UriComponents builder = UriComponentsBuilder.fromHttpUrl(url)
					.queryParam("api_key", api_key)
					.build(false);    //자동으로 encode해주는 것을 막기 위해 false
			String uri = builder.toUriString();
	        ResponseEntity<String> response =  rt.exchange(
	        		uri,
	        		HttpMethod.GET,
	        		null,
	        		String.class
   		);
	       System.out.println(response.getBody().toString());
	        
			return response.getBody().toString();
	}
	//tv 디테일 정보 불러오기
	public String getTvDetails(String id) {
//		https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
		String url = "https://api.themoviedb.org/3/tv/"+id;
		String language = "en-KO";
		String api_key ="2daa7f8ee3c810361492a3382e06545d";
		// RestTemplate 생성
	        RestTemplate rt = new RestTemplate();
			UriComponents builder = UriComponentsBuilder.fromHttpUrl(url)
					.queryParam("api_key", api_key)
					.queryParam("language", language)
					.build(false);    //자동으로 encode해주는 것을 막기 위해 false
			String uri = builder.toUriString();
	        ResponseEntity<String> response =  rt.exchange(
	        		uri,
	        		HttpMethod.GET,
	        		null,
	        		String.class
   		);
	       System.out.println(response.getBody().toString());
	        
			return response.getBody().toString();
	}

	//해당 TV 크레딧 정보 불러오는 메서드
	public String getTvCredits(String id) {
//		https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
		String url = "https://api.themoviedb.org/3/tv/"+id+"/credits";
		String language = "en-KO";
		String api_key ="2daa7f8ee3c810361492a3382e06545d";
		// RestTemplate 생성
	        RestTemplate rt = new RestTemplate();
			UriComponents builder = UriComponentsBuilder.fromHttpUrl(url)
					.queryParam("api_key", api_key)
					.queryParam("language", language)
					.build(false);    //자동으로 encode해주는 것을 막기 위해 false
			String uri = builder.toUriString();
	        ResponseEntity<String> response =  rt.exchange(
	        		uri,
	        		HttpMethod.GET,
	        		null,
	        		String.class
   		);
	       System.out.println(response.getBody().toString());
	        
			return response.getBody().toString();
	}
}
