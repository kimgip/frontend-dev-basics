package ch08.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/test")
public class APITestController{

	@RequestMapping("/text")
	public String text() {
		return "text";
	}
	
	@RequestMapping("/html")
	public String html() {
		return "html";
	}
	
	@RequestMapping("/json1")
	public String json1() {
		return "json1";
	}

	@RequestMapping("/json2")
	public String json2() {
		return "json2";
	}

	@RequestMapping("/json3")
	public String json3() {
		return "json3";
	}
}
